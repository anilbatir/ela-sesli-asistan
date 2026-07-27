'use client';

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { Menu, X, AudioLines } from 'lucide-react';

const navLinks = [
  { label: 'Özellikler', href: '#ozellikler' },
  { label: 'Çözümler', href: '#cozumler' },
  { label: 'Nasıl Çalışır', href: '#nasil-calisir' },
  { label: 'İletişim', href: '#iletisim' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="group flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 glow-primary transition-transform duration-300 group-hover:scale-110">
            <AudioLines className="h-5 w-5 text-white" />
          </div>
          <span className="font-logo text-2xl font-bold tracking-tight bg-gradient-to-r from-violet-300 via-white to-indigo-300 bg-clip-text text-transparent">
            Ela
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="group relative text-sm font-medium text-gray-400 transition-colors hover:text-white">
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-violet-400 to-indigo-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <a href="#iletisim" className="group relative hidden overflow-hidden rounded-full px-6 py-2.5 text-sm font-semibold text-white md:inline-flex items-center">
          <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 transition-transform duration-300 group-hover:scale-105" />
          <span className="absolute inset-0 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-violet-500 to-indigo-500" />
          <span className="relative z-10">Demo Al</span>
        </a>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white md:hidden" aria-label="Menü">
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 bg-[#0a0a0f]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="rounded-lg px-4 py-3 text-sm font-medium text-gray-400 transition-colors hover:bg-white/5 hover:text-white">
                  {link.label}
                </a>
              ))}
              <a href="#iletisim" onClick={() => setMobileOpen(false)} className="mt-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-center text-sm font-semibold text-white">
                Demo Al
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
