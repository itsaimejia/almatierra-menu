import { NextApiRequest, NextApiResponse } from "next"


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const url = 'https://almatierra-7796b-default-rtdb.firebaseio.com/dataCymbals.json'
    const r = await fetch(url)
    let json = await r.json()
    let cymbals = json.filter((e: any) => e !== null)
    res.status(200).json(cymbals)
}

