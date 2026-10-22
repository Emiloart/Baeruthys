import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import { FREE_SHIPPING_THRESHOLD, SITE } from '../lib/site'
import { formatNaira } from '../lib/format'

export default function Layout({ title, description, children, minimal = false }) {
  const pageTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} | ${SITE.tagline}`

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        {description ? <meta name="description" content={description} /> : null}
      </Head>

      <div className="bg-baer-dark px-4 py-2.5 text-center text-xs text-white">
        Free standard delivery on orders over {formatNaira(FREE_SHIPPING_THRESHOLD)}
      </div>

      <Header />
      <main className={minimal ? '' : 'min-h-[60vh]'}>{children}</main>
      <Footer />
    </>
  )
}
