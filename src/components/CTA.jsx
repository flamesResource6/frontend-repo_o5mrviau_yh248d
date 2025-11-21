import React from 'react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-16 sm:py-24">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-tr from-slate-900 via-slate-900 to-slate-900">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(14,165,233,0.15),transparent_60%)]" />
          <div className="relative p-8 sm:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-white text-2xl sm:text-3xl font-bold">Siap Naik Level? Mulai dengan Konsultasi Gratis</h3>
                <p className="mt-3 text-slate-300">Ceritakan target bisnis Anda, kami bantu rancang strategi paling efektif.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-3 text-white shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all">
                    Chat WhatsApp
                  </a>
                  <a href="mailto:hello@bluedigital.id" className="inline-flex items-center rounded-full px-5 py-3 text-slate-100 border border-white/10 hover:bg-white/5 transition-colors">
                    Kirim Email
                  </a>
                </div>
              </div>
              <form className="space-y-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Nama" />
                  <input type="email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Email" />
                </div>
                <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Perusahaan" />
                <textarea rows="4" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Ceritakan kebutuhan Anda"></textarea>
                <button type="button" className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-white font-medium shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all">Kirim</button>
                <p className="text-xs text-slate-400">Dengan mengirimkan form ini, Anda setuju dengan kebijakan privasi kami.</p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
