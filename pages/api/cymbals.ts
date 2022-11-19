import { NextApiRequest, NextApiResponse } from "next"


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const url = 'https://almatierra-7796b-default-rtdb.firebaseio.com/almatierra/dataCymbals.json'
    const r = await fetch(url)
    let json = await r.json()
    res.status(200).json(json)
}

