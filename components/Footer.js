export default function Footer(){
  return (
    <footer className="bg-baer-surf border-t border-baer-bdr mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold">BAERUTHYS</h4>
          <p className="mt-2 text-sm text-baer-mid">An all in one digital store — curated fashion and accessories.</p>
        </div>
        <div>
          <h5 className="font-medium">Customer Service</h5>
          <ul className="mt-2 text-sm text-baer-mid space-y-1">
            <li>Contact</li>
            <li>Shipping</li>
            <li>Returns</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium">Company</h5>
          <ul className="mt-2 text-sm text-baer-mid space-y-1">
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-baer-bdr py-6">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-baer-mid">© {new Date().getFullYear()} Baeruthys. All rights reserved.</div>
      </div>
    </footer>
  )
}
