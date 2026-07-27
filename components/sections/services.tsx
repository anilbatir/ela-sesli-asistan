'use client';

import { motion } from 'framer-motion';
import { Hotel, UtensilsCrossed, HardHat, ShoppingBag, Stethoscope, Car, Plane, GraduationCap, ArrowUpRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Solution {
  icon: LucideIcon;
  title: string;
  description: string;
  examples: string[];
  className: string;
  glow: string;
  iconColor: string;
}

const solutions: Solution[] = [
  {
    icon: Hotel,
    title: 'Oteller & Pansiyonlar',
    description: 'Rezervasyon alır, oda bilgisi verir, check-in/check-out saatlerini yanıtlar, özel istekleri kaydeder.',
    examples: ['Rezervasyon oluşturma', 'Oda müsaitlik kontrolü', 'Fiyat bilgisi'],
    className: 'md:col-span-2 md:row-span-2',
    glow: 'from-violet-500/15 to-indigo-500/10',
    iconColor: 'text-violet-400',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restoranlar & Kafeler',
    description: 'Masası rezerve eder, menü bilgisi verir, çalışma saatlerini yanıtlar.',
    examples: ['Masa rezervasyonu', 'Menü bilgisi'],
    className: '',
    glow: 'from-indigo-500/15 to-violet-500/10',
    iconColor: 'text-indigo-400',
  },
  {
    icon: HardHat,
    title: 'İnşaat & Gayrimenkul',
    description: 'Proje bilgisi verir, daire fiyatlarını yanıtlar, site ziyareti planlar.',
    examples: ['Proje detayları', 'Fiyat listesi'],
    className: '',
    glow: 'from-violet-500/15 to-indigo-500/10',
    iconColor: 'text-violet-400',
  },
  {
    icon: ShoppingBag,
    title: 'Perakende & E-Ticaret',
    description: 'Ürün bilgisi verir, stok durumu yanıtlar, sipariş takibi yapar.',
    examples: ['Ürün bilgisi', 'Stok durumu', 'Sipariş takibi'],
    className: 'md:col-span-2',
    glow: 'from-indigo-500/15 to-violet-500/10',
    iconColor: 'text-indigo-400',
  },
  {
    icon: Stethoscope,
    title: 'Klinikler & Muayenehaneler',
    description: 'Randevu oluşturur, çalışma saatlerini verir, hizmet bilgisi yanıtlar.',
    examples: ['Randevu alma', 'Çalışma saatleri'],
    className: '',
    glow: 'from-violet-500/15 to-indigo-500/10',
    iconColor: 'text-violet-400',
  },
  {
    icon: Car,
    title: 'Oto Servis & Yedek Parça',
    description: 'Servis randevusu oluşturur, parça fiyatı verir, bakım bilgisi yanıtlar.',
    examples: ['Servis randevusu', 'Parça sorgulama'],
    className: '',
    glow: 'from-indigo-500/15 to-violet-500/10',
    iconColor: 'text-indigo-400',
  },
  {
    icon: Plane,
    title: 'Turizm & Seyahat',
    description: 'Tur bilgisi verir, rezervasyon alır, transfer planlar, sık sorulanları yanıtlar.',
    examples: ['Tur rezervasyonu', 'Transfer planlama'],
    className: '',
    glow: 'from-violet-500/15 to-indigo-500/10',
    iconColor: 'text-violet-400',
  },
  {
    icon: GraduationCap,
    title: 'Diğer Tüm İşletmeler',
    description: 'Ela her işletme için özelleştirilebilir. Kendi SSS listenizi ekleyin, Ela gerisini halletsin.',
    examples: ['Tamamen özelleştirilebilir', 'Sektöre özel eğitim'],
    className: '',
    glow: 'from-indigo-500/15 to-violet-500/10',
    iconColor: 'text-indigo-400',
  },
];

export default function Services() {
  return (
    <section id="cozumler" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300">Çözümler</span>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            Her Sektör İçin{' '}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Özel Ela</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Otelden restorana, inşaattan perakendeye — Ela her işletmenin ihtiyacına göre özelleştirilir.
          </p>
        </motion.div>

        <div className="grid auto-rows-[200px] grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[220px]">
          {solutions.map((solution, i) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-[#12121a] p-6 transition-shadow duration-300 hover:shadow-xl ${solution.className}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.glow} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-violet-500/30 group-hover:bg-violet-500/10">
                      <Icon className={`h-6 w-6 ${solution.iconColor}`} />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-gray-600 transition-all duration-300 group-hover:text-gray-300 group-hover:rotate-12" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">{solution.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-400">{solution.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {solution.examples.map((ex) => (
                        <span key={ex} className="rounded-full bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-400">
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
