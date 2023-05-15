import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(res,req){

    if(res.method == 'POST'){
        let change = {
            title:res.body.title,
            content:res.body.content
        }
        const db = (await connectDB).db('forum')
        let result = await db.collection('post').updateOne(
            {_id:new ObjectId(res.body._id)},
            {$set:change}
    )
    req.redirect(302,'/list')
}

}