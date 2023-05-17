import { connectDB } from "@/util/database";
import ListItem from "./Listitem";

export const dynamic = 'force-dynamic' //매번 서버로 요청
// export const static = 'force-static' 회원들이 많이 들어와도 저장된html만보여줌 

export default async function List() {

 
  const db = (await connectDB).db("forum")
  let result = await db.collection('post').find().toArray();
  result = result.map((a)=>{
    a._id = a._id.toString()
    return a
  })

  
    return (
     
      <div className="list-bg">
          <ListItem result={result}/>
      </div> 
    )
  } 