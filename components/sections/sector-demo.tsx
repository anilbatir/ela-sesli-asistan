'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  Package,
  HardHat,
  Dumbbell,
  UtensilsCrossed,
  BedDouble,
  Sparkles,
  Play,
  Mic,
} from 'lucide-react';
import { FaTooth, FaHandSparkles } from 'react-icons/fa6';
import type { IconType } from 'react-icons';
import type { LucideIcon } from 'lucide-react';

interface Sector {
  icon: LucideIcon | IconType;
  label: string;
  business: string;
  title: string;
  customer: string;
  ela: string;
  duration: string;
  // audioSrc?: string — ses kaydı eklendiğinde buraya dosya yolu verilecek
}

const sectors: Sector[] = [
  {
    icon: Package,
    label: 'Kargo / E-ticaret',
    business: 'Hızlı Kargo A.Ş.',
    title: 'Kargo Takip Görüşmesi',
    customer: 'Kargom ne zaman elime ulaşır?',
    ela: 'Kargonuz şu anda dağıtım merkezinde, yarın öğleden önce adresinize teslim edilecek.',
    duration: '0:24',
  },
  {
    icon: FaTooth,
    label: 'Diş Kliniği',
    business: 'Gülen Diş Kliniği',
    title: 'Randevu Görüşmesi',
    customer: 'Yarın için diş kontrolü randevusu alabilir miyim?',
    ela: 'Tabii, yarın saat 14:00 müsait — sizi bu saate alalım mı?',
    duration: '0:19',
  },
  {
    icon: Sparkles,
    label: 'Güzellik Merkezi',
    business: 'Bella Güzellik Merkezi',
    title: 'Randevu Talebi',
    customer: 'Cuma günü cilt bakımı için yer var mı?',
    ela: 'Cuma 11:00’de yerimiz var, hemen rezervasyon oluşturuyorum.',
    duration: '0:21',
  },
  {
    icon: FaHandSparkles,
    label: 'Nailart',
    business: 'Glow Nailart Studio',
    title: 'Manikür Randevusu',
    customer: 'Bugün akşama doğru manikür yaptırabilir miyim?',
    ela: 'Bugün saat 18:30’da yer açık, sizi bekleriz.',
    duration: '0:17',
  },
  {
    icon: HardHat,
    label: 'İnşaat',
    business: 'Erkaya İnşaat',
    title: 'Proje Bilgi Talebi',
    customer: 'Yeni projenizdeki daire fiyatları nedir?',
    ela: '2+1 daireler 3.2 milyon TL’den başlıyor, size detaylı katalog gönderebilirim.',
    duration: '0:28',
  },
  {
    icon: Dumbbell,
    label: 'Spor Salonu',
    business: 'Fit Life Spor Salonu',
    title: 'Üyelik Görüşmesi',
    customer: 'Aylık üyelik ücretiniz ne kadar?',
    ela: 'Aylık üyeliğimiz 1200 TL, ilk hafta ücretsiz deneme hakkınız var.',
    duration: '0:22',
  },
  {
    icon: UtensilsCrossed,
    label: 'Restoran',
    business: 'Liman Restoran',
    title: 'Rezervasyon Görüşmesi',
    customer: 'Bu akşam 4 kişilik masa ayırtabilir miyim?',
    ela: 'Tabii, akşam 20:00 için deniz manzaralı bir masa ayırıyorum.',
    duration: '0:20',
  },
  {
    icon: BedDouble,
    label: 'Butik Otel',
    business: 'Erkaya Otel',
    title: 'Otel Rezervasyon Görüşmesi',
    customer: 'Bu hafta sonu için 2 kişilik oda müsait mi?',
    ela: 'Tabii ki, cumartesiye deniz manzaralı bir odamız müsait — rezervasyonunuzu hemen oluşturayım mı?',
    duration: '0:29',
  },
];

const waveHeights = [14, 24, 10, 30, 18, 36, 12, 26, 20, 8, 32, 16, 22, 12, 28, 18, 10, 24];

export default function SectorDemo() {
  const [active, setActive] = useState(sectors.length - 1);
  const sector = sectors[active];

  return (
    <section id="demolar" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#15121c] p-8 md:p-14">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-violet-600/15 blur-[110px]" />
          <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-indigo-600/12 blur-[110px]" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="mb-10 text-center"
            >
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                Canlı Demo
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
                Sektörünüzü Seçin,{' '}
                <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  Ela'yı Dinleyin
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-gray-400 md:text-lg">
                Otelden kliniğe, her sektörün kendi diliyle konuşan bir Ela var. Aşağıdan işletmenize en yakın olanı seçin.
              </p>
            </motion.div>

            {/* Sector grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {sectors.map((s, i) => {
                const Icon = s.icon;
                const isActive = i === active;
                return (
                  <button
                    key={s.label}
                    onClick={() => setActive(i)}
                    className={`flex flex-col items-center gap-3 rounded-2xl border px-4 py-6 text-center text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? 'border-violet-500/50 bg-gradient-to-b from-violet-500/20 to-indigo-500/10 text-white shadow-lg shadow-violet-500/10'
                        : 'border-white/10 bg-white/[0.03] text-gray-400 hover:border-white/20 hover:bg-white/[0.06]'
                    }`}
                  >
                    <span
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300 ${
                        isActive
                          ? 'border-violet-400/50 bg-gradient-to-br from-violet-500/30 to-indigo-500/20'
                          : 'border-white/10 bg-white/5'
                      }`}
                    >
                      <Icon className={`h-7 w-7 ${isActive ? 'text-violet-300' : 'text-gray-500'}`} />
                    </span>
                    <span className="leading-tight">{s.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Demo player */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#100e16]"
              >
                <div className="grid gap-0 sm:grid-cols-[200px_1fr]">
                  <div className="relative flex min-h-[140px] items-center justify-center bg-gradient-to-br from-violet-500/15 via-[#1a1624] to-indigo-500/10 sm:min-h-0">
                    <sector.icon className="h-14 w-14 text-violet-400/40" />
                    <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-semibold text-green-400 backdrop-blur-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      {sector.business}
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-bold text-white">{sector.title}</p>
                        <p className="text-xs text-gray-500">Ela · Sesli Demo</p>
                      </div>
                      <span className="whitespace-nowrap rounded-full border border-amber-500/25 bg-amber-500/10 px-2.5 py-1 text-[11px] font-semibold text-amber-400">
                        Ses kaydı yakında
                      </span>
                    </div>

                    <div className="flex items-end gap-[3px]">
                      {waveHeights.map((h, i) => (
                        <div
                          key={i}
                          className="w-[3px] rounded-full bg-gradient-to-t from-violet-500 to-indigo-400 opacity-30"
                          style={{ height: `${h}px` }}
                        />
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        disabled
                        title="Ses kaydı henüz eklenmedi"
                        className="flex h-11 w-11 shrink-0 cursor-not-allowed items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 opacity-60"
                      >
                        <Play className="h-4 w-4 fill-white text-white" />
                      </button>
                      <div className="h-1 flex-1 rounded-full bg-white/10">
                        <div className="h-full w-0 rounded-full bg-gradient-to-r from-violet-400 to-indigo-400" />
                      </div>
                      <span className="text-xs tabular-nums text-gray-500">0:00 / {sector.duration}</span>
                    </div>

                    <div className="space-y-2 border-t border-white/10 pt-3 text-sm leading-relaxed">
                      <p className="text-gray-400">
                        <span className="font-bold text-white">Müşteri:</span> “{sector.customer}”
                      </p>
                      <p className="text-gray-400">
                        <span className="font-bold text-violet-300">Ela:</span> “{sector.ela}”
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Live talk CTA */}
            <motion.a
              href="#iletisim"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group mx-auto mt-8 flex max-w-2xl flex-col items-center justify-between gap-5 rounded-2xl border border-violet-500/25 bg-gradient-to-r from-violet-500/10 to-indigo-500/5 p-6 sm:flex-row"
            >
              <div className="flex items-center gap-4">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600">
                  <span className="absolute inset-0 -m-1 rounded-full border border-violet-400/50" />
                  <Mic className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-base font-bold text-white">Ela ile şimdi canlı konuşun</p>
                  <p className="text-sm text-gray-400">Yazıya değil, gerçek sesinize cevap versin — mikrofonunuzu açın, deneyin.</p>
                </div>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#18131f] transition-transform duration-300 group-hover:scale-105">
                <Mic className="h-4 w-4" />
                Canlı Konuş
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
