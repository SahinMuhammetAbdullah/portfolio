// =============================================================================
// ANA JAVASCRIPT DOSYASI
// Bu script, tüm sayfa yüklendikten sonra çalışır ve genel UI etkileşimlerini yönetir.
// =============================================================================

// Tüm kodumuzu bu ana fonksiyonun içine alarak değişkenlerin çakışmasını önlüyoruz.
function initializePageInteractions() {

    // -----------------------------------------------------------------------------
    // MOBİL MENÜ MANTIĞI
    // -----------------------------------------------------------------------------
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuBtn && mobileMenu) {
        const mobileNavLinks = mobileMenu.querySelectorAll('a.mobile-nav-link');

        // Hamburger butonuna tıklandığında menüyü aç/kapat
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Menü içindeki bir linke tıklandığında menüyü otomatik olarak kapat
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Sadece sayfa içi linklere tıklandığında kapat,
                // çünkü diğer linkler zaten sayfayı yenileyecektir.
                if (link.getAttribute('href').startsWith('#')) {
                    mobileMenu.classList.add('hidden');
                }
            });
        });
    }

    // -----------------------------------------------------------------------------
    // KAYDIRMA SIRASINDA NAVİGASYON ÇUBUĞU ARKA PLAN DEĞİŞİMİ
    // -----------------------------------------------------------------------------
    const navbar = document.querySelector('nav.fixed');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) { // Daha hassas bir geçiş için 50px
                navbar.classList.add('bg-ctp-crust'); // Daha belirgin bir renk
                navbar.classList.remove('bg-ctp-base/95');
            } else {
                navbar.classList.add('bg-ctp-base/95');
                navbar.classList.remove('bg-ctp-crust');
            }
        });
    }
    
    // -----------------------------------------------------------------------------
    // SAYFA İÇİ LİNKLER İÇİN YUMUŞAK KAYDIRMA (SMOOTH SCROLL)
    // -----------------------------------------------------------------------------
    document.body.addEventListener('click', function(event) {
        const link = event.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href');
        // Sadece '#' ile başlayan linkleri hedef al, tema değiştiriciyi hariç tut
        if (href && href.startsWith('#') && href.length > 1 && !link.closest('[id^="theme-switcher-container"]')) {
            try {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    event.preventDefault(); // Varsayılan atlama davranışını engelle
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } catch (e) {
                console.warn(`Smooth scroll hedefi bulunamadı: ${href}`);
            }
        }
    });

}

// Bu en güvenli yöntemdir: HTML yapısı tamamen hazır olduğunda script'i çalıştır.
document.addEventListener('DOMContentLoaded', initializePageInteractions);