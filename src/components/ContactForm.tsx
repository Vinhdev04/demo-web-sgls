import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Mail,
  MapPin,
  Building2,
  Hash,
  Loader2,
  Clock,
  RotateCcw
} from 'lucide-react';
import { COMPANY_INFO } from '../data/constructionData';
import { ConsultationFormData, ConsultationSubmission } from '../types';
import { EstimatorTool } from './EstimatorTool';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    phoneNumber: '',
    projectType: 'Nhà phố',
    location: '',
    estimatedArea: '',
    requestContent: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submissionSuccess, setSubmissionSuccess] = useState<ConsultationSubmission | null>(null);

  const projectTypeOptions = [
    'Nhà phố',
    'Biệt thự',
    'Xây dựng nhà ở dân dụng',
    'Sửa chữa và cải tạo công trình',
    'Thi công hoàn thiện',
    'Tư vấn và lập dự toán xây dựng',
  ];

  const handleApplyFromEstimator = (areaStr: string, suggestedType: string) => {
    setFormData((prev) => ({
      ...prev,
      estimatedArea: areaStr,
      projectType: prev.projectType || suggestedType,
    }));
  };

  const validatePhone = (phone: string) => {
    // Standard Vietnamese phone number validation: 10 digits starting with 03, 05, 07, 08, 09
    const cleanPhone = phone.replace(/\s+/g, '').replace(/[-.]/g, '');
    const phoneRegex = /^(0)(3|5|7|8|9)[0-9]{8}$/;
    return phoneRegex.test(cleanPhone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Form validation
    if (!formData.fullName.trim()) {
      setErrorMsg('Vui lòng nhập họ và tên của bạn.');
      return;
    }

    if (!formData.phoneNumber.trim()) {
      setErrorMsg('Vui lòng cung cấp số điện thoại liên hệ.');
      return;
    }

    if (!validatePhone(formData.phoneNumber)) {
      setErrorMsg('Số điện thoại không đúng định dạng Việt Nam (10 số, bắt đầu bằng 03, 05, 07, 08, 09).');
      return;
    }

    if (!formData.location.trim()) {
      setErrorMsg('Vui lòng cung cấp khu vực dự kiến xây dựng (Quận/Huyện hoặc địa phương).');
      return;
    }

    if (!formData.requestContent.trim()) {
      setErrorMsg('Vui lòng chia sẻ sơ bộ nội dung yêu cầu xây dựng để đội ngũ kỹ thuật chuẩn bị.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate real asynchronous processing to the server / local storage registry
      await new Promise((resolve) => setTimeout(resolve, 850));

      const newSubmission: ConsultationSubmission = {
        id: `LS-${Date.now().toString().slice(-6)}`,
        submittedAt: new Date().toLocaleString('vi-VN', {
          hour: '2-digit',
          minute: '2-digit',
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        }),
        data: { ...formData },
      };

      // Store in localStorage for user session recall
      try {
        const stored = JSON.parse(localStorage.getItem('saigon_ls_inquiries') || '[]');
        stored.push(newSubmission);
        localStorage.setItem('saigon_ls_inquiries', JSON.stringify(stored));
      } catch (err) {
        // Safe fallback if storage quota exceeded
      }

      setSubmissionSuccess(newSubmission);
      // Reset form
      setFormData({
        fullName: '',
        phoneNumber: '',
        projectType: 'Nhà phố',
        location: '',
        estimatedArea: '',
        requestContent: '',
      });
    } catch (err) {
      setErrorMsg('Đã có lỗi xảy ra trong quá trình xử lý gửi yêu cầu. Xin vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-orange-600 mb-2">
            Đăng ký tư vấn trực tiếp
          </div>
          {/* Exact Prompt Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3 [text-wrap:balance]">
            Bắt đầu kế hoạch xây dựng của bạn
          </h2>
          {/* Exact Prompt Description */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Liên hệ với Sài Gòn LS để trao đổi về nhu cầu và phương án xây dựng phù hợp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Form Or Success State */}
          <div className="lg:col-span-7">
            {submissionSuccess ? (
              <div className="bg-white rounded-lg border border-emerald-300 p-8 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Đăng Ký Tư Vấn Thành Công!
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Cảm ơn bạn đã gửi thông tin đến <strong>CÔNG TY TNHH XÂY DỰNG SÀI GÒN LS</strong>. Kỹ sư phụ trách sẽ chủ động liên hệ lại qua số điện thoại bạn cung cấp để trao đổi phương án và sắp xếp lịch khảo sát thực địa.
                </p>

                {/* Receipt Card */}
                <div className="bg-slate-50 rounded border border-slate-200 p-4 mb-6 text-xs space-y-2 font-mono">
                  <div className="flex justify-between text-slate-700">
                    <span>Mã hồ sơ tiếp nhận:</span>
                    <strong className="text-orange-600">{submissionSuccess.id}</strong>
                  </div>
                  <div className="flex justify-between text-slate-700">
                    <span>Thời gian ghi nhận:</span>
                    <span>{submissionSuccess.submittedAt}</span>
                  </div>
                  <div className="flex justify-between text-slate-700">
                    <span>Khách hàng:</span>
                    <span>{submissionSuccess.data.fullName}</span>
                  </div>
                  <div className="flex justify-between text-slate-700">
                    <span>Loại công trình:</span>
                    <span>{submissionSuccess.data.projectType}</span>
                  </div>
                  <div className="flex justify-between text-slate-700">
                    <span>Địa bàn:</span>
                    <span>{submissionSuccess.data.location}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSubmissionSuccess(null)}
                  className="py-2.5 px-4 text-xs sm:text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Gửi thêm yêu cầu khác</span>
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4"
              >
                {/* Error Banner */}
                {errorMsg && (
                  <div className="p-3.5 rounded bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Họ và tên <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Ví dụ: Nguyễn Văn An"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="Ví dụ: 0912 345 678"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                {/* Project Type & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Loại công trình <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      {projectTypeOptions.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Khu vực xây dựng <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Ví dụ: Quận Gò Vấp, TP.HCM"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                {/* Estimated Area (Optional, can be populated by Estimator tool) */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Diện tích & Quy mô ước tính (tùy chọn)
                    </label>
                    <span className="text-[11px] text-slate-400">
                      Có thể dùng công cụ tính bên cạnh
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Ví dụ: Đất 4x16m, 1 trệt 2 lầu (~220 m² quy đổi)"
                    value={formData.estimatedArea}
                    onChange={(e) => setFormData({ ...formData, estimatedArea: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                {/* Request Content */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Nội dung yêu cầu <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Mô tả nhu cầu cụ thể: thời gian dự định khởi công, hiện trạng khu đất, yêu cầu công năng (số phòng ngủ, giếng trời, hầm xe, cải tạo...)"
                    value={formData.requestContent}
                    onChange={(e) => setFormData({ ...formData, requestContent: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                {/* Privacy Assurance */}
                <p className="text-[11px] text-slate-500 leading-normal">
                  * Thông tin của bạn được cam kết bảo mật theo chính sách quyền riêng tư và chỉ phục vụ mục đích liên hệ tư vấn xây dựng kỹ thuật từ Công ty TNHH Xây dựng Sài Gòn LS.
                </p>

                {/* Submit Button (Exact required label: “Đăng ký tư vấn”) */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 text-sm sm:text-base font-semibold text-white bg-orange-600 rounded hover:bg-orange-500 active:bg-orange-700 transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Đang xử lý tiếp nhận...</span>
                    </>
                  ) : (
                    <>
                      <span>Đăng ký tư vấn</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Estimator & Official Verification Credentials */}
          <div className="lg:col-span-5 space-y-6">
            {/* Embedded Area Estimator Helper */}
            <EstimatorTool onApplyEstimatedArea={handleApplyFromEstimator} />

            {/* Official Contact Info Box (STRICT: NO INVENTED PHONE NUMBERS!) */}
            <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs text-xs sm:text-sm space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">
                Thông Tin Pháp Nhân Tiếp Nhận
              </h3>

              <div className="flex items-start gap-3">
                <Building2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Đơn vị phụ trách:</span>
                  <span className="font-semibold text-slate-900">{COMPANY_INFO.fullName}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Hash className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Mã số thuế:</span>
                  <span className="font-mono font-semibold text-slate-800">{COMPANY_INFO.taxId}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Email liên hệ trực tiếp:</span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-orange-600 hover:underline font-medium break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Địa chỉ:</span>
                  <span className="text-slate-700">{COMPANY_INFO.address}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Tiếp nhận yêu cầu tư vấn và khảo sát hiện trường các ngày trong tuần.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
