'use client';

import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall, MessageCircle, Zap } from 'lucide-react';
import Image from 'next/image';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16">
      {/* Background */}
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-50" />
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-indigo-600/15 blur-[120px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: Text */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300">
            <PhoneCall className="h-4 w-4 text-violet-400" />
            <span>Sesli Yapay Zeka Asistanı</span>
          </motion.div>

          <motion.h1 variants={item} className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl xl:text-7xl">
            <span className="text-glow">İşletmenizin</span>{' '}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Telefonuna
            </span>
            <br />
            <span className="text-glow-accent">Ela Cevap Veriyor</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg text-gray-400 md:text-xl">
            Otellerden restoranlara, inşaat şirketlerinden perakendeye — Ela telefonlara sesli, WhatsApp ve sosyal medyada yazılı cevap verir. 32 dilde, 3 saniyede, 7/24.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a href="#iletisim" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-8 py-4 text-base font-semibold text-white">
              <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 transition-transform duration-300 group-hover:scale-105" />
              <span className="absolute inset-0 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-70 bg-gradient-to-r from-violet-500 to-indigo-500" />
              <span className="relative z-10">Ücretsiz Demo Al</span>
              <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#nasil-calisir" className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-gray-300 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-white">
              <MessageCircle className="h-5 w-5 text-violet-400" />
              Nasıl Çalışır?
            </a>
          </motion.div>

          {/* Stats bar */}
          <motion.div variants={item} className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3">
            {[
              { icon: Zap, label: '3 Saniyede Yanıt' },
              { icon: PhoneCall, label: '32 Dilde Sesli' },
              { icon: MessageCircle, label: '7/24 Her Kanalda' },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex items-center gap-2 text-sm font-medium text-gray-400">
                  <Icon className="h-4 w-4 text-violet-400" />
                  {stat.label}
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right: Ela portrait */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Decorative glow ring */}
            <div className="absolute inset-0 -m-4 rounded-[2.5rem] bg-gradient-to-br from-violet-500/30 to-indigo-500/20 blur-2xl" />
            <div className="absolute inset-0 -m-1 rounded-[2.5rem] bg-gradient-to-br from-violet-400/20 to-transparent" />

            {/* Main image */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
              <Image
                src="/images/ela-portrait-cropped.jpg"
                alt="Ela — Sesli Yapay Zeka Asistanı"
                width={480}
                height={540}
                className="object-cover"
                priority
              />
              {/* Color overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-violet-950/40 via-transparent to-transparent" />
            </div>

            {/* Status badge bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-green-500/30 bg-[#12121a]/90 px-5 py-2.5 shadow-lg backdrop-blur-sm"
            >
              <span className="flex items-center gap-2 text-sm font-semibold text-green-400">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                Çevrimiçi · Aramaya Hazır
              </span>
            </motion.div>

            {/* Language floating tag */}
            <motion.div
              className="absolute -right-4 top-1/3 rounded-2xl border border-violet-500/30 bg-[#12121a]/90 px-4 py-3 shadow-xl backdrop-blur-sm"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="text-xs font-bold text-violet-300">32 Dil</p>
              <p className="text-[10px] text-gray-500">EN · TR · DE · AR</p>
            </motion.div>

            {/* Speed floating tag */}
            <motion.div
              className="absolute -left-4 top-1/2 rounded-2xl border border-indigo-500/30 bg-[#12121a]/90 px-4 py-3 shadow-xl backdrop-blur-sm"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            >
              <p className="text-xs font-bold text-indigo-300">⚡ 3 Sn</p>
              <p className="text-[10px] text-gray-500">Yanıt Süresi</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
