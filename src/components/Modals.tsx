import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, Shield, FileText, Send, Loader2 } from 'lucide-react';
import { ServiceItem } from '../types';
import { COMPANY_INFO } from '../data/constructionData';

// 1. Service Detail Modal
interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForQuote: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectForQuote,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-lg shadow-xl border border-slate-200 max-w-lg w-full max-h-[90vh] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200 bg-slate-50">
          <div>
            <span className="text-[11px] font-mono font-bold text-orange-600 uppercase tracking-wider block">
              Mã dịch vụ: {service.code}
            </span>
            <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded transition-colors"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm text-slate-600">
          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-1.5">
              Mô tả dịch vụ
            </h4>
            <p className="leading-relaxed">{service.shortDesc}</p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-2">
              Các hạng mục triển khai chi tiết
            </h4>
            <ul className="space-y-2">
              {service.scopeList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3.5 rounded bg-slate-50 border border-slate-200">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-1">
              Tiêu chuẩn kỹ thuật trọng tâm
            </h4>
            <p className="text-slate-600 leading-relaxed text-xs">
              {service.technicalFocus}
            </p>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-2 text-[11px]">
            {service.features.map((feat, idx) => (
              <span
                key={idx}
                className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded font-medium border border-slate-200"
              >
                {feat}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Đóng
          </button>
          <button
            onClick={() => {
              onClose();
              onSelectForQuote(service.title);
            }}
            className="px-4 py-2 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded transition-colors shadow-xs"
          >
            Yêu cầu báo giá dịch vụ này
          </button>
        </div>
      </div>
    </div>
  );
};

// 2. Quote Request Modal
interface QuoteRequestModalProps {
  isOpen: boolean;
  prefilledType?: string;
  onClose: () => void;
}

export const QuoteRequestModal: React.FC<QuoteRequestModalProps> = ({
  isOpen,
  prefilledType,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState(prefilledType || 'Nhà phố');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successCode, setSuccessCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const validatePhone = (num: string) => {
    const clean = num.replace(/\s+/g, '').replace(/[-.]/g, '');
    return /^(0)(3|5|7|8|9)[0-9]{8}$/.test(clean);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError('Vui lòng cung cấp họ và tên.');
      return;
    }
    if (!phone.trim()) {
      setError('Vui lòng cung cấp số điện thoại liên hệ.');
      return;
    }
    if (!validatePhone(phone)) {
      setError('Số điện thoại không đúng định dạng (10 số, đầu số 03, 05, 07, 08, 09).');
      return;
    }

    setSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      const code = `BG-${Date.now().toString().slice(-6)}`;
      setSuccessCode(code);
    } catch {
      setError('Đã có lỗi xảy ra. Vui lòng thử lại.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-lg shadow-xl border border-slate-200 max-w-md w-full overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200 bg-slate-50">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Yêu Cầu Báo Giá Thi Công
            </h3>
            <span className="text-xs text-slate-500">
              {COMPANY_INFO.fullName}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {successCode ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900">
                Tiếp Nhận Thành Công!
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mã yêu cầu: <strong className="text-orange-600 font-mono">{successCode}</strong>.
                Kỹ sư dự toán của Sài Gòn LS sẽ chủ động liên hệ trong thời gian sớm nhất để trao đổi cụ thể.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded transition-colors"
              >
                Đóng cửa sổ
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs sm:text-sm">
              {error && (
                <div className="p-3 rounded bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Họ và tên <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Họ và tên của bạn"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="0912 345 678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Hạng mục quan tâm
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-orange-500"
                >
                  <option value="Nhà phố">Thi công nhà phố</option>
                  <option value="Biệt thự">Thi công biệt thự</option>
                  <option value="Xây dựng nhà ở">Xây dựng nhà ở</option>
                  <option value="Sửa chữa cải tạo">Sửa chữa và cải tạo</option>
                  <option value="Hoàn thiện">Thi công hoàn thiện</option>
                  <option value="Dự toán">Tư vấn & lập dự toán</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Khu vực dự kiến
                </label>
                <input
                  type="text"
                  placeholder="Ví dụ: Quận Tân Bình, TP.HCM"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Ghi chú mong muốn (nếu có)
                </label>
                <textarea
                  rows={2}
                  placeholder="Diện tích đất, quy mô số tầng, thời gian dự kiến..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-2.5 px-4 text-xs sm:text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Đang gửi thông tin...</span>
                    </>
                  ) : (
                    <>
                      <span>Gửi yêu cầu báo giá</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

// 3. Privacy Policy Modal
interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-lg shadow-xl border border-slate-200 max-w-xl w-full max-h-[85vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-orange-600" />
            <h3 className="text-base font-bold text-slate-900">
              Chính Sách Bảo Mật Thông Tin Khách Hàng
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <div>
            <h4 className="font-bold text-slate-900 mb-1">1. Mục đích thu thập thông tin</h4>
            <p>
              Website của <strong>CÔNG TY TNHH XÂY DỰNG SÀI GÒN LS</strong> (MST: 0315838620) chỉ thu thập thông tin khách hàng (họ tên, số điện thoại, vị trí khu đất và nội dung yêu cầu) phục vụ duy nhất cho mục đích liên hệ tư vấn chuyên môn, khảo sát công trình thực địa và lập dự toán theo nguyện vọng của quý khách.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-1">2. Phạm vi sử dụng thông tin</h4>
            <p>
              Thông tin được tiếp nhận và xử lý nội bộ bởi các kỹ sư và chuyên viên tư vấn của Sài Gòn LS. Chúng tôi tuyệt đối không mua bán, trao đổi hoặc cung cấp dữ liệu số điện thoại của khách hàng cho bất kỳ bên thứ ba nào.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-1">3. Bảo mật hồ sơ công trình và hình ảnh</h4>
            <p>
              Bản vẽ kiến trúc, kết cấu và hồ sơ hiện trạng của gia đình quý khách được bảo mật tuyệt đối. Chúng tôi không tự ý chụp ảnh hay công khai hình ảnh không gian sống của gia chủ khi chưa có sự cho phép bằng văn bản.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-1">4. Đơn vị thu thập và quản lý thông tin</h4>
            <p>
              <strong>CÔNG TY TNHH XÂY DỰNG SÀI GÒN LS</strong><br />
              Mã số thuế: 0315838620<br />
              Email: Trinhminhthangxd@gmail.com<br />
              Địa chỉ: 160/24/19 Phan Huy Ích, Phường An Hội Tây, TP. Hồ Chí Minh
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded transition-colors"
          >
            Đã hiểu & Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
