import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { authOptions } from "../auth/[...nextauth]"
import {getServerSession} from "next-auth"

export default async function handler(req,res) {
  let session = await getServerSession(req,res,authOptions)
  if (req.method == 'POST'){
    req.body =JSON.parse(req.body)
    let commentInfo = {
      content : req.body.comment,
      parent : new ObjectId(req.body._id),
      author : session.user.email,
      name:session.user.name
    }
  
    let db = (await connectDB).db('forum');
    let result = await db.collection('comment').insertOne(commentInfo);
    res.status(200).json('저장완료')
  }
} 