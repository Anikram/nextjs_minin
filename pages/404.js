import Link from "next/link"
import {MainLayout} from "../components/MainLayout";
import styles from '../styles/error.module.scss'

export default function ErrorPage () {
  return (
    <MainLayout title={'Not found'}>
      <h1 className={styles.error}>Error 404</h1>
      <p>This page is not found</p>
      <p><Link href="/"><a>Proceed to home page</a></Link></p>
    </MainLayout>
  )
}