export default function handler(req,res){
    console.log(123)
    console.log(req.body)
    if(res.method==='POST'){
        return  res.status(200).json("완료")
    }

}