export default function Write(){

return(
    <div className="p-20">
        <h4>글작성</h4>
        <form action="/api/post/new" method="POST" >
            <h4>제목</h4>
            <input name="title" placeholder="글제목"/>
            <h4>내용</h4>
            <input name="content" placeholder="본문내용"/>
            <button type="submit">Button</button>
        </form>
    </div>
)
}