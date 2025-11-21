import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  { name: 'Andi - Founder RetailX', quote: 'Dalam 4 bulan, revenue kami naik 2.7x. Tim sangat data-driven dan transparan.', avatar: 'A' },
  { name: 'Sinta - CMO EduPlus', quote: 'Lead cost turun 54% dan kualitasnya jauh lebih baik. Rekomendasi banget.', avatar: 'S' },
  { name: 'Raka - CEO FinSolve', quote: 'Strategi SEO & kontennya rapi. Organic traffic tumbuh stabil setiap bulan.', avatar: 'R' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-16 sm:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Apa Kata Klien</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">Kepercayaan brand dari beragam industri.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: idx * 0.05 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 text-white font-semibold">
                  {t.avatar}
                </div>
                <p className="text-white font-medium">{t.name}</p>
              </div>
              <p className="mt-4 text-slate-300 text-sm">“{t.quote}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
