import React, { useState } from 'react';
import { SpecProfile, QuizAnswers } from '../types/golf';
import {
  ExternalLink,
  Copy,
  Check,
  AlertTriangle,
  RotateCcw,
  Compass,
  MessageSquareShare,
  Mail,
} from 'lucide-react';

interface ResultDashboardProps {
  spec: SpecProfile;
  answers: QuizAnswers;
  onRetake: () => void;
  onEditStep: (stepIndex: number) => void;
}

export const ResultDashboard: React.FC<ResultDashboardProps> = ({
  spec,
  answers,
  onRetake,
  onEditStep,
}) => {
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [copiedAiPrompt, setCopiedAiPrompt] = useState(false);

  const handleCopySummary = () => {
    const summaryText = `【我的第一組高爾夫球桿・規格診斷筆記】
・目標品項：${spec.targetCategoryLabel}
・桿頭結構：${spec.headStructure} (${spec.headProcess})
・桿身材質：${spec.shaftMaterial}
・桿身硬度：${spec.shaftFlex}
・身高校驗：${spec.shaftLength} / Lie Angle: ${spec.lieAngle}
・揮桿重量：${spec.swingWeight}
・慣用建議：${answers.handOrientation === 'left' ? '左手款式專屬 (LH)' : '右手通用規格 (RH)'}
・首選推薦品牌：${spec.recommendedBrands.map((b) => `${b.name} (${b.matchScore}%)`).join('、')}
・延伸備選品牌：${spec.alternativeBrands.map((b) => b.name).join('、')}
・採購策略：${answers.considerUsed ? '可考慮優質二手（需檢查桿面溝槽與桿身微裂紋）' : '建議全新公司貨原廠保固'}
・搜尋關鍵字：${spec.searchKeywords.join(' ')}`;

    navigator.clipboard.writeText(summaryText).then(() => {
      setCopiedSummary(true);
      setTimeout(() => setCopiedSummary(false), 2500);
    });
  };

  const handleCopyAiPrompt = () => {
    navigator.clipboard.writeText(spec.aiPromptHelper).then(() => {
      setCopiedAiPrompt(true);
      setTimeout(() => setCopiedAiPrompt(false), 2500);
    });
  };

  return (
    <div className="space-y-10 animate-fade-in">
      {/* 頂部診斷抬頭與快速導覽條 */}
      <div className="bg-[#12291E] text-white rounded-2xl p-6 sm:p-8 border border-[#234233] relative overflow-hidden shadow-md">
        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#C8A86B] tracking-wider mb-2">
            <span>球桿工坊專業診斷出爐</span>
            <span aria-hidden="true">·</span>
            <span>32 大品牌與多維度規格加權匹配</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
            {spec.article.headline}
          </h1>
          <p className="text-sm text-stone-300 leading-relaxed">
            {spec.article.summary}
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-[#243e30]">
            <a
              href={spec.googleShoppingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#C8A86B] hover:bg-[#d8b97d] text-[#12291E] font-bold text-sm transition-all shadow-sm cursor-pointer whitespace-nowrap"
            >
              <span>在 Google Shopping 搜尋推薦球桿</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={handleCopySummary}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#1B3B2B] hover:bg-[#234d38] border border-[#2d5c45] text-white font-medium text-sm transition-all cursor-pointer whitespace-nowrap"
            >
              {copiedSummary ? <Check className="w-4 h-4 text-[#C8A86B]" /> : <Copy className="w-4 h-4" />}
              <span>{copiedSummary ? '已複製規格筆記！' : '複製規格筆記'}</span>
            </button>

            <button
              type="button"
              onClick={handleCopyAiPrompt}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#1B3B2B] hover:bg-[#234d38] border border-[#2d5c45] text-[#C8A86B] font-medium text-sm transition-all cursor-pointer whitespace-nowrap"
            >
              {copiedAiPrompt ? <Check className="w-4 h-4 text-[#C8A86B]" /> : <MessageSquareShare className="w-4 h-4" />}
              <span>{copiedAiPrompt ? '已複製 AI 提問指令！' : '複製給聯網 AI 問具體型號'}</span>
            </button>

            <button
              type="button"
              onClick={onRetake}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-transparent hover:bg-white/10 text-stone-300 hover:text-white text-sm transition-all cursor-pointer whitespace-nowrap ml-auto"
            >
              <RotateCcw className="w-4 h-4" />
              <span>重新填寫問卷</span>
            </button>
          </div>
        </div>

        <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-[#1B4332]/40 blur-3xl pointer-events-none" />
      </div>

      {/* 刀背警語區塊（若選擇一次到位直上刀背/選手級） */}
      {spec.bladeWarning && (
        <div className="bg-amber-50/90 border border-amber-200 rounded-2xl p-5 sm:p-6 text-amber-950 shadow-xs">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-amber-100 text-amber-800 shrink-0 mt-0.5">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-base font-bold text-amber-900">
                初學者高難度警語：一次到位直上職業級刀背 / 競技桿頭上手極難
              </h2>
              <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                {spec.bladeWarningText}
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onEditStep(1)}
                  className="text-xs font-semibold text-amber-900 underline hover:text-amber-950 cursor-pointer"
                >
                  想要更輕鬆起球？點此修改「購買策略」為長久使用或循序漸進 →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 核心規格速查矩陣 */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#12291E]">核心硬體規格速查卡</h2>
          <span className="text-xs text-stone-500">拿去球具店直接讓老闆抓桿，或複製去問聯網 AI</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* 1. 桿頭型態 */}
          <div className="bg-white p-5 rounded-xl border border-[#E5E0D5] shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-stone-500 mb-1 flex items-center justify-between">
                <span>桿頭型態構造</span>
                <span className="text-[11px] text-[#C8A86B]">容錯核心</span>
              </div>
              <div className="text-base font-bold text-[#12291E] mb-2 leading-snug">
                {spec.headStructure}
              </div>
              <div className="text-xs text-stone-600 bg-[#F9F8F5] p-2.5 rounded-lg border border-[#EDE8DC]">
                製程：{spec.headProcess}
              </div>
            </div>
            <button
              onClick={() => onEditStep(1)}
              className="mt-3 text-[11px] text-stone-500 hover:text-[#12291E] text-left underline cursor-pointer"
            >
              修改購買策略
            </button>
          </div>

          {/* 2. 桿身規格與硬度 */}
          <div className="bg-white p-5 rounded-xl border border-[#E5E0D5] shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-stone-500 mb-1 flex items-center justify-between">
                <span>桿身材質與重量段</span>
                <span className="text-[11px] text-[#C8A86B]">揮桿靈魂</span>
              </div>
              <div className="text-base font-bold text-[#12291E] mb-2 leading-snug">
                {spec.shaftMaterial}
              </div>
              <div className="text-xs text-stone-600 bg-[#F9F8F5] p-2.5 rounded-lg border border-[#EDE8DC] flex items-center justify-between">
                <span>建議彈性 (Flex)：</span>
                <span className="font-bold text-[#12291E]">{spec.shaftFlex}</span>
              </div>
            </div>
            <button
              onClick={() => onEditStep(3)}
              className="mt-3 text-[11px] text-stone-500 hover:text-[#12291E] text-left underline cursor-pointer"
            >
              修改性別體能
            </button>
          </div>

          {/* 3. 身高校驗與仰角 */}
          <div className="bg-white p-5 rounded-xl border border-[#E5E0D5] shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-stone-500 mb-1 flex items-center justify-between">
                <span>身高校驗 & 仰角 (Lie Angle)</span>
                <span className="text-[11px] text-[#C8A86B]">觸地幾何</span>
              </div>
              <div className="text-base font-bold text-[#12291E] mb-2 leading-snug">
                {spec.shaftLength}
              </div>
              <div className="text-xs text-stone-600 bg-[#F9F8F5] p-2.5 rounded-lg border border-[#EDE8DC]">
                Lie Angle：{spec.lieAngle}
              </div>
            </div>
            <button
              onClick={() => onEditStep(3)}
              className="mt-3 text-[11px] text-stone-500 hover:text-[#12291E] text-left underline cursor-pointer"
            >
              修改身高區間
            </button>
          </div>

          {/* 4. 揮桿重量 */}
          <div className="bg-white p-5 rounded-xl border border-[#E5E0D5] shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-stone-500 mb-1 flex items-center justify-between">
                <span>揮桿重量 (Swing Weight)</span>
                <span className="text-[11px] text-[#C8A86B]">動態手感</span>
              </div>
              <div className="text-base font-bold text-[#12291E] mb-2 leading-snug">
                {spec.swingWeight}
              </div>
              <p className="text-xs text-stone-500 leading-relaxed">
                確保下桿時桿頭有足夠的下墜釋放感，又不至於使前臂與手腕過早疲勞。
              </p>
            </div>
            <div className="mt-3 text-[11px] text-stone-500">工坊標準配重區間</div>
          </div>

          {/* 5. 慣用手注意 */}
          <div className="bg-white p-5 rounded-xl border border-[#E5E0D5] shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-stone-500 mb-1 flex items-center justify-between">
                <span>擊球慣用手匹配</span>
                <span className="text-[11px] text-[#C8A86B]">左右方向</span>
              </div>
              <div className="text-base font-bold text-[#12291E] mb-2 leading-snug">
                {answers.handOrientation === 'left' ? '左手球員 (Left-Handed)' : '右手球友 (Right-Handed)'}
              </div>
              <p className="text-xs text-stone-600 bg-[#F9F8F5] p-2.5 rounded-lg border border-[#EDE8DC] leading-relaxed">
                {spec.handRemark}
              </p>
            </div>
            <button
              onClick={() => onEditStep(3)}
              className="mt-3 text-[11px] text-stone-500 hover:text-[#12291E] text-left underline cursor-pointer"
            >
              修改慣用手
            </button>
          </div>

          {/* 6. 預算策略 */}
          <div className="bg-white p-5 rounded-xl border border-[#E5E0D5] shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-stone-500 mb-1 flex items-center justify-between">
                <span>設定預算與採購策略</span>
                <span className="text-[11px] text-[#C8A86B]">採購門檻</span>
              </div>
              <div className="text-base font-bold text-[#12291E] mb-2 leading-snug">
                {answers.budgetMode === 'cheapest'
                  ? '越便宜越好 (極致性價比)'
                  : answers.budgetMode === 'unlimited'
                  ? '無上限 (頂級奢華名品)'
                  : `約 NT$ ${answers.budgetValue.toLocaleString()} 元`}
              </div>
              <div className="text-xs text-stone-600 bg-[#F9F8F5] p-2.5 rounded-lg border border-[#EDE8DC]">
                {answers.considerUsed
                  ? '可挑選優質二手好桿（高性價比・低折舊）'
                  : '建議採購台灣公司貨全新正品（完整保固）'}
              </div>
            </div>
            <button
              onClick={() => onEditStep(2)}
              className="mt-3 text-[11px] text-stone-500 hover:text-[#12291E] text-left underline cursor-pointer"
            >
              修改預算範圍
            </button>
          </div>
        </div>
      </div>

      {/* 推薦品牌群展示卡片 (多維度加權映射結果) */}
      <div className="space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <h2 className="text-xl font-bold text-[#12291E]">
              專屬加權匹配品牌榜（Top 6 核心推薦）
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              系統綜合您的「品項、購桿策略、預算、身高慣用手、二手意願、品牌地域與調性」從 32 個品牌計算出最佳匹配名單
            </p>
          </div>
          <button
            onClick={() => onEditStep(5)}
            className="text-xs text-[#12291E] font-medium hover:underline cursor-pointer shrink-0"
          >
            調整品牌地域或調性偏好 →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {spec.recommendedBrands.map((brand, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-xl border border-[#E5E0D5] shadow-xs flex flex-col justify-between hover:border-[#C8A86B] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold text-stone-500">{brand.origin}</span>
                  <span className="text-xs font-bold text-[#12291E] tabular-nums">
                    匹配度 {brand.matchScore}%
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#12291E] mb-1">{brand.name}</h3>
                <div className="text-xs font-medium text-[#9A7B3E] mb-3">
                  {brand.category} · 參考行情 {brand.priceRangeLabel}
                </div>

                {/* 問題答案 Mapping 匹配原因 */}
                <div className="bg-[#F9F8F5] p-3 rounded-lg border border-[#EDE8DC] mb-3 space-y-1">
                  <div className="text-[11px] font-bold text-[#12291E]">
                    為什麼適合您的問卷答案：
                  </div>
                  {brand.matchReasons.map((reason, rIdx) => (
                    <div key={rIdx} className="text-xs text-stone-700 leading-snug">
                      • {reason}
                    </div>
                  ))}
                </div>

                <p className="text-xs text-stone-600 leading-relaxed">{brand.tagline}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#F0ECE1] space-y-1 text-[11px] text-stone-500">
                <div>左右手支援：{brand.leftHandNote}</div>
                <div>市場流通度：{brand.usedMarketNote}</div>
              </div>
            </div>
          ))}
        </div>

        {/* 延伸備選品牌列 */}
        {spec.alternativeBrands.length > 0 && (
          <div className="bg-white p-5 rounded-xl border border-[#E5E0D5]">
            <div className="text-xs font-bold text-[#12291E] mb-3">
              其他值得同步列入比較的延伸品牌（第 7~10 名）：
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {spec.alternativeBrands.map((alt, aIdx) => (
                <div key={aIdx} className="p-3 rounded-lg bg-[#F8F7F3] border border-[#EDE8DC]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-xs text-[#12291E]">{alt.name}</span>
                    <span className="text-[11px] text-stone-500 tabular-nums">{alt.matchScore}%</span>
                  </div>
                  <div className="text-[11px] text-[#9A7B3E] mb-1">{alt.priceRangeLabel}</div>
                  <p className="text-[11px] text-stone-600 line-clamp-2">{alt.tagline}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 深度客製分析專文 */}
      <article className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E5E0D5] shadow-xs space-y-8">
        <div className="border-b border-[#F0ECE1] pb-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#C8A86B] mb-2">
            <Compass className="w-4 h-4" />
            <span>球具工坊顧問綜合專文</span>
          </div>
          <h2 className="text-2xl font-bold text-[#12291E] leading-tight">
            不綁定特定年份型號，教你用行家的眼光挑選第一組命定球桿
          </h2>
          <p className="text-xs text-stone-500 mt-2">
            球桿型號每年更迭，但掌握了「重心深度、鍛造鑄造製程、桿身重量硬度與品牌血統」，到任何球具店都不怕被話術推銷庫存。
          </p>
        </div>

        {/* 章節一 */}
        <section className="space-y-3">
          <h3 className="text-lg font-bold text-[#12291E]">
            {spec.article.headSection.split('\n')[0]}
          </h3>
          <div className="text-sm text-stone-700 leading-relaxed whitespace-pre-line">
            {spec.article.headSection.split('\n').slice(1).join('\n')}
          </div>
        </section>

        {/* 章節二 */}
        <section className="space-y-3 pt-4 border-t border-[#F5F2EB]">
          <h3 className="text-lg font-bold text-[#12291E]">
            {spec.article.shaftSection.split('\n')[0]}
          </h3>
          <div className="text-sm text-stone-700 leading-relaxed whitespace-pre-line">
            {spec.article.shaftSection.split('\n').slice(1).join('\n')}
          </div>
        </section>

        {/* 章節三 */}
        <section className="space-y-3 pt-4 border-t border-[#F5F2EB]">
          <h3 className="text-lg font-bold text-[#12291E]">
            {spec.article.brandSection.split('\n')[0]}
          </h3>
          <div className="text-sm text-stone-700 leading-relaxed whitespace-pre-line">
            {spec.article.brandSection.split('\n').slice(1).join('\n')}
          </div>
        </section>

        {/* 章節四 */}
        <section className="space-y-3 pt-4 border-t border-[#F5F2EB]">
          <h3 className="text-lg font-bold text-[#12291E]">
            {spec.article.marketStrategySection.split('\n')[0]}
          </h3>
          <div className="text-sm text-stone-700 leading-relaxed whitespace-pre-line">
            {spec.article.marketStrategySection.split('\n').slice(1).join('\n')}
          </div>
        </section>

        {/* 章節五：總結建議 + 靜態網頁說明與聯網 AI 提示 */}
        <section className="space-y-4 bg-[#F8F7F3] p-5 sm:p-6 rounded-xl border border-[#EDE8DC]">
          <h3 className="text-base font-bold text-[#12291E]">
            {spec.article.closingTips.split('\n')[0]}
          </h3>
          <div className="text-sm text-stone-700 leading-relaxed whitespace-pre-line">
            {spec.article.closingTips.split('\n').slice(1).join('\n')}
          </div>

          {/* 靜態表單說明與聯網 AI 延伸建議 */}
          <div className="pt-4 mt-4 border-t border-[#E2DDD0] space-y-3">
            <p className="text-xs sm:text-sm text-[#12291E] font-medium leading-relaxed">
              {spec.article.staticDisclaimer}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleCopyAiPrompt}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#12291E] hover:bg-[#1e3f2f] text-[#C8A86B] font-semibold text-xs transition-all cursor-pointer"
              >
                {copiedAiPrompt ? <Check className="w-4 h-4" /> : <MessageSquareShare className="w-4 h-4" />}
                <span>
                  {copiedAiPrompt
                    ? '已複製！請貼給 ChatGPT / Gemini 等聯網 AI'
                    : '一鍵複製「給聯網 AI 查詢最新具體型號」的提問文字'}
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* 底部行動召喚 CTA */}
        <div className="pt-6 border-t border-[#F0ECE1] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-stone-500 text-center sm:text-left">
            已為您組裝 Google Shopping 搜尋關鍵字：
            <span className="font-mono text-stone-800 font-semibold block sm:inline sm:ml-1">
              {spec.searchKeywords.join(' ')}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleCopySummary}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#DDD7CD] hover:bg-[#F4F1EA] text-stone-800 font-medium text-xs sm:text-sm transition-all cursor-pointer whitespace-nowrap"
            >
              {copiedSummary ? <Check className="w-4 h-4 text-[#12291E]" /> : <Copy className="w-4 h-4" />}
              <span>{copiedSummary ? '已複製規格筆記！' : '複製規格筆記'}</span>
            </button>

            <a
              href={spec.googleShoppingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#12291E] hover:bg-[#1b3d2d] text-white font-bold text-xs sm:text-sm transition-all shadow-sm cursor-pointer whitespace-nowrap"
            >
              <span>前往 Google Shopping 搜尋</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </article>

      {/* 新手高球球桿問答指南 (FAQ) */}
      <div id="faq-guide" className="bg-[#EFECE6] rounded-2xl p-6 sm:p-8 border border-[#DDD7CD] space-y-6">
        <div>
          <h2 className="text-xl font-bold text-[#12291E]">高爾夫新手速成知識庫</h2>
          <p className="text-xs text-stone-600 mt-1">
            快速搞懂球具店名詞，買球桿不當冤大頭
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4.5 rounded-xl border border-[#E5E0D5]">
            <h4 className="font-bold text-sm text-[#12291E] mb-1.5">
              Q1: 鍛造（Forged）與鑄造（Cast）差在哪？
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              鍛造由軟鐵鋼坯經高噸數沖壓成型，金屬內部緻密無氣孔，擊球手感綿密粘球；鑄造則是將鐵水澆灌入模具，可輕易做出複雜的低深凹背與鎢鋼配重，容錯率更高且成本更低。初學者不需迷信純刀背鍛造，複合凹背或鑄造反而更易起球！
            </p>
          </div>

          <div className="bg-white p-4.5 rounded-xl border border-[#E5E0D5]">
            <h4 className="font-bold text-sm text-[#12291E] mb-1.5">
              Q2: 碳纖維桿身與鋼管桿身怎麼選？
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              重量是關鍵！碳纖桿身重量一般在 40g~65g，彈性好、吸震強，能幫揮速較慢或女性球友增加球速；鋼管桿身在 85g~125g，方向穩定性與抗扭力強，適合體能良好或重視落點精準的男性球友。
            </p>
          </div>

          <div className="bg-white p-4.5 rounded-xl border border-[#E5E0D5]">
            <h4 className="font-bold text-sm text-[#12291E] mb-1.5">
              Q3: 買二手球桿要注意什麼？
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              最怕買到「翻新假桿」或「桿面溝槽磨平的球桿」。購買時請檢查桿面溝槽是否仍有摩擦咬球感、碳纖桿身是否有托運壓損微裂紋，並預留更換老化橡膠握把的預算。
            </p>
          </div>
        </div>
      </div>

      {/* 回饋問題與聯絡區塊 */}
      <div className="bg-white rounded-xl p-5 border border-[#E5E0D5] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-600">
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-[#12291E]" />
          <span>對選桿邏輯、品牌資料或網站功能有任何建議與問題回饋嗎？</span>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="mailto:jimwell.h@gmail.com"
            className="font-semibold text-[#12291E] hover:text-[#9A7B3E] underline transition-colors"
          >
            回饋問題：jimwell.h@gmail.com
          </a>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <a
            href="https://github.com/jimwellh/myfirstgoldclub-app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-[#12291E] hover:text-[#9A7B3E] underline transition-colors"
          >
            <span>GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
