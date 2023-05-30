import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";

export default async function Detail(props){
    const db = (await connectDB).db("forum")
    let result = await db.collection('post').findOne({_id: new ObjectId(props.params.id)})
   
    return (
        <div className="detailPage">
            <h4>상세페이지</h4>
            <div className="detailTitle">제목 : {result? result.title : null}</div>
            <p>내용 : {result? result.content: null}</p>
            <Comment _id ={result?result._id.toString(): null}/>
        </div>
    )
}