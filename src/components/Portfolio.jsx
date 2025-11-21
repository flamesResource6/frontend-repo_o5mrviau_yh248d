import React from 'react'
import { motion } from 'framer-motion'

const items = [
  { title: 'E-commerce Growth', stat: '+320% Traffic', image: 'https://images.unsplash.com/photo-1723095816936-fcda04ba0ece?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFLWNvbW1lcmNlJTIwR3Jvd3RofGVufDB8MHx8fDE3NjM3MTM4NDl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { title: 'B2B Lead Engine', stat: '3.1x Leads', image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop' },
  { title: 'SaaS Activation', stat: '42% CR', image: 'https://images.unsplash.com/photo-1723095816936-fcda04ba0ece?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFLWNvbW1lcmNlJTIwR3Jvd3RofGVufDB8MHx8fDE3NjM3MTM4NDl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-16 sm:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Studi Kasus</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">Hasil nyata dari strategi yang berfokus pada data.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, idx) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: idx * 0.05 }} viewport={{ once: true }} className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold">{p.title}</p>
                    <p className="text-sky-300 text-sm">{p.stat}</p>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">Detail</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
