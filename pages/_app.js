import Head from 'next/head'
import { Inter, Playfair_Display } from 'next/font/google'
import { CartProvider } from '../context/CartContext'
import '../styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Baeruthys is your everyday online store for groceries, fresh produce, pantry staples, drinks, household essentials, homeware and more."
        />
        <meta name="theme-color" content="#FAF8F5" />
      </Head>
      <div className={`${inter.variable} ${playfair.variable} font-sans`}>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </div>
    </>
  )
}
