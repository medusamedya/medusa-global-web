"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "E-Ticaret Altyapısı",
    desc: "Ölçeklenebilir, hızlı ve yüksek dönüşümlü modern dijital mağazalar.",
    img: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=400&h=300",
  },
  {
    id: 2,
    title: "Kurumsal Web",
    desc: "Marka kimliğinizi yansıtan, premium ve ultra hızlı dijital vitrinler.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=300",
  },
  {
    id: 3,
    title: "UI/UX Tasarım",
    desc: "Kullanıcı odaklı, akıcı ve büyüleyici interaktif arayüz tasarımları.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=400&h=300",
  },
  {
    id: 4,
    title: "Performans Pazarlama",
    desc: "Veri odaklı reklam stratejileri ile ROI ve büyüme maksimizasyonu.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400&h=300",
  },
  {
    id: 5,
    title: "SEO Stratejisi",
    desc: "Arama motorlarında organik, kalıcı ve sektörel liderlik getiren büyüme.",
    img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=400&h=300",
  },
  {
    id: 6,
    title: "Marka Kimliği",
    desc: "Akılda kalıcı, güçlü ve modern kurumsal kimlik inşası.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=400&h=300",
  },
];

export default function ServicesCarousel() {
  const [rotation, setRotation] = useState(0);
  
  // Sürükleme State'leri
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startRotation, setStartRotation] = useState(0);

  const totalCards = services.length;
  const theta = 360 / totalCards; 
  const cardWidth = 340; 
  const radius = Math.round(cardWidth / 2 / Math.tan(Math.PI / totalCards)) + 80;

  const handleNext = () => setRotation((prev) => prev - theta);
  const handlePrev = () => setRotation((prev) => prev + theta);

  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setStartRotation(rotation);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const deltaX = clientX - startX;
    setRotation(startRotation + deltaX * 0.4); 
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const snappedRotation = Math.round(rotation / theta) * theta;
    setRotation(snappedRotation);
  };

  return (
    <section className="relative w-full py-32 overflow-hidden bg-[var(--bg-base)] transition-colors duration-500 select-none flex flex-col justify-center min-h-[90vh]">
      
      {/* 2. Merkezdeki Lüks Aura (Ortam Işığı) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-br from-[var(--brand-purple)] to-[var(--brand-gold)] opacity-10 dark:opacity-[0.07] blur-[100px] pointer-events-none z-0 animate-[pulse_4s_ease-in-out_infinite]" />

      {/* 3. Alt Zemin Sisi (Derinlik Hissi) */}
      <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-[var(--bg-base)] via-[var(--bg-base)]/80 to-transparent pointer-events-none z-10" />

      {/* --- İÇERİK ALANI --- */}
      <div className="relative z-20">
        
        {/* Üst Başlık Alanı */}
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 mb-16 text-center">
          <div className="group relative inline-flex items-center justify-center gap-2.5 px-5 py-2 rounded-full border border-[var(--brand-purple)]/20 dark:border-[var(--brand-gold)]/20 bg-[var(--brand-purple)]/5 dark:bg-[var(--brand-gold)]/5 backdrop-blur-md transition-all duration-500 hover:bg-[var(--brand-purple)]/10 dark:hover:bg-[var(--brand-gold)]/10 hover:border-[var(--brand-purple)]/40 dark:hover:border-[var(--brand-gold)]/40 mb-6 cursor-default shadow-[0_0_15px_rgba(92,6,140,0.05)] dark:shadow-[0_0_15px_rgba(201,169,126,0.05)] overflow-hidden">
  
            {/* Metin - Krem Temada Mor, Dark Temada Gold */}
            <span className="text-[var(--brand-purple)] dark:text-[var(--brand-gold)] text-[11px] font-bold tracking-[0.25em] uppercase mt-[1px] relative z-10 transition-colors duration-500">
                Medusa Ecosystem
            </span>

            {/* Hover anında içten geçen Krem/Gold Işık Yansıması */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-[var(--brand-cream)]/20 dark:via-[var(--brand-gold)]/20 to-transparent pointer-events-none z-0"></div>
            </div>
          <h2 className="text-[var(--text-main)] text-[clamp(2.5rem,5vw,4rem)] font-semibold tracking-tight mb-6 drop-shadow-sm">
            Uzmanlık Alanlarımız
          </h2>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto text-lg font-light">
            Markanızı bir sonraki seviyeye taşımak için sunduğumuz uçtan uca dijital çözümler.
          </p>
        </div>

        {/* 3D Carousel Sahnesi */}
        <div 
          className="relative w-full h-[500px] flex justify-center items-center perspective-[2000px] touch-none mt-10"
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
        >
          
          {/* Dönen Silindir Taşıyıcı */}
          <div
            className={`relative w-[340px] h-[450px] ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateY(${rotation}deg)`,
              transition: isDragging ? "none" : "transform 1s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          >
            {services.map((service, index) => {
              const cardAngle = theta * index;
              return (
                <div
                  key={service.id}
                  className="absolute top-0 left-0 w-[340px] h-[450px] rounded-[2rem] flex flex-col overflow-hidden group transition-all duration-500"
                  style={{
                    transform: `rotateY(${cardAngle}deg) translateZ(${radius}px)`,
                    backfaceVisibility: "hidden",
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%)",
                    backdropFilter: "blur(40px) saturate(150%)",
                    WebkitBackdropFilter: "blur(40px) saturate(150%)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderTop: "1px solid rgba(255, 255, 255, 0.3)",
                    borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 30px 60px rgba(0,0,0,0.4), 0 0 40px rgba(232, 212, 184, 0.1), inset 0 20px 40px rgba(255,255,255,0.05)",
                  }}
                >
                  {/* Holografik İnci (Pearl) Efekti */}
                  <div 
                    className="absolute inset-0 z-40 pointer-events-none mix-blend-color-dodge opacity-[0.15] group-hover:opacity-100 transition-all duration-[1500ms] ease-out bg-[length:300%_300%] bg-[position:0%_50%] group-hover:bg-[position:100%_50%]"
                    style={{
                      backgroundImage: "linear-gradient(115deg, transparent 15%, rgba(255, 255, 255, 0.1) 25%, rgba(240, 248, 255, 0.3) 35%, rgba(255, 255, 255, 0.7) 50%, rgba(253, 245, 230, 0.3) 65%, rgba(255, 255, 255, 0.1) 75%, transparent 85%)"
                    }}
                  />

                  {/* Çapraz Cam Parlaması */}
                  <div className="absolute top-0 left-[-50%] w-[200%] h-full bg-gradient-to-b from-white/30 via-white/5 to-transparent -rotate-45 translate-y-[-50%] pointer-events-none z-50 mix-blend-overlay transition-transform duration-1000 group-hover:translate-y-[-20%] group-hover:translate-x-[20%]" />

                  {/* Kart Görseli */}
                  <div className="relative w-full h-[220px] overflow-hidden bg-[var(--bg-header)]">
                    <img
                      src={service.img}
                      alt={service.title}
                      draggable="false"
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[var(--bg-base)]/95 to-transparent pointer-events-none z-10" />
                  </div>

                  {/* Kart İçeriği */}
                  <div className="p-8 flex flex-col flex-1 justify-between relative z-20">
                    <div>
                      <h3 className="text-[1.4rem] font-semibold text-[var(--text-main)] mb-3 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-[0.95rem] text-[var(--text-muted)] line-clamp-3 leading-relaxed font-light">
                        {service.desc}
                      </p>
                    </div>
                    
                    {/* Buton */}
                    <button className="flex items-center gap-2 text-[0.95rem] font-medium text-[var(--text-main)] group-hover:text-[var(--brand-purple)] dark:group-hover:text-[var(--brand-gold)] transition-colors mt-4">
                      Detayları İncele
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Kontrol Butonları (Daha Lüks Form) */}
        <div className="flex justify-center gap-4 mt-16 relative z-30">
          <button
            onClick={handlePrev}
            className="w-14 h-14 rounded-full border border-[var(--border-color)] bg-[var(--bg-header)]/80 backdrop-blur-xl flex items-center justify-center text-[var(--text-main)] hover:bg-[var(--brand-purple)] hover:text-white dark:hover:bg-[var(--brand-gold)] dark:hover:text-black transition-all duration-300 shadow-xl hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="w-14 h-14 rounded-full border border-[var(--border-color)] bg-[var(--bg-header)]/80 backdrop-blur-xl flex items-center justify-center text-[var(--text-main)] hover:bg-[var(--brand-purple)] hover:text-white dark:hover:bg-[var(--brand-gold)] dark:hover:text-black transition-all duration-300 shadow-xl hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </div>
    </section>
  );
}