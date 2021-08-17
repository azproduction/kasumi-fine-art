import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function CallForAction() {
  return (
      <a href="mailto:cosp@azproduction.me?subject=Kasumi%20print%20order&body=Hi%20A.Z.Production%2C%0D%0A%0D%0AI%20would%20like%20to%20buy%20a%20print." className={styles.callForAction}>Buy a Limited Edition Print</a>
  );
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kasumi "Violet" Yoshizawa Fine Art Print</title>
        <meta name="description" content=">Kasumi Violet Yoshizawa fine art print, Persona 5 Royal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.hero}>
        <h1 className={styles.title}>
          Kasumi
        </h1>

        <p className={styles.description}>
          Kasumi "Violet" Yoshizawa Fine&nbsp;Art&nbsp;Print
        </p>

        <div className={styles.image}>
          <Image src='/kasumi-violet-yoshizawa-persona-5.jpg' width={1536/2} height={1499/2} quality={100} alt='Kasumi "Violet" Yoshizawa, Persona 5 Royal Fine Art Print framed' />
        </div>

        <p className={styles.description}>
          Limited edition of 5 Signed&nbsp;&&nbsp;Numbered.<br/>Price: € 150 – € 250
        </p>
        <CallForAction/>
      </div>

      <main className={styles.main}>
        <div className={styles.section}>
          <h2>About this Project</h2>
          <p>
            This is my first fine art cosplay project. Those genres hardly come together and I am proud that I managed to blend them nicely and create this fine art piece.
          </p>
          <p>
            Flower bed was hand made and styled by <a href="https://www.instagram.com/faelablanche/">Fae La Blanche</a>. It consists of 260 roses of two kind and 520 plans of 3 kind. It took us 8 hours to style the bed excluding all the logistics and photography time which took extra 10 hours.
          </p>
          <p>
            Kasumi's Costume was hand made by <a href="https://www.instagram.com/faelablanche/">Fae La Blanche</a> from fabric leftovers. Sword was 3D printed by <a href="https://www.instagram.com/kon__art/">Kon Art</a> and styled by <a href="https://www.instagram.com/faelablanche/">Fae La Blanche</a>.
          </p>
          <p>
            This setting was inspired by Alexia Sinclair works and idea for the composition comes from Kasumi Persona 5 Royal figurine and her hero artwork. Thanks to top down shot we were able to show character's grace and artistic side while keeping ideal gymnastic ribbon flow and all other components nicely placed.
          </p>
          <p>Watch <a href="https://www.instagram.com/reel/CSPWn1ojq1G/">behind the scenes and making of</a> on Instagram Reels.</p>
        </div>

        <div className={styles.section}>
          <h2>About the Print</h2>
          <p>
            Prints are available only in one size 60x60cm. Prints are limited edition fine art prints that are <b>signed</b> and <b>numbered</b> and shipped from Berlin with a <b>certificate of authenticity</b>.
            Printed on Hahnemühle FineArt Baryta 325 gram/m² α-cellulose paper which has a baryta finish for deep blacks and a more contrasty look. Shipped rolled (unframed) in a robust protective tube.
          </p>

          <h3>Price</h3>
          <p>
            First three prints – 150 Euro each. Last two – 250 Euro each. This issues has only 5 prints. Price excludes shipping.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>High Quality Paper</h2>
            <p>
              Printed on fine art printing paper that is made to last.

              Hahnemühle FineArt Baryta 325 gram/m² α-cellulose paper which has a baryta finish for deep blacks and a more contrasty look, delivered rolled in a custom made protective tube.
            </p>
          </div>

          <div className={styles.card}>
            <h2>Limited Edition Print</h2>
            <p>Edition is very small with only 5 prints. Please note that once a limited edition print sells out it will no longer be available to purchase. Prices may increase further as an edition is starting to run out.</p>
          </div>

          <div className={styles.card}>
            <h2>Payment and Shipment</h2>
            <p>
              Payment will be done with a Paypal Invoice. If you for any reason wouldn’t be satisfied with your purchase you can return the print for a refund. Please note that <b>price excludes shipment costs</b>.
            </p>
            <p>
              Shipment will be carried with DHL Standard Shipment. Shipping within Europe is rather fast. And might take up to 60 days for USA, Mexico and Australia.
              Estimated shipment prices: 8 Euro Germany, 20 Euro within Europe, 40 Euro for USA, 45 Euro for Mexiko and Australia.
            </p>
          </div>

          <div className={styles.card}>
            <h2>Framing & Presenting the Artwork</h2>
            <p>
              To frame the artwork well isn’t just a nice way to present it but it will also protect it and will make it last. UV protective antireflective glass is more expensive but gives a much closer experience with the artwork, it removes unwanted reflections and protects the artwork from the rays of the sun. Bring the artwork in the original package to your local framing specialist and they will know.
            </p>
          </div>
        </div>
        <div className={styles.examples}>
          <div className={styles.examplePlacement}>
            <Image src='/kasumi-violet-yoshizawa-persona-5-in-a-room-with-frame.jpg' width={1080/3} height={1620/3} quality={100} alt='Kasumi "Violet" Yoshizawa, Persona 5 Royal Fine Art Print in a room' />
          </div>
          <div className={styles.examplePlacement}>
            <Image src='/kasumi-violet-yoshizawa-persona-5-in-a-room.jpg' width={1080/3} height={1620/3} quality={100} alt='Kasumi "Violet" Yoshizawa, Persona 5 Royal Fine Art Print framed in a room' />
          </div>
          <div className={styles.examplePlacement}>
            <Image src='/kasumi-violet-yoshizawa-persona-5-in-a-room-with-big-frame.jpg' width={1080/3} height={1620/3} quality={100} alt='Kasumi "Violet" Yoshizawa, Persona 5 Royal Fine Art Print framed in a room' />
          </div>
        </div>
        <CallForAction/>
      </main>

      <footer className={styles.footer}>
        <p>
          &copy;&nbsp;2021 <a href="https://instagram.com/azproductioncosp">A.Z.Production Cosplay Photography</a>, Mikhail Davydov
        </p>
        <p>
          Feel free to contact me if you have any questions <a href="mailto:cosp@azproduction.me">cosp@azproduction.me</a>
        </p>
      </footer>
    </div>
  )
}

export default Home
