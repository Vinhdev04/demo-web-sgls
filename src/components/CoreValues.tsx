import React from 'react';
import {
  CheckSquare2,
  FileCheck2,
  Scale,
  Users2,
  HardHat
} from 'lucide-react';
import { CORE_VALUES } from '../data/constructionData';

export const CoreValues: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'chat-luong-thi-cong':
        return CheckSquare2;
      case 'quy-trinh-ro-rang':
        return FileCheck2;
      case 'minh-bach-chi-phi':
        return Scale;
      case 'dong-hanh-trien-khai':
        return Users2;
      case 'tien-do-va-an-toan':
      default:
        return HardHat;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-orange-600 mb-2">
            Tiêu chí hoạt động
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-4 [text-wrap:balance]">
            Nguyên Tắc Làm Việc Của Sài Gòn LS
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Chúng tôi xây dựng niềm tin với chủ đầu tư dựa trên sự trung thực, kỷ luật công trường và tinh thần trách nhiệm trong từng mốc bàn giao.
          </p>
        </div>

        {/* 5 Core Values Grid with Monochromatic Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CORE_VALUES.map((val) => {
            const Icon = getIcon(val.id);
            return (
              <div
                key={val.id}
                className="p-6 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Monochromatic Clean Icon */}
                  <div className="w-10 h-10 rounded bg-[#0f233a] text-white flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-slate-100" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {val.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {val.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 text-xs font-medium text-slate-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                  <span>{val.principle}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
