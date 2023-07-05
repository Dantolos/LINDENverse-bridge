import '../css/style.css'
import '../css/form.css'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'




function MyApp({ Component, pageProps }) {


  return (
    <>
      <Head>
        <title>Pet Care App</title>
      </Head>

      <div className="top-bar">
        <div className="nav">
          <Link href="/">Home</Link>
          <Link href="/new">Add Pet</Link>
        </div>
        <Image
          id='title'
          src="/../public/Linden_Bildmarke_herbstgold.png"
          width={75}
          height={75}
          alt="Picture of the author"
        /> 
      
      </div>
      <div className="grid wrapper">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
