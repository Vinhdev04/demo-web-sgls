import React, { useState } from 'react';
import { Calculator, Check, ArrowRight } from 'lucide-react';

interface EstimatorToolProps {
  onApplyEstimatedArea: (area: string, type: string) => void;
}

export const EstimatorTool: React.FC<EstimatorToolProps> = ({ onApplyEstimatedArea }) => {
  const [width, setWidth] = useState<number>(4);
  const [length, setLength] = useState<number>(15);
  const [floors, setFloors] = useState<number>(3); // Trệt + 2 lầu
  const [foundationType, setFoundationType] = useState<'single' | 'pile' | 'strip'>('pile');
  const [roofType, setRoofType] = useState<'corrugated' | 'concrete' | 'tile'>('concrete');
  const [hasBalcony, setHasBalcony] = useState<boolean>(true);

  // Ground footprint
  const footprint = width * length;

  // Foundation coefficients
  // Móng đơn: 30%, Móng cọc: 40%, Móng băng: 50%
  const foundationCoef = foundationType === 'single' ? 0.3 : foundationType === 'pile' ? 0.4 : 0.5;
  const foundationArea = footprint * foundationCoef;

  // Floors area (100% per floor)
  const floorArea = footprint * floors;

  // Roof coefficient: Tôn 30%, BTCT 50%, Ngói 70%
  const roofCoef = roofType === 'corrugated' ? 0.3 : roofType === 'concrete' ? 0.5 : 0.7;
  const roofArea = footprint * roofCoef;

  // Balconies / terrace
  const extraArea = hasBalcony ? footprint * 0.15 : 0;

  // Total equivalent construction area (m2 quy đổi)
  const totalArea = Math.round(foundationArea + floorArea + roofArea + extraArea);

  const handleApply = () => {
    onApplyEstimatedArea(
      `${totalArea} m² (${floors} tầng, đất ${width}m x ${length}m)`,
      floors >= 3 ? 'Nhà phố' : 'Nhà ở riêng lẻ'
    );
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-7 shadow-xs">
      <div className="flex items-center gap-3 pb-4 border-b border-slate-200 mb-5">
        <div className="w-8 h-8 rounded bg-[#0f233a] flex items-center justify-center text-orange-400">
          <Calculator className="w-4 h-4" />
        </div>
        <div>
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            Ước Tính Diện Tích Xây Dựng Quy Đổi (m²)
          </h3>
          <p className="text-xs text-slate-500">
            Phương pháp tính diện tích xây dựng phổ biến tại TP.HCM
          </p>
        </div>
      </div>

      <div className="space-y-4 text-xs sm:text-sm">
        {/* Dimensions */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-slate-600 font-medium mb-1">
              Chiều rộng đất (m):
            </label>
            <input
              type="number"
              min="2"
              max="30"
              step="0.5"
              value={width}
              onChange={(e) => setWidth(Math.max(1, parseFloat(e.target.value) || 0))}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded focus:ring-1 focus:ring-orange-500 focus:bg-white text-slate-900 font-mono"
            />
          </div>
          <div>
            <label className="block text-slate-600 font-medium mb-1">
              Chiều dài đất (m):
            </label>
            <input
              type="number"
              min="3"
              max="50"
              step="0.5"
              value={length}
              onChange={(e) => setLength(Math.max(1, parseFloat(e.target.value) || 0))}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded focus:ring-1 focus:ring-orange-500 focus:bg-white text-slate-900 font-mono"
            />
          </div>
        </div>

        {/* Floors */}
        <div>
          <label className="block text-slate-600 font-medium mb-1">
            Tổng số tầng (Trệt + lầu):
          </label>
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFloors(f)}
                className={`py-1.5 px-2 text-center text-xs font-medium rounded border cursor-pointer ${
                  floors === f
                    ? 'bg-[#0f233a] text-white border-[#0f233a]'
                    : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
                }`}
              >
                {f} tầng
              </button>
            ))}
          </div>
        </div>

        {/* Foundation & Roof */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-slate-600 font-medium mb-1">
              Hệ móng dự kiến:
            </label>
            <select
              value={foundationType}
              onChange={(e) => setFoundationType(e.target.value as any)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded focus:ring-1 focus:ring-orange-500 text-xs text-slate-900"
            >
              <option value="single">Móng đơn (30%)</option>
              <option value="pile">Móng cọc (40%)</option>
              <option value="strip">Móng băng (50%)</option>
            </select>
          </div>
          <div>
            <label className="block text-slate-600 font-medium mb-1">
              Hệ kết cấu mái:
            </label>
            <select
              value={roofType}
              onChange={(e) => setRoofType(e.target.value as any)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded focus:ring-1 focus:ring-orange-500 text-xs text-slate-900"
            >
              <option value="concrete">Mái BTCT (50%)</option>
              <option value="corrugated">Mái tôn (30%)</option>
              <option value="tile">Mái ngói kèo sắt (70%)</option>
            </select>
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-2 pt-1">
          <input
            type="checkbox"
            id="balcony"
            checked={hasBalcony}
            onChange={(e) => setHasBalcony(e.target.checked)}
            className="w-4 h-4 rounded text-orange-600 focus:ring-orange-500 border-slate-300"
          />
          <label htmlFor="balcony" className="text-xs text-slate-600 cursor-pointer">
            Có ban công / tum thang sân thượng (hệ số ~15%)
          </label>
        </div>

        {/* Calculated Result Box */}
        <div className="mt-5 p-4 rounded bg-slate-50 border border-slate-200 space-y-2">
          <div className="flex justify-between items-center text-xs text-slate-600">
            <span>Diện tích sàn khuôn viên đất:</span>
            <span className="font-mono font-semibold text-slate-900">{footprint} m²</span>
          </div>
          <div className="flex justify-between items-center text-sm font-bold text-slate-900 pt-2 border-t border-slate-200">
            <span>Tổng diện tích xây dựng quy đổi:</span>
            <span className="font-mono text-base text-orange-600">{totalArea} m²</span>
          </div>
          <p className="text-[11px] text-slate-400 italic">
            * Diện tích quy đổi dùng để ước tính vật tư phần thô & nhân công theo thực tế hiện trường.
          </p>
        </div>

        {/* Action button */}
        <button
          type="button"
          onClick={handleApply}
          className="w-full py-2 px-3 text-xs font-semibold text-slate-900 bg-orange-100 hover:bg-orange-200 border border-orange-300 rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <span>Áp dụng số liệu này vào mẫu đăng ký tư vấn</span>
          <ArrowRight className="w-3.5 h-3.5 text-orange-700" />
        </button>
      </div>
    </div>
  );
};
