/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { QuizAnswers } from './types/golf';
import { INITIAL_QUIZ_ANSWERS, evaluateGolfFitting } from './lib/fittingEngine';
import { Header } from './components/Header';
import { QuestionWizard } from './components/QuestionWizard';
import { ResultDashboard } from './components/ResultDashboard';
import { ChevronRight, ShieldCheck, Mail } from 'lucide-react';

export default function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>(INITIAL_QUIZ_ANSWERS);
  const [isCompleted, setIsCompleted] = useState(false);

  const totalSteps = 7; // Steps 0 to 6

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setIsCompleted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsCompleted(false);
    setHasStarted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEditStep = (stepIndex: number) => {
    setCurrentStep(stepIndex);
    setIsCompleted(false);
    setHasStarted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const specProfile = evaluateGolfFitting(answers);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7F3] text-[#19231D]">
      {/* Top Bar Contract Navigation */}
      <Header
        onReset={handleReset}
        showResult={isCompleted}
        onGoToResults={() => setIsCompleted(true)}
        currentStep={currentStep}
        totalSteps={totalSteps}
      />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {!hasStarted ? (
          /* 歡迎導引首頁 (Zero-State Hero) */
          <div className="space-y-12">
            <div className="bg-[#12291E] rounded-3xl p-8 sm:p-12 text-white border border-[#234233] relative overflow-hidden shadow-lg">
              <div className="relative z-10 max-w-3xl space-y-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#C8A86B] uppercase tracking-wider">
                  <span>高爾夫新手專屬導引</span>
                  <span aria-hidden="true">·</span>
                  <span>純靜態工坊決策樹 · 23+ 全球主流與精品品牌資料庫</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  我的第一組高爾夫球桿選擇器
                </h1>

                <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl">
                  剛接觸高爾夫，面對琳琅滿目的球桿規格、鍛造鑄造與桿身軟硬度感到茫然？
                  透過 7 道循序漸進的結構化面試，即時加權運算最適合您體格、預算與擊球目標的第一組球桿，並一鍵直串 Google Shopping 或複製規格去問聯網 AI。
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setHasStarted(true);
                      setCurrentStep(0);
                    }}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#C8A86B] hover:bg-[#d8b97d] text-[#12291E] font-bold text-base transition-all shadow-md cursor-pointer hover:shadow-lg transform active:scale-98"
                  >
                    <span>開始 2 分鐘選桿面試</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  <div className="text-xs text-stone-300 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C8A86B]" />
                    <span>完整涵蓋歐美巡迴賽、日系工坊手工鍛造、超跑科技與平價量販神桿</span>
                  </div>
                </div>
              </div>

              <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#1B4332]/50 blur-3xl pointer-events-none" />
              <div className="absolute right-12 top-12 opacity-10 pointer-events-none text-9xl font-serif">
                ⛳
              </div>
            </div>

            {/* 核心價值三大特色條 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-[#E5E0D5] shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#12291E] text-[#C8A86B] flex items-center justify-center font-bold text-sm mb-4">
                  01
                </div>
                <h3 className="font-bold text-base text-[#12291E] mb-2">客觀工坊物理推導</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  不綁定特定年份的促銷型號，而是幫你拆解「桿頭結構（凹背/刀背/中空）」與「桿身重量（碳纖/輕鋼/重鋼）」，不被店員推銷庫存牽著走。
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#E5E0D5] shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#12291E] text-[#C8A86B] flex items-center justify-center font-bold text-sm mb-4">
                  02
                </div>
                <h3 className="font-bold text-base text-[#12291E] mb-2">多維度加權品牌映射</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  針對每一個問題答案（左手庫存、女性輕量、身形仰角、二手流通與預算）進行精細加權，從 PGM、Costco 到 Miura、McLaren Golf 全數精準匹配。
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#E5E0D5] shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#12291E] text-[#C8A86B] flex items-center justify-center font-bold text-sm mb-4">
                  03
                </div>
                <h3 className="font-bold text-base text-[#12291E] mb-2">Google Shopping & AI 提問串接</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  診斷完成後可一鍵跳轉 Google Shopping 搜尋現貨，或一鍵複製專屬規格筆記去問聯網 AI（如 Gemini / ChatGPT）獲取當季具體型號。
                </p>
              </div>
            </div>

            {/* 新手知識常識與品牌譜系地圖 */}
            <div id="brands-guide" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E0D5] shadow-xs space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#12291E]">全球高爾夫球具品牌譜系資料庫</h3>
                <p className="text-xs text-stone-500 mt-1">
                  選桿面試將根據您的 7 項回答，針對以下四大陣營品牌進行匹配計分：
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#F8F7F3] border border-[#EDE8DC]">
                  <span className="font-bold text-[#12291E] block mb-1">歐美巡迴賽主流</span>
                  <p className="text-stone-600 mb-2">
                    Titleist, TaylorMade, Callaway, Ping, Cobra (Puma 旗下), Cleveland, Wilson Staff
                  </p>
                  <span className="text-[11px] text-stone-500">特色：AI 桿面、高 MOI 容錯、左手規格最齊全</span>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F7F3] border border-[#EDE8DC]">
                  <span className="font-bold text-[#12291E] block mb-1">日系名門與實戰派</span>
                  <p className="text-stone-600 mb-2">
                    Mizuno, XXIO, Srixon, Bridgestone, Yamaha, PRGR, ONOFF, Fourteen
                  </p>
                  <span className="text-[11px] text-stone-500">特色：軟鐵鍛造手感、亞洲體型輕量化高起球</span>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F7F3] border border-[#EDE8DC]">
                  <span className="font-bold text-[#12291E] block mb-1">頂級手工工坊與奢華科技</span>
                  <p className="text-stone-600 mb-2">
                    Miura (三浦技研), Epon (遠藤), Honma, Majesty, PXG, McLaren Golf, Roddio, Itobori (一刀雕), Vega, Ryoma, Bettinardi
                  </p>
                  <span className="text-[11px] text-stone-500">特色：職人手工研磨、MIM 超跑工藝、尊榮星級塗裝</span>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F7F3] border border-[#EDE8DC]">
                  <span className="font-bold text-[#12291E] block mb-1">平價破壞性神桿與套桿</span>
                  <p className="text-stone-600 mb-2">
                    Kirkland Signature (Costco), Inesis (迪卡農), PGM, Tour Edge, Strata, MacGregor
                  </p>
                  <span className="text-[11px] text-stone-500">特色：極低門檻、練習場不怕敲壞、超高性價比</span>
                </div>
              </div>
            </div>
          </div>
        ) : isCompleted ? (
          /* 診斷報告與結果儀表板 (Result View) */
          <ResultDashboard
            spec={specProfile}
            answers={answers}
            onRetake={handleReset}
            onEditStep={handleEditStep}
          />
        ) : (
          /* 7 題面試問卷 (Interactive Wizard) */
          <QuestionWizard
            currentStep={currentStep}
            answers={answers}
            onUpdateAnswers={setAnswers}
            onPrev={handlePrev}
            onNext={handleNext}
            onFinish={() => setIsCompleted(true)}
            totalSteps={totalSteps}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#12291E] text-stone-400 border-t border-[#234233] py-8 mt-12 text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <span className="text-white font-semibold">我的第一組高爾夫球桿選擇器</span>
            <span aria-hidden="true">·</span>
            <span>純靜態球具工坊幾何與品牌決策引擎</span>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 text-stone-300">
            <a
              href="mailto:jimwell.h@gmail.com"
              className="inline-flex items-center gap-1.5 text-[#C8A86B] hover:text-[#e2c68c] font-medium transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>回饋問題: jimwell.h@gmail.com</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
