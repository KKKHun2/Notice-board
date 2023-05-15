export default function SignUp(){

    return(
        <div className="p-20">
            <h4>회원가입</h4>
            <form action="/api/post/signup" method="POST" >
                <h4>아이디</h4>
                <input name="id" placeholder="아이디"/>
                <h4>비밀번호</h4>
                <input name="password" placeholder="비밀번호" type={"password"}/>
                <h4>비밀번호 확인</h4>
                <input name="password2" placeholder="비밀번호 확인" type={"password"}/>
                <button type="submit">회원가입</button>
            </form>
        </div>
    )
    }