

import { connectDB } from "@/util/database";
import ListItem from "./Listitem";
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