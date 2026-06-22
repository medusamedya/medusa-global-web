"use client";

import { Mouse, Activity, Target, Zap, Headphones } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Akıllı Veri Analizi",
    description: "Güncel verilere anlık erişerek markanız için daha hızlı ve stratejik kararlar alın.",
  },
  {
    icon: Target,
    title: "Performans Odaklı",
    description: "Hedef kitle eğilimlerini belirleyin ve verileri ölçülebilir gerçek sonuçlara dönüştürün.",
  },
  {
    icon: Zap,
    title: "Teknik Optimizasyon",
    description: "Kusursuz altyapı ve hız optimizasyonlarıyla dijital varlıklarınızı her an güçlü tutun.",
  },
  {
    icon: Headphones,
    title: "Kesintisiz Destek",
    description: "Sistemlerinize ince ayar yapmak ve büyümeyi sürdürmek için sürekli destek sağlıyoruz.",
  },
];

export default function Features() {
  return (
    <section className="relative w-full py-24 bg-[#08020F] overflow-hidden text-white">
      {/* Arka Plan Glow Efekti (Yukarıdan vuran mor/krem ışık) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-[1000px] h-[300px] bg-[var(--medusa-purple)] opacity-20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8">
        
        {/* Üst Merkez İkon (Mouse) */}
        <div className="flex justify-center mb-8">
          <div className="w-10 h-10 rounded-full border border-white/10 bg-black/40 backdrop-blur-sm flex items-center justify-center z-10">
            <Mouse className="w-5 h-5 text-[var(--medusa-cream)]" />
          </div>
        </div>

        {/* Dağılan Kesik Çizgiler (SVG) */}
        <div className="hidden md:block absolute top-[52px] left-0 w-full h-[100px] pointer-events-none z-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            fill="none"
          >
            {/* 1. Çizgi */}
            <path
              d="M 500 0 C 500 50, 125 40, 125 100"
              stroke="url(#line-gradient)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            {/* 2. Çizgi */}
            <path
              d="M 500 0 C 500 60, 375 50, 375 100"
              stroke="url(#line-gradient)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            {/* 3. Çizgi */}
            <path
              d="M 500 0 C 500 60, 625 50, 625 100"
              stroke="url(#line-gradient)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            {/* 4. Çizgi */}
            <path
              d="M 500 0 C 500 50, 875 40, 875 100"
              stroke="url(#line-gradient)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            
            {/* Çizgilerin uçlarında kaybolması için gradient maske */}
            <defs>
              <linearGradient id="line-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.2)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.05)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* 4'lü Grid Alanı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10 pt-4 md:pt-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              
              {/* İkon Kutusu - Gradient Arka Plan ve Yeni Renkler */}
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:-translate-y-2 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(92, 6, 140, 0.8) 0%, rgba(20, 5, 30, 0.9) 100%)', // Medusa Purple kullanımı
                  border: '1px solid rgba(201, 169, 126, 0.3)', // Medusa Gold kullanımı
                  boxShadow: '0 8px 32px rgba(92, 6, 140, 0.2)'
                }}
              >
                {/* İkonun arkasındaki hafif parlama (Krem Highlight) */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ background: 'var(--medusa-cream)' }}
                />
                <feature.icon className="w-6 h-6" style={{ color: 'var(--medusa-cream)' }} />
              </div>

              {/* İçerik */}
              <h3 className="text-[17px] font-medium text-white mb-3 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-[14px] text-gray-400 leading-relaxed font-light px-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}