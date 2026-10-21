export type TargetType = 'irons' | 'wood' | 'fullset';

export type PurchaseStrategy = 
  | 'all_in_one'     // 一次到位（直上職業級球桿）
  | 'long_term'      // 長久使用（中庸之道，稍微進階的平衡型球桿）
  | 'gradual'        // 循序漸進（從易打性高開始）
  | 'budget_first';   // 預算優先（挑選高CP值組合）

export type BudgetMode = 'slider' | 'cheapest' | 'unlimited';

export type HeightCategory = 'tall' | 'standard' | 'short';
export type HandOrientation = 'right' | 'left';
export type GenderOrientation = 'male' | 'female';

export type BrandOrigin = 'western' | 'japanese' | 'other' | 'no_preference';

export type BrandVibe = 
  | 'expert'          // 本格派裝備取向（主流職業首選品牌 / 經典工藝）
  | 'luxury'          // 帶奢侈品屬性（奢華精品尊榮感）
  | 'budget_practice' // 第一組練習用買最便宜的就好（極致性價比入門款）
  | 'no_preference';  // 無偏好

export interface QuizAnswers {
  targetType: TargetType;
  purchaseStrategy: PurchaseStrategy;
  budgetMode: BudgetMode;
  budgetValue: number; // in TWD
  heightCategory: HeightCategory;
  handOrientation: HandOrientation;
  genderOrientation: GenderOrientation;
  considerUsed: boolean;
  brandOrigin: BrandOrigin;
  brandVibe: BrandVibe;
}

export interface RecommendedBrand {
  name: string;
  category: string;
  tagline: string;
  origin: string;
  priceRangeLabel: string;
  matchScore: number;
  matchReasons: string[];
  leftHandNote: string;
  usedMarketNote: string;
}

export interface SpecProfile {
  headStructure: string;
  headProcess: string;
  shaftMaterial: string;
  shaftFlex: string;
  shaftLength: string;
  lieAngle: string;
  swingWeight: string;
  handRemark: string;
  targetCategoryLabel: string;
  bladeWarning: boolean;
  bladeWarningText?: string;
  recommendedBrands: RecommendedBrand[];
  alternativeBrands: RecommendedBrand[];
  searchKeywords: string[];
  googleShoppingUrl: string;
  aiPromptHelper: string;
  article: {
    headline: string;
    summary: string;
    headSection: string;
    shaftSection: string;
    brandSection: string;
    marketStrategySection: string;
    closingTips: string;
    staticDisclaimer: string;
  };
}
