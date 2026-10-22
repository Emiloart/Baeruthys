import Link from 'next/link'
import Layout from '../../components/Layout'
import { DELIVERY_METHODS, FREE_SHIPPING_THRESHOLD, WHATSAPP_NUMBER } from '../../lib/site'
import { formatNaira } from '../../lib/format'

// Set to true once the store owner has reviewed every policy below and confirmed it
// matches how the business actually operates. While false, a draft notice is shown.
const POLICIES_REVIEWED = false

// Owner to confirm. Used in the returns policy text.
const RETURN_WINDOW_DAYS = 7

function deliveryLines() {
  return DELIVERY_METHODS.map(
    (m) => `${m.name}: ${m.detail}, ${m.price === 0 ? 'free' : formatNaira(m.price)}.`
  )
}

const POLICIES = {
  shipping: {
    title: 'Shipping Information',
    sections: [
      {
        heading: 'Delivery options',
        body: deliveryLines(),
      },
      {
        heading: 'Free delivery',
        body: [`Standard delivery is free on orders of ${formatNaira(FREE_SHIPPING_THRESHOLD)} or more.`],
      },
      {
        heading: 'Delivery times',
        body: [
          'Delivery times are estimates and start once your order is confirmed. Many of our pieces are sourced from partner suppliers, so some items may take longer than the estimate shown. We will tell you if your order is delayed.',
        ],
      },
    ],
  },
  returns: {
    title: 'Returns and Refunds',
    sections: [
      {
        heading: 'If something is wrong with your order',
        body: [
          `Contact us within ${RETURN_WINDOW_DAYS} days of receiving your order if an item is damaged, defective, or not what you ordered. Include your order number and a photo of the item.`,
        ],
      },
      {
        heading: 'What we will do',
        body: [
          'Where the problem is confirmed, we will offer a replacement or a refund of the item price. The right option depends on stock and on what you prefer.',
        ],
      },
      {
        heading: 'Items we cannot take back',
        body: [
          'For hygiene reasons, we cannot accept returns on opened hair and nail products or earrings unless they arrive damaged or defective.',
        ],
      },
    ],
  },
  contact: {
    title: 'Contact Us',
    sections: [
      {
        heading: 'Get in touch',
        body: [
          'For questions about an order, delivery or a product, message us with your order number so we can help quickly.',
        ],
        link: WHATSAPP_NUMBER
          ? { href: `https://wa.me/${WHATSAPP_NUMBER}`, label: 'Message us on WhatsApp' }
          : null,
        fallback: WHATSAPP_NUMBER ? null : 'Contact details will be published here before launch.',
      },
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    sections: [
      {
        heading: 'What we collect',
        body: [
          'When you place an order we ask for your name, phone number, email address and delivery address. We use this only to process and deliver your order and to contact you about it.',
          'Your cart and wishlist are saved on your own device so they are still there when you come back.',
        ],
      },
      {
        heading: 'How we share it',
        body: [
          'We share the details needed to fulfil your order with our suppliers and delivery partners. We do not sell your personal information.',
        ],
      },
      {
        heading: 'Your choices',
        body: ['You can ask us to correct or delete the personal information we hold about you by contacting us.'],
      },
    ],
  },
  terms: {
    title: 'Terms and Conditions',
    sections: [
      {
        heading: 'Orders and prices',
        body: [
          'All prices are shown in Nigerian naira (NGN). An order is accepted once we confirm it. We may cancel an order if an item is unavailable or a price was shown in error, and we will refund any payment made.',
        ],
      },
      {
        heading: 'Product information',
        body: [
          'We try to show products accurately. Colours can look different on different screens, and sizes can vary slightly between suppliers.',
        ],
      },
      {
        heading: 'Changes',
        body: ['We may update these terms from time to time. The version on this page is the one that applies.'],
      },
    ],
  },
}

export function getStaticPaths() {
  return {
    paths: Object.keys(POLICIES).map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export function getStaticProps({ params }) {
  if (!POLICIES[params.slug]) return { notFound: true }
  return { props: { slug: params.slug, policy: JSON.parse(JSON.stringify(POLICIES[params.slug])) } }
}

export default function PolicyPage({ policy }) {
  return (
    <Layout title={policy.title}>
      <div className="border-b border-baer-bdr bg-baer-bg">
        <div className="shell py-8">
          <h1 className="text-4xl font-bold text-baer-dark">{policy.title}</h1>
        </div>
      </div>

      <article className="shell max-w-3xl py-10 lg:ml-0">
        {!POLICIES_REVIEWED && (
          <div role="note" className="mb-8 rounded-sm border border-baer-gold bg-baer-cream px-4 py-3 text-[13px] text-baer-dark">
            <strong>Draft.</strong> This page is a starting template and must be reviewed by the store owner before
            launch.
          </div>
        )}

        {policy.sections.map((section) => (
          <section key={section.heading} className="mb-8">
            <h2 className="text-2xl font-bold text-baer-dark">{section.heading}</h2>
            <div className="mt-3 space-y-3 text-sm leading-7 text-baer-mid">
              {(section.body || []).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              {section.fallback ? <p>{section.fallback}</p> : null}
            </div>
            {section.link ? (
              <a href={section.link.href} target="_blank" rel="noopener noreferrer" className="btn-dark mt-4">
                {section.link.label}
              </a>
            ) : null}
          </section>
        ))}

        <Link href="/shop" className="text-sm font-medium text-baer-dark hover:text-baer-gold">
          &larr; Back to shop
        </Link>
      </article>
    </Layout>
  )
}
