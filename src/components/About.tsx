import React from 'react';
import { ShieldCheck, Eye, HeartHandshake, MapPin, Mail, Hash, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/constructionData';

export const About: React.FC = () => {
  const guidingValues = [
    {
      icon: ShieldCheck,
      title: 'Chất lượng thi công',
      desc: 'Chú trọng vào chuẩn mực kỹ thuật kết cấu, từ công tác gia cố móng, đan buộc cốt thép dầm sàn đến mác bê tông và kỹ thuật xây trát phẳng đều.',
    },
    {
      icon: Eye,
      title: 'Tính minh bạch',
      desc: 'Minh bạch từ bảng bóc tách dự toán, quy cách và thương hiệu vật tư đến tiến độ giải ngân gắn liền với từng giai đoạn nghiệm thu thực tế.',
    },
    {
      icon: HeartHandshake,
      title: 'Sự tận tâm',
      desc: 'Đội ngũ kỹ sư trực tiếp bám sát công trình, lắng nghe nguyện vọng của gia chủ và chủ động phối hợp xử lý các vấn đề kỹ thuật phát sinh tại hiện trường.',
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Story & Guiding Values */}
          <div className="lg:col-span-7">
            {/* Section Tag */}
            <div className="text-xs font-semibold tracking-wider uppercase text-orange-600 mb-2">
              Giới thiệu doanh nghiệp
            </div>

            {/* Title (Exact user prompt title) */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-6 [text-wrap:balance]">
              {COMPANY_INFO.aboutTitle}
            </h2>

            {/* Introduction Paragraphs */}
            <div className="space-y-4 text-slate-600 text-base leading-relaxed mb-8">
              <p>
                <strong className="text-slate-900 font-semibold">{COMPANY_INFO.fullName}</strong> là đơn vị hoạt động chuyên nghiệp trong lĩnh vực thi công xây dựng nhà ở dân dụng, nhà phố, biệt thự và cải tạo công trình tại khu vực TP. Hồ Chí Minh.
              </p>
              <p>
                Ý thức được rằng mỗi ngôi nhà là tâm huyết và tích lũy lâu dài của mỗi gia đình, Sài Gòn LS luôn đặt sự chuẩn mực kết cấu và tính trung thực nghề nghiệp lên hàng đầu. Chúng tôi không chạy theo số lượng mà tập trung chăm chút kỹ thuật cho từng công trình phụ trách, đảm bảo tính bền vững lâu dài theo thời gian.
              </p>
            </div>

            {/* 3 Guiding Values Cards */}
            <div className="space-y-4 mb-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2">
                Giá trị định hướng cốt lõi
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {guidingValues.map((val) => {
                  const Icon = val.icon;
                  return (
                    <div
                      key={val.title}
                      className="p-4 rounded border border-slate-200 bg-slate-50/70 hover:border-slate-300 transition-colors"
                    >
                      <div className="flex items-start gap-3.5">
                        <div className="w-9 h-9 rounded bg-[#0f233a] flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 mb-1">
                            {val.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {val.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Transparent Note required by brief */}
            <p className="text-xs text-slate-400 italic">
              * Ghi chú: Các giá trị trên là định hướng nội dung thiết kế và tiêu chuẩn hoạt động của Sài Gòn LS trong quá trình triển khai dịch vụ cùng khách hàng.
            </p>
          </div>

          {/* Right Column: Company Legal & Operational Credentials Frame */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 text-white rounded-lg p-6 sm:p-8 border border-slate-800 shadow-lg">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800 mb-6">
                <div className="w-10 h-10 rounded bg-orange-600 flex items-center justify-center text-white font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    Thông Tin Doanh Nghiệp
                  </h3>
                  <span className="text-xs text-slate-400">
                    Pháp nhân đăng ký kinh doanh chính thức
                  </span>
                </div>
              </div>

              {/* Verified Company Details */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3 p-3 rounded bg-slate-800/60 border border-slate-700/60">
                  <Building2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs">Tên doanh nghiệp:</span>
                    <strong className="text-slate-100 font-semibold">{COMPANY_INFO.fullName}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded bg-slate-800/60 border border-slate-700/60">
                  <Hash className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs">Mã số thuế:</span>
                    <strong className="text-slate-100 font-mono tracking-wider font-semibold">
                      {COMPANY_INFO.taxId}
                    </strong>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded bg-slate-800/60 border border-slate-700/60">
                  <Mail className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs">Email liên hệ:</span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-orange-400 hover:underline font-medium break-all"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded bg-slate-800/60 border border-slate-700/60">
                  <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs">Địa chỉ trụ sở:</span>
                    <span className="text-slate-200">
                      {COMPANY_INFO.address}
                    </span>
                  </div>
                </div>
              </div>

              {/* Working Principle Statement */}
              <div className="mt-6 pt-5 border-t border-slate-800">
                <div className="text-xs text-slate-300 bg-slate-800/40 p-3.5 rounded border border-slate-700/40 leading-relaxed">
                  <strong className="text-orange-400 block font-semibold mb-1">
                    Nguyên tắc làm việc của Sài Gòn LS:
                  </strong>
                  Mọi công trình đều được khảo sát thực tế, bàn bạc phương án kỹ thuật và ký kết hợp đồng minh bạch cùng phụ lục vật tư trước khi khởi công.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
