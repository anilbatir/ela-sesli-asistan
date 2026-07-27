# Ela — Proje İçerik Brief'i

Bu dosya, Framer'daki hazır bir şablona (örn. LaunchFolio tarzı bir template) Ela'nın kendi içeriğini yerleştirirken referans almak için hazırlandı. Her bölümün metnini, görsel kimliğini ve görsellerle ilgili ne yapman gerektiğini tek yerde bulacaksın. Framer'ı buradan doğrudan düzenleyemiyorum (Framer'a bağlı bir araç yok), o yüzden bu metinleri Framer editöründe ilgili katmanlara kendin kopyala-yapıştır yapacaksın — aşağıda adım adım nasıl yapılacağı da var.

---

## 1. Marka Özeti

- **Ad:** Ela
- **Ne yapıyor:** Otel, restoran, klinik, kuaför, avukatlık bürosu ve emlak/inşaat gibi randevu & rezervasyon odaklı işletmeler için 7/24 çalışan, sesli ve yazılı (WhatsApp/Instagram) yanıt veren yapay zeka asistanı.
- **Kime hitap ediyor:** Telefonu/mesajı kaçırdığında satış kaybeden küçük-orta ölçekli işletme sahipleri.
- **Tek cümlelik pitch:** *"Ela cevaplar. İnsan gibi konuşur, hiç yorulmaz, hiçbir fırsatı kaçırmaz."*
- **Ton:** Sıcak ama profesyonel, abartısız, somut fayda odaklı (uydurma müşteri alıntısı / sahte istatistik yok — sadece ürünün gerçekten yaptığı şeyler anlatılıyor).

---

## 2. Görsel Kimlik

| Öğe | Değer | Kullanım |
|---|---|---|
| Zemin | `#FBFBFE` | Sayfa arka planı (neredeyse beyaz) |
| Ana vurgu | `#7c3aed` (violet-600) | Başlık gradyanı, butonlar, ikon vurguları |
| İkincil vurgu | `#d946ef` / `#c026d3` (fuchsia-500/600) | Gradyan geçişi, CTA gölgeleri |
| Üçüncül vurgu | `#06b6d4` (cyan-500) | Gradyan bitişi, rozet detayları |
| Metin (koyu) | `#0f172a` (slate-900) | Başlıklar |
| Metin (soluk) | `#64748b` (slate-500) | Alt metinler, açıklamalar |
| Çizgi/kenarlık | `#e2e8f0` (slate-200) | Kart kenarlıkları |

**Tipografi:**
- Başlıklar: **Fraunces** (serif, display) — Google Fonts'ta ücretsiz mevcut. Framer'ın font kütüphanesinde "Fraunces" aratarak doğrudan ekleyebilirsin.
- Gövde metni: **Inter** (sans) — Framer'da hazır geliyor.

**Logo:** Ayrı bir logo dosyası yok. Marka "ela" kelimesi, küçük harf, violet→cyan gradyanlı bir wordmark olarak kullanılıyor. Framer'da bunu bir metin katmanına "Fraunces", gradient fill (violet→cyan) vererek yeniden oluşturabilirsin.

---

## 3. Görseller / Fotoğraflar

Şu an projede **tek bir Ela fotoğrafı** var:

```
/public/ela.jpg
```

Bilgisayarında proje klasörü içinde şu tam yolda:
`Masaüstü/Ela sesli asistan/public/ela.jpg`

Bu fotoğraf sitede **hero bölümünde dairesel maskeli, kare kadraj** olarak kullanılıyor (bkz. `src/app/page.tsx` içindeki `hero-photo` alanı). Şu an elimizde bundan başka fotoğraf yok — "about/misyon" gibi bölümlerde insan fotoğrafı kullanmadık, bilinçli olarak (Ela bir kişi değil bir ürün, sahte bir "kurucu fotoğrafı" koymadık).

**Framer'a fotoğrafı nasıl yüklersin:**
1. Finder'da `public/ela.jpg` dosyasını bul (yukarıdaki yol).
2. Framer editöründe şablonun ilgili görsel katmanına (örn. hero/profil dairesi) tıkla.
3. Sağ panelde **Image → Upload** de, ya da dosyayı doğrudan katmanın üzerine sürükle-bırak yap.
4. Kırpma/konumlandırma için Framer'ın **Fill / Fit** ayarını "Fill" yap, dairesel maske istiyorsan katmanın **Radius**'unu %50 (veya "Full") yap.

Eğer template'te birden fazla fotoğraf alanı varsa (örn. "takım" ya da "vaka çalışması" görselleri gibi) ve elimizde tek fotoğraf yeterli değilse, iki seçenek var: (a) aynı fotoğrafı farklı kırpımlarla tekrar kullan, (b) yeni fotoğraf çekimi/üretimi planla. Şu an için tek fotoğrafla ilerleyip, template'in gerektirmediği fotoğraf alanlarını (örn. "kurucu portresi") ya kaldır ya da soyut bir görselle (gradient blob, ikon) değiştir.

---

## 4. Site Haritası (bölüm sırası)

1. Header (yüzen kapsül nav)
2. Hero
3. Marquee (kayan öne çıkan noktalar)
4. Hikaye — "Neden Ela?" (4 adım)
5. Hizmetler (kanal şeridi + 6 hizmet kartı)
6. Dev istatistik ("7/24")
7. Sektörler (6 sektör + sesli demo)
8. Misyon
9. Neden Ela (4 fark noktası)
10. Fiyatlandırma
11. SSS
12. İletişim formu
13. Footer

Framer şablonunda bölüm sayısı/sırası farklıysa, en yakın karşılığı bul: örn. şablonun "Projects" bölümüne bizim "Sektörler"i, "Testimonials" bölümüne bizim "Neden Ela" kartlarımızı, "About" bölümüne "Misyon"u yerleştir.

---

## 5. Bölüm İçerikleri

### 5.1 Header / Nav

- Logo: `ela`
- Nav linkleri: Hikaye, Hizmetler, Sektörler, Fiyatlandırma, İletişim
- Sağ üstte dil değiştirme (TR/EN) ve CTA butonu: **"Hemen Dene"**

### 5.2 Hero

- Dönen başlık (3 saniyede bir değişir), üç varyant:
  1. "Hiçbir aramayı kaçırmaz"
  2. "İnsan gibi konuşur"
  3. "Zamanınızı geri verir"
- Alt metin: *"Ela cevaplar. İnsan gibi konuşur, hiç yorulmaz, hiçbir fırsatı kaçırmaz."*
- Birincil CTA: **Hemen Dene**
- İkincil linkler: *Örnek dinle*, *İletişime geç*
- Görsel: Ela'nın dairesel fotoğrafı + üzerine bindirilmiş, daktilo efektiyle yazılan örnek müşteri soruları:
  - "Bu hafta sonu müsait odanız var mı?"
  - "Görüşme için randevu oluşturabilir miyiz?"
  - "İnşaat sektörü için 2+1 daire fiyatlarınızı öğrenebilir miyim?"
  - "Akşam 8 için 4 kişilik masa ayırabilir misiniz?"
  - "Saç kesimi için yarın uygun bir saatiniz var mı?"
- Yüzen rozet: **"7/24 — her aramada aynı enerji"**

### 5.3 Marquee (kayan şerit)

7/24 kesintisiz · İnsan gibi doğal · Anında cevap · Sıfır kaçan arama · Türkçe & İngilizce

### 5.4 Hikaye — "Neden Ela?" (4 adım, sıralı)

| # | Başlık | Açıklama |
|---|---|---|
| 1 | Karşınızda Ela | Şirketinizin 7/24 kesintisiz çalışan, hem sesli hem yazılı iletişim kurabilen akıllı yapay zeka asistanı. Müşterilerinizi insan kalitesinde karşılar, soruları saniyeler içinde yanıtlar. |
| 2 | Akıllı Rezervasyon Yönetimi | Otel aramalarında boş odaları ve tarihleri anında sorgular, rezervasyonları tamamlar. Restoranlar için masa uygunluğunu kontrol eder ve yer ayırtır. |
| 3 | Satış ve Ön Görüşme Asistanı | İnşaat projelerinizdeki daire tiplerini (2+1, 3+1) ve güncel fiyatları müşteriye aktarır. Satış ekibinizin araması için potansiyel müşterilerden telefon numaralarını ve taleplerini toplar. |
| 4 | Her Kanalda, Her An Aktif | Ela sadece telefon aramalarında değil; WhatsApp, Instagram ve sosyal medya platformlarınızda da yazılı olarak müşterilerinizle buluşur. Tüm kanalları tek merkezden yönetir. |

*(Bizim sitede bu 4 adım, çark gibi dairesel bir scroll animasyonuyla ilerliyor. Framer şablonunda böyle bir efekt yoksa, şablonun kendi "adım/timeline" bileşenine bu 4 satırı olduğu gibi yerleştirmen yeterli.)*

### 5.5 Hizmetler

**Kanal şeridi:** Telefon Hattı · WhatsApp · Instagram · Web Sitesi · Rezervasyon Sistemleri · CRM

**6 hizmet kartı:**

| Başlık | Açıklama |
|---|---|
| Sesli Arama Yönetimi | Gelen aramaları karşılar, insan gibi doğal bir sesle konuşur, hiç meşgul çalmaz. |
| Yazılı Mesaj Desteği | WhatsApp ve Instagram'dan gelen mesajlara anında, doğru tonda yanıt verir. |
| Rezervasyon Entegrasyonu | Mevcut rezervasyon veya takvim sisteminize bağlanır, uygunluğu gerçek zamanlı kontrol eder. |
| Satış Ön Değerlendirmesi | Potansiyel müşterinin ihtiyacını anlar, iletişim bilgilerini toplar, ekibinize aktarır. |
| Raporlama & Analiz | Her görüşmenin özetini çıkarır, haftalık performans raporunu ekibinize sunar. |
| Özel Senaryo Kurulumu | İşletmenizin diline ve akışına göre özelleştirilmiş konuşma senaryoları hazırlarız. |

### 5.6 Dev İstatistik

Büyük gösterge: **7/24** — *"her aramada aynı enerji"*

### 5.7 Sektörler

Başlık: *"Sektörünüzü seçin, Ela'yı dinleyin."* — Alt metin: *"Her sektör için gerçek bir çağrı örneği."*

Sektör kartları (her biri tıklanınca kısa bir sesli demo çalıyor): Butik oteller · Restoranlar · Klinikler · Kuaför & Güzellik · Avukatlık Büroları · Emlak Ofisleri

*Not: Demo ses dosyaları (`/public/demo-audio/*.mp3`) şu an projede fiziksel olarak yok, kod içinde referans var ama dosyalar eksik. Framer'a taşırken bu bölüme ses oynatıcı koyacaksan gerçek ses dosyalarını ayrıca hazırlamamız gerekiyor.*

### 5.8 Misyon

**Kicker:** Misyonumuz

**Başlık:** *"Müşterinizle gerçek bir insan gibi konuşan, hiç durmayan bir ekip arkadaşı."*

**Paragraf:** *"Ela'yı, işletmelerin en çok kaçırdığı fırsatı — cevapsız kalan aramaları ve mesajları — ortadan kaldırmak için kurduk. Amacımız yapay zekayı görünmez kılmak: müşterileriniz karşılarında bir yazılım değil, işini iyi yapan biriyle konuştuklarını hissetsin."*

**3 istatistik:**
- 7/24 — kesintisiz çalışma
- <3sn — ortalama yanıt süresi
- 2 dil — Türkçe & İngilizce

### 5.9 Neden Ela (4 fark noktası)

| Başlık | Açıklama |
|---|---|
| Hızlı kurulum | Görüşme sonrası genellikle 48 saat içinde canlıya alırız. |
| Doğal konuşma | Türkçe ve İngilizce'yi yerel aksanla, duraksamadan konuşur. |
| Sisteminize uyum sağlar | Mevcut rezervasyon, takvim ve CRM araçlarınızla entegre çalışır. |
| Şeffaf raporlama | Her görüşmenin dökümünü ve özetini ekibinizle paylaşırız. |

> Not: Bilinçli olarak sahte/uydurma müşteri testimonial'ı kullanmadık. Gerçek müşterilerimiz olduğunda bu bölümü (veya ayrı bir testimonial bölümünü) gerçek alıntılarla güncelleyebiliriz.

### 5.10 Fiyatlandırma

**Nasıl başlarsınız (3 adım, sıralı):**

1. **Demo dinleyin** — Sektörünüze uygun örnek bir görüşmeyi hemen dinleyin.
2. **Ekibimiz kurar** — Rezervasyon sisteminizle entegre eder, senaryoları sizinle birlikte kurgular.
3. **Ela devreye girer** — Aramalar ve mesajlar artık hiç kaçmaz, siz işinize odaklanırsınız.

**Paketler:**

| Paket | Fiyat | Açıklama | Öne çıkanlar |
|---|---|---|---|
| Başlangıç | **₺20.000 / ay** | Tek şube, tek kanal ile başlamak isteyen işletmeler için. | 1 telefon hattı · Sesli + yazılı destek · Aylık performans raporu · E-posta desteği |
| Kurumsal | **Özel Teklif** | Çoklu şube, çoklu kanal ve özel entegrasyon ihtiyacı olan işletmeler için. | Sınırsız hat/şube · Tüm kanallar · Özel senaryo kurulumu · Öncelikli destek |

*Not: Fiyat gerçek (₺20.000/ay), müşteriyle görüşülüp netleşene kadar site üzerinde küçük bir dipnotla "örnek/başlangıç fiyatı" ibaresi tutulması öneriliyor.*

### 5.11 SSS

| Soru | Cevap |
|---|---|
| Kurulum ne kadar sürer? | Çoğu işletme için 48 saat içinde canlıya alıyoruz. Karmaşık entegrasyonlarda bu süre birkaç güne çıkabilir. |
| Mevcut telefon hattımla çalışır mı? | Evet, mevcut numaranızı yönlendirerek ya da yeni bir hat tanımlayarak Ela'yı devreye alabiliriz. |
| Hangi dillerde konuşuyor? | Şu an Türkçe ve İngilizce'yi doğal aksanla konuşuyor, talebe göre yeni diller ekleyebiliyoruz. |
| Verilerimiz güvende mi? | Tüm görüşme kayıtları şifreli saklanır, yalnızca yetkilendirdiğiniz ekip üyeleri erişebilir. |
| İstediğim zaman iptal edebilir miyim? | Evet, aboneliğinizi istediğiniz an durdurabilir veya iptal edebilirsiniz. |
| Hangi sektörler için uygun? | Otel, restoran, klinik, kuaför, avukatlık ve emlak gibi randevu/rezervasyon odaklı her sektörde kullanılabiliyor. |

### 5.12 İletişim Formu

Başlık: *"Ela'yı işletmenizde deneyin"* — Alt metin: *"Bilgilerinizi bırakın, ekibimiz sizinle iletişime geçsin."*

Alanlar: İşletme adı (örn. "Deniz Manzara Otel") · Telefon · E-posta → Gönder butonu

### 5.13 Footer

`ela` — *"Ela — sesli rezervasyon asistanınız."* — © 2026 Ela

---

## 6. Framer'a Aktarırken Dikkat Edilecekler

- **Animasyonlar birebir taşınmaz.** Bizim sitede GSAP/ScrollTrigger ile yapılan çark dönüşü, blur-text reveal gibi efektler kod tarafında özel yazıldı. Framer şablonunun kendi hazır scroll-efektleri (genelde "Effects" panelinden "Appear", "Parallax", "Blur In" gibi hazır ayarlar) varsa onları kullanmak en pratik yol — bire bir aynı olması gerekmiyor, template'in kendi diliyle benzer hissi vermesi yeterli.
- **Metinleri olduğu gibi kopyala.** Yukarıdaki tablo/liste içerikleri doğrudan Framer'daki metin katmanlarına yapıştırılabilir; ekstra düzenlemeye gerek yok.
- **Eksik varlıklar:** Sektör demo ses dosyaları şu an yok — bu bölümü Framer'da kurarken ya ses oynatıcıyı geçici olarak gizle, ya da gerçek ses dosyalarını önce hazırla.
- **Tek fotoğraf var (`ela.jpg`).** Şablonda birden fazla görsel alanı varsa, karşılamayan alanları kaldır ya da soyut/gradient bir görselle doldur; gerçek insan fotoğrafı gerektiren "ekip/kurucu" tarzı alanlara sahte bir kişi fotoğrafı **koyma** — bu yanıltıcı olur.
- **Renk/font eşlemesi:** Şablonun global renk stillerini (Framer'da "Styles" panelinden) yukarıdaki hex kodlarıyla güncelle; başlık fontunu Fraunces, gövde fontunu Inter olarak ayarla.
