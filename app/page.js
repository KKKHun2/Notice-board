import { connectDB } from "@/util/database"


export default async function Home() {

  const client = await connectDB;
  const db = client.db("forum")
  let result = await db.collection('post').find().toArray();
  // await fetch('/URL', {cache:'force-cache'})  결과 몰래 저장하고 사용
  // await fetch('/URL', {cache:'no-store'})  매번 서버로 요청해서 새거 가져온다.
  // await fetch('/URL', {next:{revalidate:60}})  60초마다 캐싱된 데이터 갱신
  
  return (
    <div>{result[0].title}</div>
  )
}

