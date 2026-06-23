"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// --- YARDIMCI BİLEŞEN: Manyetik Buton ---
// Farenin konumuna göre butonu hafifçe kendisine doğru çeken premium etkileşim
const MagneticButton = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    // Hassasiyeti ayarlıyoruz (0.2)
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};

// --- YARDIMCI BİLEŞEN: Fosforlu Kalem Efekti (Highlight) ---
const HighlightText = ({ text, delay = 0 }: { text: string; delay?: number }) => (
  <span className="relative inline-block whitespace-nowrap">
    <span className="relative z-10 text-[var(--text-main)] font-semibold">{text}</span>
    <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
      <motion.path
        // Marker kalemi gibi hafif kavisli bir alt çizgi
        d="M -2 80 Q 50 65 102 85"
        className="stroke-[var(--brand-gold)]"
        strokeWidth="18"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.4 }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      />
    </svg>
  </span>
);

// --- YARDIMCI BİLEŞEN: Üstünü Çizme Efekti (Strikethrough) ---
const StrikeText = ({ text, delay = 0 }: { text: string; delay?: number }) => (
  <span className="relative inline-block whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity duration-300">
    <span className="relative z-0 text-[var(--text-main)] italic">{text}</span>
    <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
      <motion.path
        // Agresif, el yazısı gibi dalgalı bir üst çizgi
        d="M -5 55 Q 30 35 60 60 T 105 45"
        className="stroke-[var(--brand-purple)]"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      />
    </svg>
  </span>
);

export default function FinalCta() {
  return (
    <section className="relative w-full min-h-screen py-32 md:py-48 bg-[var(--bg-base)] transition-colors duration-500 overflow-hidden flex flex-col justify-center">
      
      {/* Arka Plan Ortam Işığı */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[var(--brand-purple)]/5 dark:bg-[var(--brand-purple)]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 w-full flex flex-col items-center sm:items-start text-center sm:text-left">
        <div className="group relative inline-flex items-center justify-center gap-2.5 px-5 py-2 rounded-full border border-[var(--brand-purple)]/20 dark:border-[var(--brand-gold)]/20 bg-[var(--brand-purple)]/5 dark:bg-[var(--brand-gold)]/5 backdrop-blur-md transition-all duration-500 hover:bg-[var(--brand-purple)]/10 dark:hover:bg-[var(--brand-gold)]/10 hover:border-[var(--brand-purple)]/40 dark:hover:border-[var(--brand-gold)]/40 mb-6 cursor-default shadow-[0_0_15px_rgba(92,6,140,0.05)] dark:shadow-[0_0_15px_rgba(201,169,126,0.05)] overflow-hidden">
  
            {/* Metin - Krem Temada Mor, Dark Temada Gold */}
            <span className="text-[var(--brand-purple)] dark:text-[var(--brand-gold)] text-[11px] font-bold tracking-[0.25em] uppercase mt-[1px] relative z-10 transition-colors duration-500">
                Manifesto
            </span>

            {/* Hover anında içten geçen Krem/Gold Işık Yansıması */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-[var(--brand-cream)]/20 dark:via-[var(--brand-gold)]/20 to-transparent pointer-events-none z-0"></div>
            </div>
        {/* === KİNETİK MANİFESTO === */}
        <div className="flex flex-col gap-10 md:gap-14 text-[clamp(2rem,5vw,4.5rem)] font-medium tracking-tight leading-[1.1] mb-24 w-full">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <HighlightText text="Başarı hikayesi" delay={0.4} /> anlatmıyoruz. <br className="hidden sm:block" />
            <span className="text-2xl md:text-4xl mt-4 block">
              <StrikeText text="Çoğu yalandır." delay={1.2} />
            </span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HighlightText text="Veriyi okuruz," delay={0.6} /> <StrikeText text="sezgiyi değil." delay={1.4} />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <HighlightText text="Markayı kurarız," delay={0.8} /> <StrikeText text="hayal değil." delay={1.6} />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <HighlightText text="İş ortağı oluruz," delay={1.0} /> <StrikeText text="satıcı değil." delay={1.8} />
          </motion.div>

        </div>

        {/* === ALT AÇIKLAMA VE BUTON (Final Vuruş) === */}
        <div className="w-full flex flex-col xl:flex-row items-center xl:items-end justify-between gap-12 border-t border-[var(--border-color)] pt-12">
          
          {/* Manifesto Alt Metni */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2.0 }}
            className="max-w-2xl text-[var(--text-muted)] text-[16px] md:text-[20px] font-light leading-relaxed italic"
          >
            Kendi dört dijital ürünümüzü kurarken öğrendiklerimiz var. <br className="hidden sm:block" />
            <strong className="text-[var(--text-main)] font-medium">O dersleri sizin markanıza taşıyoruz.</strong>
          </motion.div>

          {/* Magnetic CTA Butonu */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 2.2, type: "spring" }}
          >
            <MagneticButton>
              <button className="group relative flex items-center justify-center gap-4 bg-[var(--text-main)] text-[var(--bg-base)] px-10 py-5 rounded-full font-bold text-lg overflow-hidden transition-transform hover:scale-105 shadow-[0_20px_40px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_40px_rgba(255,255,255,0.05)]">
                {/* Buton İçi Parlama Efekti */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                
                <span className="relative z-10 tracking-wide">Projeye Başla</span>
                
                <div className="relative z-10 w-10 h-10 rounded-full bg-[var(--bg-base)]/20 flex items-center justify-center group-hover:bg-[var(--brand-spark)] group-hover:text-black transition-colors duration-300">
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </button>
            </MagneticButton>
          </motion.div>
          
        </div>
      </div>

      {/* Shimmer (Parlama) Animasyonu İçin Global CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />

    </section>
  );
}