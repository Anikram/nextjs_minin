import Link from "next/link"
import Head from "next/head"


export function MainLayout({children, title = 'Next app'}) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <nav>
        <h1>Navigation</h1>
        <Link href={'/'}><a> Home </a></Link>
        <Link href={'/about'}><a> About </a></Link>
        <Link href={'/posts'}><a> Posts </a></Link>
      </nav>
      <main>
        {children}
      </main>
      <style jsx>
        {`
            nav {
              position: fixed;
              height: 60px;
              left: 0;
              top: 0;
              right: 0;
              background: brown; 
              display: flex;
              justify-content: space-around;
              align-items: center;
            } 
            
            nav a {
            color: aliceblue;
            text-decoration: none;
            }
            
            main {
            margin-top: 60px;
            padding: 1rem;
            }
            
        `}
      </style>
    </>
  )
}