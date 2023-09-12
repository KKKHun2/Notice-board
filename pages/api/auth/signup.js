import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";


export default async function handler(res,req){
    
if(res.method === 'POST'){
    const {name,email,password} = res.body
    const hash = await bcrypt.hash(res.body.password, 10)
    res.body.password = hash;

    console.log(res.body.email)
    const db = (await connectDB).db("forum")
    
    let user  = await db.collection('user_cred').findOne({email:email})
    await db.collection('user_cred').insertOne(res.body)
    
    
    if(email ==''){
        return req.status(500).json('아이디가 입력되지 않았습니다.')
    }
    else if(email === (user?user.email:null)){
        return req.status(500).json('중복된 email이 있습니다.')
    }
    // else if(res.body.password !== res.body.password2){
    //     return req.status(500).json('비밀번호가 서로 일치하지 않습니다.')
    // }
   else{
    try{

        req.redirect(302, '/list')
    }
    catch(error){   
        req.status(400).json('서버오류')
    }
    
    }
  }
}; 
