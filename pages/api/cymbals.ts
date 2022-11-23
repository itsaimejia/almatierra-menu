import { getDocs, collection } from "firebase/firestore"
import { NextApiRequest, NextApiResponse } from "next"
import { db } from "../../firebase/firebase"


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const querySnapshot = await getDocs(collection(db, "cymbals"))
    let cymbals: any = []
    querySnapshot.forEach((doc) => {
        const newObject = {
            id: doc.id,
            menu: doc.data().menu,
            categorie: doc.data().categorie,
            name: doc.data().name,
            description: doc.data().description,
            price: doc.data().price,
            status: doc.data().status
        }
        cymbals.push(newObject)
    })
    let activeCymbals = cymbals.filter((c: any) => c.status === 'active')
    res.status(200).json(activeCymbals)
}

