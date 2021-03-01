import Link from 'next/link'
import Head from 'next/head'
import {MainLayout} from "../components/MainLayout";

export default function Index ({}) {
  return (
    <MainLayout title={'Next app | Home page'}>
      <h1>Hello next.js</h1>
      <Link href="/about"><a>About</a></Link>
      <Link href="/posts"><a>Posts</a></Link>
    </MainLayout>
  )
}
