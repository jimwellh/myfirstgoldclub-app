import React from 'react';
import { QuizAnswers, TargetType, PurchaseStrategy, BrandOrigin, BrandVibe } from '../types/golf';
import { BudgetControl } from './BudgetControl';
import { HabitsControl } from './HabitsControl';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

interface QuestionWizardProps {
  currentStep: number;
  answers: QuizAnswers;
  onUpdateAnswers: (updater: (prev: QuizAnswers) => QuizAnswers) => void;
  onPrev: () => void;
  onNext: () => void;
  onFinish: () => void;
  totalSteps: number;
}

export const QuestionWizard: React.FC<QuestionWizardProps> = ({
  currentStep,
  answers,
  onUpdateAnswers,
  onPrev,
  onNext,
  onFinish,
  totalSteps,
}) => {
  const isLastStep = currentStep === totalSteps - 1;

  return (
    <div className="bg-white rounded-2xl border border-[#E5E0D5] p-6 sm:p-10 shadow-xs max-w-3xl mx-auto">
      {/* 步驟指示器與進度條 */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-semibold text-stone-500 mb-2">
          <span className="uppercase tracking-wider text-[#C8A86B]">
            新手選桿面試・第 {currentStep + 1} 題
          </span>
          <span className="tabular-nums">
            {Math.round(((currentStep + 1) / totalSteps) * 100)}% 完成度
          </span>
        </div>
        <div className="w-full bg-[#EFECE6] h-2 rounded-full overflow-hidden">
          <div
            className="bg-[#12291E] h-full transition-all duration-300 ease-out rounded-full"
            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* 題目 0: 你想買? */}
      {currentStep === 0 && (
        <div className="space-y-6 animate-fade-in">
          <div>
            <span className="text-xs font-semibold text-[#C8A86B] uppercase tracking-wider block mb-1">
              問題 0 / 6
            </span>
            <h2 className="text-2xl font-bold text-[#12291E] mb-2">你想買什麼類型的球桿？</h2>
            <p className="text-sm text-stone-600">
              新手起步通常有三種路徑，請選擇您目前迫切需要添購的品項：
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3.5">
            {[
              {
                id: 'fullset' as TargetType,
                title: '整套組 (Full Package Set)',
                sub: '最省心的新手首選',
                desc: '包含 1 號開球木、球道木/鐵木桿、鐵桿組 (5-PW)、挖起桿、推桿以及原廠高爾夫球袋。開箱即可下場或上練習場，各球桿長度與重量經過原廠系統化配置。',
              },
              {
                id: 'irons' as TargetType,
                title: '鐵桿組 (Iron Set 5-PW / 6-SW)',
                sub: '練習場入門主力與打球基本功核心',
                desc: '高爾夫 70% 的揮桿基礎從鐵桿（如 7 號鐵）建立。只想先在練習場練出紮實甜蜜點擊球、暫時不下場的球友最推薦先挑一套耐打的鐵桿。',
              },
              {
                id: 'wood' as TargetType,
                title: '木桿系列 (Driver 開球一號木 / 球道木)',
                sub: '追求球道轟擊遠距的開球利器',
                desc: '已有鐵桿，打算單獨選購一支配重得宜、大容錯且好起球的發球木桿（Driver）或易打的鐵木桿（Hybrid/Utility）。',
              },
            ].map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() =>
                  onUpdateAnswers((prev) => ({ ...prev, targetType: option.id }))
                }
                className={`p-4 sm:p-5 rounded-xl border text-left transition-all cursor-pointer relative ${
                  answers.targetType === option.id
                    ? 'bg-[#12291E] border-[#12291E] text-white shadow-sm ring-1 ring-[#12291E]'
                    : 'bg-white border-[#E5E0D5] text-stone-900 hover:border-stone-400 hover:bg-[#FAF9F6]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold text-base">{option.title}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-md font-medium ${
                        answers.targetType === option.id
                          ? 'bg-[#C8A86B]/20 text-[#C8A86B] border border-[#C8A86B]/40'
                          : 'bg-[#F2EFE9] text-stone-600'
                      }`}
                    >
                      {option.sub}
                    </span>
                  </div>
                  {answers.targetType === option.id && (
                    <CheckCircle2 className="w-5 h-5 text-[#C8A86B] shrink-0" />
                  )}
                </div>
                <p
                  className={`text-xs sm:text-sm leading-relaxed ${
                    answers.targetType === option.id ? 'text-stone-300' : 'text-stone-600'
                  }`}
                >
                  {option.desc}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 題目 1: 你偏好怎麼購買第一支球桿? */}
      {currentStep === 1 && (
        <div className="space-y-6 animate-fade-in">
          <div>
            <span className="text-xs font-semibold text-[#C8A86B] uppercase tracking-wider block mb-1">
              問題 1 / 6
            </span>
            <h2 className="text-2xl font-bold text-[#12291E] mb-2">
              你偏好怎麼購買第一支球桿？
            </h2>
            <p className="text-sm text-stone-600">
              這決定了桿頭構造（刀背/半凹背/深凹背）與容錯率（Forgiveness）的取捨：
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3.5">
            {[
              {
                id: 'all_in_one' as PurchaseStrategy,
                title: '一次到位 (直上職業級球桿)',
                sub: '鍛造刀背 / Tour 巡迴賽外型',
                desc: '不走冤枉路，直接挑選外型極致簡約鋒利的鍛造刀背或職業級桿頭。擁有最敏銳純粹的擊球手感。（⚠️ 請注意：甜區極小，失擊會震手且距離大幅縮水，上手難度高，需有毅力練球！）',
              },
              {
                id: 'long_term' as PurchaseStrategy,
                title: '長久使用 (中庸之道，稍微進階的平衡型球桿)',
                sub: '中空鍛造 / 微階半凹背',
                desc: '具備接近刀背的俐落顏值與窄頂線，但桿頭內部融入容錯科技。打感扎實且具備良好飛行距離穩定性，差點進步到單差點前都不用換桿。',
              },
              {
                id: 'gradual' as PurchaseStrategy,
                title: '循序漸進 (從易打性高開始)',
                sub: '寬底深凹背 (Game Improvement)',
                desc: '超大桿面、超低重心、深凹背設計。即使沒打中正中心，齒輪效應也能讓小白球高高飛向空中，建立滿滿擊球信心與樂趣。',
              },
              {
                id: 'budget_first' as PurchaseStrategy,
                title: '預算優先 (挑選高CP值組合)',
                sub: '極致性價比實用導向',
                desc: '把錢花在刀口上，挑選耐操好打且折舊率低的實用套裝或平價品牌，省下的預算拿去買練球券與教練課。',
              },
            ].map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() =>
                  onUpdateAnswers((prev) => ({ ...prev, purchaseStrategy: option.id }))
                }
                className={`p-4 sm:p-5 rounded-xl border text-left transition-all cursor-pointer ${
                  answers.purchaseStrategy === option.id
                    ? 'bg-[#12291E] border-[#12291E] text-white shadow-sm ring-1 ring-[#12291E]'
                    : 'bg-white border-[#E5E0D5] text-stone-900 hover:border-stone-400 hover:bg-[#FAF9F6]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold text-base">{option.title}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-md font-medium ${
                        answers.purchaseStrategy === option.id
                          ? 'bg-[#C8A86B]/20 text-[#C8A86B] border border-[#C8A86B]/40'
                          : 'bg-[#F2EFE9] text-stone-600'
                      }`}
                    >
                      {option.sub}
                    </span>
                  </div>
                  {answers.purchaseStrategy === option.id && (
                    <CheckCircle2 className="w-5 h-5 text-[#C8A86B] shrink-0" />
                  )}
                </div>
                <p
                  className={`text-xs sm:text-sm leading-relaxed ${
                    answers.purchaseStrategy === option.id ? 'text-stone-300' : 'text-stone-600'
                  }`}
                >
                  {option.desc}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 題目 2: 預算範圍 */}
      {currentStep === 2 && (
        <div className="space-y-6 animate-fade-in">
          <div>
            <span className="text-xs font-semibold text-[#C8A86B] uppercase tracking-wider block mb-1">
              問題 2 / 6
            </span>
            <h2 className="text-2xl font-bold text-[#12291E] mb-2">你的預算範圍大約落在哪裡？</h2>
            <p className="text-sm text-stone-600">
              您可以按住拉霸滑塊自由左右拖曳，或點選「越便宜越好」與「無上限」模式：
            </p>
          </div>

          <BudgetControl
            mode={answers.budgetMode}
            value={answers.budgetValue}
            onModeChange={(m) => onUpdateAnswers((prev) => ({ ...prev, budgetMode: m }))}
            onValueChange={(val) => onUpdateAnswers((prev) => ({ ...prev, budgetValue: val }))}
          />
        </div>
      )}

      {/* 題目 3: 身高與擊球習慣 */}
      {currentStep === 3 && (
        <div className="space-y-6 animate-fade-in">
          <div>
            <span className="text-xs font-semibold text-[#C8A86B] uppercase tracking-wider block mb-1">
              問題 3 / 6
            </span>
            <h2 className="text-2xl font-bold text-[#12291E] mb-2">你的身高與擊球習慣？</h2>
            <p className="text-sm text-stone-600">
              這將用於計算桿身配重、長度微調、仰角（Lie Angle）及左右手現貨庫存：
            </p>
          </div>

          <HabitsControl
            heightCategory={answers.heightCategory}
            handOrientation={answers.handOrientation}
            genderOrientation={answers.genderOrientation}
            onHeightChange={(h) => onUpdateAnswers((prev) => ({ ...prev, heightCategory: h }))}
            onHandChange={(hand) => onUpdateAnswers((prev) => ({ ...prev, handOrientation: hand }))}
            onGenderChange={(g) => onUpdateAnswers((prev) => ({ ...prev, genderOrientation: g }))}
          />
        </div>
      )}

      {/* 題目 4: 會不會考慮二手? */}
      {currentStep === 4 && (
        <div className="space-y-6 animate-fade-in">
          <div>
            <span className="text-xs font-semibold text-[#C8A86B] uppercase tracking-wider block mb-1">
              問題 4 / 6
            </span>
            <h2 className="text-2xl font-bold text-[#12291E] mb-2">你會不會考慮二手球桿？</h2>
            <p className="text-sm text-stone-600">
              高爾夫球具二級市場極為龐大，二手桿性價比極高，但也考驗品相辨識：
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => onUpdateAnswers((prev) => ({ ...prev, considerUsed: true }))}
              className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                answers.considerUsed
                  ? 'bg-[#12291E] border-[#12291E] text-white shadow-sm ring-1 ring-[#12291E]'
                  : 'bg-white border-[#E5E0D5] text-stone-900 hover:border-stone-400 hover:bg-[#FAF9F6]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-base">會，考慮優質二手</span>
                {answers.considerUsed && (
                  <CheckCircle2 className="w-5 h-5 text-[#C8A86B] shrink-0" />
                )}
              </div>
              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  answers.considerUsed ? 'text-stone-300' : 'text-stone-600'
                }`}
              >
                用 3~5 折預算享受 2~3 年前的大廠旗艦款！報告將特別為您附上「二手球桿防暗傷與避坑指南」。
              </p>
            </button>

            <button
              type="button"
              onClick={() => onUpdateAnswers((prev) => ({ ...prev, considerUsed: false }))}
              className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                !answers.considerUsed
                  ? 'bg-[#12291E] border-[#12291E] text-white shadow-sm ring-1 ring-[#12291E]'
                  : 'bg-white border-[#E5E0D5] text-stone-900 hover:border-stone-400 hover:bg-[#FAF9F6]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-base">否，堅持全新正品</span>
                {!answers.considerUsed && (
                  <CheckCircle2 className="w-5 h-5 text-[#C8A86B] shrink-0" />
                )}
              </div>
              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  !answers.considerUsed ? 'text-stone-300' : 'text-stone-600'
                }`}
              >
                享受完整原廠保固與最新反彈科技，擊球安心無虞，不需擔心假桿或桿面溝槽磨損問題。
              </p>
            </button>
          </div>
        </div>
      )}

      {/* 題目 5: 偏好球桿品牌地域 */}
      {currentStep === 5 && (
        <div className="space-y-6 animate-fade-in">
          <div>
            <span className="text-xs font-semibold text-[#C8A86B] uppercase tracking-wider block mb-1">
              問題 5 / 6
            </span>
            <h2 className="text-2xl font-bold text-[#12291E] mb-2">偏好的球桿品牌地域？</h2>
            <p className="text-sm text-stone-600">
              歐美與日系球桿在「手感軟硬度、揮重設定與球具哲學」有鮮明差異，若無特定喜好可選無偏好：
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3.5">
            {[
              {
                id: 'japanese' as BrandOrigin,
                title: '日系品牌 (Japanese Heritage)',
                sub: 'Mizuno, XXIO, Srixon, Honma, Miura, Epon...',
                desc: '強調軟鐵鍛造極致打感、輕量化高起球彈性桿身，更貼合亞洲人體型與揮桿節奏。手工鍛造細節嚴謹，金屬光澤溫潤細膩。',
              },
              {
                id: 'western' as BrandOrigin,
                title: '歐美品牌 (American / Western Tour Tech)',
                sub: 'Titleist, TaylorMade, Callaway, Ping, PXG, McLaren Golf...',
                desc: '主打高科技材料學、碳纖維空氣動力學、AI 計算桿面與超大 MOI 慣性矩容錯。球速極快且巡迴賽曝光度極高，左手規格最齊全。',
              },
              {
                id: 'other' as BrandOrigin,
                title: '特色 / 平價量販 / 跨國高CP品牌',
                sub: 'Kirkland (Costco), Inesis (迪卡農), PGM, Tour Edge...',
                desc: '不被傳統品牌溢價綁架，追求破壞性性價比、量販越級神桿或人體工學尺碼分級，以實質功能為第一要件。',
              },
              {
                id: 'no_preference' as BrandOrigin,
                title: '無偏好 (No Preference)',
                sub: '不分歐美日系，純看哪個品牌最符合我的規格與預算',
                desc: '交由系統根據您的「購買品項、購桿策略、預算甜蜜點與體型慣用手」在全部 26 個全球品牌中客觀評選出最高分名單。',
              },
            ].map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() =>
                  onUpdateAnswers((prev) => ({ ...prev, brandOrigin: option.id }))
                }
                className={`p-4 sm:p-5 rounded-xl border text-left transition-all cursor-pointer ${
                  answers.brandOrigin === option.id
                    ? 'bg-[#12291E] border-[#12291E] text-white shadow-sm ring-1 ring-[#12291E]'
                    : 'bg-white border-[#E5E0D5] text-stone-900 hover:border-stone-400 hover:bg-[#FAF9F6]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold text-base">{option.title}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-md font-medium ${
                        answers.brandOrigin === option.id
                          ? 'bg-[#C8A86B]/20 text-[#C8A86B] border border-[#C8A86B]/40'
                          : 'bg-[#F2EFE9] text-stone-600'
                      }`}
                    >
                      {option.sub}
                    </span>
                  </div>
                  {answers.brandOrigin === option.id && (
                    <CheckCircle2 className="w-5 h-5 text-[#C8A86B] shrink-0" />
                  )}
                </div>
                <p
                  className={`text-xs sm:text-sm leading-relaxed ${
                    answers.brandOrigin === option.id ? 'text-stone-300' : 'text-stone-600'
                  }`}
                >
                  {option.desc}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 題目 6: 偏好球桿品牌調性 */}
      {currentStep === 6 && (
        <div className="space-y-6 animate-fade-in">
          <div>
            <span className="text-xs font-semibold text-[#C8A86B] uppercase tracking-wider block mb-1">
              問題 6 / 6
            </span>
            <h2 className="text-2xl font-bold text-[#12291E] mb-2">偏好的球桿品牌調性？</h2>
            <p className="text-sm text-stone-600">
              球桿也是球袋裡的個人名片，你希望這組球桿傳遞什麼氛圍？
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3.5">
            {[
              {
                id: 'expert' as BrandVibe,
                title: '本格派裝備取向 (主流職業首選品牌 / 經典工藝)',
                sub: 'Titleist, Mizuno Pro, Ping, Srixon, Miura, Epon...',
                desc: '外觀低調洗鍊、線條純粹無多餘花俏裝飾，球袋一拉開就散發「正統實戰練家子」氣場，專注於紮實手感與真實操控力。',
              },
              {
                id: 'luxury' as BrandVibe,
                title: '帶奢侈品屬性 (奢華精品尊榮感)',
                sub: 'Honma, Majesty, PXG 旗艦, McLaren Golf...',
                desc: '尊榮華貴的金屬質素、多軸碳纖維、MIM 金屬射出成型與精緻配重工藝。走到任何球場會館都是全場注目焦點。',
              },
              {
                id: 'budget_practice' as BrandVibe,
                title: '第一組練習用買最便宜的就好 (極致性價比入門款)',
                sub: 'PGM (淘寶), Costco Kirkland, 迪卡農 Inesis, Wilson...',
                desc: '實用主義無負擔！初學者在練習場用力揮擊不怕敲壞，花最少成本掌握高爾夫基本揮桿，建立成就感。',
              },
              {
                id: 'no_preference' as BrandVibe,
                title: '無偏好 (No Preference)',
                sub: '不拘泥外在調性，以好打、合身、符合預算為唯一標準',
                desc: '由系統綜合評估球桿容錯率、身形適配度與二手流通保值率，推薦最均衡務實的品牌組合。',
              },
            ].map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() =>
                  onUpdateAnswers((prev) => ({ ...prev, brandVibe: option.id }))
                }
                className={`p-4 sm:p-5 rounded-xl border text-left transition-all cursor-pointer ${
                  answers.brandVibe === option.id
                    ? 'bg-[#12291E] border-[#12291E] text-white shadow-sm ring-1 ring-[#12291E]'
                    : 'bg-white border-[#E5E0D5] text-stone-900 hover:border-stone-400 hover:bg-[#FAF9F6]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold text-base">{option.title}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-md font-medium ${
                        answers.brandVibe === option.id
                          ? 'bg-[#C8A86B]/20 text-[#C8A86B] border border-[#C8A86B]/40'
                          : 'bg-[#F2EFE9] text-stone-600'
                      }`}
                    >
                      {option.sub}
                    </span>
                  </div>
                  {answers.brandVibe === option.id && (
                    <CheckCircle2 className="w-5 h-5 text-[#C8A86B] shrink-0" />
                  )}
                </div>
                <p
                  className={`text-xs sm:text-sm leading-relaxed ${
                    answers.brandVibe === option.id ? 'text-stone-300' : 'text-stone-600'
                  }`}
                >
                  {option.desc}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 底部按鈕導航條 */}
      <div className="flex items-center justify-between pt-8 mt-8 border-t border-[#F0ECE1]">
        <button
          type="button"
          onClick={onPrev}
          disabled={currentStep === 0}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
            currentStep === 0
              ? 'opacity-30 cursor-not-allowed text-stone-400'
              : 'text-stone-700 hover:text-stone-900 hover:bg-[#F4F1EA] cursor-pointer'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>上一題</span>
        </button>

        {isLastStep ? (
          <button
            type="button"
            onClick={onFinish}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#12291E] hover:bg-[#1b3d2d] text-white font-bold text-sm transition-all shadow-sm cursor-pointer"
          >
            <span>完成面試，生成診斷報告</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={onNext}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#12291E] hover:bg-[#1b3d2d] text-white font-bold text-sm transition-all shadow-sm cursor-pointer"
          >
            <span>下一題</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
