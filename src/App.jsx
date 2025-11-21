import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(2,6,23,0.6),rgba(2,6,23,0.9))]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-400 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>© {new Date().getFullYear()} BlueDigital. Semua hak cipta.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white">Syarat Layanan</a>
          </div>
        </div>
      </footer>

      {/* SEO Meta Tags for SPA (also add in index.html) */}
      <SEO />
    </div>
  )
}

function SEO() {
  React.useEffect(() => {
    document.title = 'Jasa Digital Marketing Terbaik | BlueDigital Indonesia'

    const meta = [
      { name: 'description', content: 'Agensi digital marketing di Indonesia: SEO, Iklan Berbayar (Google & Meta Ads), Social Media, dan CRO. Fokus pada growth yang terukur.' },
      { name: 'keywords', content: 'jasa digital marketing, agensi digital marketing, SEO, Google Ads, Meta Ads, social media, CRO, Indonesia' },
      { property: 'og:title', content: 'Jasa Digital Marketing Terbaik | BlueDigital Indonesia' },
      { property: 'og:description', content: 'Tingkatkan traffic, leads, dan penjualan dengan strategi digital yang data-driven.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:image', content: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ]

    meta.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        if (name) el.setAttribute('name', name)
        if (property) el.setAttribute('property', property)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    })
  }, [])
  return null
}

export default App
