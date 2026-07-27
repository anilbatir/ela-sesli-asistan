'use client';

import { PhoneCall, Send, MessageCircle, Globe, Users, Mail } from 'lucide-react';

const footerLinks = {
  Çözümler: ['Oteller', 'Restoranlar', 'İnşaat', 'Perakende', 'Klinikler'],
  Şirket: ['Hakkımızda', 'Nasıl Çalışır', 'Fiyatlandırma', 'Blog'],
  Destek: ['S.S.S.', 'İletişim', 'KVKK', 'Gizlilik Politikası'],
};
const socials = [
  { icon: Send, href: '#' },
  { icon: MessageCircle, href: '#' },
  { icon: Globe, href: '#' },
  { icon: Users, href: '#' },
  { icon: Mail, href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 glow-primary">
                <PhoneCall className="h-5 w-5 text-white" />
              </div>
              <span className="font-display text-xl font-bold text-white">Ela</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              İşletmenizin telefon, WhatsApp ve sosyal medya kanallarını yöneten sesli yapay zeka asistanı. 32 dilde, 0.2 saniyede, 7/24.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-500 transition-all duration-300 hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-violet-400"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-semibold text-white">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-400 transition-colors hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">© 2026 Ela. Tüm hakları saklıdır.</p>
          <p className="text-sm text-gray-500">İstanbul, Türkiye'de geliştirildi.</p>
        </div>
      </div>
    </footer>
  );
}
