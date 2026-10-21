import {
  QuizAnswers,
  SpecProfile,
  RecommendedBrand,
  TargetType,
  PurchaseStrategy,
  BrandOrigin,
  BrandVibe,
} from '../types/golf';

export const INITIAL_QUIZ_ANSWERS: QuizAnswers = {
  targetType: 'fullset',
  purchaseStrategy: 'long_term',
  budgetMode: 'slider',
  budgetValue: 35000,
  heightCategory: 'standard',
  handOrientation: 'right',
  genderOrientation: 'male',
  considerUsed: true,
  brandOrigin: 'no_preference',
  brandVibe: 'no_preference',
};

interface BrandDatabaseItem {
  id: string;
  name: string;
  searchToken: string;
  origin: Exclude<BrandOrigin, 'no_preference'>;
  hasAsianSpecLine?: boolean;
  globalMarketLeaderBonus?: number;
  originLabel: string;
  category: string;
  tagline: string;
  specialHighlight: string;
  woodCategory?: string;
  woodTagline?: string;
  woodHighlight?: string;
  priceRangeLabel: string;
  woodPriceRangeLabel?: string;
  minBudgetNew: number;
  maxBudgetNew: number;
  minBudgetUsed: number;
  maxBudgetUsed: number;
  woodMinBudgetNew?: number;
  woodMaxBudgetNew?: number;
  woodMinBudgetUsed?: number;
  woodMaxBudgetUsed?: number;
  supportedTargets: TargetType[];
  strongestTargets: TargetType[];
  strategies: PurchaseStrategy[];
  primaryStrategies: PurchaseStrategy[];
  vibes: Exclude<BrandVibe, 'no_preference'>[];
  leftHandSupply: 'high' | 'medium' | 'low';
  femaleLineStrength: 'high' | 'medium' | 'low';
  heightCustomAdvantage: boolean;
  usedLiquidity: 'high' | 'medium' | 'low';
}

/**
 * 完整高爾夫球具品牌資料庫 (具備真實價格帶區間 [min, max] 與多主力品項/策略矩陣)
 */
export const GOLF_BRAND_DATABASE: BrandDatabaseItem[] = [
  // ================= 日系主流與名門 =================
  {
    id: 'mizuno',
    name: 'Mizuno (美津濃)',
    searchToken: 'Mizuno',
    origin: 'japanese',
    originLabel: '日本精密球具名門',
    category: 'Grain Flow 軟鐵鍛造傳奇',
    tagline: '球友公認「打過就回不去」的廣島精密一體鍛造手感，從極致刀背 Mizuno Pro 到高容錯 JPX 熱金屬系列一應俱全',
    specialHighlight: '擁有業界頂尖的 Shaft Optimizer 桿身動態配重系統與仰角微調傳統，鐵桿組口碑無敵。',
    woodCategory: 'ST 系列鍛造 Beta 鈦合金桿面 / Cortech 加速槽',
    woodTagline: '採用高強度 Forged SAT 2041 Beta 鈦合金桿面與底部 Cortech 能量槽，初速極快且擊球音低沉紮實',
    woodHighlight: '近年在美巡與日巡賽場異軍突起的高性價比開球木與球道木，配備 Quick Switch 可調式傾角套管。',
    priceRangeLabel: 'NT$ 22,000 ~ 55,000',
    woodPriceRangeLabel: 'NT$ 9,500 ~ 21,000 (單支木桿)',
    minBudgetNew: 26000,
    maxBudgetNew: 58000,
    minBudgetUsed: 13500,
    maxBudgetUsed: 36000,
    woodMinBudgetNew: 13500,
    woodMaxBudgetNew: 22000,
    woodMinBudgetUsed: 6800,
    woodMaxBudgetUsed: 14500,
    supportedTargets: ['irons', 'wood', 'fullset'],
    strongestTargets: ['irons'],
    strategies: ['long_term', 'all_in_one', 'gradual'],
    primaryStrategies: ['long_term', 'all_in_one'],
    vibes: ['expert'],
    leftHandSupply: 'medium',
    femaleLineStrength: 'medium',
    heightCustomAdvantage: true,
    usedLiquidity: 'high',
  },
  {
    id: 'xxio',
    name: 'XXIO (ゼクシオ / 登祿普)',
    searchToken: 'XXIO',
    origin: 'japanese',
    originLabel: '日本國民銷售冠軍',
    category: '超輕量高容錯易打王牌',
    tagline: '專為亞洲揮速量身打造的雙重重心加速科技，擊球音清脆高亢、出桿極致省力',
    specialHighlight: '女用球桿與輕量化全套組的市場絕對霸主，二手保值率與流通度居日系之冠。',
    woodCategory: 'BiFlex 雙重彈性邊框 / ActivWing 空氣力學穩定翼',
    woodTagline: '專為非暴力揮桿球友研發，下桿前半段透過頂蓋氣流翼穩定桿頭軌跡，搭配超輕量 MP 原廠碳纖桿身輕鬆打出高遠球路',
    woodHighlight: '亞洲高球場發球台最常見的清脆高亢「叮—」擊球美聲，球道木與鐵木桿（小雞腿）更是公認好起球第一名。',
    priceRangeLabel: 'NT$ 28,000 ~ 85,000',
    woodPriceRangeLabel: 'NT$ 14,000 ~ 28,000 (單支木桿)',
    minBudgetNew: 34000,
    maxBudgetNew: 95000,
    minBudgetUsed: 16000,
    maxBudgetUsed: 52000,
    woodMinBudgetNew: 18000,
    woodMaxBudgetNew: 32000,
    woodMinBudgetUsed: 9000,
    woodMaxBudgetUsed: 19000,
    supportedTargets: ['fullset', 'wood', 'irons'],
    strongestTargets: ['fullset', 'wood'],
    strategies: ['gradual', 'long_term'],
    primaryStrategies: ['gradual', 'long_term'],
    vibes: ['luxury', 'expert'],
    leftHandSupply: 'medium',
    femaleLineStrength: 'high',
    heightCustomAdvantage: false,
    usedLiquidity: 'high',
  },
  {
    id: 'srixon',
    name: 'Srixon (史力勝)',
    searchToken: 'Srixon',
    origin: 'japanese',
    originLabel: '日系美巡大滿貫主力',
    category: 'Tour V.T. Sole 船型底刃',
    tagline: '松山英樹等大滿貫球星御用，獨特 V 型底刃能大幅減少草皮阻力、避免新手「啃地」失誤',
    specialHighlight: '兼具日系遠藤代工的軟鐵鍛造綿密手感與美巡賽等級的強勁穿透球質，極受本格派球友推崇。',
    woodCategory: 'Rebound Frame 雙重反彈框架 / 全鈦合金星型頂蓋',
    woodTagline: '透過「軟—硬—軟—硬」四層交替反彈結構（Rebound Frame）創造如彈簧床般的桿面爆發初速',
    woodHighlight: 'ZXi / ZX Mk II 系列開球木與球道木兼具巡迴賽級抗風穿透球質與日系紮實打感，二手行情極為超值。',
    priceRangeLabel: 'NT$ 22,000 ~ 48,000',
    woodPriceRangeLabel: 'NT$ 10,000 ~ 21,000 (單支木桿)',
    minBudgetNew: 25000,
    maxBudgetNew: 50000,
    minBudgetUsed: 13000,
    maxBudgetUsed: 30000,
    woodMinBudgetNew: 14500,
    woodMaxBudgetNew: 22000,
    woodMinBudgetUsed: 7200,
    woodMaxBudgetUsed: 14000,
    supportedTargets: ['irons', 'wood'],
    strongestTargets: ['irons', 'wood'],
    strategies: ['long_term', 'all_in_one', 'gradual'],
    primaryStrategies: ['long_term', 'all_in_one'],
    vibes: ['expert'],
    leftHandSupply: 'medium',
    femaleLineStrength: 'low',
    heightCustomAdvantage: false,
    usedLiquidity: 'high',
  },
  {
    id: 'bridgestone',
    name: 'Bridgestone (普利司通)',
    searchToken: 'Bridgestone',
    origin: 'japanese',
    originLabel: '日本精密材料工藝',
    category: 'B-Series 高穩定傳導',
    tagline: '結合輪胎橡膠減震科技與精密金屬溝槽，擊球面咬球感極強、方向偏差極低',
    specialHighlight: '日本本土極受歡迎的本格實戰派名門，二手市場常能以極高性價比淘到品相極佳的日規好桿。',
    woodCategory: 'Slipless Bite Milling 雷射咬球桿面 / SP-COR 懸吊核心',
    woodTagline: '木桿桿面採用獨家防滑交叉雷射銑磨紋路，大幅降低失擊時的無效側旋與後旋，讓開球筆直不易歪',
    woodHighlight: 'B1（操控）/ B2（防右曲穩定）/ B3（極致輕量高MOI）分級明確，專治開球右曲與打滑失誤。',
    priceRangeLabel: 'NT$ 20,000 ~ 46,000',
    woodPriceRangeLabel: 'NT$ 9,500 ~ 22,000 (單支木桿)',
    minBudgetNew: 23000,
    maxBudgetNew: 48000,
    minBudgetUsed: 11500,
    maxBudgetUsed: 28000,
    woodMinBudgetNew: 14000,
    woodMaxBudgetNew: 22500,
    woodMinBudgetUsed: 7000,
    woodMaxBudgetUsed: 14000,
    supportedTargets: ['irons', 'wood', 'fullset'],
    strongestTargets: ['irons', 'wood'],
    strategies: ['long_term', 'gradual', 'budget_first'],
    primaryStrategies: ['long_term'],
    vibes: ['expert'],
    leftHandSupply: 'low',
    femaleLineStrength: 'medium',
    heightCustomAdvantage: false,
    usedLiquidity: 'high',
  },
  {
    id: 'yamaha',
    name: 'Yamaha (山葉高爾夫)',
    searchToken: 'Yamaha Golf',
    origin: 'japanese',
    originLabel: '日本聲學與反發科技',
    category: 'RMX / Inpres 超高初速',
    tagline: '將樂器聲學共鳴技術導入桿頭設計，不僅擁有悅耳清脆的擊球音，Inpres 系列更具備越級遠距能力',
    specialHighlight: '特別適合追求遠距快感與清脆擊球聲響的球友，女桿與寬底系列極為好打。',
    woodCategory: 'Inpres DriveStar 八軸碳纖頂蓋 / RMX 環狀配重木桿',
    woodTagline: '結合同集團樂器音叉共鳴實驗室調音，並採用三菱化學八軸碳纖維頂蓋，創造破表慣性矩（MOI）與高初速',
    woodHighlight: 'Yamaha 的開球木與球道木以「極致好起球、聲音清脆迷人」聞名亞洲，特別適合追求輕鬆遠距的新手。',
    priceRangeLabel: 'NT$ 22,000 ~ 55,000',
    woodPriceRangeLabel: 'NT$ 11,000 ~ 25,000 (單支木桿)',
    minBudgetNew: 26000,
    maxBudgetNew: 58000,
    minBudgetUsed: 12000,
    maxBudgetUsed: 32000,
    woodMinBudgetNew: 15500,
    woodMaxBudgetNew: 26000,
    woodMinBudgetUsed: 8000,
    woodMaxBudgetUsed: 16000,
    supportedTargets: ['wood', 'irons'],
    strongestTargets: ['wood'],
    strategies: ['gradual', 'long_term'],
    primaryStrategies: ['gradual'],
    vibes: ['expert', 'luxury'],
    leftHandSupply: 'low',
    femaleLineStrength: 'high',
    heightCustomAdvantage: false,
    usedLiquidity: 'medium',
  },
  {
    id: 'prgr',
    name: 'PRGR (プロギア / 橫濱橡膠)',
    searchToken: 'PRGR',
    origin: 'japanese',
    originLabel: '日本運動科學實驗室',
    category: 'RS 極限反發 / Egg 寬底',
    tagline: '以科學測量儀器起家，主打逼近法規極限的高反發係數（COR）與超低重心好起球設計',
    specialHighlight: '著名的「0號木/鐵木桿」與寬底球道木讓不敢打長桿的新手也能輕鬆把球掃向空中。',
    woodCategory: 'RS Just 四點集中反發桿面 / Super Egg 高反發木桿',
    woodTagline: '透過精密 CNC 加工將鈦合金桿面反發中心精確對準桿頭重心軸線，創造逼近 R&A 法規上限的恐怖初速',
    woodHighlight: '木桿與球道木就是 PRGR 的靈魂招牌，尤其適合想靠裝備科技多飛 15 碼的球友。',
    priceRangeLabel: 'NT$ 20,000 ~ 50,000',
    woodPriceRangeLabel: 'NT$ 10,500 ~ 24,000 (單支木桿)',
    minBudgetNew: 25000,
    maxBudgetNew: 52000,
    minBudgetUsed: 11500,
    maxBudgetUsed: 28000,
    woodMinBudgetNew: 15000,
    woodMaxBudgetNew: 25000,
    woodMinBudgetUsed: 7500,
    woodMaxBudgetUsed: 15000,
    supportedTargets: ['wood', 'irons'],
    strongestTargets: ['wood'],
    strategies: ['long_term', 'gradual'],
    primaryStrategies: ['long_term', 'gradual'],
    vibes: ['expert'],
    leftHandSupply: 'low',
    femaleLineStrength: 'high',
    heightCustomAdvantage: false,
    usedLiquidity: 'medium',
  },
  {
    id: 'onoff',
    name: 'ONOFF (オノフ / Daiwa 旗下)',
    searchToken: 'ONOFF Golf',
    origin: 'japanese',
    originLabel: '日本頂級碳纖美學',
    category: 'AKA 容錯 / KURO 操控',
    tagline: '母公司為全球釣具碳纖巨擘 Daiwa，桿身回彈精準度傲視群雄，日系質感生活風格首選',
    specialHighlight: '外型設計極具日系都會雅痞格調，女性系列更在亞洲擁有極高顏值口碑。',
    woodCategory: 'Daiwa 獨家碳纖桿身科技 / 全方向滑軌配重木桿',
    woodTagline: '唯一由頂級碳纖釣竿母廠從頭自主研發桿身與桿頭的木桿品牌，AKA 全紅桿頭防右曲極強、KURO 則支援精細螺絲配重互換',
    woodHighlight: '女用 ONOFF Lady 木桿與男用 AKA 開球木在日系質感球友圈享有極高評價。',
    priceRangeLabel: 'NT$ 26,000 ~ 58,000',
    woodPriceRangeLabel: 'NT$ 12,000 ~ 25,000 (單支木桿)',
    minBudgetNew: 30000,
    maxBudgetNew: 60000,
    minBudgetUsed: 15000,
    maxBudgetUsed: 34000,
    woodMinBudgetNew: 16500,
    woodMaxBudgetNew: 26000,
    woodMinBudgetUsed: 8500,
    woodMaxBudgetUsed: 16000,
    supportedTargets: ['irons', 'wood', 'fullset'],
    strongestTargets: ['irons', 'wood'],
    strategies: ['gradual', 'long_term'],
    primaryStrategies: ['gradual'],
    vibes: ['luxury', 'expert'],
    leftHandSupply: 'low',
    femaleLineStrength: 'high',
    heightCustomAdvantage: false,
    usedLiquidity: 'medium',
  },
  {
    id: 'fourteen',
    name: 'Fourteen (フォーティーン)',
    searchToken: 'Fourteen Golf',
    origin: 'japanese',
    originLabel: '日本設計師工坊名門',
    category: '中空鐵桿與羽毛標挖起桿',
    tagline: '以「讓業餘球友也能打出職業球路」為宗旨，流線型中空鐵桿與高倒旋挖起桿享譽球界',
    specialHighlight: '經典羽毛標誌（Feather Logo）是正統本格派球友最愛的低調實力派象徵。',
    woodCategory: 'GelognD / DX 輕量化長尺易打木桿',
    woodTagline: '針對不同揮速球友配重設計的極簡美學木桿與球道木，兼具優雅水滴型外觀與高效率能量傳遞',
    woodHighlight: '低調不撞桿的日本設計師品牌，特別受到重視球具線條比例的本格派球友喜愛。',
    priceRangeLabel: 'NT$ 25,000 ~ 55,000',
    woodPriceRangeLabel: 'NT$ 12,000 ~ 24,000 (單支木桿)',
    minBudgetNew: 29000,
    maxBudgetNew: 56000,
    minBudgetUsed: 14500,
    maxBudgetUsed: 32000,
    woodMinBudgetNew: 16000,
    woodMaxBudgetNew: 24500,
    woodMinBudgetUsed: 8000,
    woodMaxBudgetUsed: 15000,
    supportedTargets: ['irons', 'wood'],
    strongestTargets: ['irons'],
    strategies: ['long_term', 'all_in_one'],
    primaryStrategies: ['long_term'],
    vibes: ['expert'],
    leftHandSupply: 'low',
    femaleLineStrength: 'medium',
    heightCustomAdvantage: true,
    usedLiquidity: 'medium',
  },

  // ================= 日系頂級手工鍛造與奢華工坊 =================
  {
    id: 'miura',
    name: 'Miura (三浦技研)',
    searchToken: 'Miura Golf',
    origin: 'japanese',
    originLabel: '日本神戶手工鍛造神殿',
    category: '「神之手」W.D.D. 高密度軟鐵',
    tagline: '世界頂尖選手私下自費購買的鍛造聖盃，獨門旋轉鍛造讓分子結構無比緻密，觸球如切奶油般綿密',
    specialHighlight: '高爾夫鐵桿界的殿堂級圖騰，兼顧極致本格派品味與收藏保值性，工坊可依身形精密客製長度與仰角。',
    priceRangeLabel: 'NT$ 65,000 ~ 130,000+',
    minBudgetNew: 65000,
    maxBudgetNew: 160000,
    minBudgetUsed: 38000,
    maxBudgetUsed: 85000,
    supportedTargets: ['irons'],
    strongestTargets: ['irons'],
    strategies: ['all_in_one', 'long_term'],
    primaryStrategies: ['all_in_one'],
    vibes: ['expert', 'luxury'],
    leftHandSupply: 'medium',
    femaleLineStrength: 'low',
    heightCustomAdvantage: true,
    usedLiquidity: 'high',
  },
  {
    id: 'epon',
    name: 'Epon (遠藤製作所)',
    searchToken: 'Epon Golf',
    origin: 'japanese',
    originLabel: '日本新潟精密鍛造巨擘',
    category: '頂尖工坊客製鍛造之王',
    tagline: '全球各大一線品牌背後的頂級代工母廠自營品牌，超軟 S20C 軟鐵與零公差重量控制',
    specialHighlight: 'AF-70x / AF-50x 等凹背鍛造系列讓新手也能同時享受「超大容錯距離」與「神級軟鐵手感」。',
    woodCategory: 'AF-10x / AF-15x 頂級全鍛造鈦合金木桿頭',
    woodTagline: '採用日本新潟遠藤本廠頂級精密鍛造鈦合金工藝，擊球回饋極度綿密厚實、並非一般量產木桿可比擬',
    woodHighlight: '可於專業工坊自由選配 Tour AD、Ventus 或 Diamana 等高階客製木桿碳纖桿身。',
    priceRangeLabel: 'NT$ 60,000 ~ 120,000+',
    woodPriceRangeLabel: 'NT$ 26,000 ~ 48,000 (客製單支木桿)',
    minBudgetNew: 60000,
    maxBudgetNew: 140000,
    minBudgetUsed: 34000,
    maxBudgetUsed: 75000,
    woodMinBudgetNew: 26000,
    woodMaxBudgetNew: 50000,
    woodMinBudgetUsed: 15000,
    woodMaxBudgetUsed: 32000,
    supportedTargets: ['irons', 'wood'],
    strongestTargets: ['irons'],
    strategies: ['long_term', 'all_in_one', 'gradual'],
    primaryStrategies: ['long_term', 'all_in_one'],
    vibes: ['expert', 'luxury'],
    leftHandSupply: 'low',
    femaleLineStrength: 'medium',
    heightCustomAdvantage: true,
    usedLiquidity: 'high',
  },
  {
    id: 'honma',
    name: 'Honma (本間高爾夫)',
    searchToken: 'Honma Golf',
    origin: 'japanese',
    originLabel: '日本酒田工坊皇家工藝',
    category: 'BERES 星級奢華 / TW 巡迴賽',
    tagline: '從 TW 專業競技系列到鑲金 2~5 星級 BERES 殿堂系列，搭配酒田職人手捲 ARMRQ 多軸碳纖桿身',
    specialHighlight: '亞洲政商名流與高球貴族最具代表性的尊榮名片，手捲多軸碳纖桿身防扭回正效果極佳。',
    woodCategory: 'BERES 星級金標木桿 / TW757 碳纖槽巡迴賽木桿',
    woodTagline: '酒田工坊匠人手捲 ARMRQ 多軸金屬編織碳纖桿身能自動在擊球瞬間回正桿面，TW 系列則具備世界首創底部碳纖維肋槽',
    woodHighlight: '無論是追求尊榮門面的 BERES 星級一號木，或是高性價比本格派 TW 系列木桿，皆有極佳口碑。',
    priceRangeLabel: 'NT$ 35,000 ~ 250,000+',
    woodPriceRangeLabel: 'NT$ 14,000 ~ 85,000+ (單支木桿)',
    minBudgetNew: 35000,
    maxBudgetNew: 250000,
    minBudgetUsed: 18000,
    maxBudgetUsed: 120000,
    woodMinBudgetNew: 16000,
    woodMaxBudgetNew: 90000,
    woodMinBudgetUsed: 8500,
    woodMaxBudgetUsed: 45000,
    supportedTargets: ['fullset', 'wood', 'irons'],
    strongestTargets: ['fullset', 'wood'],
    strategies: ['long_term', 'gradual', 'all_in_one'],
    primaryStrategies: ['long_term', 'gradual'],
    vibes: ['luxury', 'expert'],
    leftHandSupply: 'low',
    femaleLineStrength: 'high',
    heightCustomAdvantage: false,
    usedLiquidity: 'high',
  },
  {
    id: 'majesty',
    name: 'Majesty (瑪潔斯帝)',
    searchToken: 'Majesty Golf',
    origin: 'japanese',
    originLabel: '日本頂級奢華工藝旗艦',
    category: 'Prestigio / Royale 金質高反發',
    tagline: '採用航太級高純度鎢鋼與精細雷射雕花桿面，將輕量化遠距物理學與藝術品般的金色電鍍完美融合',
    specialHighlight: '果嶺上最耀眼的奢華象徵，特別適合追求輕鬆揮桿即能打出華麗高飛球路的層峰男女球友。',
    woodCategory: 'Prestigio / Royale 3D 波浪鈦合金蜘蛛網桿面木桿',
    woodTagline: '將整塊鈦合金透過精密加工雕琢出蜘蛛網狀漸變厚度桿面，搭配超長高彈性奈米碳纖桿身，揮桿毫不費力即可轟出遠距',
    woodHighlight: '日系奢華一號木與球道木的巔峰代表，金光熠熠的鏡面電鍍與精緻雷射花紋辨識度滿分。',
    priceRangeLabel: 'NT$ 65,000 ~ 280,000+',
    woodPriceRangeLabel: 'NT$ 25,000 ~ 78,000+ (單支木桿)',
    minBudgetNew: 65000,
    maxBudgetNew: 280000,
    minBudgetUsed: 32000,
    maxBudgetUsed: 130000,
    woodMinBudgetNew: 26000,
    woodMaxBudgetNew: 85000,
    woodMinBudgetUsed: 14000,
    woodMaxBudgetUsed: 42000,
    supportedTargets: ['fullset', 'wood', 'irons'],
    strongestTargets: ['wood', 'fullset'],
    strategies: ['gradual', 'long_term'],
    primaryStrategies: ['gradual'],
    vibes: ['luxury'],
    leftHandSupply: 'low',
    femaleLineStrength: 'high',
    heightCustomAdvantage: false,
    usedLiquidity: 'medium',
  },
  {
    id: 'roddio',
    name: 'Roddio (ロッディオ)',
    searchToken: 'Roddio Golf',
    origin: 'japanese',
    originLabel: '日本高階客製工坊精品',
    category: '蜂巢標誌與頂級手工桿身',
    tagline: '母公司為釣竿與精密碳纖大廠，透過可替換配重螺絲與獨門手工調校，打造獨一無二的私人兵器',
    specialHighlight: '標誌性的蜂巢底座與多彩客製配件，是高階球友展示不撞桿獨特品味的秘密武器。',
    woodCategory: 'S-Design / F-Tuning 客製配重鈦合金木桿 & 飛燕球道木',
    woodTagline: '高球工坊圈名聲響亮的「Roddio 飛燕球道木（Cleek/Spoon）」與可換底板配重一號木，搭配自研頂級碳纖桿身',
    woodHighlight: '其球道木與鐵木桿被眾多球具技師公認為「地表最好起球、初速最猛」的工坊神物。',
    priceRangeLabel: 'NT$ 65,000 ~ 140,000+',
    woodPriceRangeLabel: 'NT$ 24,000 ~ 45,000 (客製單支木桿)',
    minBudgetNew: 64000,
    maxBudgetNew: 150000,
    minBudgetUsed: 35000,
    maxBudgetUsed: 75000,
    woodMinBudgetNew: 24000,
    woodMaxBudgetNew: 48000,
    woodMinBudgetUsed: 14000,
    woodMaxBudgetUsed: 28000,
    supportedTargets: ['wood', 'irons'],
    strongestTargets: ['wood'],
    strategies: ['long_term', 'all_in_one'],
    primaryStrategies: ['long_term'],
    vibes: ['luxury', 'expert'],
    leftHandSupply: 'low',
    femaleLineStrength: 'medium',
    heightCustomAdvantage: true,
    usedLiquidity: 'medium',
  },
  {
    id: 'itobori',
    name: 'Itobori (一刀雕 / MTG Studio)',
    searchToken: 'Itobori Golf',
    origin: 'japanese',
    originLabel: '日本名古屋藝術研磨工坊',
    category: '粗獷手工鑿削刀痕工藝',
    tagline: '由名匠手工研磨出充滿張力的刀鑿切面與火焰烤藍/黑銅塗裝，每支桿頭皆是不可複製的雕塑作品',
    specialHighlight: '視覺衝擊力滿分的手工鍛造逸品，從球袋抽出瞬間絕對吸引全場目光。',
    priceRangeLabel: 'NT$ 68,000 ~ 150,000+',
    minBudgetNew: 68000,
    maxBudgetNew: 160000,
    minBudgetUsed: 38000,
    maxBudgetUsed: 80000,
    supportedTargets: ['irons'],
    strongestTargets: ['irons'],
    strategies: ['all_in_one', 'long_term'],
    primaryStrategies: ['all_in_one'],
    vibes: ['luxury', 'expert'],
    leftHandSupply: 'low',
    femaleLineStrength: 'low',
    heightCustomAdvantage: true,
    usedLiquidity: 'low',
  },
  {
    id: 'vega',
    name: 'Vega (ベガ / 市川町鍛造)',
    searchToken: 'Vega Golf',
    origin: 'japanese',
    originLabel: '日本高球鍛造發源地始祖',
    category: '市川町古典手工刀背/凹背',
    tagline: '源自日本首支鍛造鐵桿誕生地兵庫縣市川町，傳承武士刀鍛造淬火工法，手感純粹溫潤',
    specialHighlight: '極致內斂的日本匠人精神，稀少設有左手專用手工鍛造款式的日本精品工坊。',
    priceRangeLabel: 'NT$ 52,000 ~ 105,000',
    minBudgetNew: 52000,
    maxBudgetNew: 110000,
    minBudgetUsed: 28000,
    maxBudgetUsed: 60000,
    supportedTargets: ['irons'],
    strongestTargets: ['irons'],
    strategies: ['all_in_one', 'long_term'],
    primaryStrategies: ['all_in_one'],
    vibes: ['expert', 'luxury'],
    leftHandSupply: 'medium',
    femaleLineStrength: 'low',
    heightCustomAdvantage: true,
    usedLiquidity: 'low',
  },
  {
    id: 'ryoma',
    name: 'Ryoma (龍馬高爾夫)',
    searchToken: 'Ryoma Golf',
    origin: 'japanese',
    originLabel: '日本深重心遠距黑科技',
    category: 'DSI 超深重心鈦合金木桿',
    tagline: '專精於研發木桿的日本傳奇品牌，以驚人的超高擊球初速與超低無效後旋率聞名亞洲球壇',
    specialHighlight: '木桿與球道木被眾多球友譽為「距離作弊器」，失擊偏離中心依然能飛出驚人距離。',
    woodCategory: 'MAXIMA 系列 DSI 超深重心彈簧體結構木桿',
    woodTagline: '不隨波逐流每年改款，一顆桿頭打磨數年；獨創桿頭後方高密度配重塊與超薄彈簧冠部，讓偏離甜蜜點的失擊球依然筆直遠飛',
    woodHighlight: '專做木桿與鐵木桿的日本職人工坊，想要開球多飛 15~20 碼且不右曲的球友必試名器。',
    priceRangeLabel: 'NT$ 22,000 ~ 45,000 (單支木桿)',
    woodPriceRangeLabel: 'NT$ 22,000 ~ 45,000 (單支木桿)',
    minBudgetNew: 30000,
    maxBudgetNew: 65000,
    minBudgetUsed: 15000,
    maxBudgetUsed: 35000,
    woodMinBudgetNew: 22000,
    woodMaxBudgetNew: 45000,
    woodMinBudgetUsed: 11500,
    woodMaxBudgetUsed: 25000,
    supportedTargets: ['wood'],
    strongestTargets: ['wood'],
    strategies: ['gradual', 'long_term'],
    primaryStrategies: ['gradual', 'long_term'],
    vibes: ['luxury', 'expert'],
    leftHandSupply: 'low',
    femaleLineStrength: 'high',
    heightCustomAdvantage: false,
    usedLiquidity: 'medium',
  },

  // ================= 歐美巡迴賽主流四大巨頭與科技名廠 =================
  {
    id: 'callaway',
    name: 'Callaway (卡拉威)',
    searchToken: 'Callaway',
    origin: 'western',
    hasAsianSpecLine: true,
    globalMarketLeaderBonus: 6,
    originLabel: '美系全球市佔與 AI 科技龍頭（兼具日本支社 Asian Spec 專線）',
    category: 'Ai Smart Face 智慧桿面 / Apex & X Forged 鍛造 / Warbird & Solaire 套桿',
    tagline: '全球高球市佔率與產品線最完整的全方位霸主！從大滿貫選手御用 Apex 鍛造、日規 X Forged 軟鐵、Paradym Ai Smoke 系列到新手套桿全數稱霸',
    specialHighlight: '透過超級電腦與真實揮桿大數據打造的 Ai Smart Face 讓整片桿面都是甜蜜點；同時設有日本研發中心推出輕量化日規（MAX Fast / Solaire 女桿），左手規格與二手流通率皆為業界第一。',
    woodCategory: 'Ai Smart Face 人工智慧多甜點鈦面 / 360° 鍛造碳纖底盤木桿',
    woodTagline: '利用數萬筆球友擊球數據訓練 AI 設計出整片桿面皆為微甜點的鈦合金桿面，搭配 360° 全碳纖維底盤大幅降低死重，無論打在趾部或根部都能維持球速並修正方向',
    woodHighlight: '從巡迴賽低後旋 Triple Diamond (◆◆◆)、平衡型 MAX、防右曲 MAX-D 到日規超輕量 MAX Fast 一應俱全，球道木與小雞腿更是公認極好起球！',
    priceRangeLabel: 'NT$ 15,000 ~ 68,000',
    woodPriceRangeLabel: 'NT$ 8,500 ~ 24,000 (單支木桿)',
    minBudgetNew: 15000,
    maxBudgetNew: 78000,
    minBudgetUsed: 8000,
    maxBudgetUsed: 48000,
    woodMinBudgetNew: 11500,
    woodMaxBudgetNew: 25000,
    woodMinBudgetUsed: 5800,
    woodMaxBudgetUsed: 16500,
    supportedTargets: ['fullset', 'wood', 'irons'],
    strongestTargets: ['fullset', 'wood', 'irons'],
    strategies: ['long_term', 'gradual', 'all_in_one', 'budget_first'],
    primaryStrategies: ['long_term', 'gradual', 'all_in_one', 'budget_first'],
    vibes: ['expert', 'budget_practice', 'luxury'],
    leftHandSupply: 'high',
    femaleLineStrength: 'high',
    heightCustomAdvantage: true,
    usedLiquidity: 'high',
  },
  {
    id: 'taylormade',
    name: 'TaylorMade (泰勒梅)',
    searchToken: 'TaylorMade',
    origin: 'western',
    hasAsianSpecLine: true,
    globalMarketLeaderBonus: 4,
    originLabel: '美系巡迴賽科技霸主',
    category: '碳纖桿面木桿 / P790 中空鍛造 & Qi 容錯鐵桿',
    tagline: '老虎伍茲、Rory McIlroy、Scottie Scheffler 御用品牌，開創多層碳纖維木桿與 P790 中空 SpeedFoam 填充鐵桿風潮',
    specialHighlight: 'P系列中空鐵桿顏值極高，木桿球速狂暴，女用 Kalea 全套組與二手市場貨源極為充沛。',
    woodCategory: '60層碳纖維雙曲桿面 (Twist Face) / 破萬 MOI 慣性矩木桿',
    woodTagline: '木桿市佔率常勝軍！獨創 60 層輕量化碳纖維桿面結合 Twist Face 雙曲修正弧度，即使打在桿面趾部或根部也能把球拉回球道中央',
    woodHighlight: '開球木桿、球道木與 Rescue 小雞腿鐵木桿在全球二手與新品市場流通量第一，左手與女用規格極為齊全。',
    priceRangeLabel: 'NT$ 22,000 ~ 58,000',
    woodPriceRangeLabel: 'NT$ 10,500 ~ 23,000 (單支木桿)',
    minBudgetNew: 24000,
    maxBudgetNew: 65000,
    minBudgetUsed: 12000,
    maxBudgetUsed: 42000,
    woodMinBudgetNew: 15000,
    woodMaxBudgetNew: 24000,
    woodMinBudgetUsed: 7500,
    woodMaxBudgetUsed: 16000,
    supportedTargets: ['wood', 'irons', 'fullset'],
    strongestTargets: ['wood', 'irons'],
    strategies: ['long_term', 'gradual', 'all_in_one'],
    primaryStrategies: ['long_term', 'gradual', 'all_in_one'],
    vibes: ['expert'],
    leftHandSupply: 'high',
    femaleLineStrength: 'high',
    heightCustomAdvantage: true,
    usedLiquidity: 'high',
  },
  {
    id: 'ping',
    name: 'Ping (萍)',
    searchToken: 'Ping Golf',
    origin: 'western',
    originLabel: '美系量身訂做與容錯率之王',
    category: 'G-Series 超高 MOI / 色碼仰角',
    tagline: '由航太工程師創立，「絕不為了花俏外觀犧牲一絲一毫的直球穩定性」，球界公認方向最直的救星',
    specialHighlight: '獨創「色碼點（Color Code，如黑點、藍點、紅點、綠點）」代表不同身高與手長的仰角，高個子與嬌小身材必看！',
    woodCategory: '突破 10,000 g-cm² 極限 MOI 慣性矩 / 冠部渦流導流翼 (Turbulators)',
    woodTagline: '高球界公認「地表最直、最不會歪進樹林」的開球木桿霸主！桿頭後方高密度鎢鋼配重創造破萬 MOI 抗扭力，失擊依然筆直向前',
    woodHighlight: 'G430 / G425 等系列木桿與鐵木桿（Hybrid）在二手市場保值率驚人，SFT 防右曲版本更是新手上球道率神器。',
    priceRangeLabel: 'NT$ 25,000 ~ 58,000',
    woodPriceRangeLabel: 'NT$ 12,000 ~ 23,500 (單支木桿)',
    minBudgetNew: 27000,
    maxBudgetNew: 62000,
    minBudgetUsed: 15000,
    maxBudgetUsed: 38000,
    woodMinBudgetNew: 16500,
    woodMaxBudgetNew: 24500,
    woodMinBudgetUsed: 9000,
    woodMaxBudgetUsed: 16500,
    supportedTargets: ['wood', 'irons', 'fullset'],
    strongestTargets: ['wood', 'irons'],
    strategies: ['gradual', 'long_term', 'all_in_one'],
    primaryStrategies: ['gradual', 'long_term'],
    vibes: ['expert'],
    leftHandSupply: 'high',
    femaleLineStrength: 'high',
    heightCustomAdvantage: true,
    usedLiquidity: 'high',
  },
  {
    id: 'titleist',
    name: 'Titleist (泰特利斯)',
    searchToken: 'Titleist',
    origin: 'western',
    originLabel: '美巡賽最高佔有率殿堂',
    category: 'T-Series 鐵桿 / GT 木桿',
    tagline: '全球職業選手與單差點高手信仰中心，從經典 MB/T100 刀背到高容錯 T350 皆具備洗鍊競技美學',
    specialHighlight: '「本格派裝備取向」的歐美頭號代表，左手球桿供應極為完整，二手市場秒殺級流通性。',
    woodCategory: 'GT / TSR 系列航太聚合物頂蓋 & SureFit 16段可調套管',
    woodTagline: '捨棄傳統浮誇配色，採用經典黑色水滴梨形外觀與獨步球壇的 SureFit 16 向獨立調整傾角（Loft）與仰角（Lie）頸部套管',
    woodHighlight: 'GT1（超輕高起球）/ GT2（高MOI容錯遠距）/ GT3（精準滑軌配重）/ GT4（極低後旋）分工極為細膩，左手款齊全。',
    priceRangeLabel: 'NT$ 26,000 ~ 62,000',
    woodPriceRangeLabel: 'NT$ 12,000 ~ 24,000 (單支木桿)',
    minBudgetNew: 30000,
    maxBudgetNew: 65000,
    minBudgetUsed: 16000,
    maxBudgetUsed: 38000,
    woodMinBudgetNew: 17500,
    woodMaxBudgetNew: 25000,
    woodMinBudgetUsed: 9000,
    woodMaxBudgetUsed: 16500,
    supportedTargets: ['irons', 'wood'],
    strongestTargets: ['irons', 'wood'],
    strategies: ['all_in_one', 'long_term'],
    primaryStrategies: ['all_in_one', 'long_term'],
    vibes: ['expert', 'luxury'],
    leftHandSupply: 'high',
    femaleLineStrength: 'medium',
    heightCustomAdvantage: true,
    usedLiquidity: 'high',
  },
  {
    id: 'cobra',
    name: 'Cobra (Puma 旗下)',
    searchToken: 'Cobra Golf',
    origin: 'western',
    originLabel: '美系前衛空氣力學運動風',
    category: 'Aerojet/Darkspeed & 3D列印',
    tagline: '充滿年輕賽車流線感，除了強悍的遠距木桿外，更獨創「單一長度（One Length）」全套同7號鐵長度鐵桿',
    specialHighlight: '歐美一線科技品牌中性價比最高的選擇，Fly-XL 整套組與二手開球木桿超值度爆表。',
    woodCategory: '風洞流體力學低風阻桿頭 / PWR-Bridge 懸吊配重橋',
    woodTagline: '世界長打錦標賽（Long Drive）常勝軍品牌，流線型無死角空氣力學桿頭能直接提升揮桿頭速 1.5~2 mph，搭配 H.O.T. Face 人工智慧桿面',
    woodHighlight: '以歐美四大廠約 7 折的實惠價格，提供絲毫不遜色的頂級初速與酷炫外型，二手木桿更是千元級挖寶首選。',
    priceRangeLabel: 'NT$ 16,000 ~ 45,000',
    woodPriceRangeLabel: 'NT$ 8,500 ~ 18,500 (單支木桿)',
    minBudgetNew: 18000,
    maxBudgetNew: 45000,
    minBudgetUsed: 9000,
    maxBudgetUsed: 25000,
    woodMinBudgetNew: 12000,
    woodMaxBudgetNew: 19000,
    woodMinBudgetUsed: 5800,
    woodMaxBudgetUsed: 12000,
    supportedTargets: ['wood', 'irons', 'fullset'],
    strongestTargets: ['wood'],
    strategies: ['gradual', 'budget_first', 'long_term'],
    primaryStrategies: ['gradual', 'budget_first'],
    vibes: ['expert', 'budget_practice'],
    leftHandSupply: 'high',
    femaleLineStrength: 'medium',
    heightCustomAdvantage: false,
    usedLiquidity: 'medium',
  },
  {
    id: 'cleveland',
    name: 'Cleveland (克里夫蘭)',
    searchToken: 'Cleveland Golf',
    origin: 'western',
    originLabel: '美系短桿權威與寬底易打名家',
    category: 'Launcher XL Halo 鐵木桿型鐵桿',
    tagline: '與 Srixon 同屬登祿普集團，除了名滿天下的 RTX 挖起桿，其全中空寬底鐵桿能讓新手像打木桿一樣輕鬆起球',
    specialHighlight: '價格實惠且容錯率極高，特別適合害怕鐵桿打不起來、希望每一支鐵桿都像小雞腿一樣好打的新手。',
    woodCategory: 'Launcher XL 超大投影面積木桿 / Gliderail 雙滑軌球道木',
    woodTagline: '主打同級最大桿頭投影面積與握把端平衡配重（Action Mass CB），球道木與 Hy-Wood 底部設有雙滑軌，草皮長草也能輕鬆掃出高飛球',
    woodHighlight: '價格僅需一線大廠六成，卻擁有同集團 Srixon 的 Rebound Frame 雙重反彈科技。',
    priceRangeLabel: 'NT$ 15,000 ~ 36,000',
    woodPriceRangeLabel: 'NT$ 7,500 ~ 14,500 (單支木桿)',
    minBudgetNew: 16000,
    maxBudgetNew: 38000,
    minBudgetUsed: 8000,
    maxBudgetUsed: 20000,
    woodMinBudgetNew: 10000,
    woodMaxBudgetNew: 15500,
    woodMinBudgetUsed: 5000,
    woodMaxBudgetUsed: 9500,
    supportedTargets: ['irons', 'fullset', 'wood'],
    strongestTargets: ['irons'],
    strategies: ['gradual', 'budget_first'],
    primaryStrategies: ['gradual', 'budget_first'],
    vibes: ['expert', 'budget_practice'],
    leftHandSupply: 'high',
    femaleLineStrength: 'medium',
    heightCustomAdvantage: false,
    usedLiquidity: 'medium',
  },
  {
    id: 'wilson',
    name: 'Wilson Staff (威爾森)',
    searchToken: 'Wilson Golf',
    origin: 'western',
    originLabel: '美系百年大滿貫傳奇',
    category: 'Staff Model 刀背 / Profile 套桿',
    tagline: '歷史累積最多大滿貫冠軍獎盃的元老品牌，既有極致古典的鍛造刀背，也有全球熱銷的平價入門整套組',
    specialHighlight: 'Profile SGI 整套組專為高個子（Tall）與嬌小身材提供原廠不同長度版本，萬元出頭即可買到百年品牌全套。',
    woodCategory: 'Dynapower 碳纖/鈦合金高容錯開球木與球道木',
    woodTagline: '透過動態厚度鈦合金桿面與高 MOI 後置配重，重現百年傳奇名號 Dynapower，擊球回饋直接且價格極為親民',
    woodHighlight: '預算一萬元上下想買全新歐美老牌開球木桿或球道木的超值選擇。',
    priceRangeLabel: 'NT$ 12,000 ~ 42,000',
    woodPriceRangeLabel: 'NT$ 7,000 ~ 14,000 (單支木桿)',
    minBudgetNew: 12000,
    maxBudgetNew: 42000,
    minBudgetUsed: 6500,
    maxBudgetUsed: 22000,
    woodMinBudgetNew: 9000,
    woodMaxBudgetNew: 15000,
    woodMinBudgetUsed: 4500,
    woodMaxBudgetUsed: 9000,
    supportedTargets: ['fullset', 'irons', 'wood'],
    strongestTargets: ['fullset'],
    strategies: ['budget_first', 'gradual', 'all_in_one'],
    primaryStrategies: ['budget_first'],
    vibes: ['budget_practice', 'expert'],
    leftHandSupply: 'high',
    femaleLineStrength: 'high',
    heightCustomAdvantage: true,
    usedLiquidity: 'medium',
  },

  // ================= 歐美奢華、超跑工程與小眾精品 =================
  {
    id: 'pxg',
    name: 'PXG (Parsons Xtreme Golf)',
    searchToken: 'PXG Golf',
    origin: 'western',
    originLabel: '美國亞利桑那頂級科技奢華',
    category: '0311 / Black Ops 螺絲配重旗艦',
    tagline: '以「不計研發成本打造最強球桿」創立，超薄高強度鋼桿面結合內部高分子聚合物，擊球初速與手感兼備',
    specialHighlight: '軍事工業風的配重螺絲辨識度極高，對左手球員與高矮身材客製化極度友善。',
    woodCategory: 'Black Ops / 0311 高強度碳纖頂蓋 & 三向可交換配重螺絲木桿',
    woodTagline: '採用高抗壓碳纖維頂蓋搭配專利 AMF 高彈性鈦合金桿面，底部三顆重型鎢鋼與鈦螺絲可隨意互換位置，手動打造防右曲或低後旋設定',
    woodHighlight: '外觀霸氣硬派、擊球聲音低沉有力，且對左手球友與桿身長度客製極為友善。',
    priceRangeLabel: 'NT$ 35,000 ~ 95,000+',
    woodPriceRangeLabel: 'NT$ 15,000 ~ 28,000 (單支木桿)',
    minBudgetNew: 35000,
    maxBudgetNew: 110000,
    minBudgetUsed: 19000,
    maxBudgetUsed: 55000,
    woodMinBudgetNew: 17500,
    woodMaxBudgetNew: 30000,
    woodMinBudgetUsed: 9500,
    woodMaxBudgetUsed: 18500,
    supportedTargets: ['irons', 'wood', 'fullset'],
    strongestTargets: ['irons', 'wood'],
    strategies: ['long_term', 'all_in_one', 'gradual'],
    primaryStrategies: ['long_term', 'all_in_one'],
    vibes: ['luxury', 'expert'],
    leftHandSupply: 'high',
    femaleLineStrength: 'medium',
    heightCustomAdvantage: true,
    usedLiquidity: 'high',
  },
  {
    id: 'mclaren',
    name: 'McLaren Golf (麥拉倫高爾夫)',
    searchToken: 'McLaren Golf',
    origin: 'western',
    originLabel: '英國 F1 與超跑工程直系品牌',
    category: 'Series 1 / Series 3 MIM 精密鐵桿',
    tagline: '由麥拉倫官方獨立打造的頂級高球品牌，導入 F1 賽車空氣力學、MIM 金屬射出成型、輕量網格與碳纖維工程',
    specialHighlight: '非貼牌聯名，而是真正以超跑工程師團隊研發的現代工藝結晶，適合追求極致科技奢華與稀有度的藏家級球友。',
    priceRangeLabel: 'NT$ 75,000 ~ 130,000+',
    minBudgetNew: 75000,
    maxBudgetNew: 150000,
    minBudgetUsed: 50000,
    maxBudgetUsed: 95000,
    supportedTargets: ['irons'],
    strongestTargets: ['irons'],
    strategies: ['all_in_one', 'long_term'],
    primaryStrategies: ['all_in_one'],
    vibes: ['luxury', 'expert'],
    leftHandSupply: 'medium',
    femaleLineStrength: 'low',
    heightCustomAdvantage: true,
    usedLiquidity: 'low',
  },
  {
    id: 'bettinardi',
    name: 'Bettinardi (貝蒂納迪)',
    searchToken: 'Bettinardi Golf',
    origin: 'western',
    originLabel: '美國芝加哥精密 CNC 車削精品',
    category: '一體精密鍛造鐵桿與蜂巢推桿',
    tagline: '原本為軍工與醫療精密金屬加工廠，招牌 Honeycomb 蜂巢車削工藝與 S20C 複合鍛造鐵桿質感非凡',
    specialHighlight: '歐美少數能與日本手工鍛造工坊比拼金屬雕琢細節的奢華工藝品牌。',
    priceRangeLabel: 'NT$ 45,000 ~ 85,000',
    minBudgetNew: 45000,
    maxBudgetNew: 90000,
    minBudgetUsed: 26000,
    maxBudgetUsed: 52000,
    supportedTargets: ['irons'],
    strongestTargets: ['irons'],
    strategies: ['all_in_one', 'long_term'],
    primaryStrategies: ['all_in_one'],
    vibes: ['luxury', 'expert'],
    leftHandSupply: 'medium',
    femaleLineStrength: 'low',
    heightCustomAdvantage: true,
    usedLiquidity: 'medium',
  },

  // ================= 極致性價比、量販神桿與電商入門 =================
  {
    id: 'kirkland',
    name: 'Kirkland Signature (Costco 好市多)',
    searchToken: 'Kirkland Signature Golf',
    origin: 'other',
    originLabel: '美式量販界越級破壞神桿',
    category: '中空充填鐵桿組 / 挖起桿三件套',
    tagline: '外型與內部結構直逼一線大廠三萬級中空鐵桿，價格卻不到一半，全球高球論壇公認 CP 值天花板',
    specialHighlight: '常常一上架即秒殺缺貨，不僅性能超越價格數倍，未來升級換桿時在二手社團更是幾乎原價秒出！',
    woodCategory: '碳纖維複合頂蓋 460cc 可調式一號木桿',
    woodTagline: '採用四層變數厚度鈦合金桿面、輕量碳纖維頂蓋與 4 段可調式傾角套管（9.5°~11.5°），標配美系 EvenFlow 碳纖桿身',
    woodHighlight: '僅需約六千多元台幣就能買到具備「碳纖頂蓋＋可調套管」的越級一號木，性價比震驚全球球壇！',
    priceRangeLabel: 'NT$ 12,000 ~ 19,000',
    woodPriceRangeLabel: 'NT$ 6,200 ~ 8,500 (單支一號木)',
    minBudgetNew: 12000,
    maxBudgetNew: 22000,
    minBudgetUsed: 8500,
    maxBudgetUsed: 16000,
    woodMinBudgetNew: 6000,
    woodMaxBudgetNew: 9500,
    woodMinBudgetUsed: 4500,
    woodMaxBudgetUsed: 7500,
    supportedTargets: ['irons', 'wood', 'fullset'],
    strongestTargets: ['irons', 'wood'],
    strategies: ['budget_first', 'long_term', 'gradual'],
    primaryStrategies: ['budget_first'],
    vibes: ['budget_practice', 'expert'],
    leftHandSupply: 'medium',
    femaleLineStrength: 'low',
    heightCustomAdvantage: false,
    usedLiquidity: 'high',
  },
  {
    id: 'inesis',
    name: 'Inesis (Decathlon 迪卡農)',
    searchToken: 'Inesis Decathlon Golf',
    origin: 'other',
    originLabel: '法國運動量販人體工學名作',
    category: '100 新手半套組 / 500 進階凹背',
    tagline: '破除繁複號數迷思，獨創依「手腕離地距離（Size 1 短版 / Size 2 長版）」與「揮速」直接分級的聰明球桿',
    specialHighlight: '對「身高偏高或偏矮」以及「左手球友」最友善的平價品牌！直接買 Size 1 或 Size 2 就不用花錢改桿長。',
    woodCategory: '500 / 900 系列依揮速與身高分級之高容錯木桿與小雞腿',
    woodTagline: '不用背誦複雜的桿身數據，直接按「慢揮速/中揮速/快揮速」與「Size 1 (矮) / Size 2 (高)」挑選 14° 高起球一號木或小雞腿',
    woodHighlight: '門市即可試握，兩年保固乾脆俐落，單支木桿或鐵木桿三五千元即可無痛入手。',
    priceRangeLabel: 'NT$ 6,500 ~ 22,000',
    woodPriceRangeLabel: 'NT$ 3,500 ~ 8,500 (單支木桿/小雞腿)',
    minBudgetNew: 6500,
    maxBudgetNew: 22000,
    minBudgetUsed: 3800,
    maxBudgetUsed: 12000,
    woodMinBudgetNew: 3500,
    woodMaxBudgetNew: 8500,
    woodMinBudgetUsed: 2000,
    woodMaxBudgetUsed: 5500,
    supportedTargets: ['fullset', 'irons', 'wood'],
    strongestTargets: ['fullset'],
    strategies: ['budget_first', 'gradual'],
    primaryStrategies: ['budget_first'],
    vibes: ['budget_practice'],
    leftHandSupply: 'high',
    femaleLineStrength: 'high',
    heightCustomAdvantage: true,
    usedLiquidity: 'medium',
  },
  {
    id: 'pgm',
    name: 'PGM (淘寶/天貓平價銷量王)',
    searchToken: 'PGM 高爾夫球桿',
    origin: 'other',
    originLabel: '亞洲電商極致平價入門霸主',
    category: '全套碳纖/不鏽鋼新手練習套桿',
    tagline: '用幾張練習場球券的價格就能買齊整套含球袋，超大凹背桿頭讓新手毫無心理負擔地盡情揮擊',
    specialHighlight: '適合「還不確定自己會不會長期打下去、第一組只想買最便宜來練習場揮汗」的新手，敲地完全不心疼。',
    woodCategory: '460cc 大甜點鈦合金練習用一號木 / 球道木',
    woodTagline: '超低門檻的 460cc 鈦合金開球木桿與碳纖桿身，甚至提供無段調整傾角款式，讓純新手在練習場練習大角度揮桿不怕打凹名貴球桿',
    woodHighlight: '兩三千元即可買到全新開球木或小雞腿，是純練習場試水溫的省錢極限王。',
    priceRangeLabel: 'NT$ 4,500 ~ 15,000',
    woodPriceRangeLabel: 'NT$ 1,800 ~ 4,800 (單支木桿)',
    minBudgetNew: 4500,
    maxBudgetNew: 15000,
    minBudgetUsed: 2500,
    maxBudgetUsed: 8000,
    woodMinBudgetNew: 1800,
    woodMaxBudgetNew: 5000,
    woodMinBudgetUsed: 1000,
    woodMaxBudgetUsed: 3000,
    supportedTargets: ['fullset', 'irons', 'wood'],
    strongestTargets: ['fullset'],
    strategies: ['budget_first', 'gradual'],
    primaryStrategies: ['budget_first'],
    vibes: ['budget_practice'],
    leftHandSupply: 'high',
    femaleLineStrength: 'high',
    heightCustomAdvantage: false,
    usedLiquidity: 'low',
  },
  {
    id: 'touredge',
    name: 'Tour Edge (美系高CP黑馬)',
    searchToken: 'Tour Edge Golf',
    origin: 'other',
    originLabel: '美國伊利諾州高性價比工坊',
    category: 'Bazooka 全套組 / Hot Launch 超容錯',
    tagline: '在北美被譽為「最被低估的良心品牌」，以中價位提供媲美四大巨頭的鈦合金面杯科技與終身保固精神',
    specialHighlight: '冠軍常勝軍 Bernhard Langer 代言，其全套組與鐵木桿在歐美高球評測網站長年霸榜最佳性價比獎。',
    woodCategory: 'Exotics 鍛造鈦面碳纖木桿 / Hot Launch Offset 防右曲木桿',
    woodTagline: '以「球道木與鐵木桿之王」享譽北美，Hot Launch 系列更提供特殊桿頸後移（Offset）設計，強制幫新手在擊球瞬間關上桿面消除右曲球',
    woodHighlight: '想要用不到大廠一半的預算買到真正具備美巡冠軍血統的球道木與開球木，Tour Edge 是內行首選。',
    priceRangeLabel: 'NT$ 14,000 ~ 32,000',
    woodPriceRangeLabel: 'NT$ 6,500 ~ 14,000 (單支木桿)',
    minBudgetNew: 14000,
    maxBudgetNew: 34000,
    minBudgetUsed: 7500,
    maxBudgetUsed: 18000,
    woodMinBudgetNew: 6500,
    woodMaxBudgetNew: 14500,
    woodMinBudgetUsed: 3800,
    woodMaxBudgetUsed: 8500,
    supportedTargets: ['fullset', 'wood', 'irons'],
    strongestTargets: ['wood', 'fullset'],
    strategies: ['budget_first', 'gradual', 'long_term'],
    primaryStrategies: ['budget_first', 'gradual'],
    vibes: ['budget_practice', 'expert'],
    leftHandSupply: 'high',
    femaleLineStrength: 'high',
    heightCustomAdvantage: true,
    usedLiquidity: 'medium',
  },
  {
    id: 'strata',
    name: 'Strata (Callaway 旗下入門品牌)',
    searchToken: 'Callaway Strata Golf Set',
    origin: 'other',
    originLabel: 'Amazon 全球銷售冠軍套桿',
    category: '9支 / 12支 / 16支開箱即打全套組',
    tagline: '由卡拉威工程團隊針對純新手調校的副牌，省略昂貴可調式接頭，將成本全部灌注在易打性與耐用度',
    specialHighlight: '想要大廠血統品控、又想在一萬多元內一次搞定木桿、鐵桿、推桿與腳架球袋的最佳解答。',
    priceRangeLabel: 'NT$ 11,500 ~ 21,000',
    minBudgetNew: 11500,
    maxBudgetNew: 21000,
    minBudgetUsed: 6000,
    maxBudgetUsed: 12000,
    supportedTargets: ['fullset'],
    strongestTargets: ['fullset'],
    strategies: ['budget_first', 'gradual'],
    primaryStrategies: ['budget_first'],
    vibes: ['budget_practice'],
    leftHandSupply: 'high',
    femaleLineStrength: 'high',
    heightCustomAdvantage: false,
    usedLiquidity: 'high',
  },
  {
    id: 'macgregor',
    name: 'MacGregor (麥克格雷格)',
    searchToken: 'MacGregor Golf Set',
    origin: 'other',
    originLabel: '歐美百年高CP值套桿名門',
    category: 'CG3000 / DCT 超值整套組',
    tagline: '金熊 Jack Nicklaus 昔日奪冠傳奇品牌，現今轉型專攻極致親民的高容錯全套球桿，萬元上下輕鬆下場',
    specialHighlight: '歐美高球電商長年熱銷，提供加長版（+1 inch）選項，對預算有限的高個子新手非常貼心。',
    priceRangeLabel: 'NT$ 8,500 ~ 16,000',
    minBudgetNew: 8500,
    maxBudgetNew: 16500,
    minBudgetUsed: 4500,
    maxBudgetUsed: 9500,
    supportedTargets: ['fullset'],
    strongestTargets: ['fullset'],
    strategies: ['budget_first', 'gradual'],
    primaryStrategies: ['budget_first'],
    vibes: ['budget_practice'],
    leftHandSupply: 'high',
    femaleLineStrength: 'high',
    heightCustomAdvantage: true,
    usedLiquidity: 'medium',
  },
];

/**
 * 根據使用者的 7 道問題回答，對所有支援該品項的品牌進行精細連續計分與正規化
 * 採用真實價格區間 [minBudget, maxBudget] 與多主力品項 (strongestTargets)，確保 Callaway 等全線大廠在各品項與預算帶都能公平展現實力！
 */
function scoreAndRankBrands(answers: QuizAnswers): {
  primaryBrands: RecommendedBrand[];
  alternativeBrands: RecommendedBrand[];
} {
  const isWood = answers.targetType === 'wood';
  const isFemale = answers.genderOrientation === 'female';
  const isLeftHand = answers.handOrientation === 'left';
  const isCheapest = answers.budgetMode === 'cheapest';
  const isUnlimited = answers.budgetMode === 'unlimited';
  const effectiveBudget = isCheapest
    ? isWood
      ? 6000
      : 10000
    : isUnlimited
    ? 150000
    : answers.budgetValue;

  const candidatePool = isWood
    ? GOLF_BRAND_DATABASE.filter((b) => b.supportedTargets.includes('wood'))
    : GOLF_BRAND_DATABASE;

  const rawScored = candidatePool.map((brand) => {
    let rawPoints = 0;
    const reasons: string[] = [];

    // 0. 全球市佔與全品項生態系基準加分
    if (brand.globalMarketLeaderBonus) {
      rawPoints += brand.globalMarketLeaderBonus;
    }

    // 1. Q0: 購買目標品項 (支援多王牌品項 strongestTargets，不因陣列順序扣分)
    const isStrongestTarget = brand.strongestTargets.includes(answers.targetType);
    const targetIdx = brand.supportedTargets.indexOf(answers.targetType);

    if (isStrongestTarget) {
      rawPoints += 22;
      const targetName =
        answers.targetType === 'irons'
          ? '鐵桿組'
          : answers.targetType === 'wood'
          ? '開球一號木與球道木/鐵木桿'
          : '開箱即打全套組';
      reasons.push(`王牌主力強項正是「${targetName}」`);
    } else if (targetIdx >= 0) {
      rawPoints += 12;
      if (isWood) {
        reasons.push('旗下開球木桿與球道木擁有極佳巡迴賽與業餘口碑');
      }
    } else {
      rawPoints -= 28;
    }

    // 2. Q1: 購買策略 (支援多主力策略 primaryStrategies，不因陣列順序扣分)
    const isPrimaryStrat = brand.primaryStrategies.includes(answers.purchaseStrategy);
    const stratIdx = brand.strategies.indexOf(answers.purchaseStrategy);

    if (isPrimaryStrat) {
      rawPoints += 24;
      const stratMap: Record<PurchaseStrategy, string> = isWood
        ? {
            all_in_one: '旗下低後旋（Low Spin）競技型木桿完美契合「一次到位」強勁穿透球路要求',
            long_term: '旗下 460cc 碳纖複合木桿與可調式套管是「長久使用 3~5 年」的平衡典範',
            gradual: '高 MOI 慣性矩與防右曲（Draw-Bias）配重符合「循序漸進」輕鬆起球訴求',
            budget_first: '木桿與小雞腿（Hybrid）性價比極高，專為「預算優先」打造',
          }
        : {
            all_in_one: '完美契合「一次到位」職業級鍛造/競技要求',
            long_term: '旗下主力進階系列是「長久使用 3~5 年」的平衡典範',
            gradual: '超低深重心設計符合「循序漸進」高容錯好起球訴求',
            budget_first: '專為「預算優先」打造，大幅省下器材折舊費',
          };
      reasons.push(stratMap[answers.purchaseStrategy]);
    } else if (stratIdx >= 0) {
      rawPoints += 14;
    } else {
      rawPoints -= 18;
    }

    // 3. Q2: 預算區間匹配計分 [minBudget, maxBudget]
    // 若使用者「會考慮二手」，代表可接受從二手最低價一路到新品最高價的完整選擇範圍
    const minP = isWood
      ? answers.considerUsed
        ? (brand.woodMinBudgetUsed ?? brand.minBudgetUsed * 0.55)
        : (brand.woodMinBudgetNew ?? brand.minBudgetNew * 0.55)
      : answers.considerUsed
      ? brand.minBudgetUsed
      : brand.minBudgetNew;

    const maxP = isWood
      ? (brand.woodMaxBudgetNew ?? brand.maxBudgetNew * 0.55)
      : brand.maxBudgetNew;

    if (isCheapest) {
      const cheapThreshold = isWood ? 12000 : 20000;
      const minRef = minP;
      if (minRef <= cheapThreshold) {
        const cheapBonus = Math.round(30 - (minRef / cheapThreshold) * 10);
        rawPoints += cheapBonus;
        reasons.push('符合「越便宜越好」高性價比入手門檻');
      } else {
        rawPoints -= Math.min(35, Math.round((minRef - cheapThreshold) / 1200));
      }
    } else if (isUnlimited) {
      const luxThreshold = isWood ? 18000 : 40000;
      if (maxP >= luxThreshold || brand.vibes.includes('luxury')) {
        const luxuryTierBonus = Math.min(30, Math.round(14 + maxP / (isWood ? 4000 : 8000)));
        rawPoints += luxuryTierBonus;
        reasons.push('預算無上限下必看的頂級工藝/旗艦規格');
      } else {
        rawPoints -= 20;
      }
    } else {
      // 滑桿模式：只要 effectiveBudget 落在品牌的 [minP, maxP * 1.15] 產品線範圍內即獲得高分，不因產品線廣而被稀釋
      if (effectiveBudget >= minP && effectiveBudget <= maxP * 1.15) {
        const spanBonus = maxP - minP >= (isWood ? 10000 : 35000) ? 2 : 0;
        rawPoints += 24 + spanBonus;
        reasons.push(
          `主力產品線完美涵蓋您的 NT$ ${effectiveBudget.toLocaleString()} ${
            isWood ? '木桿添購' : answers.considerUsed ? '二手/新品' : '新品'
          }預算`
        );
      } else if (effectiveBudget < minP) {
        // 預算低於該品牌最低門檻
        const shortfallRatio = (minP - effectiveBudget) / minP;
        rawPoints -= Math.min(32, Math.round(shortfallRatio * 45));
      } else {
        // 預算高於該品牌最高上限 (例如拿 9 萬預算看純平價入門牌)
        const excessRatio = (effectiveBudget - maxP) / maxP;
        rawPoints -= Math.min(22, Math.round(excessRatio * 18));
      }
    }

    // 4. Q3: 身高、慣用手與性別體能
    if (isLeftHand) {
      if (brand.leftHandSupply === 'high') {
        rawPoints += 22;
        reasons.push('左手球桿（LH）原廠開模最齊全、現貨好找');
      } else if (brand.leftHandSupply === 'medium') {
        rawPoints += 4;
      } else {
        rawPoints -= 32;
      }
    }

    if (isFemale) {
      if (brand.femaleLineStrength === 'high') {
        rawPoints += 22;
        reasons.push('擁有專為女性揮速研發的超輕量 L 碳纖桿身與高顏值產品線');
      } else if (brand.femaleLineStrength === 'medium') {
        rawPoints += 4;
      } else {
        rawPoints -= 22;
      }
    }

    if (answers.heightCategory !== 'standard') {
      if (brand.heightCustomAdvantage) {
        rawPoints += 13;
        reasons.push(
          isWood
            ? `提供多段可調式頸部套管（Adjustable Sleeve）或友善桿長規格，便於配合「身形${
                answers.heightCategory === 'tall' ? '偏高' : '偏矮'
              }」調整`
            : `針對「身形${
                answers.heightCategory === 'tall' ? '偏高' : '偏矮'
              }」提供友善的桿長/仰角（Lie Angle）規格體系`
        );
      } else {
        rawPoints -= 4;
      }
    }

    // 5. Q4: 二手考量
    if (answers.considerUsed) {
      if (brand.usedLiquidity === 'high') {
        rawPoints += 13;
        reasons.push('二手市場流通量極大，好買且未來升級轉手保值');
      } else if (brand.usedLiquidity === 'medium') {
        rawPoints += 5;
      } else {
        rawPoints -= 6;
      }
    } else {
      if (brand.usedLiquidity === 'high' || brand.origin === 'other') {
        rawPoints += 8;
      }
    }

    // 6. Q5: 品牌地域偏好 (針對設有日本研發支社推出獨立日規線之品牌如 Callaway / TaylorMade 給予跨區相容加分)
    if (answers.brandOrigin === 'no_preference') {
      rawPoints += 12;
    } else if (brand.origin === answers.brandOrigin) {
      rawPoints += 26;
    } else if (answers.brandOrigin === 'japanese' && brand.hasAsianSpecLine) {
      rawPoints += 8;
      reasons.push('雖為歐美母廠但設有日本支社，專門推出輕量化日規（Asian Spec）系列');
    } else if (brand.origin === 'other' && answers.brandVibe === 'budget_practice') {
      rawPoints += 10;
    } else {
      rawPoints -= 18;
    }

    // 7. Q6: 品牌調性
    if (answers.brandVibe === 'no_preference') {
      rawPoints += 12;
    } else {
      const vibeIdx = brand.vibes.indexOf(answers.brandVibe);
      if (vibeIdx === 0) {
        rawPoints += 26;
        const vibeMap: Record<Exclude<BrandVibe, 'no_preference'>, string> = {
          expert: '極具「本格派裝備取向」實力氣場，巡迴賽與資深球友高度認可',
          luxury: '自帶「奢華精品」尊榮質感與高辨識度工藝光澤',
          budget_practice: '完美符合「第一組練習用高CP值」無痛揮擊哲學',
        };
        reasons.push(vibeMap[answers.brandVibe]);
      } else if (vibeIdx >= 1) {
        rawPoints += 20;
      } else {
        rawPoints -= 20;
      }
    }

    if (reasons.length < 2) {
      reasons.push(`綜合容錯率與${brand.originLabel}口碑優異`);
    }

    const leftHandNote =
      brand.leftHandSupply === 'high'
        ? '左手規格齊全（新舊品皆易入手）'
        : brand.leftHandSupply === 'medium'
        ? '部分主力系列提供左手款（建議先查庫存）'
        : '左手款式極為稀少（多僅限右手規格）';

    const usedMarketNote =
      brand.usedLiquidity === 'high'
        ? '二手流通極高・保值好脫手'
        : brand.usedLiquidity === 'medium'
        ? '二手流通適中・建議於專業球具店尋寶'
        : '小眾或平價定位・建議直接買新品或特定工坊訂購';

    const displayCategory = isWood && brand.woodCategory ? brand.woodCategory : brand.category;
    const displayTagline =
      isWood && brand.woodTagline
        ? `${brand.woodTagline}。${brand.woodHighlight ?? ''}`
        : `${brand.tagline}。${brand.specialHighlight}`;
    const displayPriceRange =
      isWood && brand.woodPriceRangeLabel ? brand.woodPriceRangeLabel : brand.priceRangeLabel;

    return {
      name: brand.name,
      searchToken: brand.searchToken,
      category: displayCategory,
      tagline: displayTagline,
      origin: brand.originLabel,
      priceRangeLabel: displayPriceRange,
      rawPoints,
      matchReasons: reasons.slice(0, 3),
      leftHandNote,
      usedMarketNote,
    };
  });

  rawScored.sort((a, b) => b.rawPoints - a.rawPoints);

  const maxRaw = rawScored[0]?.rawPoints ?? 100;
  const minRaw = rawScored[rawScored.length - 1]?.rawPoints ?? 0;
  const rawSpan = Math.max(40, maxRaw - minRaw);

  let prevScore = 99;
  const normalizedList: RecommendedBrand[] = rawScored.map((item, idx) => {
    const relativeRatio = (item.rawPoints - minRaw) / rawSpan;
    let computed = Math.round(58 + relativeRatio * 39);

    if (idx === 0) {
      computed = Math.min(97, Math.max(89, computed));
    } else {
      const rawGap = rawScored[idx - 1].rawPoints - item.rawPoints;
      const minStepDown = rawGap >= 6 ? 3 : rawGap >= 2 ? 2 : 1;
      computed = Math.min(computed, prevScore - minStepDown);
      computed = Math.max(50, computed);
    }
    prevScore = computed;

    return {
      name: item.name,
      category: item.category,
      tagline: item.tagline,
      origin: item.origin,
      priceRangeLabel: item.priceRangeLabel,
      matchScore: computed,
      matchReasons: item.matchReasons,
      leftHandNote: item.leftHandNote,
      usedMarketNote: item.usedMarketNote,
    };
  });

  const primaryBrands = normalizedList.slice(0, 6);
  const alternativeBrands = normalizedList.slice(6, 10);

  return { primaryBrands, alternativeBrands };
}

export function evaluateGolfFitting(answers: QuizAnswers): SpecProfile {
  const isWood = answers.targetType === 'wood';
  const isFemale = answers.genderOrientation === 'female';
  const isLeftHand = answers.handOrientation === 'left';
  const isAllInOne = answers.purchaseStrategy === 'all_in_one';
  const isBudgetPractice = answers.brandVibe === 'budget_practice';
  const isLuxury = answers.brandVibe === 'luxury';
  const isCheapest = answers.budgetMode === 'cheapest';

  // 1. 決定目標品項標籤
  const targetLabelMap: Record<TargetType, string> = {
    irons: '鐵桿組 (Iron Set 5-PW/AW)',
    wood: '木桿系列 (Driver 開球一號木 / Fairway 球道木 / Hybrid 鐵木桿)',
    fullset: '全套組 (Full Package Set 含木桿、鐵桿、推桿與球袋)',
  };
  const targetCategoryLabel = targetLabelMap[answers.targetType];

  // 2. 桿頭造型與構造設計 (完全獨立區隔「木桿」與「鐵桿/整套」)
  let headStructure = '';
  let headProcess = '';
  let bladeWarning = false;
  let bladeWarningText = '';

  if (isWood) {
    if (isAllInOne) {
      headStructure = '低後旋緊湊型巡迴賽木桿頭 (Low Spin / 440~450cc Tour Head，建議傾角 8.5°~9.5°)';
      headProcess = '鍛造杯型鈦合金桿面＋多層碳纖維頂蓋與前置配重 (Forged Ti-Face + Carbon Crown + Forward CG)';
      bladeWarning = true;
      bladeWarningText =
        '【⚠️ 職業級低後旋（Low Spin）木桿重要警語】一次到位的選手級 LS 木桿將配重移至桿面後方，雖能大幅降低後旋（Spin Rate）打出抗風強勁的穿透球路，但慣性矩（MOI）較低、甜區較小。新手若揮桿頭速未達 95mph 以上或桿面回正不穩，極易因側旋過大產生嚴重右曲（Slice）或因後旋不足導致球提早墜地掉距離！建議具備良好運動爆發力並搭配教練指導。';
    } else if (answers.purchaseStrategy === 'long_term') {
      headStructure = '標準平衡型高初速 460cc 大甜點木桿頭 (Balanced MAX Head，建議傾角 9.5°~10.5°)';
      headProcess = '鍛造可變厚度鈦合金桿面＋360° 輕量化碳纖維頂蓋與可調式傾角套管 (Forged VFT Ti-Face + Carbon Chassis + Adjustable Sleeve)';
    } else if (answers.purchaseStrategy === 'gradual') {
      headStructure = '超高 MOI 防右曲寬容型 460cc 木桿頭 (High MOI Draw-Bias / MAX-D，建議傾角 10.5°~12°)';
      headProcess = '深後置鎢鋼配重＋跟部內側加重防右曲結構與高彈性鈦桿面 (Deep Rear CG + Heel Draw Weighting)';
    } else {
      headStructure = '460cc 高容錯大甜點鈦合金木桿頭 (High-Forgiveness 460cc Head，建議傾角 10.5°~12°)';
      headProcess = '高強度鈦合金主體搭配低重心底盤設計 (Precision Titanium Body + Low CG Sole)';
    }
  } else {
    // 鐵桿組或整套
    if (isAllInOne) {
      headStructure = '傳統薄頂線肌肉刀背 / 選手級窄底半刀背 (Forged Muscle Back / Tour Blade)';
      headProcess = '一體軟鐵精密鍛造工藝 (Single-Piece Forged S20C/S25C Soft Iron)';
      bladeWarning = true;
      bladeWarningText =
        '【⚠️ 職業級鍛造刀背重要警語】刀背球桿（Muscle Back）雖然擁有最純粹綿密的擊球回饋與做球（Workability）操控力，但甜區（Sweet Spot）僅硬幣大小且桿底極窄。新手未擊中甜蜜點時，不僅雙手會承受強烈麻震感，飛行距離更會瞬間損失 15~25 碼以上！若您堅持直上刀背，建議具備每週規律練球 3 次以上之決心，並強烈建議搭配專業教練修正揮桿軌跡。';
    } else if (answers.purchaseStrategy === 'long_term') {
      headStructure = '中空填充容錯 / 複合微階半凹背 (Players Distance / Hollow Body / Forged Cavity)';
      headProcess = '軟鐵鍛造桿體結合高彈性麻鋼桿面與內部鎢鋼配重 (Forged Body + Maraging Steel Face)';
    } else if (answers.purchaseStrategy === 'gradual') {
      headStructure = '超大甜蜜區寬底深凹背 (Game Improvement / Deep Undercut Cavity)';
      headProcess = '精密不鏽鋼壓鑄結合低重心鎢鋼配重 (Cast 431/17-4 Stainless + Low CG Tungsten)';
    } else {
      headStructure = '高容錯寬底大凹背一體構造 (Wide-Sole Cavity Back)';
      headProcess = '高耐用度壓鑄不鏽鋼 (Precision Cast Stainless Steel)';
    }
  }

  // 3. 桿身規格推導
  let shaftMaterial = '';
  let shaftFlex = '';
  let swingWeight = '';

  if (isWood) {
    if (isFemale) {
      shaftMaterial = '女用超輕量高彈全碳纖維木桿桿身 (35g~45g Lightweight Graphite，低折點高起飛角)';
      shaftFlex = isAllInOne ? 'A (Amateur / 進階女用 R2 硬度)' : 'L (Ladies 女性專屬高彈硬度，扭矩 Torque 5.5°~6.5°)';
      swingWeight = 'C0 ~ C4 (極致輕盈，輕鬆揮出高初速)';
    } else {
      if (answers.purchaseStrategy === 'gradual' || answers.purchaseStrategy === 'budget_first' || isCheapest) {
        shaftMaterial = '50g 級別原廠高容錯全碳纖維木桿桿身 (48g~55g Stock Graphite，中低折點易起球)';
        shaftFlex = 'R (Regular) 或 SR (Stiff-Regular，扭矩 Torque 4.5°~5.2°)';
        swingWeight = 'D0 ~ D1 (好借力鞭甩、不費力)';
      } else if (answers.purchaseStrategy === 'long_term') {
        shaftMaterial = '55g~60g 級別穩定型全碳纖維木桿桿身 (如 Tensei / Tour AD / Speeder NX 50~60，中折點 Mid-Launch)';
        shaftFlex = 'SR 或 S (Stiff 扎實硬度，扭矩 Torque 3.6°~4.4°)';
        swingWeight = 'D1 ~ D3 (兼顧揮桿球速與方向抗扭穩定度)';
      } else {
        shaftMaterial = '60g~70g 級別巡迴賽低扭矩碳纖維桿身 (如 Fujikura Ventus TR / Tour AD VF / Diamana 6S/6X，高折點低後旋)';
        shaftFlex = 'S (Stiff 硬) 或 X (Extra Stiff，低扭矩 Torque 2.8°~3.5°)';
        swingWeight = 'D2 ~ D4 (抗左拉、大力抽球桿面不翻轉)';
      }
    }
  } else {
    if (isFemale) {
      shaftMaterial = '高彈性超輕量碳纖維 (High-Modulus Lightweight Graphite, 38g~48g)';
      shaftFlex = isAllInOne ? 'A (Amateur / 進階女用硬度) 或 R (輕量碳纖)' : 'L (Ladies 女性專屬高彈硬度)';
      swingWeight = 'C2 ~ C5 (輕巧易揮，減少手腕與前臂代償負擔)';
    } else {
      if (answers.purchaseStrategy === 'gradual' || answers.purchaseStrategy === 'budget_first' || isCheapest) {
        if (answers.heightCategory === 'short') {
          shaftMaterial = '輕量碳纖維 (Graphite 50g~60g) 或 85g 超輕量鋼管';
          shaftFlex = 'R (Regular 標準硬度)';
          swingWeight = 'C9 ~ D0 (揮動輕快)';
        } else {
          shaftMaterial = '輕量不鏽鋼管 (N.S.PRO 850GH / 950GH neo 同級 85g~95g) 或 60g 碳纖維';
          shaftFlex = 'R (Regular) 或 SR (Stiff-Regular)';
          swingWeight = 'D0 ~ D1 (最易感受桿頭自然釋放)';
        }
      } else if (answers.purchaseStrategy === 'long_term') {
        shaftMaterial = '中重量穩定型鋼管 (Modus3 Tour 105 / Dynamic Gold 95~105, 95g~105g) 或 70g 碳纖';
        shaftFlex = 'SR 或 S (Stiff 扎實硬度)';
        swingWeight = 'D1 ~ D2 (兼顧下桿穩定度與距離控制)';
      } else {
        shaftMaterial = '職業巡迴賽標竿重鋼管 (Dynamic Gold S200 / Project X / Modus3 120, 115g~129g)';
        shaftFlex = 'S (Stiff 硬) 或 X (Extra Stiff)';
        swingWeight = 'D2 ~ D3+ (重頭感鮮明，抗扭力極強)';
      }
    }
  }

  // 4. 身高與仰角校正
  let shaftLength = '';
  let lieAngle = '';

  if (isWood) {
    if (answers.heightCategory === 'tall') {
      shaftLength = '標準偏長木桿設定 (Driver 45.5" ~ 45.75"，無須額外改長)';
      lieAngle = '建議將木桿可調式頸部套管調至 Upright (U) 檔位（減少高個子開球右曲）';
    } else if (answers.heightCategory === 'short') {
      shaftLength = '建議選用 44.75"~45.25" 日規長度，或擊球時握短 0.5 吋提升甜蜜點命中率';
      lieAngle = '建議將木桿可調式套管維持 Standard 標準仰角並調高 +1° 傾角助起球';
    } else {
      shaftLength = '標準木桿長度 (Driver 45.25" ~ 45.5" / 5號球道木 42.5")';
      lieAngle = '可調式套管設定於 Standard 標準檔位（可依球路微調 ±1.5° 傾角）';
    }
  } else {
    if (answers.heightCategory === 'tall') {
      shaftLength = '建議加長 +0.5" 至 +1.0" (Extended Length)';
      lieAngle = '調陡 Upright 1° ~ 2° (防止高個子擊球時桿趾先觸地導致球往右偏)';
    } else if (answers.heightCategory === 'short') {
      shaftLength = '建議縮短 -0.5" (Shortened Length)';
      lieAngle = '調平 Flat 1° ~ 2° (防止嬌小身形擊球時桿根先卡地導致球往左拉)';
    } else {
      shaftLength = '標準長度 (Standard Asian/OEM Spec)';
      lieAngle = '標準桿面仰角 (Standard Lie Angle)';
    }
  }

  // 5. 慣用手備註
  const handRemark = isLeftHand
    ? '左手球員 (Left-Handed / LH)：市場庫存約佔 8%~10%。系統已自動為您優先排序「左手開模齊全」之品牌（如 Callaway、Ping、Titleist、TaylorMade、PXG、迪卡農 Inesis 等）。選購二手球桿時左手競爭者少，常能談到極佳折扣！'
    : '右手球友 (Right-Handed / RH)：全球最核心主流規格，無論歐美科技廠、日本職人工坊或二手挖寶皆 100% 全型號支援。';

  // 6. 執行多維度品牌評分與匹配引擎
  const { primaryBrands, alternativeBrands } = scoreAndRankBrands(answers);

  // 7. Google Shopping 搜尋關鍵字與連結組裝
  const searchKeywords: string[] = [];
  searchKeywords.push('高爾夫');
  searchKeywords.push(isFemale ? '女用' : '男用');
  if (isLeftHand) searchKeywords.push('左手');

  if (answers.targetType === 'irons') searchKeywords.push('鐵桿組');
  else if (answers.targetType === 'wood') searchKeywords.push('開球木桿 Driver 球道木');
  else searchKeywords.push('高爾夫球桿 整套');

  const topBrandTokens = primaryBrands
    .slice(0, 3)
    .map((b) => b.name.split(' ')[0])
    .join(' ');
  searchKeywords.push(topBrandTokens);

  if (answers.considerUsed) {
    searchKeywords.push('二手');
  }

  const queryStr = searchKeywords.join(' ');
  const googleShoppingUrl = `https://www.google.com/search?tbm=shop&q=${encodeURIComponent(queryStr)}`;

  // 8. 產生給聯網 AI 詢問的專屬 Prompt
  const budgetText = isCheapest
    ? '越便宜越好（極致性價比）'
    : answers.budgetMode === 'unlimited'
    ? '預算無上限（頂級旗艦/手工客製）'
    : `約新台幣 ${answers.budgetValue.toLocaleString()} 元`;

  const aiPromptHelper = `你好！我是一位高爾夫新手，剛透過「我的第一組高爾夫球桿選擇器」完成了球具規格配置，以下是我的個人化規格筆記：
- 想購買品項：${targetCategoryLabel}
- 購桿策略：${
    isWood
      ? answers.purchaseStrategy === 'all_in_one'
        ? '一次到位（直上職業級低後旋 LS 競技木桿）'
        : answers.purchaseStrategy === 'long_term'
        ? '長久使用（460cc 平衡型碳纖複合可調式木桿）'
        : answers.purchaseStrategy === 'gradual'
        ? '循序漸進（高 MOI 防右曲 Draw-Bias 易打木桿與小雞腿）'
        : '預算優先（高CP值鈦合金木桿組合）'
      : answers.purchaseStrategy === 'all_in_one'
      ? '一次到位（直上職業級/鍛造刀背）'
      : answers.purchaseStrategy === 'long_term'
      ? '長久使用（平衡型中空/半凹背）'
      : answers.purchaseStrategy === 'gradual'
      ? '循序漸進（高容錯深凹背）'
      : '預算優先（高CP值組合）'
  }
- 預算設定：${budgetText}（${answers.considerUsed ? '可接受優質二手桿' : '僅考慮全新正品'}）
- 身體與擊球條件：${isFemale ? '女性' : '男性'} / ${isLeftHand ? '左手擊球 (LH)' : '右手擊球 (RH)'} / 身高${
    answers.heightCategory === 'tall' ? '偏高' : answers.heightCategory === 'short' ? '偏矮' : '標準區間'
  }
- 推薦硬體規格：${headStructure}（${headProcess}），搭配 ${shaftMaterial}，硬度 ${shaftFlex}，揮重 ${swingWeight}
- 鎖定品牌群（依匹配度排序）：${primaryBrands.map((b) => `${b.name}(${b.matchScore}%)`).join('、')}

請開啟你的聯網搜尋功能，幫我在目前的台灣市場（或日本二手匯率划算管道）中，推薦 3~5 款符合上述規格的「具體${
    isWood ? '一號木桿 (Driver) / 球道木 / 鐵木桿' : '球桿'
  }型號（包含近 1~3 年熱門款）」以及目前的合理入手行情價！`;

  // 9. 產生長篇分析專文與靜態網頁聲明
  const article = generateArticleContent({
    answers,
    targetCategoryLabel,
    headStructure,
    headProcess,
    shaftMaterial,
    shaftFlex,
    shaftLength,
    lieAngle,
    swingWeight,
    brandsList: primaryBrands,
    alternativeBrands,
    isAllInOne,
    isLeftHand,
    budgetText,
    isWood,
  });

  return {
    headStructure,
    headProcess,
    shaftMaterial,
    shaftFlex,
    shaftLength,
    lieAngle,
    swingWeight,
    handRemark,
    targetCategoryLabel,
    bladeWarning,
    bladeWarningText,
    recommendedBrands: primaryBrands,
    alternativeBrands,
    searchKeywords,
    googleShoppingUrl,
    aiPromptHelper,
    article,
  };
}

function generateArticleContent(params: {
  answers: QuizAnswers;
  targetCategoryLabel: string;
  headStructure: string;
  headProcess: string;
  shaftMaterial: string;
  shaftFlex: string;
  shaftLength: string;
  lieAngle: string;
  swingWeight: string;
  brandsList: RecommendedBrand[];
  alternativeBrands: RecommendedBrand[];
  isAllInOne: boolean;
  isLeftHand: boolean;
  budgetText: string;
  isWood: boolean;
}) {
  const {
    answers,
    targetCategoryLabel,
    headStructure,
    headProcess,
    shaftMaterial,
    shaftFlex,
    shaftLength,
    lieAngle,
    swingWeight,
    brandsList,
    alternativeBrands,
    isAllInOne,
    isLeftHand,
    budgetText,
    isWood,
  } = params;

  const brandNamesText = brandsList.map((b) => b.name).join('、');
  const altBrandNamesText = alternativeBrands.map((b) => b.name).join('、');

  const headline = isWood
    ? `【木桿專屬診斷專文】新手的第一支開球木 / 球道木選型指南：鎖定高初速與防右曲物理規格`
    : `【專屬診斷專文】新手的首套球桿選型指南：鎖定${targetCategoryLabel}與關鍵物理規格`;

  const summary = `針對您所設定的 7 大維度條件（${answers.genderOrientation === 'female' ? '女性' : '男性'}球友、${
    isLeftHand ? '左手擊球' : '右手慣用'
  }、身高${answers.heightCategory === 'tall' ? '偏高' : answers.heightCategory === 'short' ? '偏矮' : '標準'}、預算「${budgetText}」、目標鎖定「${targetCategoryLabel}」，並採行「${
    isWood
      ? answers.purchaseStrategy === 'all_in_one'
        ? '一次到位（直攻低後旋 LS 巡迴賽木桿）'
        : answers.purchaseStrategy === 'long_term'
        ? '長久使用（460cc 平衡型碳纖複合可調式木桿）'
        : answers.purchaseStrategy === 'gradual'
        ? '循序漸進（高 MOI 防右曲 MAX-D 易打木桿）'
        : '預算優先（高性價比鈦合金木桿）'
      : answers.purchaseStrategy === 'all_in_one'
      ? '一次到位（直攻職業鍛造規格）'
      : answers.purchaseStrategy === 'long_term'
      ? '長久使用（進階平衡型）'
      : answers.purchaseStrategy === 'gradual'
      ? '循序漸進（高容錯易打）'
      : '預算優先（高CP值實用）'
  }」策略），系統已從全球主流科技廠、日系高反發名門與高 CP 值品牌資料庫中完成交叉比對。我們刻意不在文章中綁定單一年度型號，而是賦予您看穿「${
    isWood ? '木桿重心配置、MOI 慣性矩、傾角套管與碳纖桿身重量扭矩' : '桿頭幾何、鍛造鑄造製程與桿身配重'
  }」的透視眼。`;

  const headSection = isWood
    ? `【一、木桿桿頭構造與空氣力學製程：${headStructure}】
在開球一號木（Driver）與球道木（Fairway Wood）的物理學中，影響開球距離與上球道率的三大關鍵是「慣性矩（MOI）」、「重心前後位置（CG）」與「桿面傾角（Loft）」：
• 建議木桿頭型式：${headStructure}。
• 建議材質與製程：${headProcess}。
${
  isAllInOne
    ? `深入剖析：您選擇了「一次到位」策略。在木桿領域，這代表各大廠牌尾綴標註為「LS（Low Spin 低後旋）」、「Triple Diamond (◆◆◆)」或「Tour」的 440cc~450cc 緊湊型巡迴賽桿頭。其內部鎢鋼配重塊靠近桿面（Forward CG），能將擊球後旋量壓低至 2,000~2,400 rpm，打出極具穿透力且落地後滾動距離超長的強勁球路。但請務必注意：低後旋桿頭的慣性矩（MOI）較低，若揮桿速度不夠快或桿面未回正，缺乏後旋穩定升力的球極易化為劇烈大右曲（Slice）或提早墜地。`
    : answers.purchaseStrategy === 'long_term'
    ? `深入剖析：最適合「長久使用 3~5 年」的木桿是現代主流的「460cc 標準平衡型碳纖複合桿頭（通常尾綴為 MAX 或標準版）」。透過輕量化碳纖維頂蓋（Carbon Crown）省下頂部重量，重新分配至桿頭後方與底部，兼顧了高達 9,000~10,000 g-cm² 的高容錯抗扭力與低後旋高球速。更重要的是，請務必挑選具備「可調式頸部套管（Adjustable Hosel Sleeve）」與「可調配重塊」的款式——初期可將傾角調高至 10.5°~11.5° 幫助起球，未來揮速加快後再調降至 9°~9.5°，一支木桿即可陪伴您從新手打到進階！`
    : `深入剖析：90% 的高爾夫新手拿一號木最痛苦的就是「開球大右曲（Slice）」與「球飛不高」。因此強烈建議鎖定「超高 MOI 防右曲型 460cc 木桿頭（通常各大廠尾綴標為 MAX-D、SFT 或 Draw）」。這類桿頭在跟部（Heel）內側配置配重，能協助您在下桿瞬間自然將桿面回正；同時請優先挑選「10.5° 至 12°」較大傾角（Loft）的款式（傾角越大越容易起球且側旋越少）。此外，若想添購球道木，強烈建議新手跳過極難打起的 3 號木（15°），改買更好起球的「5 號木（18°）或 4 號/5 號鐵木桿（Hybrid 小雞腿，21°~24°）」，實戰成功率會翻倍提升！`
}`
    : `【一、桿頭構造與製程工藝：${headStructure}】
在高爾夫球具物理學中，桿頭的幾何結構直接決定了擊球的容錯率（MOI 慣性矩）、起飛角度（Launch Angle）與震動回饋：
• 建議構造型式：${headStructure}。
• 建議製程工藝：${headProcess}。
${
  isAllInOne
    ? `深入剖析：您選擇了「一次到位」策略。在球具領域，這代表直上巡迴賽選手規格的「一體成型軟鐵鍛造刀背（Forged Muscle Back）」或緊湊型競技桿頭。軟鐵鍛造（如 S20C/S25C）或 MIM 金屬射出成型能帶來如刀切奶油般綿密紮實的擊球手感，並讓您敏銳感知觸球點偏差。但請務必做好心理建設：刀背沒有周邊配重保護，偏離甜蜜點 5 毫米就會產生明顯震手與距離折損，需要極高的練球熱忱。`
    : answers.purchaseStrategy === 'long_term'
    ? `深入剖析：最適合「長久使用」的結構是現代主流的「中空構造（Hollow Body）」或「複合鍛造半凹背（Players Distance / Forged Cavity）」。這類設計外觀擁有接近刀背的俐落窄頂線（Top Line）與適中桿面大小，但內部嵌入高密度鎢鋼配重與高彈性麻鋼桿面（Maraging Steel），兼具「本格派的高級顏值」、「綿密打感」與「失擊補救容錯」，從新手一路打到 80 幾桿都無需換桿。`
    : `深入剖析：針對您的需求，強烈建議鎖定「寬底深凹背（Deep Undercut Cavity）」或高 MOI 大型桿頭。透過精密壓鑄（Cast）工藝將重量極大化分配至桿頭底部與周圍，創造極深且極低的重心（Deep & Low CG）。即便初學時常打薄（Thin）或打厚啃地（Fat），寬厚的底部（Wide Sole）也能順暢滑過草皮，輕易將球高高托起。`
}`;

  const shaftSection = isWood
    ? `【二、木桿碳纖維桿身重量、扭矩與套管調校：${shaftMaterial}】
現代開球木與球道木 100% 採用碳纖維複合桿身（Graphite Shaft）。挑選木桿桿身時，除了看 R / S 硬度外，更要看「重量級別（40g / 50g / 60g）」與「扭矩（Torque）」：
• 建議木桿桿身規格：${shaftMaterial}。
• 建議硬度與扭矩（Flex & Torque）：${shaftFlex}。
• 揮桿重量（Swing Weight）：${swingWeight}。
• 桿長與可調套管設定：${shaftLength} ／ ${lieAngle}。
${
  answers.genderOrientation === 'female'
    ? `女性球友木桿關鍵：女用開球木切忌太重或太硬！請鎖定總重量在 255g~275g 之間、桿身重量約 35g~45g 的 L Flex 原廠碳纖桿身。高扭矩（Torque > 5.5°）與先調子（低折點 Low Kick Point）設計能讓桿頭在觸球瞬間自動向上彈起，輕鬆打出高拋物線遠球。`
    : `男性球友木桿重量關鍵：一般原廠標配木桿桿身（Stock Shaft）重量多為 50g~55g（適合大多數新手建立流暢揮速）；若您選擇長久使用或年輕力壯，建議挑選 55g~65g 的 SR 或 S 硬度桿身（如 Mitsubishi Tensei、Fujikura Speeder NX 或 Graphite Design Tour AD 60g 級別），較低的桿身扭矩（Torque < 4.2°）能防止大力抽球時桿面跟不上或翻轉過度。`
}
${
  answers.heightCategory !== 'standard'
    ? `身形與木桿套管設定：由於一號木桿本身長達 45 吋以上，身高「${
        answers.heightCategory === 'tall' ? '偏高' : '偏矮'
      }」的球友無須像鐵桿那樣大動干戈鋸桿或接桿。${
        answers.heightCategory === 'tall'
          ? '偏高球友只需挑選美規標準 45.5"~45.75" 長度，並利用可調式套管將 Lie Angle 調至 Upright（直立）設定即可。'
          : '偏矮球友建議優先挑選日規 45.0"~45.25" 款式，或在握桿時向下握短半吋（Choke Down），甜蜜點命中率會立刻大幅飆升！'
      }`
    : `標準身形優勢：您的身高完全契合主流 45.25"~45.5" 開球木桿出廠規格，可直接使用原廠 Standard 套管設定下場開球。`
}`
    : `【二、桿身重量、硬度與身形幾何校正：${shaftMaterial}】
球具工坊有一句名言：「桿頭決定球桿的顏值與容錯，桿身（Shaft）則決定球能不能回正打中甜蜜點。」
• 建議桿身材質與重量段：${shaftMaterial}。
• 建議硬度等級（Flex）：${shaftFlex}。
• 揮桿重量（Swing Weight）：${swingWeight}。
• 身高與仰角校正（Length & Lie）：${shaftLength} ／ ${lieAngle}。
${
  answers.genderOrientation === 'female'
    ? `女性球友專屬關鍵：切勿拿男性球桿鋸短充數！真正的女用規格（L 或 A Flex）採用低折點（Low Kick Point）與較高扭力值（Torque 5.0°~6.5°）的超輕量碳纖維布捲製，能藉由桿身自然的鞭甩效應替您創造高起飛角，搭配較細的女用握把（Undersize Grip），才能讓雙手輕鬆釋放桿頭。`
    : `男性球友重量關鍵：選桿第一要務是「總重量匹配體能」。85g~95g 的輕量鋼管（如日本 N.S.PRO 950GH 系列）或 55g~65g 的碳纖維桿身，能幫助新手建立流暢的轉體節奏；若體能強健或選擇長久/一次到位策略，95g~115g 的中重鋼管（如 Modus3 105 或 Dynamic Gold 105/120）則能抑制大力揮擊時的桿面翻轉，確保落點精準。`
}
${
  answers.heightCategory !== 'standard'
    ? `身形特別叮嚀：因為您的身高屬於「${answers.heightCategory === 'tall' ? '偏高' : '偏矮'}」區間，除了注意桿身長度（${shaftLength}）外，更關鍵的是鐵桿的「仰角（Lie Angle，即桿身與地面的夾角）」。建議優先考慮像 Ping（具備原廠色碼點系統）、迪卡農 Inesis（直接分 Size 1 與 Size 2 長短版），或購買軟鐵鍛造桿頭請工坊技師折角微調 1°~2°，能瞬間消除因身高不合造成的固定右推或左拉球。`
    : `標準身形優勢：您的身高正好落在各大品牌出廠標準規格（Standard Spec）的黃金區間，無論買日本規格（Asian Spec）或歐美規格皆可直接上手，無須額外花費裁切或加長工資。`
}`;

  const detailedBrandBreakdown = brandsList
    .map(
      (b, i) =>
        `${i + 1}. 【${b.name}】（匹配度 ${b.matchScore}%｜參考區間：${b.priceRangeLabel}）\n   • 入選原因：${b.matchReasons.join('；')}。\n   • ${isWood ? '木桿科技亮點' : '品牌特質'}：${b.tagline}\n   • 左右手與二手流動：${b.leftHandNote}｜${b.usedMarketNote}。`
    )
    .join('\n\n');

  const brandSection = `【三、多維度精準匹配品牌譜系：首推 ${brandNamesText}】
根據您的 7 項回答（品項、策略、預算、身形慣用手、二手意願、地域與調性），系統透過連續加權演算法為您嚴選出最匹配的推薦品牌排行：

${detailedBrandBreakdown}

${
  altBrandNamesText
    ? `\n💡 延伸遺珠與跨界備選：您也可以一併關注 ${altBrandNamesText}，這些品牌在相近價位帶同樣擁有極佳的球友口碑。`
    : ''
}`;

  const marketStrategySection = isWood
    ? `【四、木桿採購策略與實戰驗桿建言：${
        answers.considerUsed ? '二手木桿挖寶與防爆頭指南' : '全新正品公司貨木桿選購指南'
      }】
${
  answers.considerUsed
    ? `選購「二手開球木桿或球道木」性價比極高（前 1~2 代旗艦木桿常僅需新品半價），但因現代木桿採用超薄鈦合金與複合碳纖維，請務必執行以下四項木桿專屬檢查：
1. 碳纖維頂蓋（Carbon Crown）與接縫檢查：仔細觀察桿頭頂部碳纖維與金屬邊框交界處是否有脫膠、起泡，或因前任桿主「打天球（Sky Mark，打在桿頭上緣）」留下的深層凹痕與裂紋。
2. 桿面凹陷與碳纖桿面平整度：開球木桿承受極高撞擊初速，請用手指輕撫桿面中心，確認沒有肉眼難辨的向內微凹（Caving）或細微裂痕。
3. 可調式套管（Adapter Sleeve）與配重螺絲：轉動桿頸套管螺絲，確認螺紋沒有滑牙、套管序號與桿頭一致，並詢問是否附帶原廠扭力板手（Torque Wrench）與原廠桿頭套（Headcover）。
4. 桿身拔插與裁短紀錄：確認碳纖桿身靠近套管處沒有粗糙的溢膠或過熱痕跡，並確認是否為原廠未裁短之標準長度。`
    : `選購「全新正品公司貨木桿」對新手而言具有極大優勢：
1. 桿頭破裂與碳纖頂蓋原廠保固：現代木桿大量使用超薄碳纖維頂蓋與極限薄化桿面，新手初期若不小心打在桿冠或桿跟，台灣總代理公司貨提供完整的保固換新服務，買得最安心。
2. 突破 10,000 MOI 與最新 AI 桿面科技：近兩年的新世代木桿在「偏離中心失擊時的球速維持率」與「抗扭轉直球率」上有顯著世代突破。
3. 完整配件與試打調校：新品隨附原廠桿頭套，且可在購買時請店家直接用板手幫您將可調式套管設定在最適合您的傾角（Loft）檔位。`
}
${
  isLeftHand
    ? `\n⚡ 左手球友買木桿秘訣：搜尋時請加上「左手」或「LH」。歐美大廠（Callaway、Ping、TaylorMade、Titleist、Cobra）的左手開球木與小雞腿型號最齊全，且可調式套管完全支援左手專屬微調！`
    : ''
}`
    : `【四、採購策略與市場實戰建言：${
        answers.considerUsed ? '優質二手挖寶與防坑指南' : '全新正品公司貨選購指南'
      }】
${
  answers.considerUsed
    ? `您選擇了「考慮二手球桿」，這是高爾夫圈最聰明的入門槓桿——常能以 3~5 折價格入手兩三年前的頂級名器。請務必牢記二手驗桿四部曲：
1. 桿面溝槽（Grooves）磨損檢查：特別是 7 號鐵、P 桿與挖起桿，若擊球中心溝槽已磨平發亮，停球倒旋力會大打折扣。
2. 桿身頸部（Hosel）與碳纖微裂紋：檢查桿頭與桿身接合處的塑膠套環（Ferrule）是否鬆動位移；碳纖桿身請用指腹摸過確認無碰撞裂痕。
3. 握把（Grip）硬化程度：二手桿若握把橡膠已反光硬化龜裂，入手後建議花每支約 250~350 元換新握把，手感會宛如新桿。
4. 防範高仿假桿：熱門大廠（如 Titleist、TaylorMade、Callaway、Honma、PXG、Miura）網路上仿冒品極多，切忌在來路不明的個人賣場貪小便宜，優先選擇知名二手連鎖球具店（如 Golf Partner）或信譽良好的實體工坊。`
    : `您選擇了「堅持全新正品」，對於新手而言有三大不可取代的保障：
1. 完整原廠保固：新手初期常有打厚敲地或擊中桿頸的情況，台灣授權代理商公司貨享有原廠桿身與桿頭保固，無後顧之憂。
2. 最新材料容錯科技：近兩年的新桿在周邊鎢鋼配重與可變厚度桿面（VFT）技術上大幅躍進，失擊時的球速維持率歷代最強。
3. 規格一次買對：新品可自由指定桿身硬度（如 L / R / SR / S）與握把尺寸，不必遷就二手市場零散的規格。`
}
${
  isLeftHand
    ? `\n⚡ 左手球友實戰秘訣：搜尋商品時，請務必在關鍵字加上「左手」或英文縮寫「LH (Left Hand)」。歐美四大廠（Callaway、Ping、TaylorMade、Titleist）與平價神桿迪卡農 Inesis、PGM 對左手支援度最高；若在二手店看到合適的左手好桿，通常議價空間比右手桿更大！`
    : ''
}`;

  const closingTips = `【五、總結行動建議】
高爾夫是一項結合力學、節奏與心態的迷人運動。拿到合適的${
    isWood ? '木桿' : '球桿'
  }後，建議保留部分預算投資在「基礎教練課程」與「練習場球券」上，建立正確的握桿與轉體機制。現在，您可以直接點擊下方的 Google Shopping 按鈕查看市場現貨，或複製規格筆記前往實體球具店試打！`;

  const staticDisclaimer = `📌 【關於本工具之特別說明】本網頁是一個規則寫死的靜態網頁（類似結構化互動表單與工坊配重決策樹），並沒有內建即時 AI 問答功能。如果您想要針對您的結果獲得更細節的解答（例如查詢當季最新具體${
    isWood ? '木桿/小雞腿' : '球桿'
  }型號或比價），非常推薦點擊下方的按鈕把「規格筆記」複製起來，直接拿去給具備聯網能力的 AI（如 Gemini、ChatGPT、Perplexity 等）問一下！`;

  return {
    headline,
    summary,
    headSection,
    shaftSection,
    brandSection,
    marketStrategySection,
    closingTips,
    staticDisclaimer,
  };
}
