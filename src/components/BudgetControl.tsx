import React from 'react';
import { BudgetMode } from '../types/golf';

interface BudgetControlProps {
  mode: BudgetMode;
  value: number;
  onModeChange: (mode: BudgetMode) => void;
  onValueChange: (value: number) => void;
}

export const BudgetControl: React.FC<BudgetControlProps> = ({
  mode,
  value,
  onModeChange,
  onValueChange,
}) => {
  const minVal = 10000;
  const maxVal = 120000;
  const percentage = Math.min(100, Math.max(0, ((value - minVal) / (maxVal - minVal)) * 100));

  const formatTWD = (amount: number) => {
    return new Intl.NumberFormat('zh-TW', {
      style: 'currency',
      currency: 'TWD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const quickPresets = [15000, 25000, 35000, 50000, 75000, 100000];

  return (
    <div className="space-y-6">
      {/* 快速模式切換按鈕組 (包含「越便宜越好」、「滑桿指定」、「無上限」) */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 p-1.5 bg-[#EFECE6] rounded-xl border border-[#DDD7CD]">
        <button
          type="button"
          onClick={() => onModeChange('cheapest')}
          className={`py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold rounded-lg transition-all text-center cursor-pointer ${
            mode === 'cheapest'
              ? 'bg-[#12291E] text-white shadow-sm'
              : 'text-stone-700 hover:text-stone-900 hover:bg-[#E5E1D8]'
          }`}
        >
          <span className="block font-bold">越便宜越好</span>
          <span className="block text-[11px] opacity-80 font-normal">淘寶/好市多/迪卡農</span>
        </button>

        <button
          type="button"
          onClick={() => onModeChange('slider')}
          className={`py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold rounded-lg transition-all text-center cursor-pointer ${
            mode === 'slider'
              ? 'bg-[#12291E] text-white shadow-sm'
              : 'text-stone-700 hover:text-stone-900 hover:bg-[#E5E1D8]'
          }`}
        >
          <span className="block font-bold">自訂金額範圍</span>
          <span className="block text-[11px] opacity-80 font-normal">拉霸自由拖曳設定</span>
        </button>

        <button
          type="button"
          onClick={() => onModeChange('unlimited')}
          className={`py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold rounded-lg transition-all text-center cursor-pointer ${
            mode === 'unlimited'
              ? 'bg-[#12291E] text-white shadow-sm'
              : 'text-stone-700 hover:text-stone-900 hover:bg-[#E5E1D8]'
          }`}
        >
          <span className="block font-bold">無上限</span>
          <span className="block text-[11px] opacity-80 font-normal">頂級精品/訂製工坊</span>
        </button>
      </div>

      {/* 預算狀態展示卡 */}
      <div className="p-5 sm:p-6 rounded-xl bg-white border border-[#E5E0D5] shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#F0ECE1] pb-3 mb-5">
          <span className="text-xs font-semibold text-stone-500">當前設定預算</span>
          <div className="text-xl sm:text-2xl font-bold tracking-tight text-[#12291E] tabular-nums">
            {mode === 'cheapest' && '極致親民 (NT$ 15,000 以下 / 越便宜越好)'}
            {mode === 'unlimited' && '無上限 (頂級奢華名品 / 手工鍛造)'}
            {mode === 'slider' && (
              <span>
                約 <span className="text-[#C8A86B]">{formatTWD(value)}</span>
                {value >= 120000 && ' 元以上'}
              </span>
            )}
          </div>
        </div>

        {/* 若為滑桿模式，顯示可滑順左右拖曳之拉霸與快捷金額鈕 */}
        {mode === 'slider' ? (
          <div className="space-y-5 pt-2">
            <div className="px-1 py-2">
              <input
                type="range"
                min={minVal}
                max={maxVal}
                step={1000}
                value={value}
                onInput={(e) => onValueChange(Number((e.target as HTMLInputElement).value))}
                onChange={(e) => onValueChange(Number(e.target.value))}
                style={{
                  background: `linear-gradient(to right, #12291E 0%, #12291E ${percentage}%, #E6E1D6 ${percentage}%, #E6E1D6 100%)`,
                }}
                className="golf-slider"
                aria-label="設定購桿預算金額"
              />
            </div>

            <div className="flex justify-between text-xs text-stone-500 tabular-nums">
              <span>NT$ 10,000</span>
              <span>NT$ 40,000</span>
              <span>NT$ 80,000</span>
              <span>NT$ 120,000+</span>
            </div>

            {/* 快捷金額點選列（可拖曳拉霸，也可一鍵快選） */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs text-stone-500 mr-1">快速填入：</span>
              {quickPresets.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => onValueChange(preset)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer tabular-nums ${
                    value === preset
                      ? 'bg-[#12291E] text-[#C8A86B] font-bold'
                      : 'bg-[#F4F1EA] text-stone-700 hover:bg-[#E7E2D6]'
                  }`}
                >
                  {(preset / 10000).toFixed(preset % 10000 === 0 ? 0 : 1)} 萬
                </button>
              ))}
            </div>

            <div className="text-xs text-stone-600 bg-[#F9F8F5] p-3.5 rounded-lg border border-[#EDE8DC]">
              💡 建議指引：您可以按住圓形滑塊左右滑動微調金額。初學者若預算在 2.5 萬 ~ 4.5 萬之間，購買日美主流品牌的「二手九成新好桿」或「全新入門套桿」是最穩健的黃金甜蜜點。
            </div>
          </div>
        ) : mode === 'cheapest' ? (
          <div className="text-xs text-stone-600 space-y-1.5 bg-[#F9F8F5] p-3.5 rounded-lg border border-[#EDE8DC]">
            <p className="font-semibold text-[#12291E]">💡 越便宜越好策略：</p>
            <p>
              將優先為您搭配如 PGM（淘寶熱銷）、Costco Kirkland Signature 系列、Decathlon Inesis（迪卡農）等高 CP 值名桿。在練習場敲壞不心疼，省下的預算可直接用於找教練與打位費！
            </p>
          </div>
        ) : (
          <div className="text-xs text-stone-600 space-y-1.5 bg-[#F9F8F5] p-3.5 rounded-lg border border-[#EDE8DC]">
            <p className="font-semibold text-[#12291E]">✨ 無上限奢華策略：</p>
            <p>
              推薦規格將直上日本酒田星級工藝 Honma、金質 Majesty、三浦技研（Miura）純手工鍛造，或歐美頂級 PXG 旗艦與英國超跑直系品牌 McLaren Golf，享受極致尊榮質感與工藝手感。
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
