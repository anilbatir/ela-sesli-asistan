'use client';

import { motion } from 'framer-motion';
import {
  PhoneCall,
  MessageCircle,
  Globe,
  Zap,
  Clock,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { FaPhone, FaWhatsapp, FaInstagram, FaFacebookMessenger, FaComments, FaEnvelope } from 'react-icons/fa6';
import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import type { IconType } from 'react-icons';

interface ChannelBadge {
  icon: IconType;
  label: string;
  color: string;
  glow: string;
}

const channelBadges: ChannelBadge[] = [
  { icon: FaPhone, label: 'Sesli Arama', color: 'text-violet-300', glow: 'from-violet-500/30 to-indigo-500/20' },
  { icon: FaWhatsapp, label: 'WhatsApp', color: 'text-[#25D366]', glow: 'from-[#25D366]/25 to-[#25D366]/10' },
  { icon: FaInstagram, label: 'Instagram', color: 'text-[#E1306C]', glow: 'from-[#E1306C]/25 via-[#C13584]/15 to-[#F77737]/15' },
];

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

const features: Feature[] = [
  {
    icon: PhoneCall,
    title: 'Sesli Telefon Yanıtı',
    description: 'İşletmenizin telefonuna gelen her aramayı sesli olarak yanıtlar. Doğal insan sesiyle konuşur, soruları anlar, yönlendirir.',
    color: 'text-violet-400',
    bgColor: 'from-violet-500/10 to-indigo-500/5',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp & Sosyal Medya',
    description: 'WhatsApp, Instagram, Facebook ve web sitenizdeki mesajlara yazılı olarak anında cevap verir. Tüm kanallar tek yerden.',
    color: 'text-indigo-400',
    bgColor: 'from-indigo-500/10 to-violet-500/5',
  },
  {
    icon: Globe,
    title: '32 Dilde Konuşur',
    description: 'Türkçe, İngilizce, Almanca, Arapça, Rusça ve daha 27 dilde akıcı şekilde iletişim kurar. Yabancı müşterilere kendi dilinde hitap eder.',
    color: 'text-violet-400',
    bgColor: 'from-violet-500/10 to-indigo-500/5',
  },
  {
    icon: Zap,
    title: '0.2 Saniyede Yanıt',
    description: 'Müşterinizi bekletmez. Her aramada ve mesajda ortalama 0.2 saniye içinde yanıt verir. Hız, memnuniyet demektir.',
    color: 'text-indigo-400',
    bgColor: 'from-indigo-500/10 to-violet-500/5',
  },
  {
    icon: Clock,
    title: '7/24 Hiç Uyumaz',
    description: 'Gece, gündüz, hafta sonu, resmi tatil — Ela her an çalışır. Hiçbir aramayı kaçırmaz, hiçbir mesajı cevapsız bırakmaz.',
    color: 'text-violet-400',
    bgColor: 'from-violet-500/10 to-indigo-500/5',
  },
  {
    icon: ShieldCheck,
    title: 'Güvenli & KVKK Uyumlu',
    description: 'Tüm konuşmalar şifreli olarak saklanır. KVKK ve GDPR uyumlu altyapı ile müşteri verileriniz korunur.',
    color: 'text-indigo-400',
    bgColor: 'from-indigo-500/10 to-violet-500/5',
  },
];

const channels = [
  { icon: FaPhone, label: 'Telefon (Sesli)', color: 'text-violet-300' },
  { icon: FaWhatsapp, label: 'WhatsApp', color: 'text-[#25D366]' },
  { icon: FaInstagram, label: 'Instagram DM', color: 'text-[#E1306C]' },
  { icon: FaFacebookMessenger, label: 'Facebook Messenger', color: 'text-[#0084FF]' },
  { icon: FaComments, label: 'Web Sitesi Canlı Sohbet', color: 'text-indigo-300' },
  { icon: FaEnvelope, label: 'E-posta', color: 'text-violet-300' },
];

export default function ElaSection() {
  return (
    <section id="ozellikler" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300">
            <Sparkles className="h-4 w-4 text-violet-400" />
            Tanışın: Ela
          </span>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
            İşletmenizin{' '}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Sesli Asistanı
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400 md:text-xl">
            Ela, işletmenizin tüm iletişim kanallarını yöneten yapay zeka asistanıdır.
            Telefonlara sesli cevap verir, WhatsApp ve sosyal medyada yazılı yanıt verir,
            randevu oluşturur, bilgi verir — hepsini 32 dilde ve 7/24.
          </p>
        </motion.div>

        {/* Ela showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative mb-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#12121a] shadow-xl"
        >
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-violet-600/20 blur-[100px]" />
          <div className="absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-indigo-600/15 blur-[100px]" />

          <div className="relative z-10 grid items-center gap-0 md:grid-cols-2">
            {/* Left: real Ela photo */}
            <div className="relative h-80 overflow-hidden md:h-[520px]">
              <Image
                src="/images/ela-portrait-cropped.jpg"
                alt="Ela — Sesli Yapay Zeka Asistanı"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-950/40 via-transparent to-transparent" />

              {/* Siri tarzı dairesel dinleme animasyonu */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 rounded-2xl border border-white/10 bg-violet-950/70 px-5 py-3 backdrop-blur-sm">
                <div className="relative flex h-8 w-8 items-center justify-center">
                  {[0, 1].map((idx) => (
                    <motion.span
                      key={idx}
                      className="absolute inset-0 rounded-full border border-violet-300/60"
                      animate={{ scale: [1, 1.9], opacity: [0.6, 0] }}
                      transition={{ duration: 1.8, repeat: Infinity, delay: idx * 0.9, ease: 'easeOut' }}
                    />
                  ))}
                  <motion.div
                    className="h-4 w-4 rounded-full bg-gradient-to-br from-violet-400 to-indigo-400"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>
                <span className="text-xs font-medium text-violet-200">Dinliyorum...</span>
              </div>

              {/* Status */}
              <div className="absolute right-4 top-4 rounded-full border border-green-500/30 bg-[#12121a]/90 px-3 py-1.5 shadow-lg backdrop-blur-sm">
                <span className="flex items-center gap-1.5 text-xs font-semibold text-green-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                  Çevrimiçi
                </span>
              </div>
            </div>

            {/* Right: intro text */}
            <div className="p-8 md:p-12">
              <h3 className="font-display text-2xl font-bold text-white md:text-3xl">
                Ben Ela —{' '}
                <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  işletmenizin yeni sesi
                </span>
              </h3>
              <p className="mt-4 text-base leading-relaxed text-gray-400 md:text-lg">
                Telefonunuz çaldığında ben açarım. WhatsApp'ınıza mesaj geldiğinde ben yanıtlarım.
                Müşteriniz rezervasyon istediğinde ben oluştururum. Bilgi istediklerinde ben veririm.
                Siz işinize odaklanın, iletişimi bana bırakın.
              </p>
              {/* Kanal rozetleri: yüzen, kümelenmiş logolar */}
              <div className="mt-6 flex items-center -space-x-3">
                {channelBadges.map((channel, i) => {
                  const Icon = channel.icon;
                  return (
                    <motion.div
                      key={channel.label}
                      className="group relative"
                      style={{ zIndex: channelBadges.length - i }}
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.35 }}
                      whileHover={{ scale: 1.12, zIndex: 10 }}
                    >
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br ${channel.glow} bg-[#12121a] shadow-lg backdrop-blur-sm transition-shadow duration-300 group-hover:shadow-violet-500/20`}
                      >
                        <Icon className={`h-6 w-6 ${channel.color}`} />
                      </div>
                      <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#0d0d13] px-2 py-1 text-xs font-medium text-gray-300 opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
                        {channel.label}
                      </span>
                    </motion.div>
                  );
                })}
                <span className="ml-6 text-sm text-gray-400">
                  hangi kanaldan yazarsanız yazın, Ela cevap verir
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h3 className="font-display text-3xl font-bold text-white md:text-4xl">
            Ela'nın <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Özellikleri</span>
          </h3>
          <p className="mt-4 text-lg text-gray-400">İşletmeniz için tasarlanmış altı temel yetenek.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#12121a] p-6 transition-shadow duration-300 hover:shadow-xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                <div className="relative z-10">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 group-hover:scale-110">
                    <Icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h4 className="mb-2 font-display text-lg font-semibold text-white">
                    {feature.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Channels section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="mb-10 text-center">
            <h3 className="font-display text-3xl font-bold text-white md:text-4xl">
              Tüm <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Kanallarda</span>
            </h3>
            <p className="mt-4 text-lg text-gray-400">Ela, müşterilerinizin nerede olursa olsun onlara ulaşır.</p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {channels.map((channel, i) => {
              const Icon = channel.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-[#12121a] p-6 transition-all duration-300 hover:border-violet-500/30 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/10 to-indigo-500/10 transition-all duration-300 group-hover:from-violet-500/20 group-hover:to-indigo-500/20">
                    <Icon className={`h-6 w-6 ${channel.color}`} />
                  </div>
                  <span className="text-center text-sm font-medium text-gray-300">{channel.label}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
