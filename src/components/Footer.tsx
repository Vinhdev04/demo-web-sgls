import React from 'react';
import { Compass, Mail, MapPin, Hash, Shield, ArrowUp } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/constructionData';

interface FooterProps {
  onOpenPrivacyModal: () => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacyModal, onOpenQuoteModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b1726] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Company Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-orange-600 flex items-center justify-center text-white font-bold">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <span className="text-base font-bold text-white tracking-wide">
                {COMPANY_INFO.brandName}
              </span>
            </div>

            <p className="text-sm font-semibold text-white">
              {COMPANY_INFO.fullName}
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Đồng hành cùng khách hàng trong hành trình xây dựng và hoàn thiện công trình với sự chỉn chu, trách nhiệm và chất lượng.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <Hash className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-400">Mã số thuế:</strong>{' '}
                  <span className="font-mono text-white">{COMPANY_INFO.taxId}</span>
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-400">Email:</strong>{' '}
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-orange-400 hover:underline"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-400">Địa chỉ:</strong>{' '}
                  <span className="text-slate-200">{COMPANY_INFO.address}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Liên kết nhanh
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-orange-400 transition-colors">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-orange-400 transition-colors">
                  Giới thiệu doanh nghiệp
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  Dịch vụ thi công
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-orange-400 transition-colors">
                  Hồ sơ công trình & Kiến trúc
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-orange-400 transition-colors">
                  Quy trình 6 bước
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-400 transition-colors">
                  Đăng ký tư vấn trực tiếp
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenPrivacyModal}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 pt-1"
                >
                  <Shield className="w-3.5 h-3.5 text-orange-400" />
                  <span>Chính sách bảo mật thông tin</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services List */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Dịch vụ chính
            </h3>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-orange-400 transition-colors line-clamp-1">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <button
                onClick={onOpenQuoteModal}
                className="w-full py-2 px-3 text-xs font-semibold text-white bg-slate-800 hover:bg-orange-600 border border-slate-700 rounded transition-colors cursor-pointer text-center"
              >
                Gửi yêu cầu báo giá nhanh
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.fullName}. Bản quyền thuộc về doanh nghiệp.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPrivacyModal}
              className="hover:text-slate-400 transition-colors cursor-pointer"
            >
              Chính sách bảo mật
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
              title="Lên đầu trang"
            >
              <span>Về đầu trang</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
