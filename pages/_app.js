import '../styles/main.scss'
// import router from 'next/router'
// import NProgress from 'nprogress'; //nprogress module
// import 'nprogress/nprogress.css'; //styles of nprogress
//
// router.events.on('routeChangeStart', () => NProgress.start());
// router.events.on('routeChangeComplete', () => NProgress.done());
// router.events.on('routeChangeError', () => NProgress.done());


import NextNprogress from 'nextjs-progressbar';

export default function MyApp({Component, pageProps}) {
  return (
    <>
      <NextNprogress
        color=""
        startPosition={0.3}
        stopDelayMs={200}
        height="3"
      />
      <Component {...pageProps}/>
    </>
  )
}
