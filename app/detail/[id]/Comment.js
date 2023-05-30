"use client";

import {useEffect,useState} from 'react'
// import "styled-components";
// import { ServerStyleSheet } from "styled-components";

export default function Comment(props){
  
    let [comment, setComment] = useState('') 
    let [comments,setComments] = useState('')

 useEffect(()=>{
    fetch('/api/comment/list?id='+props._id)
    .then(r=>r.json())
    .then((result)=>{
        setComments(result)
    }
    )
 },[comments])

 const handleReset = () => {
    fetch('/api/comment/new', {
        method :'POST', 
        body:JSON.stringify({comment :comment,_id:props._id})
})
    setComment('');

};

    return (
        <div>
        
            <div>
                <div>댓글 목록</div>
                

                {
                    comments.length>0?
                    comments.map((a,i)=>
                    <div className='commentForm'>
                            <p className='commentContent' key = {i}>댓글:{a.content} </p>
                            <p className='commentName' key = {i}>작성자:{a.name}  </p>
                            </div>
                        )
                        : "댓글이 없습니다."
                }
                </div>
                <input value = {comment}onChange={(e)=>{setComment(e.target.value)}} />
                    <button onClick={handleReset}>
                       작성완료</button>
            </div>
        
    )
}

// const CommentForm=styled.div`

// background-color:  white;
// width:100%;
// height: 100%;

// `
