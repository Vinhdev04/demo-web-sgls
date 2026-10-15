import React from 'react';
import { ArrowRight, ShieldCheck, FileText, CheckCircle2, Ruler, HardHat, Compass } from 'lucide-react';
import { COMPANY_INFO } from '../data/constructionData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#0f233a] text-white overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed Metadata Kicker (Anti-slop zero-pill discipline) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-orange-400 mb-4">
              <span>{COMPANY_INFO.fullName}</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span className="text-slate-300">MST: {COMPANY_INFO.taxId}</span>
            </div>

            {/* Main Title (Exact Prompt Title) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6 [text-wrap:balance]">
              KIẾN TẠO KHÔNG GIAN SỐNG – VỮNG BỀN THEO THỜI GIAN
            </h1>

            {/* Description (Exact Prompt Description) */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Đồng hành cùng khách hàng trong hành trình xây dựng và hoàn thiện công trình với sự chỉn chu, trách nhiệm và chất lượng.
            </p>

            {/* CTA Buttons (2 Prompt CTAs) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10">
              <a
                href="#contact"
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-orange-600 rounded hover:bg-orange-500 active:bg-orange-700 transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400 whitespace-nowrap shrink-0"
              >
                <span>Tư vấn xây dựng</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-200 bg-slate-800/80 border border-slate-700 hover:bg-slate-700/80 hover:text-white transition-colors rounded flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400 whitespace-nowrap shrink-0"
              >
                <span>Khám phá dịch vụ</span>
              </a>
            </div>

            {/* Corporate Fact Verification Strip */}
            <div className="pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Trực tiếp khảo sát địa chất & mặt bằng</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Dự toán bóc tách khối lượng chi tiết</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Nghiệm thu theo từng mốc kỹ thuật</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Engineering Visual Frame */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#14283f] border border-slate-700 rounded-lg p-6 sm:p-8 shadow-xl">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/80 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-orange-400">
                    <Ruler className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white tracking-wide uppercase">
                      Hồ Sơ Kỹ Thuật Công Trình
                    </h2>
                    <span className="text-[11px] text-slate-400">
                      Sài Gòn LS · Kiểm soát chất lượng
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-slate-800/80 px-2 py-1 rounded border border-slate-700">
                  TCVN 9377
                </span>
              </div>

              {/* Blueprint Structural Drawing Representation */}
              <div className="bg-[#0b1827] rounded border border-slate-700/90 p-4 mb-6 relative overflow-hidden">
                {/* SVG Blueprint Grid */}
                <div className="w-full h-44 sm:h-52 flex flex-col justify-between relative font-mono text-[10px] text-slate-500">
                  <div className="flex justify-between border-b border-dashed border-slate-700 pb-1 text-slate-400">
                    <span>MẶT BẰNG KẾT CẤU TIM TRỤC</span>
                    <span>TỶ LỆ 1/100</span>
                  </div>

                  {/* Elevation Diagram */}
                  <svg className="w-full h-32 text-orange-500/80" viewBox="0 0 320 120" fill="none">
                    {/* Grid lines */}
                    <line x1="20" y1="10" x2="300" y2="10" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
                    <line x1="20" y1="50" x2="300" y2="50" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
                    <line x1="20" y1="90" x2="300" y2="90" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />

                    {/* Columns */}
                    <rect x="50" y="20" width="12" height="70" fill="#1e3a5f" stroke="#f97316" strokeWidth="1" />
                    <rect x="154" y="20" width="12" height="70" fill="#1e3a5f" stroke="#f97316" strokeWidth="1" />
                    <rect x="258" y="20" width="12" height="70" fill="#1e3a5f" stroke="#f97316" strokeWidth="1" />

                    {/* Beams */}
                    <rect x="40" y="20" width="240" height="10" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
                    <rect x="40" y="80" width="240" height="10" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />

                    {/* Foundation Footing */}
                    <polygon points="40,90 72,90 80,110 32,110" fill="#0f172a" stroke="#f97316" strokeWidth="1" />
                    <polygon points="144,90 176,90 184,110 136,110" fill="#0f172a" stroke="#f97316" strokeWidth="1" />
                    <polygon points="248,90 280,90 288,110 240,110" fill="#0f172a" stroke="#f97316" strokeWidth="1" />

                    {/* Rebar Indicators */}
                    <line x1="56" y1="15" x2="56" y2="105" stroke="#f97316" strokeWidth="1.5" />
                    <line x1="160" y1="15" x2="160" y2="105" stroke="#f97316" strokeWidth="1.5" />
                    <line x1="264" y1="15" x2="264" y2="105" stroke="#f97316" strokeWidth="1.5" />
                  </svg>

                  <div className="flex justify-between items-center text-[10px] text-slate-400 pt-1 border-t border-slate-800">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
                      Cốt thép & Dầm sàn
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-sky-400 inline-block"></span>
                      Móng & Giằng móng
                    </span>
                  </div>
                </div>
              </div>

              {/* Technical Commitment Points */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-2.5 rounded bg-slate-800/60 border border-slate-700/60">
                  <HardHat className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-semibold text-slate-200">
                      Giám sát hiện trường chuyên trách
                    </h3>
                    <p className="text-[11px] text-slate-400 leading-normal">
                      Kỹ sư trực tiếp có mặt tại công trình theo dõi từng công đoạn đổ bê tông, đan thép và xây tô.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded bg-slate-800/60 border border-slate-700/60">
                  <Compass className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-semibold text-slate-200">
                      Bóc tách định mức minh bạch
                    </h3>
                    <p className="text-[11px] text-slate-400 leading-normal">
                      Hợp đồng có phụ lục vật tư chi tiết, nói không với mập mờ chủng loại để gia chủ an tâm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
