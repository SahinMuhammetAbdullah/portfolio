---
# BENZERSİZ PROJE KİMLİĞİ: 
# Bu ID, projenin farklı dillerdeki versiyonlarını birbirine bağlar.
# Her iki dildeki .md dosyasında da AYNI olmalıdır.
# Küçük harf, rakam ve tire (-) kullanın. Boşluk veya özel karakter kullanmaktan kaçının.
id: e-commerce-platform 

# SIRALAMA:
# Projelerin ana sayfada hangi sırada görüneceğini belirler (isteğe bağlı).
# Küçük sayılar daha önce gelir.
order: 1

# BAŞLIK (Dil Spesifik):
# Projenin bu dildeki başlığı. Modal penceresinde ve proje kartında görünür.
title: "E-Commerce Platform"

# KISA AÇIKLAMA (Dil Spesifik):
# Proje kartında görünecek kısa, bir veya iki cümlelik özet.
short_description: "A full-featured online shopping platform developed with modern React and Node.js technologies, offering a seamless user experience."

# ETİKETLER (Dil Spesifik olabilir veya ortak tutulabilir):
# Projede kullanılan ana teknolojiler veya anahtar kelimeler. 
# Proje kartında ve modalda gösterilebilir.
tags: ["React", "Node.js", "MongoDB", "TypeScript", "Express.js", "Stripe"]

# PROJE KARTI GÖRSEL AYARLARI (Kapak resmi yoksa kullanılır):
image_gradient_from: "ctp-blue"   # Renk geçişinin başlangıç rengi (Tailwind renk sınıfı)
image_gradient_to: "ctp-sapphire" # Renk geçişinin bitiş rengi

# PROJE KARTI İKONU:
# Kapak resmi yoksa veya kapak resminin üzerinde küçük bir ikon olarak gösterilir.
# Font Awesome sınıfını kullanın.
icon_class: "fas fa-shopping-cart"

# KAPAK GÖRSELİ (İsteğe Bağlı):
# Proje kartında gösterilecek ana görsel. Eğer bu alan varsa, image_gradient_* alanları kullanılmaz.
# Yol, projenizin kök dizinine göre olmalı ve başında / olmalı.
cover_image: "/assets/images/projects/ecommerce-cover.png" # 1920*960 pixel

# LİNKLER:
github_url: "https://github.com/SahinMuhametAbdullah/portfolio-site" # Projenin GitHub deposu (varsa)
live_url: "https://github.com/SahinMuhametAbdullah/portfolio-site" # Projenin canlı demo adresi (varsa)

layout: default
lang: tr
---
# Test
## Proje Hakkında

Bu kısımda projenizin **detaylı Türkçe açıklamasını** yapacaksınız. Standart Markdown formatını kullanabilirsiniz.

E-ticaret platformumuz, kesintisiz ve modern bir online alışveriş deneyimi sunmak üzere tasarlandı. Temel hedefler arasında kullanıcı dostu bir arayüz, güçlü bir arka plan altyapısı ve güvenli işlem süreçleri yer alıyordu. Büyüyen ürün kataloglarını ve kullanıcı tabanlarını desteklemek için ölçeklenebilirliğe odaklandık.

![Ana Sayfa Ekran Görüntüsü]({{ '/assets/images/projects/ecommerce-cover.png' | relative_url }})
*<center><small>Şek. 1: Öne çıkan ürünleri gösteren ana giriş sayfası.</small></center>*

Platform kullanıcılara şunları sağlar:
- Ürün kategorilerine ve tekil ürünlere göz atma.
- Resimler, açıklamalar ve yorumlar dahil olmak üzere detaylı ürün bilgilerini görüntüleme.
- Ürünleri alışveriş sepetine ekleme ve sepet içeriğini yönetme.
- Güvenli, çok adımlı bir ödeme sürecinden geçme.
- Kullanıcı hesabını, sipariş geçmişini ve kayıtlı adreslerini yönetme.

### Özellikler

*   **Duyarlı Tasarım:** Masaüstü, tablet ve mobil cihazlarda tam erişilebilirlik.
*   **Kullanıcı Doğrulama:** Güvenli kayıt ve giriş işlevselliği.
*   **Ürün Yönetimi:** Ürün ekleme, düzenleme ve silme için yönetici arayüzü.
*   **Arama ve Filtreleme:** Fiyat, kategori vb. için filtrelerle gelişmiş arama yetenekleri.
*   **Alışveriş Sepeti ve Ödeme:** Sezgisel sepet yönetimi ve ödemeler için Stripe entegrasyonu.
*   **Sipariş Yönetimi:** Kullanıcılar sipariş geçmişlerini görüntüleyebilir; yöneticiler siparişleri yönetebilir.
*   **İstek Listesi İşlevselliği:** Kullanıcılar ürünleri daha sonra için kaydedebilir.

![Yönetici Paneli Ekran Görüntüsü]({{ '/assets/images/projects/ecommerce-cover.png' | relative_url }})
*<center><small>Şek. 2: Site istatistiklerini ve siparişleri yönetmek için yönetici paneli.</small></center>*

#### Teknik Detaylar

Proje, bazı varyasyonlarla MERN yığını kullanılarak oluşturuldu:

*   **Ön Yüz (Frontend):** React.js (Vite ile), TypeScript, stil için Tailwind CSS ve durum yönetimi için Redux Toolkit.
*   **Arka Yüz (Backend):** Node.js ve Express.js framework'ü, RESTful API uygulanarak.
*   **Veritabanı:** Ürün, kullanıcı ve sipariş verileri için MongoDB Atlas (bulut tabanlı).
*   **Doğrulama (Authentication):** Güvenli API erişimi için JWT (JSON Web Tokens).
*   **Ödeme Entegrasyonu:** Kredi kartı ödemelerini işlemek için Stripe API.
*   **Dağıtım (Deployment):** Ön yüz Vercel'de, Arka yüz Render'da (veya Heroku).

Bu proje, tam yığın web geliştirme, API tasarımı ve e-ticaret en iyi uygulamaları konularındaki yeterliliği göstermektedir.

##### deneme
###### deneme