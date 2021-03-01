import Link from 'next/link'
import {MainLayout} from "../components/MainLayout";

 function Posts({posts}) {
  return (
    <MainLayout title={'Next app | Posts page'}>
      <h1>Posts page</h1>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>

      <ul>
        {posts.map((post) => {return <li key={post.id}><Link href={`/post/${post.id}`}><a>{post.title}</a></Link></li>})}
      </ul>
    </MainLayout>
  )
}

export async function getStaticProps({params}) {
   let posts
  try {
    const response = await fetch(`http://localhost:4200/posts`)
    posts = await response.json()
  } catch (err) {
    console.error(err.message)
  }

  return {
    props: {
      posts
    }
  }
}

export default Posts;




