'use client';

import { motion } from 'framer-motion';
import { Phone, Brain, Rocket, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Step {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: Phone,
    number: '01',
    title: 'Bağlan',
    description: 'Telefon hattınızı, WhatsApp numaranızı ve sosyal medya hesaplarınızı Ela\'ya bağlayın. 10 dakikada hazır.',
  },
  {
    icon: Brain,
    number: '02',
    title: 'Eğit',
    description: 'İşletmenizin bilgilerini Ela\'ya öğretin: hizmetler, fiyatlar, çalışma saatleri, sık sorulan sorular. Ela öğrenir.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Başlat',
    description: 'Ela\'yı yayına alın. Telefonlara sesli, mesajlara yazılı cevap vermeye başlasın. Siz işinize odaklanın.',
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'İzle & Geliştir',
    description: 'Görüşmeleri takip edin, raporları inceleyin. Ela her gün daha iyi olur, yeni bilgiler ekledikçe gelişir.',
  },
];

export default function Process() {
  return (
    <section id="nasil-calisir" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-300">Nasıl Çalışır</span>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            4 Adımda{' '}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Ela'yı Başlatın</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Bağlantıdan eğitime, yayından gelişime — Ela'yı çalıştırmak sadece dört adım.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-3xl border border-white/10 bg-[#12121a] p-8 transition-all duration-300 hover:border-violet-500/30 hover:shadow-lg"
              >
                <div className="absolute right-6 top-6 font-display text-5xl font-bold text-white/5 transition-colors duration-300 group-hover:text-violet-500/20">
                  {step.number}
                </div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-indigo-500/10">
                  <Icon className="h-7 w-7 text-violet-400" />
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
