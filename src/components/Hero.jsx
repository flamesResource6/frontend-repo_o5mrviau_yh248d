import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-24">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.25),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-sky-200">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
                Agensi Digital Marketing • Indonesia
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Percepat Pertumbuhan Bisnis dengan Strategi Digital yang Terukur
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-300">
                Kami bantu Anda mendapatkan lebih banyak traffic, leads, dan penjualan melalui SEO, Iklan Berbayar, dan Social Media yang terintegrasi.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contact" className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all">
                  Mulai Konsultasi
                </a>
                <a href="#services" className="inline-flex items-center rounded-full px-5 py-3 text-slate-100 border border-white/10 hover:bg-white/5 transition-colors">
                  Lihat Layanan
                </a>
              </div>
              <div className="mt-6 flex items-center gap-4 text-slate-400 text-sm">
                <div className="flex -space-x-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="h-8 w-8 rounded-full border border-white/10 bg-gradient-to-br from-slate-600 to-slate-800" />
                  ))}
                </div>
                <span>100+ brand telah mempercayai kami</span>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="relative h-[420px] sm:h-[520px] lg:h-[560px]">
            <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-tr from-blue-600/20 via-cyan-400/10 to-emerald-400/10 blur-2xl" />
            <div className="relative h-full w-full rounded-3xl border border-white/10 bg-slate-900/40 shadow-2xl overflow-hidden">
              <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
