import React, { useState } from 'react';
import {
  Building2,
  Clock,
  Compass,
  Layers,
  ShieldAlert,
  FolderSync,
  Info
} from 'lucide-react';
import { PROJECT_TYPOLOGIES } from '../data/constructionData';
import { ProjectTypology } from '../types';

export const Showcase: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'townhouse' | 'villa' | 'renovation' | 'finishing'>('all');

  const filterOptions = [
    { id: 'all', label: 'Tất cả' },
    { id: 'townhouse', label: 'Nhà phố' },
    { id: 'villa', label: 'Biệt thự' },
    { id: 'renovation', label: 'Cải tạo' },
    { id: 'finishing', label: 'Hoàn thiện' },
  ] as const;

  const filteredItems = selectedFilter === 'all'
    ? PROJECT_TYPOLOGIES
    : PROJECT_TYPOLOGIES.filter((item) => item.category === selectedFilter);

  return (
    <section id="projects" className="py-16 lg:py-24 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-orange-600 mb-2">
              Hồ sơ công trình & Định hướng kiến trúc
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3 [text-wrap:balance]">
              Không Gian Kiến Trúc & Tiêu Chuẩn Kết Cấu
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Tổng hợp giải pháp kết cấu và quy chuẩn kỹ thuật cho từng hình thái công trình nhà ở tại khu vực TP. Hồ Chí Minh.
            </p>
          </div>

          {/* Filter Tabs (Interactive Segmented Control - Allowed by Constitution) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/80 rounded-lg shrink-0">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedFilter(opt.id)}
                className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded transition-all cursor-pointer ${
                  selectedFilter === opt.id
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Ethical Transparency Notice regarding Real Project Documentation */}
        <div className="mb-10 bg-amber-50/90 border border-amber-200 rounded-lg p-5 sm:p-6 text-amber-900">
          <div className="flex items-start gap-3.5">
            <div className="w-8 h-8 rounded bg-amber-100 flex items-center justify-center text-amber-800 shrink-0 mt-0.5">
              <Info className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold tracking-tight text-amber-950 flex items-center gap-2">
                <span>Chính sách minh bạch thông tin công trình thực tế</span>
                <span className="text-[10px] font-mono bg-amber-200/80 text-amber-900 px-2 py-0.5 rounded">
                  Đạo đức nghề nghiệp
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-amber-800/90 leading-relaxed">
                Để tôn trọng quyền riêng tư của gia chủ và tuân thủ nguyên tắc không sử dụng hình ảnh minh họa giả mạo làm dự án thực tế, <strong>CÔNG TY TNHH XÂY DỰNG SÀI GÒN LS</strong> đang tiến hành tổng hợp hồ sơ hoàn công và chỉ công bố các bộ ảnh thi công sau khi nhận được sự đồng thuận bằng văn bản của khách hàng.
              </p>
            </div>
          </div>
        </div>

        {/* Grid of Typology & Engineering Standards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredItems.map((item: ProjectTypology) => (
            <div
              key={item.id}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Structural Graphic Carrier */}
                <div className="bg-[#0f233a] p-6 text-white relative overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-orange-400 font-semibold">
                      {item.categoryLabel}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>Đang cập nhật ảnh nghiệm thu</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    {item.scaleDescription}
                  </p>
                </div>

                {/* Technical Points */}
                <div className="p-6 space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-orange-600" />
                    <span>Giải pháp kết cấu & Kỹ thuật trọng tâm:</span>
                  </div>

                  <ul className="space-y-2.5">
                    {item.structuralNotes.map((note, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-600 shrink-0 mt-2" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Status Footer */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <FolderSync className="w-4 h-4 text-slate-400" />
                  Khu vực lưu trữ hồ sơ kỹ thuật
                </span>
                <span className="text-slate-400 font-mono">
                  Sài Gòn LS · TP.HCM
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if filter has no items */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg border border-slate-200 p-8">
            <Building2 className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800 mb-1">
              Đang biên tập hồ sơ danh mục này
            </h3>
            <p className="text-xs text-slate-500">
              Vui lòng chọn danh mục khác để xem định hướng quy chuẩn kỹ thuật.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
