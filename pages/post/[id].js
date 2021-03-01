import {MainLayout} from "../../components/MainLayout";
import useSWR from 'swr';
import {useRouter} from "next/router";
import {useState, useEffect} from "react";


export default function Post({post: serverPost}) {
  const [post, setPost] = useState(serverPost)
  const router = useRouter()
  const {data, error} = useSWR(`http://localhost:4200/posts/${router.query.id}`, fetch)

  useEffect(() => {
    if (data) {
      data.json().then(post => {
        setPost(post)
      })
    }
  }, [serverPost])


  if (!post) {
    return (
      <MainLayout title={`Next app | loading ...`}>
        <div>
          <p> Loading . . .</p>
        </div>
      </MainLayout>
    )
  } else {
    return (
      <MainLayout title={`Next app | Post ${post.id}`}>
        <div>
          <h1> {post.title}</h1>
          <p> {post.body}</p>
        </div>
      </MainLayout>)
  }
}


export async function getServerSideProps({query, req}) {
  const res = await fetch(`http://localhost:4200/posts/${query.id}`)
  const post = await res.json();

  return {
    props: {
      post
    }
  }
}

// export async function getStaticPaths() {
//   const response = await fetch(`http://localhost:4200/posts`)
//   const posts = await response.json()
//   const paths = posts.map(post => ({
//     params: {
//       id: post.id.toString()
//     }
//   }))
//
//   return {paths, fallback: true}
// }