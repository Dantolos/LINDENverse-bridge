import '../css/style.css'
import '../css/form.css'
import Head from 'next/head'
import Navigation from '../components/utils/navi/navi'

function MyApp({ Component, pageProps }) {


  return (
    <>
      <Head>
        <title>LINDENverse</title>
      </Head>

      <div className="container wrapper">
        <div className='Header L3Lshadow'><Navigation></Navigation></div>       
        <Component {...pageProps} />
        <div className='Footer'><p>LINDENverse | v0.0.2</p></div>
        
      </div>
    </>
  )
}

export default MyApp
