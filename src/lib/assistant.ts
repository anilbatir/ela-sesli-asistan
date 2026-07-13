import { Type } from "@google/genai";

export const LIVE_MODEL = "gemini-live-2.5-flash-preview";

export const SYSTEM_INSTRUCTION = `Sen Ela, bir otelin sesli rezervasyon asistanısın. Görevin misafirle sıcak ve profesyonel bir şekilde Türkçe konuşarak rezervasyon talebini almak.

Şunları sırayla, doğal bir sohbet akışıyla öğren:
- Misafirin adı soyadı
- Telefon numarası
- Giriş ve çıkış tarihleri
- Kaç kişi konaklayacak
- Oda tipi tercihi (varsa)
- Ek not veya özel istek (varsa)

Kurallar:
- Tek seferde tek soru sor, misafiri bunaltma.
- Bilgi net değilse kibarca tekrar sor.
- Rezervasyonu SEN kesinleştiremezsin; sadece talebi kaydedersin, otel ekibi geri dönüş yapıp rezervasyonu tamamlayacak. Bunu misafire açıkça belirt.
- Ad soyad, telefon numarası, giriş tarihi ve çıkış tarihi bilgilerini aldığında "kaydet_rezervasyon_talebi" fonksiyonunu çağırarak talebi kaydet.
- Fonksiyonu çağırdıktan sonra misafire talebinin alındığını ve otelin en kısa sürede döneceğini söyle.
- Kısa, samimi ve anlaşılır cümleler kullan.`;

export const SAVE_RESERVATION_FUNCTION_NAME = "kaydet_rezervasyon_talebi";

export const SAVE_RESERVATION_TOOL = {
  functionDeclarations: [
    {
      name: SAVE_RESERVATION_FUNCTION_NAME,
      description:
        "Misafirden alınan otel rezervasyon talebini şirketin sistemine kaydeder. Otel ekibi bu talebi görüp misafiri arayarak rezervasyonu kesinleştirir.",
      parameters: {
        type: Type.OBJECT,
        properties: {
          guestName: {
            type: Type.STRING,
            description: "Misafirin adı soyadı",
          },
          phone: {
            type: Type.STRING,
            description: "Misafirin telefon numarası",
          },
          email: {
            type: Type.STRING,
            description: "Misafirin e-posta adresi (varsa)",
          },
          checkIn: {
            type: Type.STRING,
            description: "Giriş tarihi, YYYY-MM-DD formatında",
          },
          checkOut: {
            type: Type.STRING,
            description: "Çıkış tarihi, YYYY-MM-DD formatında",
          },
          guestCount: {
            type: Type.INTEGER,
            description: "Konaklayacak kişi sayısı",
          },
          roomType: {
            type: Type.STRING,
            description: "Tercih edilen oda tipi (varsa)",
          },
          notes: {
            type: Type.STRING,
            description: "Ek not veya özel istekler (varsa)",
          },
        },
        required: ["guestName", "phone", "checkIn", "checkOut"],
      },
    },
  ],
};
