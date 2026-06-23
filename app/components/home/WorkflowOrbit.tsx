"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const workflowData = [
  {
    id: "01",
    title: "Teşhis",
    desc: "Marka, pazar, rekabet ve mevcut durum analizi. Eksiklikler ve fırsatlar belgelenir. Boş hayallere değil, somut tabloya dayanırız.",
    durationLabel: "SÜRE",
    duration: "2 HAFTA",
    output: "BRİEF RAPORU",
  },
  {
    id: "02",
    title: "Strateji",
    desc: "Konumlandırma, hedef kitle, mesaj sistemi ve büyüme tezleri belirlenir. Hangi kanallar, hangi sıra, hangi öncelikle, net.",
    durationLabel: "SÜRE",
    duration: "2 HAFTA",
    output: "12 HAFTALIK YOL HARİTASI",
  },
  {
    id: "03",
    title: "Kurulum",
    desc: "Web, CRM, içerik mimarisi, reklam altyapısı, ölçüm sistemleri. Operasyona geçmeden önce bütün altyapı kurulur ve test edilir.",
    durationLabel: "SÜRE",
    duration: "4 HAFTA",
    output: "ÇALIŞAN SİSTEM",
  },
  {
    id: "04",
    title: "Operasyon",
    desc: "Haftalık üretim, kampanya yönetimi, içerik takvimi, satış akışları. Sabit ekip, sabit takvim. Düzensiz işler yapmayız.",
    durationLabel: "SÜRE",
    duration: "DEVAMLI",
    output: "HAFTALIK RİTİM",
  },
  {
    id: "05",
    title: "Büyüme",
    desc: "Aylık raporlama, çeyreklik strateji revizyonu, sürekli testler. Marka her çeyrek bir basamak ileri gider.",
    durationLabel: "SÜRE",
    duration: "ÇEYREKLİK",
    output: "ÖLÇÜLEN BÜYÜME",
  },
];

export default function PremiumWorkflow() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Sayfa kaydırma oranını izliyoruz
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end 90%"],
  });

  // Fiziksel ve pürüzsüz bir akış hissi için Spring
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  // Animasyonu iki faza ayırıyoruz:
  // 1. Faz (0 -> 0.85): Ana çizgi sol kenardan yılan gibi süzülür, en altta merkeze kıvrılır.
  // 2. Faz (0.85 -> 1.0): Çizginin ucu tam merkeze ulaştığında, "M" harfi çizilmeye başlar.
  const lineProgress = useTransform(smoothProgress, [0, 0.85], [0, 1]);
  const mProgress = useTransform(smoothProgress, [0.85, 1], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-32 overflow-hidden bg-[var(--bg-base)] transition-colors duration-500"
    >
      
      {/* --- TEK PARÇA YILAN ÇİZGİSİ KATMANI --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="none"
        >
          <motion.path
            // M 5 0: Sol üstten %5 boşlukla başla
            // C 10 20, 2 40, 5 60: Yazılara çarpmadan (max %10) hafif yılan kıvrımı (S) çiz
            // C 8 80, 20 92, 50 92: En alta gelince sağa (merkeze) doğru mükemmel bir kavis yap
            d="M 5 0 C 10 20, 2 40, 5 60 C 8 80, 20 92, 50 92"
            className="stroke-[var(--brand-purple)] dark:stroke-[var(--brand-gold)] "
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            style={{ pathLength: lineProgress }} // Çizgi kaydırdıkça uzar
          />
        </svg>
      </div>

      {/* --- "M" İMZA & SARKAÇ SİSTEMİ --- */}
      <motion.div
        className="absolute w-16 h-16 pointer-events-auto cursor-pointer z-50"
        style={{
          left: "50%",
          top: "92%",
          transformOrigin: "0px 0px" // Mafsal noktası tam 50,92 (Çizginin ucunun bittiği yer)
        }}
        whileHover={{
          rotate: [0, 18, -12, 8, -4, 2, 0], // Fiziksel Sönümleyici (Pendulum) Efekti
          transition: { duration: 1.5, ease: "easeInOut" }
        }}
      >
        <svg
          viewBox="0 0 40 40"
          className="w-16 h-16 text-[var(--brand-purple)] dark:text-[var(--brand-gold)] overflow-visible transition-colors duration-500"
        >
          <motion.path
            d="M 0 0 L 0 32 L 0 0 L 16 20 L 32 0 L 32 32"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ pathLength: mProgress }} // Çizgi geldikten sonra harf çizilir
          />
        </svg>
      </motion.div>

      {/* --- ANA İÇERİK (Minimalist Liste Dizilimi) --- */}
      {/* Sol boşluğu (pl-[15%]) yılan çizgisine yer bırakmak için koruyoruz */}
      <div className="relative z-10 max-w-[1400px] mx-auto pl-[15%] md:pl-[12%] pr-[5%] md:pr-[8%] pb-16">
        <div className="group relative inline-flex items-center justify-center gap-2.5 px-5 py-2 rounded-full border border-[var(--brand-purple)]/20 dark:border-[var(--brand-gold)]/20 bg-[var(--brand-purple)]/5 dark:bg-[var(--brand-gold)]/5 backdrop-blur-md transition-all duration-500 hover:bg-[var(--brand-purple)]/10 dark:hover:bg-[var(--brand-gold)]/10 hover:border-[var(--brand-purple)]/40 dark:hover:border-[var(--brand-gold)]/40 mb-6 cursor-default shadow-[0_0_15px_rgba(92,6,140,0.05)] dark:shadow-[0_0_15px_rgba(201,169,126,0.05)] overflow-hidden">
  
            {/* Metin - Krem Temada Mor, Dark Temada Gold */}
            <span className="text-[var(--brand-purple)] dark:text-[var(--brand-gold)] text-[11px] font-bold tracking-[0.25em] uppercase mt-[1px] relative z-10 transition-colors duration-500">
                5 Adımda Büyüme
            </span>

            {/* Hover anında içten geçen Krem/Gold Işık Yansıması */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-[var(--brand-cream)]/20 dark:via-[var(--brand-gold)]/20 to-transparent pointer-events-none z-0"></div>
            </div>
        <div className="flex flex-col w-full border-t border-[var(--border-color)] transition-colors duration-500">
          {workflowData.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 py-10 md:py-14 border-b border-[var(--border-color)] group hover:bg-[var(--text-main)]/5 transition-all duration-500"
            >
              
              {/* Numara Alanı */}
              <div className="md:col-span-1 flex items-start mt-1">
                <span className="font-mono text-[var(--brand-purple)] dark:text-[var(--brand-gold)] font-bold tracking-widest text-sm drop-shadow-sm transition-colors duration-500">
                  {item.id}
                </span>
              </div>

              {/* Başlık Alanı */}
              <div className="md:col-span-3">
                <h3 className="font-serif italic text-3xl md:text-4xl text-[var(--brand-purple)] dark:text-[var(--brand-gold)] tracking-wide drop-shadow-sm transition-colors duration-500">
                  {item.title}
                </h3>
              </div>

              {/* Açıklama Alanı */}
              <div className="md:col-span-5 flex items-center">
                <p className="text-[var(--text-main)] text-[15px] md:text-[16px] leading-relaxed opacity-85 font-light transition-colors duration-500">
                  {item.desc}
                </p>
              </div>

              {/* Çıktı / Süre Alanı */}
              <div className="md:col-span-3 flex flex-col items-start md:items-end justify-center gap-1.5 mt-4 md:mt-0">
                <div className="flex items-center gap-2">
                  <span className="text-[var(--text-muted)] text-[10px] uppercase tracking-[0.2em] transition-colors duration-500">
                    {item.durationLabel}:
                  </span>
                  <span className="text-[var(--text-main)] opacity-80 text-[11px] font-mono tracking-wider transition-colors duration-500">
                    {item.duration}
                  </span>
                </div>
                <div className="text-[var(--brand-purple)] dark:text-[var(--brand-gold)] text-[11px] font-bold tracking-[0.15em] uppercase transition-colors duration-500">
                  {item.output}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}