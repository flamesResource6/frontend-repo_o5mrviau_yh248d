import React from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = React.useState(false)

  const navItems = [
    { label: 'Layanan', href: '#services' },
    { label: 'Portofolio', href: '#portfolio' },
    { label: 'Testimoni', href: '#testimonials' },
    { label: 'Proses', href: '#process' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-400 to-emerald-400 p-[2px]">
                <div className="h-full w-full rounded-[10px] bg-slate-900"></div>
              </div>
              <span className="text-white font-semibold tracking-tight">BlueDigital</span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-slate-300 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all">
                Konsultasi Gratis
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors" aria-label="Toggle menu">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 space-y-3">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="block rounded-lg px-3 py-2 text-slate-200 hover:bg-white/5">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="block text-center rounded-lg px-3 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                Konsultasi Gratis
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
