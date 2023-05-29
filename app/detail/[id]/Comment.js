"use client";

import {useEffect,useState} from 'react'

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
                            <p key = {i}>작성자:{a.name} 내용:{a.content} </p>
                            
                        )
                        : "댓글이 없습니다."
                }
                
                <input value = {comment}onChange={(e)=>{setComment(e.target.value)}} />
                    <button onClick={handleReset}>
                       작성완료</button>
            </div>
        </div>
    )
}