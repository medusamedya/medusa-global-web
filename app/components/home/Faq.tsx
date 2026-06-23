"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do I need technical or coding skills to use the platform?",
    answer: "Hayır, platformumuz tamamen kullanıcı dostu ve sezgisel olacak şekilde tasarlanmıştır. Güçlü iş akışları oluşturmak ve yönetmek için herhangi bir kodlama veya teknik bilgiye ihtiyacınız yoktur.",
  },
  {
    question: "What apps and tools can I integrate with?",
    answer: "Slack, Salesforce, Google Workspace, Meta ve sektör standartlarındaki 500'den fazla popüler uygulama ile pürüzsüz ve anında entegrasyon sağlıyoruz.",
  },
  {
    question: "How does AI help automate my workflows?",
    answer: "Yapay zeka sistemimiz, tekrarlayan görevlerinizi analiz eder ve sizin için en optimize otomasyon yollarını önerir. Siz kullandıkça öğrenir ve operasyonel verimliliğinizi sürekli artırır.",
  },
  {
    question: "Is my data secure on your platform?",
    answer: "Kesinlikle. Verileriniz kurumsal düzeyde şifreleme ile korunmaktadır. GDPR uyumluluğu ve düzenli güvenlik denetimleri ile verilerinizin tamamen güvende olduğundan emin olabilirsiniz.",
  },
  {
    question: "Can I cancel or change my plan at any time?",
    answer: "Evet, tam bir esnekliğe sahipsiniz. Aboneliğinizi herhangi bir fatura döneminde gizli bir ücret olmadan yükseltebilir, düşürebilir veya iptal edebilirsiniz.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-32 bg-[var(--bg-base)] text-[var(--text-main)] transition-colors duration-500 overflow-hidden">
      <div className="max-w-[800px] mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Başlık Alanı */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* FAQ Badge */}
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[var(--brand-purple)] bg-[var(--brand-purple)]/10 text-[var(--text-main)] text-[13px] font-medium tracking-widest mb-6">
            FAQ
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight mb-6">
            Still have questions?
          </h2>
          
          <p className="text-[var(--text-muted)] text-[16px] sm:text-[18px] max-w-2xl font-light">
            Everything you need to know about automating workflows, integrating tools, and getting started—quickly and confidently.
          </p>
        </div>

        {/* Akordiyon Listesi */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                onClick={() => toggleFaq(index)}
                className={`group relative overflow-hidden rounded-2xl border backdrop-blur-md cursor-pointer transition-all duration-500 ${
                  isOpen
                    ? "bg-[var(--bg-header)]/80 border-[var(--brand-purple)] shadow-[0_0_20px_rgba(92,6,140,0.15)]"
                    : "bg-[var(--bg-header)]/40 border-[var(--border-color)] hover:border-[var(--brand-purple)]/50"
                }`}
              >
                {/* Soru Satırı */}
                <div className="flex items-center justify-between p-5 sm:p-6">
                  <h3 className={`text-[16px] sm:text-[17px] font-medium transition-colors duration-300 pr-8 ${
                    isOpen ? "text-[var(--brand-spark)]" : "text-[var(--text-main)] group-hover:text-[var(--brand-purple)]"
                  }`}>
                    {faq.question}
                  </h3>
                  
                  {/* İkon Kutusu */}
                  <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg border transition-all duration-300 ${
                    isOpen 
                      ? "border-[var(--brand-spark)] bg-[var(--brand-spark)]/10 text-[var(--brand-spark)]" 
                      : "border-[var(--border-color)] text-[var(--text-muted)] group-hover:border-[var(--brand-purple)] group-hover:text-[var(--brand-purple)]"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </div>

                {/* Cevap Alanı (Grid tabanlı pürüzsüz animasyon) */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-5 sm:p-6 pt-0 text-[15px] leading-relaxed text-[var(--text-muted)] font-light border-t border-[var(--border-color)]/50 mt-2">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}