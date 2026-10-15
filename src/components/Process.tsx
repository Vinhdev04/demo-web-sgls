import React, { useState } from 'react';
import {
  FileText,
  MapPin,
  Calculator,
  FileSignature,
  Hammer,
  KeyRound,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/constructionData';

export const Process: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return FileText;
      case 1:
        return MapPin;
      case 2:
        return Calculator;
      case 3:
        return FileSignature;
      case 4:
        return Hammer;
      case 5:
      default:
        return KeyRound;
    }
  };

  return (
    <section id="process" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-orange-600 mb-2">
            Trình tự làm việc
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-4 [text-wrap:balance]">
            Quy Trình Thi Công 6 Bước Chuẩn Mực
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Quy trình làm việc minh bạch từ khâu tiếp nhận ban đầu đến nghiệm thu chìa khóa trao tay, giúp gia chủ luôn chủ động giám sát tiến độ và kiểm soát chi phí.
          </p>
        </div>

        {/* Desktop View: Horizontal Timeline */}
        <div className="hidden lg:block">
          {/* Timeline Connector Line */}
          <div className="relative mb-10">
            <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-slate-200 -translate-y-1/2 z-0" />
            <div className="grid grid-cols-6 gap-4 relative z-10">
              {PROCESS_STEPS.map((step, idx) => {
                const Icon = getStepIcon(idx);
                const isActive = activeStepIndex === idx;
                return (
                  <button
                    key={step.stepNumber}
                    onClick={() => setActiveStepIndex(idx)}
                    className="flex flex-col items-center group cursor-pointer text-center focus:outline-none"
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-200 border-2 ${
                        isActive
                          ? 'bg-orange-600 border-orange-600 text-white shadow-md scale-110'
                          : 'bg-white border-slate-300 text-slate-700 group-hover:border-slate-500'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="mt-3 text-xs font-mono font-bold text-slate-400">
                      Bước {step.stepNumber}
                    </span>
                    <h3
                      className={`text-xs font-semibold mt-1 transition-colors px-1 ${
                        isActive ? 'text-orange-600' : 'text-slate-800 group-hover:text-slate-900'
                      }`}
                    >
                      {step.title}
                    </h3>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Highlight Card (Desktop) */}
          <div className="bg-slate-50 rounded-lg border border-slate-200 p-8 shadow-xs">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                  <span>Giai đoạn {PROCESS_STEPS[activeStepIndex].stepNumber} / 06</span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span className="text-slate-500">Chuẩn thi công Sài Gòn LS</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {PROCESS_STEPS[activeStepIndex].title}
                </h3>

                <p className="text-sm text-slate-700 leading-relaxed">
                  {PROCESS_STEPS[activeStepIndex].details}
                </p>

                <div className="pt-3 border-t border-slate-200 flex items-center gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    <strong>Kết quả bàn giao mốc này:</strong> {PROCESS_STEPS[activeStepIndex].expectedOutput}
                  </span>
                </div>
              </div>

              <div className="col-span-4 bg-white p-5 rounded border border-slate-200 text-xs space-y-3">
                <div className="font-semibold text-slate-900 border-b border-slate-100 pb-2 flex items-center justify-between">
                  <span>Trình tự 6 bước</span>
                  <span className="text-slate-400 font-mono">B{PROCESS_STEPS[activeStepIndex].stepNumber}</span>
                </div>
                <div className="space-y-1.5 text-slate-600">
                  {PROCESS_STEPS.map((s, i) => (
                    <div
                      key={s.stepNumber}
                      onClick={() => setActiveStepIndex(i)}
                      className={`p-1.5 rounded cursor-pointer transition-colors flex items-center justify-between ${
                        activeStepIndex === i ? 'bg-orange-50 text-orange-700 font-medium' : 'hover:bg-slate-50'
                      }`}
                    >
                      <span>{s.stepNumber}. {s.title}</span>
                      {activeStepIndex === i && <ChevronRight className="w-3.5 h-3.5 text-orange-600" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View: Vertical Timeline */}
        <div className="lg:hidden relative pl-6 border-l-2 border-slate-200 space-y-8">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = getStepIcon(idx);
            return (
              <div key={step.stepNumber} className="relative group">
                {/* Node Bullet */}
                <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-full bg-white border-2 border-orange-600 text-orange-600 flex items-center justify-center font-bold text-xs shadow-xs">
                  <Icon className="w-4 h-4" />
                </div>

                <div className="bg-slate-50 p-4 rounded border border-slate-200">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-orange-600">
                      Bước {step.stepNumber}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {step.details}
                  </p>
                  <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500 flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Đầu ra:</strong> {step.expectedOutput}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
