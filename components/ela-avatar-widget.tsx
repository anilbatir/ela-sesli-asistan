'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { X, Send, Mic, PhoneCall, Sparkles } from 'lucide-react';
import Image from 'next/image';

interface Message {
  role: 'ela' | 'user';
  text: string;
}

const elaResponses: Record<string, string> = {
  'Hizmetleriniz neler?': 'Telefon, WhatsApp, Instagram, Facebook ve web sitenizdeki canlı sohbete cevap veririm. 32 dilde sesli ve yazılı iletişim, randevu oluşturma, rezervasyon ve bilgi verme — hepsini 7/24 yaparım.',
  'Fiyat almak istiyorum': 'Memnuniyetle! İşletmenizin büyüklüğüne ve ihtiyaç duyduğunuz kanal sayısına göre size özel fiyat sunabilirim. Demo talebi için iletişim formunu doldurabilir misiniz?',
  'Ela sen ne yapabilirsin?': 'Telefonlara sesli cevap verir, WhatsApp ve sosyal medyada yazılı yanıt yazar, randevu ve rezervasyon oluşturur, ürün/proje bilgisi verir, sık sorulan soruları yanıtlar — 32 dilde, 3 saniyede, 7/24.',
  'Otel için uygun mu?': 'Kesinlikle! Oteller için rezervasyon alır, oda müsaitliği kontrol eder, fiyat bilgisi verir, check-in/check-out saatlerini yanıtlar ve özel istekleri kaydeder.',
  'Hangi dillerde konuşuyorsun?': '32 dilde konuşurum: Türkçe, İngilizce, Almanca, Arapça, Rusça, Fransızca, İspanyolca, İtalyanca ve daha fazlası. Yabancı müşterilerinize kendi dilinde hitap ederim.',
};

const defaultResponses = [
  'Anladım! Bu konuda size yardımcı olabilirim. Dilerseniz bir demo planlayalım, işletmenize nasıl uyum sağladığımı birlikte görelim.',
  'Harika bir soru! Ela olarak işletmenizin tüm iletişim kanallarını yönetiyorum. Detaylı bilgi için demo talep edebilirsiniz.',
  'Tabii ki! Bu konuda size özel çözüm sunabilirim. İşletmenizin sektörüne göre kendimi özelleştiririm.',
];

const elaSuggestions = [
  'Hizmetleriniz neler?',
  'Ela sen ne yapabilirsin?',
  'Otel için uygun mu?',
  'Hangi dillerde konuşuyorsun?',
];

export default function ElaAvatarWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ela', text: 'Merhaba! Ben Ela, işletmenizin sesli yapay zeka asistanıyım. Size nasıl yardımcı olabilirim?' },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { role: 'user', text }]);
    setInput('');
    setIsTyping(true);
    setIsSpeaking(true);

    setTimeout(() => {
      const response = elaResponses[text] ?? defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
      setMessages((prev) => [...prev, { role: 'ela', text: response }]);
      setIsTyping(false);
      setIsSpeaking(false);
    }, 1200 + Math.random() * 800);
  };

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full shadow-2xl"
            aria-label="Ela ile konuş"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-violet-400/30" />
            <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 border-white/20 bg-gradient-to-br from-violet-500 to-indigo-600">
              <Image
                src="/images/ela-avatar.jpg"
                alt="Ela"
                width={56}
                height={56}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-[10px] font-bold text-white">
              1
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="fixed bottom-6 right-6 z-50 flex h-[520px] max-h-[calc(100vh-3rem)] w-[calc(100vw-3rem)] max-w-sm flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#12121a] shadow-2xl"
          >
            {/* Header */}
            <div className="relative flex items-center gap-3 border-b border-white/10 bg-gradient-to-r from-violet-600 to-indigo-600 p-4">
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-white/30 bg-white/10">
                <Image
                  src="/images/ela-avatar.jpg"
                  alt="Ela"
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              {isSpeaking && (
                <motion.div
                  className="absolute left-4 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full border-2 border-white/50"
                  animate={{ scale: [1, 1.3], opacity: [0.8, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
              <div className="relative flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-white">Ela</h3>
                  <span className="flex items-center gap-1 text-xs text-green-200">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-300" />
                    {isSpeaking ? 'Konuşuyor...' : 'Çevrimiçi'}
                  </span>
                </div>
                <p className="text-xs text-violet-100">Sesli Yapay Zeka Asistanı · 32 Dil</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="relative rounded-full p-1.5 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Kapat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-4 overflow-y-auto bg-[#0a0a0f] p-4">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'ela' && (
                    <div className="mr-2 flex h-8 w-8 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-violet-500 to-indigo-600">
                      <Image
                        src="/images/ela-avatar.jpg"
                        alt="Ela"
                        width={32}
                        height={32}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white'
                        : 'border border-white/10 bg-[#12121a] text-gray-200 shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
                  <div className="mr-2 flex h-8 w-8 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-violet-500 to-indigo-600">
                    <Image
                      src="/images/ela-avatar.jpg"
                      alt="Ela"
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-[#12121a] px-4 py-3 shadow-sm">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((idx) => (
                        <motion.div
                          key={idx}
                          className="h-2 w-2 rounded-full bg-gray-500"
                          animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: idx * 0.15 }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {messages.length <= 2 && (
              <div className="flex flex-wrap gap-2 border-t border-white/10 bg-[#12121a] px-4 py-3">
                {elaSuggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => handleSend(suggestion)}
                    className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-300 transition-colors hover:bg-violet-500/20"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="flex items-center gap-2 border-t border-white/10 bg-[#12121a] p-3">
              <button
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-colors hover:bg-violet-500/10 hover:text-violet-400"
                aria-label="Sesli mesaj"
              >
                <Mic className="h-5 w-5" />
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                placeholder="Ela'ya yazın..."
                className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-gray-200 outline-none transition-colors focus:border-violet-500/30 focus:bg-white/10"
              />
              <button
                onClick={() => handleSend(input)}
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white transition-transform hover:scale-105"
                aria-label="Gönder"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
