import React from 'react';
import {
  Home,
  Building,
  Landmark,
  Hammer,
  Paintbrush,
  FileSpreadsheet,
  ArrowRight,
  Check
} from 'lucide-react';
import { SERVICES_DATA } from '../data/constructionData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'xay-dung-nha-o':
        return Home;
      case 'thi-cong-nha-pho':
        return Building;
      case 'thi-cong-biet-thu':
        return Landmark;
      case 'sua-chua-cai-tao':
        return Hammer;
      case 'thi-cong-hoan-thien':
        return Paintbrush;
      case 'tu-van-du-toan':
      default:
        return FileSpreadsheet;
    }
  };

  const getServiceGraphic = (id: string) => {
    switch (id) {
      case 'xay-dung-nha-o':
        return (
          <svg className="w-full h-full text-slate-700 p-4" viewBox="0 0 200 120" fill="none">
            <rect x="20" y="20" width="160" height="80" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
            <polygon points="100,15 30,55 170,55" fill="#f1f5f9" stroke="#ea580c" strokeWidth="1.5" />
            <rect x="45" y="55" width="110" height="50" fill="#ffffff" stroke="#0f233a" strokeWidth="1.5" />
            <rect x="65" y="70" width="25" height="35" fill="#e2e8f0" stroke="#64748b" strokeWidth="1" />
            <rect x="110" y="65" width="25" height="25" fill="#e2e8f0" stroke="#64748b" strokeWidth="1" />
            <line x1="30" y1="105" x2="170" y2="105" stroke="#0f233a" strokeWidth="2" />
          </svg>
        );
      case 'thi-cong-nha-pho':
        return (
          <svg className="w-full h-full text-slate-700 p-4" viewBox="0 0 200 120" fill="none">
            <rect x="60" y="15" width="80" height="95" fill="#ffffff" stroke="#0f233a" strokeWidth="1.5" />
            <rect x="68" y="25" width="64" height="20" fill="#f8fafc" stroke="#ea580c" strokeWidth="1" />
            <rect x="68" y="52" width="64" height="20" fill="#f8fafc" stroke="#ea580c" strokeWidth="1" />
            <rect x="75" y="80" width="50" height="30" fill="#e2e8f0" stroke="#0f233a" strokeWidth="1" />
            <line x1="40" y1="110" x2="160" y2="110" stroke="#334155" strokeWidth="2" />
            <line x1="68" y1="48" x2="132" y2="48" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="68" y1="75" x2="132" y2="75" stroke="#cbd5e1" strokeWidth="1" />
          </svg>
        );
      case 'thi-cong-biet-thu':
        return (
          <svg className="w-full h-full text-slate-700 p-4" viewBox="0 0 200 120" fill="none">
            <polygon points="100,20 15,60 185,60" fill="#f8fafc" stroke="#ea580c" strokeWidth="1.5" />
            <rect x="35" y="60" width="130" height="48" fill="#ffffff" stroke="#0f233a" strokeWidth="1.5" />
            <rect x="50" y="70" width="30" height="38" fill="#f1f5f9" stroke="#64748b" strokeWidth="1" />
            <rect x="90" y="70" width="20" height="38" fill="#e2e8f0" stroke="#0f233a" strokeWidth="1" />
            <rect x="120" y="70" width="30" height="25" fill="#f1f5f9" stroke="#64748b" strokeWidth="1" />
            <line x1="20" y1="108" x2="180" y2="108" stroke="#0f233a" strokeWidth="2" />
          </svg>
        );
      case 'sua-chua-cai-tao':
        return (
          <svg className="w-full h-full text-slate-700 p-4" viewBox="0 0 200 120" fill="none">
            <rect x="40" y="30" width="120" height="75" fill="#ffffff" stroke="#64748b" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="40" y1="30" x2="100" y2="105" stroke="#ea580c" strokeWidth="1" strokeDasharray="2 2" />
            <rect x="55" y="45" width="40" height="60" fill="#f8fafc" stroke="#0f233a" strokeWidth="1.5" />
            <circle cx="140" cy="55" r="15" fill="#fef3c7" stroke="#ea580c" strokeWidth="1" />
            <path d="M135 55 L145 55 M140 50 L140 60" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
            <line x1="25" y1="105" x2="175" y2="105" stroke="#0f233a" strokeWidth="2" />
          </svg>
        );
      case 'thi-cong-hoan-thien':
        return (
          <svg className="w-full h-full text-slate-700 p-4" viewBox="0 0 200 120" fill="none">
            <rect x="35" y="25" width="130" height="80" fill="#ffffff" stroke="#0f233a" strokeWidth="1" />
            <line x1="35" y1="50" x2="165" y2="50" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="35" y1="75" x2="165" y2="75" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="80" y1="25" x2="80" y2="105" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="125" y1="25" x2="125" y2="105" stroke="#e2e8f0" strokeWidth="1" />
            <path d="M60 40 L100 80 L140 40" stroke="#ea580c" strokeWidth="1.5" strokeLinecap="round" />
            <rect x="95" y="60" width="50" height="30" fill="#ffedd5" stroke="#ea580c" strokeWidth="1" />
          </svg>
        );
      case 'tu-van-du-toan':
      default:
        return (
          <svg className="w-full h-full text-slate-700 p-4" viewBox="0 0 200 120" fill="none">
            <rect x="45" y="18" width="110" height="85" rx="3" fill="#ffffff" stroke="#0f233a" strokeWidth="1.5" />
            <line x1="60" y1="35" x2="140" y2="35" stroke="#ea580c" strokeWidth="2" />
            <line x1="60" y1="50" x2="120" y2="50" stroke="#94a3b8" strokeWidth="1" />
            <line x1="60" y1="62" x2="135" y2="62" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="60" y1="74" x2="110" y2="74" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="60" y1="86" x2="130" y2="86" stroke="#ea580c" strokeWidth="1.5" />
          </svg>
        );
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-orange-600 mb-2">
            Phạm vi năng lực
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-4 [text-wrap:balance]">
            Dịch Vụ Thi Công & Tư Vấn Kỹ Thuật
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Sài Gòn LS cung cấp các gói dịch vụ xây dựng chuyên sâu, bám sát tiêu chuẩn kết cấu kỹ thuật và bóc tách khối lượng minh bạch cho từng loại công trình.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service) => {
            const Icon = getServiceIcon(service.id);
            return (
              <div
                key={service.id}
                className="bg-white rounded-lg border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Service Card Visual Carrier */}
                  <div className="h-40 bg-slate-100 border-b border-slate-200 relative flex items-center justify-center overflow-hidden">
                    {getServiceGraphic(service.id)}

                    {/* Unboxed Metadata Code */}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2 py-1 rounded text-[11px] font-mono font-semibold text-slate-700 border border-slate-200 shadow-2xs">
                      {service.code}
                    </div>

                    <div className="absolute bottom-3 right-3 w-8 h-8 rounded bg-[#0f233a] text-orange-400 flex items-center justify-center shadow-xs">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>

                    {/* Scope Preview Checklist */}
                    <div className="space-y-2 pt-3 border-t border-slate-100">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
                        Hạng mục tiêu biểu:
                      </span>
                      {service.scopeList.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => onSelectService(service)}
                    className="w-full py-2.5 px-3 text-xs sm:text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-orange-600 hover:text-white rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <span>Tìm hiểu thêm</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
