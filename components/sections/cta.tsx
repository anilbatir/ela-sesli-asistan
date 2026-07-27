'use client';

import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall } from 'lucide-react';

export default function CTA() {
  return (
    <section id="iletisim" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#12121a] px-8 py-16 text-center shadow-xl md:px-16 md:py-24"
        >
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-violet-600/20 blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-indigo-600/20 blur-[100px]" />
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300">
              <PhoneCall className="h-4 w-4 text-violet-400" /> Ela'yı Deneyin
            </div>
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              İşletmenizin Telefonunu{' '}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Ela'ya Bırakın
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
              Ücretsiz demo ile Ela'nın işletmenize nasıl uyum sağladığını görün.
              Telefon, WhatsApp ve sosyal medya — hepsini tek asistanla yönetin.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:+908505555555"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-8 py-4 text-base font-semibold text-white"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 transition-transform duration-300 group-hover:scale-105" />
                <span className="absolute inset-0 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-70 bg-gradient-to-r from-violet-500 to-indigo-500" />
                <span className="relative z-10">Ücretsiz Demo Al</span>
                <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="https://wa.me/908505555555"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-gray-300 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-white"
              >
                WhatsApp'tan Yazın
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
