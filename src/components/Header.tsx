import React from 'react';

interface HeaderProps {
  onReset: () => void;
  showResult: boolean;
  onGoToResults?: () => void;
  currentStep: number;
  totalSteps: number;
}

export const Header: React.FC<HeaderProps> = ({
  onReset,
  showResult,
  onGoToResults,
  currentStep,
  totalSteps,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#12291E] border-b border-[#234233] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 rounded-full bg-[#C8A86B]/20 border border-[#C8A86B] flex items-center justify-center text-[#C8A86B] font-bold text-sm">
            ⛳
          </div>
          <span 
            onClick={onReset}
            className="text-lg font-bold tracking-tight text-white cursor-pointer hover:text-[#C8A86B] transition-colors whitespace-nowrap shrink-0"
          >
            我的第一組高爾夫球桿選擇器
          </span>
        </div>

        {/* Zone 2: Nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-300">
          <button 
            onClick={onReset} 
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            新手選桿面試
          </button>
          <a 
            href="#faq-guide" 
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            桿頭與桿身常識
          </a>
          <a 
            href="#brands-guide" 
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            品牌譜系地圖
          </a>
          {showResult && onGoToResults && (
            <button 
              onClick={onGoToResults} 
              className="text-[#C8A86B] hover:text-[#e0c285] transition-colors whitespace-nowrap shrink-0"
            >
              檢視最新診斷報告
            </button>
          )}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          {showResult ? (
            <button
              onClick={onReset}
              className="px-4 py-2 text-xs font-semibold text-[#12291E] bg-[#C8A86B] hover:bg-[#d8b97d] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
            >
              重新面試測驗
            </button>
          ) : (
            <div className="text-xs text-stone-300 tabular-nums">
              進度 <span className="text-[#C8A86B] font-semibold">{currentStep + 1}</span> / {totalSteps}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
