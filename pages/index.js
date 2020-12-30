import Head from 'next/head'
import { projectFirestore, projectAuth } from "../firebase/firebase-config"

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Relevés CSV | Finance D</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Relevés CSV</h1>
        
      </main>

    </div>
  )
}
