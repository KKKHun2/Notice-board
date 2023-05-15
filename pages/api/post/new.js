import { connectDB } from "@/util/database";

export default async function handler(res,req){
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
    }
    }
}