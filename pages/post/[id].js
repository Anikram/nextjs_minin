import {MainLayout} from "../../components/MainLayout";


export default function Post({post}) {
  return (
    <MainLayout title={`Next app | Post ${post.id}`}>
      <div>
        <h1>Post {post.id}</h1>
        <h2>Title: {post.title}</h2>
        <p>{post.body}</p>
      </div>
    </MainLayout>
  )
}

export async function getStaticProps({params}) {
  const res = await fetch(`http://localhost:4200/posts/${params.id}`)
  const post = await res.json();

  return {
    props: {
      post
    }
  }
}

export async function getStaticPaths() {
  const response = await fetch(`http://localhost:4200/posts`)
  const posts = await response.json()
  const paths = posts.map(post => ({
    params: {
      id: post.id.toString()
    }
  }))

  return {paths, fallback: true}
}