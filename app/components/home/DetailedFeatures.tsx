"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Search, Megaphone, Gauge, PenTool } from "lucide-react";

const features = [
  {
    title: "Kapsamlı SEO ve Organik Büyüme",
    description: "Web sitenizin teknik altyapısını ve içerik hiyerarşisini arama motorlarının tam istediği standartlara getiriyoruz. Hem yerel hem de genel anahtar kelimelerde sürdürülebilir sıralamalar elde ederek organik trafiğinizi maksimize ediyoruz.",
    icon: Search,
    align: "left",
  },
  {
    title: "Performans Odaklı Reklam Yönetimi",
    description: "Meta (Instagram/Facebook) ve Google Ads platformlarında doğru hedef kitleyi yakalayan, bütçeyi en verimli şekilde kullanan dönüşüm odaklı kampanyalar tasarlıyoruz. A/B testleriyle reklam maliyetlerinizi düşürüp gelirinizi artırıyoruz.",
    icon: Megaphone,
    align: "right",
  },
  {
    title: "Teknik Optimizasyon ve Hız",
    description: "WordPress ve WooCommerce altyapılı siteleriniz için gelişmiş önbellekleme (LiteSpeed vb.), görsel optimizasyonu ve kod küçültme işlemleriyle sitenizin saniyeler içinde yüklenmesini sağlıyor, kullanıcı deneyimini zirveye taşıyoruz.",
    icon: Gauge,
    align: "left",
  },
  {
    title: "Stratejik İçerik Üretimi",
    description: "Sektörünüze ve hedef kitlenize özel, arama motoru niyetine (search intent) uygun, doğru başlık yapılarıyla kurgulanmış özgün blog ve sayfa içerikleri üreterek markanızın dijital otoritesini inşa ediyoruz.",
    icon: PenTool,
    align: "right",
  },
];

export default function DetailedFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Section boyunca 0'dan 1'e kadar uzanan tek bir progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end 70%"],
  });

  return (
    <section 
      ref={containerRef} 
      className="relative w-full py-32 overflow-hidden bg-[var(--bg-base)]"
    >
      {/* TEK PARÇA YILAN ÇİZGİSİ - TÜM SECTION'I KAPLAR */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="none"
        >
          <motion.path
            d="M 100 0 C 90 20, 80 30, 50 50 C 20 70, 10 80, 0 100" // Tek, pürüzsüz bir yılan yolu
            className="stroke-[var(--brand-purple)] dark:stroke-[var(--brand-gold)]"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            style={{ pathLength: scrollYProgress }} // Tek bir pathLength ile tüm yol kontrol edilir
          />
        </svg>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8 z-10">
        <div className="flex flex-col gap-32 lg:gap-48">
          {features.map((feature, index) => {
            const isLeft = feature.align === "left";

            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-16 lg:gap-24`}
              >
                {/* Metin Alanı */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex-1 space-y-6 text-center lg:text-left"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--brand-purple)]/5 dark:bg-[var(--brand-cream)]/5 border border-[var(--brand-purple)]/10 dark:border-[var(--brand-gold)]/20 ${isLeft ? 'lg:mx-0' : 'lg:ml-auto lg:mr-0'} mx-auto shadow-sm`}>
                    <feature.icon className="w-5 h-5 text-[var(--brand-purple)] dark:text-[var(--brand-gold)]" />
                  </div>

                  <h2 className={`text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-main)] ${!isLeft && 'lg:text-right'} transition-colors duration-500`}>
                    {feature.title}
                  </h2>
                  <p className={`text-base md:text-lg text-[var(--text-muted)] leading-relaxed font-light ${!isLeft && 'lg:text-right'} transition-colors duration-500`}>
                    {feature.description}
                  </p>
                </motion.div>

                {/* Görsel / Grafik Alanı */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  className="flex-1 w-full relative"
                >
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white/40 dark:bg-[#0c0517]/40 backdrop-blur-md border border-[var(--border-color)] p-6 shadow-xl shadow-[var(--brand-purple)]/2 dark:shadow-black/40 group transition-all duration-500">
                    <div className="w-full h-full rounded-lg border border-dashed border-[var(--brand-purple)]/20 dark:border-[var(--brand-gold)]/20 flex items-center justify-center bg-[var(--bg-base)]/50 transition-colors duration-500">
                      <span className="text-[var(--text-muted)] font-medium text-xs tracking-widest uppercase opacity-40 group-hover:opacity-80 transition-opacity">
                        Görsel Veya Analiz Paneli
                      </span>
                    </div>

                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[var(--brand-purple)] dark:bg-[var(--brand-gold)] opacity-5 dark:opacity-15 blur-[60px] rounded-full pointer-events-none transition-colors duration-500" />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}