import { connectDB } from "@/util/database";

export default async function handler(res,req){
    const db = (await connectDB).db("forum")
    let result = await db.collection('post').find().toArray();

if(res.method =='POST'){
    if(res.body.id ==''){
        return req.status(500).json('아이디가 입력되지 않았습니다.')
    }
    else if(res.body.id === result.id){
        return req.status(500).json('중복된 아이디가 있습니다.')
    }
    else if(res.body.password !== res.body.password2){
        return req.status(500).json('비밀번호가 서로 일치하지 않습니다.')
    }
   else{
    try{
        let result = await db.collection('post').insertOne(res.body)
        req.redirect(302, '/list')
    }
    catch(error){   
        req.status(400).json('서버오류')
    }
    
    }}
}