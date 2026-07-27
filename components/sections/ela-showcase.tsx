'use client';

import { motion } from 'framer-motion';
import { Quote, Star, PhoneCall, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const benefits = [
  '7/24 hiçbir aramayı kaçırmaz',
  '32 dilde yabancı müşteriye hitap eder',
  'WhatsApp ve sosyal medyada anında yanıt',
  'Randevu ve rezervasyon otomatik',
  'KVKK uyumlu güvenli altyapı',
];

export default function ElaShowcase() {
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
            Ela'yla Çalışmak{' '}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Bu Kadar Kolay
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
                src="/images/ela-collage.jpg"
                alt="Ela Asistan Özellikleri"
                width={600}
                height={480}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-950/30 to-transparent" />
            </div>

            {/* Floating quote card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 max-w-xs rounded-2xl border border-white/10 bg-[#12121a] p-5 shadow-xl backdrop-blur-sm md:-right-8"
            >
              <Quote className="mb-2 h-5 w-5 text-violet-400" />
              <p className="text-sm font-medium leading-relaxed text-gray-300">
                &ldquo;Ela sayesinde hiçbir telefonu kaçırmıyoruz. Yabancı müşterilerimize kendi dillerinde hitap edebiliyoruz.&rdquo;
              </p>
              <p className="mt-3 text-xs font-semibold text-gray-500">— Erkaya İnşaat</p>
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
              Neden Ela?
            </h3>
            <p className="mt-4 text-base leading-relaxed text-gray-400 md:text-lg">
              Ela, işletmenizin tüm iletişim yükünü omuzlarınızdan alır. Siz işinize odaklanın, müşteri iletişimini Ela'ya bırakın.
            </p>
            <ul className="mt-8 space-y-4">
              {benefits.map((benefit, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="group flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-violet-400" />
                  <span className="text-base text-gray-300 transition-all duration-200 group-hover:text-lg group-hover:font-bold group-hover:text-white">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </ul>

            <a
              href="#iletisim"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <PhoneCall className="h-5 w-5" />
              Ela'yı Hemen Deneyin
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
