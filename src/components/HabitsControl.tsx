import React from 'react';
import { HeightCategory, HandOrientation, GenderOrientation } from '../types/golf';

interface HabitsControlProps {
  heightCategory: HeightCategory;
  handOrientation: HandOrientation;
  genderOrientation: GenderOrientation;
  onHeightChange: (h: HeightCategory) => void;
  onHandChange: (hand: HandOrientation) => void;
  onGenderChange: (g: GenderOrientation) => void;
}

export const HabitsControl: React.FC<HabitsControlProps> = ({
  heightCategory,
  handOrientation,
  genderOrientation,
  onHeightChange,
  onHandChange,
  onGenderChange,
}) => {
  return (
    <div className="space-y-6">
      {/* 1. 性別與體能導向 */}
      <div>
        <label className="block text-xs font-semibold text-stone-600 mb-2">
          1. 球具規格體能導向（決定桿身配重與揮桿重量）
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => onGenderChange('male')}
            className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
              genderOrientation === 'male'
                ? 'bg-[#12291E] border-[#12291E] text-white shadow-xs'
                : 'bg-white border-[#E5E0D5] text-stone-800 hover:border-stone-400'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-sm">男用常規規格</span>
              <span className="text-xs opacity-80">標配 D0~D2 揮重</span>
            </div>
            <p className="text-xs opacity-85 leading-relaxed">
              適合男性或手腕爆發力佳的球友，桿身重量 60g~95g，管徑握把適中。
            </p>
          </button>

          <button
            type="button"
            onClick={() => onGenderChange('female')}
            className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
              genderOrientation === 'female'
                ? 'bg-[#12291E] border-[#12291E] text-white shadow-xs'
                : 'bg-white border-[#E5E0D5] text-stone-800 hover:border-stone-400'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-sm">女用專屬規格</span>
              <span className="text-xs opacity-80">輕量 C2~C4 揮重</span>
            </div>
            <p className="text-xs opacity-85 leading-relaxed">
              專為女性人體工學打造，超輕碳纖桿身（約 40g）與高彈性 L 級硬度，護腕好起球。
            </p>
          </button>
        </div>
      </div>

      {/* 2. 身高區間 */}
      <div>
        <label className="block text-xs font-semibold text-stone-600 mb-2">
          2. 您的身高區間（決定桿身長度裁切與 Lie Angle 仰角調校）
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            type="button"
            onClick={() => onHeightChange('tall')}
            className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
              heightCategory === 'tall'
                ? 'bg-[#12291E] border-[#12291E] text-white shadow-xs'
                : 'bg-white border-[#E5E0D5] text-stone-800 hover:border-stone-400'
            }`}
          >
            <span className="block font-bold text-sm mb-1">身形偏高</span>
            <span className="block text-xs opacity-85 mb-1.5">
              {genderOrientation === 'female' ? '女性 > 172 cm' : '男性 > 183 cm'}
            </span>
            <span className="block text-[11px] opacity-75">
              建議加長 +0.5" 桿身，仰角調陡避免桿趾觸地右推
            </span>
          </button>

          <button
            type="button"
            onClick={() => onHeightChange('standard')}
            className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
              heightCategory === 'standard'
                ? 'bg-[#12291E] border-[#12291E] text-white shadow-xs'
                : 'bg-white border-[#E5E0D5] text-stone-800 hover:border-stone-400'
            }`}
          >
            <span className="block font-bold text-sm mb-1">一般身形 (主流)</span>
            <span className="block text-xs opacity-85 mb-1.5">
              {genderOrientation === 'female' ? '女性 158 - 171 cm' : '男性 170 - 182 cm'}
            </span>
            <span className="block text-[11px] opacity-75">
              原廠標準出廠規格即可，開箱即打省去改桿費用
            </span>
          </button>

          <button
            type="button"
            onClick={() => onHeightChange('short')}
            className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
              heightCategory === 'short'
                ? 'bg-[#12291E] border-[#12291E] text-white shadow-xs'
                : 'bg-white border-[#E5E0D5] text-stone-800 hover:border-stone-400'
            }`}
          >
            <span className="block font-bold text-sm mb-1">身形偏矮</span>
            <span className="block text-xs opacity-85 mb-1.5">
              {genderOrientation === 'female' ? '女性 < 158 cm' : '男性 < 170 cm'}
            </span>
            <span className="block text-[11px] opacity-75">
              建議縮短 -0.5" 桿身，仰角調平避免桿根卡地左拉
            </span>
          </button>
        </div>
      </div>

      {/* 3. 慣用手 */}
      <div>
        <label className="block text-xs font-semibold text-stone-600 mb-2">
          3. 擊球慣用手（決定左/右桿頭開模與市場現貨庫存）
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => onHandChange('right')}
            className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
              handOrientation === 'right'
                ? 'bg-[#12291E] border-[#12291E] text-white shadow-xs'
                : 'bg-white border-[#E5E0D5] text-stone-800 hover:border-stone-400'
            }`}
          >
            <span className="block font-bold text-sm mb-1">右手球友 (Right-Handed)</span>
            <p className="text-xs opacity-80 leading-relaxed">
              市場流通量 90% 以上，所有品牌與鍛造工坊型號全面支援，選桿最為寬廣。
            </p>
          </button>

          <button
            type="button"
            onClick={() => onHandChange('left')}
            className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
              handOrientation === 'left'
                ? 'bg-[#12291E] border-[#12291E] text-white shadow-xs'
                : 'bg-white border-[#E5E0D5] text-stone-800 hover:border-stone-400'
            }`}
          >
            <span className="block font-bold text-sm mb-1">左手球友 (Left-Handed)</span>
            <p className="text-xs opacity-80 leading-relaxed">
              左撇子擊球，款式選擇相對集中於歐美大廠（Ping、Callaway、TaylorMade）。
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};
