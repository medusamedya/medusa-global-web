"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";

const stackData = [
  {
    step: "HAT 01",
    category: "BRANDING",
    title: "Branding",
    subtitle: "Markanızın sesi, görüntüsü, duruşu.",
    items: [
      "Kurumsal kimlik & logo tasarımı",
      "Marka konumlandırma",
      "Marka yönetimi",
      "Grafik & katalog çalışmaları",
      "Web sitesi tasarımı",
    ],
  },
  {
    step: "HAT 02",
    category: "DİJİTAL PAZARLAMA",
    title: "Dijital Pazarlama",
    subtitle: "Doğru kişiye ulaşmanın yolu.",
    items: [
      "Sosyal medya pazarlaması",
      "Google Ads & Meta reklam kampanyaları",
      "SEO & İçerik pazarlaması",
      "Dijital pazarlama stratejileri",
      "E-ticaret tabanlı web siteleri",
    ],
  },
  {
    step: "HAT 03",
    category: "PRODÜKSİYON",
    title: "Prodüksiyon",
    subtitle: "Markanızın görüntüsü, hikayesi.",
    items: [
      "Reklam & tanıtım filmleri",
      "Kurumsal & ekip çekimleri",
      "Belgesel & film prodüksiyonu",
      "Ürün çekimleri",
      "Influencer & etkinlik çekimleri",
    ],
  },
];

export default function StackedServices() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".stacked-card");

      // 1. kart dışındakileri %120 aşağıya (tamamen görünmez alana) itiyoruz.
      gsap.set(cards.slice(1), { yPercent: 120 });

      // Tüm section'ı ekrana kilitliyoruz (PIN)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top", 
          // GARANTİLİ KİLİT SÜRESİ: Section yüksekliğinin %250'si kadar scroll edilene kadar ekran donar!
          end: "+=250%", 
          pin: true, 
          scrub: 1, 
          pinSpacing: true, // Altındaki sectionların üstüne binmesini engeller
        },
      });

      // Kartların üst üste binme animasyonu
      cards.forEach((card, index) => {
        if (index === 0) return;

        tl.to(
          cards[index - 1],
          {
            scale: 0.92,
            opacity: 0.25, 
            yPercent: -10,
            ease: "none",
          },
          `step${index}`
        );

        tl.to(
          card,
          {
            yPercent: 0,
            ease: "none",
          },
          `step${index}`
        );
      });

      // Sağdaki Scroll Progress Bar Animasyonu
      gsap.to(progressRef.current, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=250%", // Timeline ile aynı süre
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    // overflow-hidden KESİNLİKLE kaldırıldı, yoksa GSAP Pin Spacer bozulur.
    <section 
      ref={sectionRef} 
      className="relative w-full h-screen bg-[var(--bg-base)] text-[var(--text-main)] flex flex-col justify-center transition-colors duration-500"
    >
      <div className="max-w-[1200px] w-full mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="group relative inline-flex items-center justify-center gap-2.5 px-5 py-2 rounded-full border border-[var(--brand-purple)]/20 dark:border-[var(--brand-gold)]/20 bg-[var(--brand-purple)]/5 dark:bg-[var(--brand-gold)]/5 backdrop-blur-md transition-all duration-500 hover:bg-[var(--brand-purple)]/10 dark:hover:bg-[var(--brand-gold)]/10 hover:border-[var(--brand-purple)]/40 dark:hover:border-[var(--brand-gold)]/40 mb-6 cursor-default shadow-[0_0_15px_rgba(92,6,140,0.05)] dark:shadow-[0_0_15px_rgba(201,169,126,0.05)] overflow-hidden">
  
            {/* Metin - Krem Temada Mor, Dark Temada Gold */}
            <span className="text-[var(--brand-purple)] dark:text-[var(--brand-gold)] text-[11px] font-bold tracking-[0.25em] uppercase mt-[1px] relative z-10 transition-colors duration-500">
                Hızlandırma
            </span>

            {/* Hover anında içten geçen Krem/Gold Işık Yansıması */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-[var(--brand-cream)]/20 dark:via-[var(--brand-gold)]/20 to-transparent pointer-events-none z-0"></div>
            </div>
        {/* Üst Kısım: Başlık ve Açıklama */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 mb-12 items-start">
          <h2 className="flex-1 text-[clamp(2.2rem,4vw,4rem)] font-medium leading-[1.05] tracking-tight">
            <span className="text-[var(--brand-purple)] drop-shadow-sm">Hızlandırma,</span> <br />
            üç hatta <br />
            birden çalışır.
          </h2>
          <div className="flex-1 lg:pt-4 text-[var(--text-main)] opacity-90 text-[16px] sm:text-[18px] leading-relaxed font-light">
            <p>
              Bir markayı büyütmek için üç şeyin doğru olması gerekir:{" "}
              <strong className="font-semibold text-[var(--brand-spark)]">
                kim olduğunuzu doğru söylemek, doğru kişiye söylemek, doğru içerikle söylemek.
              </strong>{" "}
              Üçü ayrı ekiplerde değil, aynı çatı altında beraber çalışan ekiplerimizle sağlanıyor.
            </p>
          </div>
        </div>

        {/* GSAP STACKING CARDS KAPSAYICISI */}
        <div className="relative w-full h-[55vh] md:h-[50vh] max-w-[1000px] mx-auto perspective-[2000px]">
          {/* Sadece kartların kendi alanında taşmaları gizliyoruz */}
          <div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none" style={{ zIndex: 0 }} />
          
          {stackData.map((data, index) => (
            <div
              key={index}
              className="stacked-card absolute top-0 left-0 w-full h-full transform-origin-top will-change-transform"
              style={{ zIndex: index + 10 }}
            >
              <div className="w-full h-full bg-[var(--bg-header)]/95 backdrop-blur-3xl border-t border-l border-[var(--border-color)] rounded-[2rem] p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3),inset_0_2px_20px_rgba(255,255,255,0.05)] transition-colors duration-500 flex flex-col justify-center">
                
                {/* Kart Üst (Header) */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[var(--border-color)] pb-6 mb-6 gap-4">
                  <div>
                    <p className="text-[13px] font-mono tracking-widest text-[var(--brand-gold)] font-bold mb-3">
                      {data.step} / {data.category}
                    </p>
                    <h3 className="text-3xl sm:text-4xl font-semibold text-[var(--text-main)] mb-2 tracking-tight">
                      {data.title}
                    </h3>
                    <p className="text-[var(--text-main)] opacity-70 italic text-lg font-light">
                      {data.subtitle}
                    </p>
                  </div>
                  <div className="hidden sm:block text-7xl font-bold text-[var(--text-main)] opacity-[0.06] leading-none select-none">
                    0{index + 1}
                  </div>
                </div>

                {/* Kart Listesi */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {data.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-4 group cursor-default">
                      <div className="w-6 h-6 rounded-full bg-[var(--bg-base)] border border-[var(--border-color)] flex items-center justify-center group-hover:border-[var(--brand-spark)] group-hover:bg-[var(--brand-spark)] transition-all duration-300 shadow-sm">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--text-main)] opacity-50 group-hover:text-black group-hover:opacity-100 transition-all" />
                      </div>
                      <span className="text-[15px] font-medium text-[var(--text-main)] opacity-85 group-hover:opacity-100 group-hover:text-[var(--brand-spark)] transition-all duration-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SAĞ TARAFTAKİ SCROLL İNDİKATÖRÜ (VISUAL TRACKER) */}
      <div className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-50">
        <span className="text-[10px] font-mono text-[var(--text-main)] tracking-widest rotate-90 mb-6 opacity-60">KAYDIR</span>
        <div className="relative w-1 h-[25vh] bg-[var(--border-color)] rounded-full overflow-hidden">
          <div ref={progressRef} className="absolute top-0 left-0 w-full h-0 bg-[var(--brand-spark)] shadow-[0_0_15px_var(--brand-spark)] rounded-full" />
        </div>
      </div>
    </section>
  );
}