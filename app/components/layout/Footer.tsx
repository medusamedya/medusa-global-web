"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const [time, setTime] = useState("");

  // İzmir için canlı saat simülasyonu (Premium Studio Hissiyatı)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Europe/Istanbul",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat("tr-TR", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    // PARALLAX REVEAL SIRRI:sticky bottom-0 ve -z-10 sayesinde bu bölüm hep altta bekler, 
    // üstteki bölümler kaydırıldıkça altından pürüzsüzce ortaya çıkar.
    <footer className="sticky bottom-0 left-0 w-full -z-10 bg-[var(--bg-header)] text-[var(--text-main)] border-t border-[var(--border-color)] transition-colors duration-500">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-10">
        
        {/* ANA IZGARA (4 SÜTUNLU KLASİK DÜZEN) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 pb-16 border-b border-[var(--border-color)]">
          
          {/* 1. Sütun: Logo ve Stüdyo Mottosu */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-8 h-8 bg-[var(--text-main)] text-[var(--bg-base)] rounded-full flex items-center justify-center font-bold text-xs">
                MG
              </div>
              <span className="font-medium tracking-wide text-lg">Medusa</span>
            </div>
            <p className="text-[var(--text-muted)] text-sm max-w-[240px] leading-relaxed font-light">
              Markanızı dijital dünyada sıfırdan inşa ediyor, yönetiyor ve büyütüyoruz.
            </p>
            {/* Canlı Saat Mikrosu */}
            {time && (
              <div className="mt-4 flex items-center gap-2 font-mono text-[11px] text-[var(--brand-gold)] font-bold tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-spark)] animate-pulse" />
                İZMİR, TR — {time}
              </div>
            )}
          </div>

          {/* 2. Sütun: Navigasyon (Header ile Senkronize) */}
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-mono tracking-widest text-[var(--brand-purple)] dark:text-[var(--brand-gold)] font-bold uppercase">
              Navigasyon
            </span>
            <nav className="flex flex-col gap-2.5 text-sm">
              {["Hizmetler", "Projeler", "Stüdyo", "Blog", "İletişim"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-[var(--text-muted)] hover:text-[var(--text-main)] hover:translate-x-1 transition-all duration-300 w-fit"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* 3. Sütun: Sosyal Medya */}
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-mono tracking-widest text-[var(--brand-purple)] dark:text-[var(--brand-gold)] font-bold uppercase">
              Sosyal
            </span>
            <div className="flex flex-col gap-2.5 text-sm">
              {[
                { name: "Instagram", url: "#" },
                { name: "LinkedIn", url: "#" },
                { name: "X (Twitter)", url: "#" },
                { name: "Behance", url: "#" },
              ].map((link) => (
                <a 
                  key={link.name} 
                  href={link.url}
                  className="flex items-center gap-1 text-[var(--text-muted)] hover:text-[var(--text-main)] group w-fit"
                >
                  {link.name}
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>

          {/* 4. Sütun: Hızlı İletişim Bilgileri */}
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-mono tracking-widest text-[var(--brand-purple)] dark:text-[var(--brand-gold)] font-bold uppercase">
              Bize Ulaşın
            </span>
            <div className="flex flex-col gap-3 text-sm">
              <div>
                <p className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider mb-0.5">E-POSTA</p>
                <a href="mailto:hello@medusa.co" className="hover:text-[var(--brand-purple)] dark:hover:text-[var(--brand-gold)] transition-colors font-medium">
                  hello@medusa.co
                </a>
              </div>
              <div>
                <p className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider mb-0.5">STÜDYO</p>
                <p className="text-[var(--text-main)] font-light leading-relaxed">
                  Alsancak, Kültür Mh. <br />
                  İzmir, Türkiye
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* ALT ŞERİT (COPYRIGHT & İMZA) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[12px] font-mono text-[var(--text-muted)]">
          <p>© {new Date().getFullYear()} Medusa Global Studio. Tüm hakları saklıdır.</p>
          <p className="flex items-center gap-1">
            Built with connection by{" "}
            <span className="text-[var(--text-main)] font-bold hover:text-[var(--brand-purple)] dark:hover:text-[var(--brand-gold)] transition-colors cursor-pointer">
              Medusa
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
}