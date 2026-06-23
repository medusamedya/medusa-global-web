"use client";

import { useState, useEffect } from "react";
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
  
  // Sürükleme (Drag/Swipe) State'leri
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startRotation, setStartRotation] = useState(0);

  const totalCards = services.length;
  const theta = 360 / totalCards; 
  const cardWidth = 340; 
  const radius = Math.round(cardWidth / 2 / Math.tan(Math.PI / totalCards)) + 80;

  // --- Buton Kontrolleri ---
  const handleNext = () => setRotation((prev) => prev - theta);
  const handlePrev = () => setRotation((prev) => prev + theta);

  // --- Sürükleme (Drag) Mantığı ---
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
    <section className="relative w-full py-32 overflow-hidden bg-[var(--bg-base)] transition-colors duration-500 select-none">
      
      {/* Üst Başlık Alanı */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 mb-20 text-center relative z-20">
        <h2 className="text-[var(--text-main)] text-[clamp(2rem,4vw,3.5rem)] font-medium tracking-tight mb-4">
          Uzmanlık Alanlarımız
        </h2>
        <p className="text-[var(--text-muted)] max-w-2xl mx-auto text-lg">
          Markanızı bir sonraki seviyeye taşımak için sunduğumuz uçtan uca dijital çözümler.
        </p>
      </div>

      {/* 3D Carousel Sahnesi */}
      <div 
        className="relative w-full h-[500px] flex justify-center items-center perspective-[1600px] touch-none"
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
                className="absolute top-0 left-0 w-[340px] h-[450px] rounded-2xl flex flex-col overflow-hidden group transition-all duration-500"
                style={{
                  transform: `rotateY(${cardAngle}deg) translateZ(${radius}px)`,
                  backfaceVisibility: "hidden",
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.02) 100%)",
                  backdropFilter: "blur(32px) saturate(120%)",
                  WebkitBackdropFilter: "blur(32px) saturate(120%)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  borderTop: "1px solid rgba(255, 255, 255, 0.4)",
                  borderLeft: "1px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.5), 0 0 40px rgba(232, 212, 184, 0.15), inset 0 20px 40px rgba(255,255,255,0.15)",
                }}
              >
                {/* 1. YENİ: BEYAZ SEDEFLİ (PEARL) CAM PARLAMASI */}
                <div 
                  className="absolute inset-0 z-40 pointer-events-none mix-blend-color-dodge opacity-[0.2] group-hover:opacity-100 transition-all duration-[1500ms] ease-out bg-[length:300%_300%] bg-[position:0%_50%] group-hover:bg-[position:100%_50%]"
                  style={{
                    backgroundImage: "linear-gradient(115deg, transparent 15%, rgba(255, 255, 255, 0.1) 25%, rgba(240, 248, 255, 0.3) 35%, rgba(255, 255, 255, 0.7) 50%, rgba(253, 245, 230, 0.3) 65%, rgba(255, 255, 255, 0.1) 75%, transparent 85%)"
                  }}
                />

                {/* 2. İÇ CAM PARLAMASI (Diagonal Glare) - Dinamik Hareket Eklendi */}
                <div className="absolute top-0 left-[-50%] w-[200%] h-full bg-gradient-to-b from-white/40 via-white/5 to-transparent -rotate-45 translate-y-[-50%] pointer-events-none z-50 mix-blend-overlay transition-transform duration-1000 group-hover:translate-y-[-20%] group-hover:translate-x-[20%]" />

                {/* Kart Görseli */}
                <div className="relative w-full h-[220px] overflow-hidden bg-black/20">
                  <img
                    src={service.img}
                    alt={service.title}
                    draggable="false"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[var(--bg-base)]/90 to-transparent pointer-events-none z-10" />
                </div>

                {/* Kart İçeriği */}
                <div className="p-6 flex flex-col flex-1 justify-between relative z-20">
                  <div>
                    <h3 className="text-[1.35rem] font-medium text-[var(--text-main)] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[0.9rem] text-[var(--text-muted)] line-clamp-3 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  
                  {/* Buton */}
                  <button className="flex items-center gap-2 text-[0.9rem] font-semibold text-[var(--text-main)] group-hover:text-[var(--brand-spark)] transition-colors mt-4">
                    Detayları İncele
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Kontrol Butonları */}
      <div className="flex justify-center gap-6 mt-12 relative z-20">
        <button
          onClick={handlePrev}
          className="w-14 h-14 rounded-full border border-[var(--border-color)] bg-[var(--bg-base)]/50 backdrop-blur-md flex items-center justify-center text-[var(--text-main)] hover:bg-[var(--text-main)] hover:text-[var(--bg-base)] hover:scale-105 transition-all duration-300 shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="w-14 h-14 rounded-full border border-[var(--border-color)] bg-[var(--bg-base)]/50 backdrop-blur-md flex items-center justify-center text-[var(--text-main)] hover:bg-[var(--text-main)] hover:text-[var(--bg-base)] hover:scale-105 transition-all duration-300 shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

    </section>
  );
}