"use client";

import { ArrowRight } from "lucide-react";
import FlutedGlassShader from "../canvas/FlutedGlassShader";

export default function Hero() {
  return (
    // bg rengini kaldırdık, çünkü global.css'teki body background'u burayı otomatik dolduracak
    <section className="relative z-10 flex-1 flex items-end w-full min-h-screen overflow-hidden">
      
      {/* 3D WEBGL SHADER */}
      <FlutedGlassShader />
      
      {/* Sinematik Gren (Blend mode temaya göre otomatik uyum sağlar ama opacity ayarlanabilir) */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.04] dark:opacity-[0.06] mix-blend-multiply dark:mix-blend-overlay"
           style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png")' }}
      />

      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-20">
        <div className="w-full max-w-4xl">
          <p className="text-[13px] sm:text-[14px] text-gray-600 dark:text-gray-700 tracking-wider mb-5 sm:mb-8 font-mono uppercase">
            Medusa Global Studio
          </p>

          <h1 className="font-medium leading-[1.08] tracking-[-0.03em] text-black dark:text-white text-[clamp(2rem,6vw,4.5rem)] mb-6 transition-colors duration-500">
            We build, run and <br className="hidden sm:block" />
            grow digital businesses.
          </h1>

          <p className="text-gray-700 dark:text-gray-600 text-[16px] sm:text-[18px] max-w-2xl leading-relaxed font-light transition-colors duration-500">
            Markanızı dijital dünyada sıfırdan inşa ediyor, operasyonlarınızı pürüzsüzce yönetiyor ve veriye dayalı stratejilerle sürdürülebilir büyüme sağlıyoruz.
          </p>

          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
  <button 
    className="group flex items-center bg-[var(--brand-purple)] hover:bg-[var(--brand-purple)]/90 text-[var(--brand-cream)] text-[13px] sm:text-[14px] rounded-full pl-5 sm:pl-6 pr-2 py-2 gap-3 transition-all duration-300 border border-[var(--brand-gold)]/20 hover:border-[var(--brand-gold)]/50 shadow-lg shadow-[var(--brand-purple)]/30 hover:shadow-[var(--brand-purple)]/50 active:scale-[0.98]"
  >
    {/* Metin Animasyon Alanı */}
    <div className="relative h-[20px] overflow-hidden flex flex-col justify-start">
      <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
        <span className="h-[20px] leading-[20px] font-medium">Projeye Başla</span>
        <span className="h-[20px] leading-[20px] font-medium">Projeye Başla</span>
      </div>
    </div>

    {/* Sağ Ok İkon Yuvası */}
    <div className="bg-[var(--brand-cream)] rounded-full p-1.5 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--brand-purple)]" />
    </div>
  </button>
</div>
        </div>
      </div>
    </section>
  );
}