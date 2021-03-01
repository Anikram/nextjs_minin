import Link from "next/link";
import Router from 'next/router'
import {MainLayout} from "../../components/MainLayout";

export default function About({}) {
  const linkClickHandler = () => {
    Router.push('/')
  }

  return (
    <MainLayout title={'Next app | About page'}>
      <div>
        <h1>About page</h1>
        <Link href="/"><a>Home</a></Link>
        <Link href="/posts"><a>Posts</a></Link>
        <button onClick={linkClickHandler}>Go back to home</button>
      </div>
    </MainLayout>
  )
}

