import { ServiceItem, ProcessStep, ProjectTypology, CoreValue } from '../types';

export const COMPANY_INFO = {
  fullName: 'CÔNG TY TNHH XÂY DỰNG SÀI GÒN LS',
  brandName: 'SÀI GÒN LS',
  taxId: '0315838620',
  email: 'Trinhminhthangxd@gmail.com',
  address: '160/24/19 Phan Huy Ích, Phường An Hội Tây, TP. Hồ Chí Minh',
  tagline: 'KIẾN TẠO KHÔNG GIAN SỐNG – VỮNG BỀN THEO THỜI GIAN',
  subTagline: 'Đồng hành cùng khách hàng trong hành trình xây dựng và hoàn thiện công trình với sự chỉn chu, trách nhiệm và chất lượng.',
  aboutTitle: 'Xây dựng bằng trách nhiệm – Phát triển bằng uy tín',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'xay-dung-nha-o',
    code: 'DV-01',
    title: 'Xây dựng nhà ở',
    category: 'construction',
    shortDesc: 'Thi công xây dựng nhà ở dân dụng trọn gói hoặc phần thô, đảm bảo tiêu chuẩn kết cấu và kỹ thuật an toàn.',
    scopeList: [
      'Gia cố móng và kết cấu chịu lực theo hồ sơ thiết kế',
      'Xây tô tường bao, tường ngăn và hệ thống cốt thép dầm sàn',
      'Thi công hệ thống điện nước âm tường đồng bộ',
      'Kiểm tra cao độ, độ thẳng đứng và độ phẳng từng cấu kiện'
    ],
    features: ['Kiểm soát vật tư đầu vào', 'Giám sát kỹ thuật từng giai đoạn', 'Biên bản nghiệm thu chuyển bước'],
    technicalFocus: 'Tuân thủ quy chuẩn kỹ thuật xây dựng dân dụng, kiểm tra mác bê tông và liên kết thép trước mỗi đợt đổ sàn.'
  },
  {
    id: 'thi-cong-nha-pho',
    code: 'DV-02',
    title: 'Thi công nhà phố',
    category: 'construction',
    shortDesc: 'Giải pháp thi công nhà phố liền kề, nhà ống đô thị với biện pháp bảo vệ công trình lân cận tối ưu.',
    scopeList: [
      'Khảo sát địa chất và công trình liền kề trước khi đào móng',
      'Biện pháp ép cừ, chống vách ngăn sạt lở đối với ngõ hẹp',
      'Định vị tim trục chính xác, tận dụng tối đa diện tích cấp phép',
      'Xử lý chống thấm tường giáp ranh và hộp kỹ thuật'
    ],
    features: ['Biện pháp thi công hẻm nhỏ', 'Bảo đảm an toàn nhà liền kề', 'Quản lý vệ sinh đô thị'],
    technicalFocus: 'Giải pháp kết cấu tối ưu cho không gian hẹp đô thị, bảo đảm che chắn an toàn lưới bao che.'
  },
  {
    id: 'thi-cong-biet-thu',
    code: 'DV-03',
    title: 'Thi công biệt thự',
    category: 'construction',
    shortDesc: 'Thi công biệt thự phố, biệt thự vườn với yêu cầu khắt khe về khẩu độ dầm, trần cao và chi tiết kiến trúc.',
    scopeList: [
      'Thi công kết cấu khẩu độ lớn, không gian mở thông tầng',
      'Gia công khuôn đúc bê tông và chỉ phào mặt đứng sắc nét',
      'Xử lý cách nhiệt mái, chống thấm sàn ban công và mái dốc',
      'Lắp đặt chuẩn bị hạ tầng thông gió, điều hòa âm trần'
    ],
    features: ['Độ chính xác chi tiết cao', 'Phối hợp hạ tầng kỹ thuật phức tạp', 'Vật liệu hoàn thiện đồng bộ'],
    technicalFocus: 'Định hình đường nét kiến trúc sắc sảo, kiểm soát nghiêm ngặt dung sai hình học theo bản vẽ.'
  },
  {
    id: 'sua-chua-cai-tao',
    code: 'DV-04',
    title: 'Sửa chữa và cải tạo công trình',
    category: 'renovation',
    shortDesc: 'Khảo sát thực trạng kết cấu cũ, gia cường dầm cột, nâng tầng hoặc phân chia lại công năng sử dụng.',
    scopeList: [
      'Khảo sát hiện trạng nứt lún, kiểm tra khả năng chịu lực',
      'Đục dỡ an toàn, gia cố dầm cấy thép hoặc kết cấu khung thép',
      'Cải tạo hệ thống cấp thoát nước và đường dây điện quá tải',
      'Chống thấm lại ban công, sàn vệ sinh và mái dột'
    ],
    features: ['Đánh giá hiện trạng trung thực', 'Biện pháp gia cố an toàn', 'Tối ưu chi phí cải tạo'],
    technicalFocus: 'Đảm bảo sự an toàn tuyệt đối cho hệ khung kết cấu nguyên bản trước khi cải tạo phân chia phòng.'
  },
  {
    id: 'thi-cong-hoan-thien',
    code: 'DV-05',
    title: 'Thi công hoàn thiện',
    category: 'finishing',
    shortDesc: 'Hoàn thiện bề mặt nội ngoại thất: ốp lát gạch đá, bả mastic, sơn nước, trần thạch cao và lắp đặt thiết bị.',
    scopeList: [
      'Trát tường phẳng đều, kiểm tra góc ke thước và rọi bọt nước',
      'Ốp lát gạch men, đá granite chuẩn ron thẳng và mặt phẳng phẳng',
      'Sơn nước lót kháng kiềm và sơn màu 2 lớp theo chỉ định',
      'Lắp đặt thiết bị vệ sinh, đèn chiếu sáng và công tắc hoàn chỉnh'
    ],
    features: ['Đường ron chuẩn xác', 'Bề mặt sơn mịn phẳng', 'Bảo quản sản phẩm trước bàn giao'],
    technicalFocus: 'Tỉ mỉ từng đường nẹp, góc chỉ và mặt tiếp giáp vật liệu nhằm mang lại thẩm mỹ tinh tế cho ngôi nhà.'
  },
  {
    id: 'tu-van-du-toan',
    code: 'DV-06',
    title: 'Tư vấn và lập dự toán xây dựng',
    category: 'consultation',
    shortDesc: 'Bóc tách khối lượng chi tiết từ bản vẽ, lập bảng dự toán minh bạch từng mã vật tư và nhân công.',
    scopeList: [
      'Bóc tách khối lượng cốt thép, bê tông, gạch cát đá chính xác',
      'Phân loại chi tiết hạng mục phần thô và hoàn thiện',
      'Lập bảng chủng loại vật tư với quy cách và xuất xứ rõ ràng',
      'Tư vấn tối ưu vật liệu phù hợp với mức ngân sách của gia chủ'
    ],
    features: ['Bảng bóc tách chi tiết', 'Minh bạch nguồn gốc vật tư', 'Không phát sinh mơ hồ'],
    technicalFocus: 'Dự toán dựa trên định mức khối lượng thực tế, hạn chế tối đa rủi ro phát sinh trong quá trình thi công.'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Tiếp nhận nhu cầu',
    summary: 'Lắng nghe mong muốn của gia chủ về quy mô, công năng và dự định thời gian khởi công.',
    details: 'Đội ngũ Sài Gòn LS tiếp nhận thông tin ban đầu về diện tích đất, số tầng mong muốn, mục đích sử dụng và các yêu cầu đặc thù của khách hàng.',
    expectedOutput: 'Phiếu ghi nhận thông tin nhu cầu & định hướng quy mô'
  },
  {
    stepNumber: '02',
    title: 'Khảo sát hiện trạng',
    summary: 'Đến tận khu đất đo đạc ranh mốc, quan sát địa chất và công trình tiếp giáp lân cận.',
    details: 'Kiểm tra hiện trạng đường ngõ vận chuyển vật tư, đường cấp điện nước tạm, hiện trạng nhà lân cận để lập phương án thi công an toàn.',
    expectedOutput: 'Biên bản khảo sát thực địa & đánh giá điều kiện thi công'
  },
  {
    stepNumber: '03',
    title: 'Tư vấn phương án và dự toán',
    summary: 'Lập phương án mặt bằng kết cấu sơ bộ và bảng dự toán chi tiết các hạng mục.',
    details: 'Trao đổi kỹ lưỡng với gia chủ về chủng loại vật tư, giải pháp móng thích hợp và bảng phân tích chi phí minh bạch từng công tác.',
    expectedOutput: 'Bản vẽ giải pháp sơ bộ & Bảng bóc tách dự toán chi tiết'
  },
  {
    stepNumber: '04',
    title: 'Thống nhất phạm vi, chi phí và hợp đồng',
    summary: 'Rà soát cặn kẽ từng điều khoản, phụ lục vật tư và tiến độ trước khi ký kết hợp đồng.',
    details: 'Minh bạch từng chủng loại vật liệu (thương hiệu, quy cách), quy định các mốc thanh toán gắn liền với giai đoạn nghiệm thu thực tế.',
    expectedOutput: 'Hợp đồng thi công có đầy đủ phụ lục vật tư & tiến độ'
  },
  {
    stepNumber: '05',
    title: 'Triển khai thi công',
    summary: 'Tập kết máy móc thiết bị, che chắn an toàn và tiến hành thi công theo đúng bản vẽ kỹ thuật.',
    details: 'Kỹ sư phụ trách trực tiếp kiểm tra cốt thép, cốp pha trước khi đổ bê tông; kiểm tra vật tư nhập công trường đúng cam kết theo hợp đồng.',
    expectedOutput: 'Nhật ký công trình & Biên bản nghiệm thu từng giai đoạn'
  },
  {
    stepNumber: '06',
    title: 'Nghiệm thu và bàn giao',
    summary: 'Kiểm tra tổng thể toàn bộ công trình, vệ sinh công nghiệp và bàn giao chìa khóa cho chủ nhà.',
    details: 'Chủ đầu tư cùng kỹ sư kiểm tra vận hành hệ thống điện nước, đóng mở cửa, mặt sàn sơn tường; bàn giao hồ sơ hoàn công và hướng dẫn sử dụng.',
    expectedOutput: 'Biên bản bàn giao công trình & Hồ sơ lưu trữ kỹ thuật'
  }
];

export const CORE_VALUES: CoreValue[] = [
  {
    id: 'chat-luong-thi-cong',
    title: 'Chú trọng chất lượng thi công',
    description: 'Kiểm soát chặt chẽ từng mối nối cốt thép, mác bê tông và kỹ thuật trát ốp, đặt độ bền và sự an toàn của công trình lên hàng đầu.',
    principle: 'Tuân thủ đúng quy chuẩn kỹ thuật xây dựng và bản vẽ kết cấu.'
  },
  {
    id: 'quy-trinh-ro-rang',
    title: 'Quy trình làm việc rõ ràng',
    description: 'Mọi bước từ khảo sát, lập dự toán, thi công đến bàn giao đều được văn bản hóa cụ thể, giúp khách hàng luôn nắm rõ tiến độ.',
    principle: 'Minh bạch các mốc nghiệm thu chuyển bước công tác.'
  },
  {
    id: 'minh-bach-chi-phi',
    title: 'Minh bạch về phạm vi và chi phí',
    description: 'Bóc tách chi tiết khối lượng và chủng loại vật liệu ngay từ ban đầu. Không mập mờ điều khoản, hạn chế rủi ro phát sinh.',
    principle: 'Báo giá rõ ràng theo đúng phụ lục vật tư thống nhất.'
  },
  {
    id: 'dong-hanh-trien-khai',
    title: 'Đồng hành trong quá trình triển khai',
    description: 'Kỹ sư trực tiếp theo dõi tại công trình, sẵn sàng lắng nghe và phối hợp cùng chủ nhà giải quyết nhanh các tình huống thực địa.',
    principle: 'Trách nhiệm trực tiếp, giải đáp thỏa đáng thắc mắc của gia chủ.'
  },
  {
    id: 'tien-do-va-an-toan',
    title: 'Quan tâm đến tiến độ và an toàn công trình',
    description: 'Trang bị bảo hộ lao động, lưới che chắn công trình, giữ gìn vệ sinh môi trường xung quanh và kiểm soát tiến độ từng tuần.',
    principle: 'An toàn lao động và bảo vệ công trình lân cận là nghĩa vụ bắt buộc.'
  }
];

export const PROJECT_TYPOLOGIES: ProjectTypology[] = [
  {
    id: 'nha-pho-do-thi',
    title: 'Nhà phố hiện đại đô thị',
    category: 'townhouse',
    categoryLabel: 'Nhà phố',
    scaleDescription: 'Quy mô thông dụng: 1 trệt 2 lầu + sân thượng tum, mặt tiền từ 4m - 6m.',
    structuralNotes: [
      'Giải pháp móng cọc bê tông cốt thép xử lý hẻm',
      'Khung bê tông cốt thép toàn khối kiên cố',
      'Hệ lam chắn nắng và thông gió giếng trời tự nhiên'
    ],
    status: 'updating'
  },
  {
    id: 'biet-thu-hien-dai',
    title: 'Biệt thự sân vườn hiện đại',
    category: 'villa',
    categoryLabel: 'Biệt thự',
    scaleDescription: 'Quy mô thông dụng: Biệt thự 2 - 3 tầng mái dốc hoặc mái bằng, khuôn viên rộng.',
    structuralNotes: [
      'Kết cấu dầm khẩu độ lớn, không gian phòng khách liên thông bếp',
      'Xử lý chống thấm đa lớp cho ban công sân vườn và mái',
      'Hệ cửa nhôm kính khổ lớn chịu lực gió tốt'
    ],
    status: 'updating'
  },
  {
    id: 'cai-tao-nang-tang',
    title: 'Cải tạo và nâng tầng nhà cũ',
    category: 'renovation',
    categoryLabel: 'Cải tạo',
    scaleDescription: 'Cải tạo hiện trạng nhà cấp 4 hoặc nhà 1 tầng lên thêm tầng, gia cố móng dầm.',
    structuralNotes: [
      'Khoan cấy thép dầm cột bằng hóa chất chuyên dụng',
      'Sử dụng sàn deck hoặc sàn nhẹ giảm tải cho móng cũ',
      'Bố trí lại vị trí cầu thang và hệ thống cấp thoát nước'
    ],
    status: 'updating'
  },
  {
    id: 'hoan-thien-nha-tho',
    title: 'Hoàn thiện nhà xây thô',
    category: 'finishing',
    categoryLabel: 'Hoàn thiện',
    scaleDescription: 'Nhận bàn giao phần thô khu đô thị hoặc tự xây, triển khai trát ốp sơn bả hoàn thiện.',
    structuralNotes: [
      'Xử lý bề mặt chống nứt cổ trần và tiếp giáp dầm tường',
      'Chống thấm sàn toilet bằng màng xi măng polymer đàn hồi',
      'Lát gạch khổ lớn cân bằng laser'
    ],
    status: 'updating'
  }
];
