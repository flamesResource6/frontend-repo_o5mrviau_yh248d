import React from 'react'
import { Search, MousePointerClick, Share2, BarChart3, Rocket, Megaphone } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Search,
    title: 'SEO & Content',
    desc: 'Riset keyword, optimasi on-page/off-page, dan konten berkualitas untuk peringkat organik yang berkelanjutan.'
  },
  {
    icon: MousePointerClick,
    title: 'Iklan Berbayar (Ads)',
    desc: 'Strategi Google & Meta Ads yang data-driven untuk ROAS maksimal dan peningkatan penjualan.'
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    desc: 'Bangun brand awareness dan engagement melalui konten kreatif & manajemen sosial media.'
  },
  {
    icon: BarChart3,
    title: 'Analytics & CRO',
    desc: 'Pelacakan funnel, A/B testing, dan optimasi konversi untuk hasil yang terukur.'
  },
  {
    icon: Rocket,
    title: 'Branding & Creative',
    desc: 'Identitas visual, landing page, dan materi kampanye dengan desain yang modern.'
  },
  {
    icon: Megaphone,
    title: 'Marketing Automation',
    desc: 'Kampanye email, CRM, dan workflow otomatis yang meningkatkan retensi pelanggan.'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(40%_40%_at_100%_0%,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Layanan Kami</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">Solusi menyeluruh untuk meningkatkan performa pemasaran digital Anda.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: idx * 0.05 }} viewport={{ once: true }} className="group rounded-2xl border border-white/10 bg-slate-900/40 p-6 hover:bg-slate-900/60 transition-colors">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600/20 to-cyan-500/20 text-sky-300">
                <Icon size={22} />
              </div>
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-slate-400 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
