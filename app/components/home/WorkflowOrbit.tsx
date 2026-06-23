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

  // Fiziksel bir akış hissi için Spring efekti
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  // Animasyonu iki faza ayırıyoruz:
  // 1. Faz (0 -> 0.85): Ana çizgi sol dışarıdan gelir, merkeze iner.
  // 2. Faz (0.85 -> 1.0): Çizginin ucu tam merkeze ulaştığında, M harfi çizilmeye başlar. (Bütünlük hissi)
  const lineProgress = useTransform(smoothProgress, [0, 0.85], [0, 1]);
  const mProgress = useTransform(smoothProgress, [0.85, 1], [0, 1]);

  return (
    <section 
      ref={containerRef} 
      // Görseldeki premium krem/papirüs tonları ve özel magenta/mor marka rengi
      className="relative w-full py-32 overflow-hidden bg-[#F4F1EA]"
      style={{
        '--brand-purple': '#6A2B86', 
        '--text-main': '#333333',
        '--border-color': 'rgba(106, 43, 134, 0.12)' 
      } as React.CSSProperties}
    >
      
      {/* --- FİBER ÇİZGİ KATMANI (Sol Ekran Kenarından Merkeze) --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="none"
        >
          {/* Sönük Kılavuz Çizgisi */}
          <path
            d="M 0 10 L 8 10 Q 10 10, 10 12 L 10 90 Q 10 92, 12 92 L 50 92"
            className="stroke-[var(--border-color)]"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
          {/* Canlı Kaydırma Çizgisi */}
          <motion.path
            d="M 0 10 L 8 10 Q 10 10, 10 12 L 10 90 Q 10 92, 12 92 L 50 92"
            className="stroke-[var(--brand-purple)]"
            strokeWidth="2"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            style={{ pathLength: lineProgress }}
          />
        </svg>
      </div>

      {/* --- "M" İMZA & SARKAÇ SİSTEMİ --- */}
      {/* Mükemmel Mühendislik: Bu div'in sol-üst (0,0) noktası, ana çizginin (50, 92) noktasıyla MİLİMETRİK kesişir. 
        M harfinin çizimi (0,0)'dan başladığı için tek ve kesintisiz bir ip gibi görünür. 
      */}
      <motion.div
        className="absolute w-12 h-12 pointer-events-auto cursor-pointer z-20"
        style={{
          left: "50%",
          top: "92%",
          transformOrigin: "0px 0px" // Mafsal noktası: Sarkaç tam çizgiye bağlandığı yerden sallanır!
        }}
        whileHover={{
          rotate: [0, 18, -12, 8, -4, 2, 0], // Fiziksel Sönümleyici (Pendulum) Efekti
          transition: { duration: 1.5, ease: "easeInOut" }
        }}
      >
        <svg 
          viewBox="0 0 40 40" 
          className="w-10 h-10 text-[var(--brand-purple)] overflow-visible"
        >
          <motion.path
            // Çizim rotası: Sol-üstten başlar, aşağı iner, geri yukarı çıkıp M'yi çizer.
            d="M 0 0 L 0 32 L 0 0 L 16 20 L 32 0 L 32 32"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ pathLength: mProgress }} // Çizgi geldikten sonra M çizilmeye başlar
          />
        </svg>
      </motion.div>


      {/* --- ANA İÇERİK (Görseldeki Minimalist Liste Dizilimi) --- */}
      <div className="relative z-10 max-w-[1400px] mx-auto pl-[15%] md:pl-[12%] pr-[5%] md:pr-[8%]">
        <div className="flex flex-col w-full border-t border-[var(--border-color)]">
          {workflowData.map((item) => (
            <div 
              key={item.id} 
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 py-10 md:py-14 border-b border-[var(--border-color)] group hover:bg-white/20 transition-colors duration-500"
            >
              
              {/* Numara Alanı */}
              <div className="md:col-span-1 flex items-start mt-1">
                <span className="font-mono text-[var(--brand-purple)] font-bold tracking-widest text-sm">
                  {item.id}
                </span>
              </div>

              {/* Başlık Alanı */}
              <div className="md:col-span-3">
                <h3 className="font-serif italic text-3xl md:text-4xl text-[var(--brand-purple)] tracking-wide">
                  {item.title}
                </h3>
              </div>

              {/* Açıklama Alanı */}
              <div className="md:col-span-5 flex items-center">
                <p className="text-[var(--text-main)] text-[15px] md:text-[16px] leading-relaxed opacity-85 font-medium">
                  {item.desc}
                </p>
              </div>

              {/* Çıktı / Süre Alanı */}
              <div className="md:col-span-3 flex flex-col items-start md:items-end justify-center gap-1 mt-4 md:mt-0">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em]">
                    {item.durationLabel}:
                  </span>
                  <span className="text-gray-600 text-[11px] font-mono tracking-wider">
                    {item.duration}
                  </span>
                </div>
                <div className="text-[var(--brand-purple)] text-[11px] font-bold tracking-[0.15em] uppercase">
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