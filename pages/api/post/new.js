import { connectDB } from "@/util/database";
import { authOptions } from "../auth/[...nextauth]";
import {getServerSession} from "next-auth"

export default async function handler(res,req){
   let session =  await getServerSession(res, req, authOptions)
   if(session){
    res.body.author = session.user.email
   }

if(res.method =='POST'){
    if(res.body.title ==''){
        return req.status(500).json('제목이 없습니다.')
    }
    else if(res.body.content ==''){
        return req.status(500).json('내용이 없습니다.')
    }
    try{
        const db = (await connectDB).db("forum")

        let result = await db.collection('post').insertOne(res.body)
        req.redirect(302, '/list')
    }
    catch(error){   
        req.status(400).json('서버오류')
    }
    }
}