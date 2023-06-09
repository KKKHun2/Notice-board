import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props){

    const db = (await connectDB).db("forum")
    let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id)});


    return(
        <div className="p-20">
            <h4>수정페이지</h4>
            <form action="/api/post/edit" method="POST" >
                <h4>제목</h4>
                <input name="title" defaultValue={result?result.title:null}/>
                <h4>내용</h4>
                <input name="content" defaultValue={result?result.content:null}/>
                <input style={{display:"none"}}name="_id" defaultValue={result?result._id.toString():null}/>
                <button type="submit">수정</button>
            </form>
        </div>
    )
    }