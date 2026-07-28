'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Quote, Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const benefits = [
  {
    title: 'Bir çalışanın maliyetinin çok altında, hiç izin kullanmaz',
    detail: 'Maaş, sigorta, izin, mesai yok — Ela her gün, her saat aynı performansla çalışır.',
    color: '#fbbf24',
  },
  {
    title: '7/24 hiçbir aramayı kaçırmaz',
    detail: 'Gece yarısı da, tatilde de arayan her müşteriye cevap verir — kaçan çağrı, kaçan müşteri demektir.',
    color: '#a78bfa',
  },
  {
    title: '47 dilde yabancı müşteriye kendi dilinde güven verir',
    detail: 'Yabancı müşteriniz İngilizce, Almanca ya da Arapça yazsa da anlar ve aynı dilde cevap verir.',
    color: '#22d3ee',
  },
  {
    title: 'WhatsApp, Instagram ve web sitenizde 0.2 saniyede yanıt verir',
    detail: 'Müşteri beklemez; tüm kanallardan gelen mesajlara anında dönüş yapılır.',
    color: '#f472b6',
  },
  {
    title: 'Randevu ve rezervasyonu otomatik oluşturur, unutmaz',
    detail: 'Takvim çakışması yok, hatırlatma yok — her randevu otomatik ve doğru kaydedilir.',
    color: '#818cf8',
  },
  {
    title: 'KVKK uyumlu, güvenli altyapı',
    detail: 'Tüm konuşmalar şifreli saklanır, müşteri verileriniz yasal olarak korunur.',
    color: '#4ade80',
  },
];

export default function ElaShowcase() {
  const [active, setActive] = useState(0);
  const activeColor = benefits[active].color;

  return (
    <section id="ela-showcase" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-300">
            <Star className="h-4 w-4 text-indigo-400" />
            Müşteri Görüşü
          </span>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            Bir Yazılım Değil,{' '}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Hiç Yorulmayan Bir Çalışan
            </span>
          </h2>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: collage image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute inset-0 -m-4 rounded-[2.5rem] bg-gradient-to-br from-violet-500/20 to-indigo-500/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
              <Image
                src="/images/ela-portrait.jpg"
                alt="Ela — Sesli Yapay Zeka Asistanı"
                width={600}
                height={480}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-950/30 to-transparent" />

              {/* Konuşma balonu vurgusu */}
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#12121a]/85 px-4 py-2.5 shadow-lg backdrop-blur-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                <span className="text-sm font-semibold text-white">Merhaba, ben Ela.</span>
              </div>
            </div>

            {/* Floating quote card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{ backgroundColor: 'rgba(20, 17, 28, 0.97)' }}
              className="absolute -bottom-6 -right-4 max-w-xs rounded-2xl border border-violet-400/40 p-5 shadow-2xl shadow-black/60 backdrop-blur-md md:-right-8"
            >
              <Quote className="mb-2 h-5 w-5 text-violet-400" />
              <p className="text-sm font-medium leading-relaxed text-gray-200">
                &ldquo;Ela sayesinde hiçbir telefonu kaçırmıyoruz. Yabancı müşterilerimize kendi dillerinde hitap edebiliyoruz.&rdquo;
              </p>
              <p className="mt-3 text-xs font-semibold text-gray-400">— Memnun Bir İşletme Sahibi</p>
            </motion.div>
          </motion.div>

          {/* Right: benefits list */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="font-display text-2xl font-bold text-white md:text-3xl">
              Neden İşletmeler Ela'yı Seçiyor?
            </h3>
            <p className="mt-4 text-base leading-relaxed text-gray-400 md:text-lg">
              Her kaçan çağrı, cevapsız kalan bir mesaj demek — kaybedilen bir müşteri demek. Ela, bu riski ortadan kaldırır: işinize odaklanın, müşteri iletişimini Ela'ya bırakın.
            </p>
            <ul className="mt-8 space-y-1" onMouseLeave={() => setActive(0)}>
              {benefits.map((benefit, i) => {
                const isActive = i === active;
                return (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    onMouseEnter={() => setActive(i)}
                    className="cursor-default rounded-2xl border-l-2 py-3 pl-4 transition-all duration-300"
                    style={{
                      borderColor: isActive ? benefit.color : 'transparent',
                      backgroundColor: isActive ? `${benefit.color}14` : 'transparent',
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        className="mt-1 h-5 w-5 flex-shrink-0 transition-colors duration-300"
                        style={{ color: isActive ? benefit.color : '#6b7280' }}
                      />
                      <p
                        className="transition-all duration-300"
                        style={{
                          fontSize: isActive ? '1.25rem' : '1rem',
                          fontWeight: isActive ? 800 : 500,
                          color: isActive ? benefit.color : '#9ca3af',
                          lineHeight: 1.35,
                        }}
                      >
                        {benefit.title}
                      </p>
                    </div>
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="ml-8 mt-2 overflow-hidden text-sm leading-relaxed text-gray-300"
                        >
                          {benefit.detail}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              })}
            </ul>

            <a
              href="#nasil-calisir"
              className="group mt-10 inline-flex items-center gap-2 text-base font-semibold text-violet-300 transition-colors duration-300 hover:text-violet-200"
            >
              Nasıl Çalışır'ı İncele
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
