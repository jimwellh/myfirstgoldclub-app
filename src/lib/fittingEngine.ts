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
  brandOrigin: 'japanese',
  brandVibe: 'expert',
};

interface BrandDatabaseItem {
  id: string;
  name: string;
  searchToken: string;
  origin: Exclude<BrandOrigin, 'no_preference'>;
  originLabel: string;
  category: string;
  tagline: string;
  priceRangeLabel: string;
  minBudgetNew: number; // TWD reference for new clubs
  minBudgetUsed: number; // TWD reference for used clubs
  supportedTargets: TargetType[];
  strongestTarget: TargetType;
  strategies: PurchaseStrategy[];
  vibes: Exclude<BrandVibe, 'no_preference'>[];
  leftHandSupply: 'high' | 'medium' | 'low';
  femaleLineStrength: 'high' | 'medium' | 'low';
  heightCustomAdvantage: boolean;
  usedLiquidity: 'high' | 'medium' | 'low';
  specialHighlight: string;
}

/**
 * 完整高爾夫球具品牌資料庫 (涵蓋 26 個主流、日系工坊、歐美奢華、超跑工程與平價量販品牌)
 */
export const GOLF_BRAND_DATABASE: BrandDatabaseItem[] = [
  // ================= 日系主流與名門 =================
  {
    id: 'mizuno',
    name: 'Mizuno (美津濃)',
    searchToken: 'Mizuno',
    origin: 'japanese',
    originLabel: '日本鍛造工藝標竿',
    category: 'Grain Flow 軟鐵鍛造傳奇',
    tagline: '球友公認「打過就回不去」的廣島精密一體鍛造手感，從極致刀背到高容錯熱金屬系列一應俱全',
    priceRangeLabel: 'NT$ 22,000 ~ 55,000',
    minBudgetNew: 28000,
    minBudgetUsed: 14500,
    supportedTargets: ['irons', 'wood', 'fullset'],
    strongestTarget: 'irons',
    strategies: ['long_term', 'all_in_one', 'gradual'],
    vibes: ['expert'],
    leftHandSupply: 'medium',
    femaleLineStrength: 'medium',
    heightCustomAdvantage: true,
    usedLiquidity: 'high',
    specialHighlight: '擁有業界頂尖的 Shaft Optimizer 桿身動態配重系統與仰角微調傳統，鐵桿組口碑無敵。',
  },
  {
    id: 'xxio',
    name: 'XXIO (ゼクシオ / 登祿普)',
    searchToken: 'XXIO',
    origin: 'japanese',
    originLabel: '日本國民銷售冠軍',
    category: '超輕量高容錯易打王牌',
    tagline: '專為亞洲揮速量身打造的雙重重心加速科技，擊球音清脆高亢、出桿極致省力',
    priceRangeLabel: 'NT$ 28,000 ~ 85,000',
    minBudgetNew: 36000,
    minBudgetUsed: 17000,
    supportedTargets: ['fullset', 'wood', 'irons'],
    strongestTarget: 'fullset',
    strategies: ['gradual', 'long_term'],
    vibes: ['luxury', 'expert'],
    leftHandSupply: 'medium',
    femaleLineStrength: 'high',
    heightCustomAdvantage: false,
    usedLiquidity: 'high',
    specialHighlight: '女用球桿與輕量化全套組的市場絕對霸主，二手保值率與流通度居日系之冠。',
  },
  {
    id: 'srixon',
    name: 'Srixon (史力勝)',
    searchToken: 'Srixon',
    origin: 'japanese',
    originLabel: '日系美巡大滿貫主力',
    category: 'Tour V.T. Sole 船型底刃',
    tagline: '松山英樹等大滿貫球星御用，獨特 V 型底刃能大幅減少草皮阻力、避免新手「啃地」失誤',
    priceRangeLabel: 'NT$ 22,000 ~ 48,000',
    minBudgetNew: 26000,
    minBudgetUsed: 13500,
    supportedTargets: ['irons', 'wood'],
    strongestTarget: 'irons',
    strategies: ['long_term', 'all_in_one', 'gradual'],
    vibes: ['expert'],
    leftHandSupply: 'medium',
    femaleLineStrength: 'low',
    heightCustomAdvantage: false,
    usedLiquidity: 'high',
    specialHighlight: '兼具日系遠藤代工的軟鐵鍛造綿密手感與美巡賽等級的強勁穿透球質，極受本格派球友推崇。',
  },
  {
    id: 'bridgestone',
    name: 'Bridgestone (普利司通)',
    searchToken: 'Bridgestone',
    origin: 'japanese',
    originLabel: '日本精密材料工藝',
    category: 'B-Series 高穩定傳導',
    tagline: '結合輪胎橡膠減震科技與精密金屬溝槽，擊球面咬球感極強、方向偏差極低',
    priceRangeLabel: 'NT$ 20,000 ~ 46,000',
    minBudgetNew: 24500,
    minBudgetUsed: 12000,
    supportedTargets: ['irons', 'wood', 'fullset'],
    strongestTarget: 'irons',
    strategies: ['long_term', 'gradual', 'budget_first'],
    vibes: ['expert'],
    leftHandSupply: 'low',
    femaleLineStrength: 'medium',
    heightCustomAdvantage: false,
    usedLiquidity: 'high',
    specialHighlight: '日本本土極受歡迎的本格實戰派名門，二手市場常能以極高性價比淘到品相極佳的日規好桿。',
  },
  {
    id: 'yamaha',
    name: 'Yamaha (山葉高爾夫)',
    searchToken: 'Yamaha Golf',
    origin: 'japanese',
    originLabel: '日本聲學與反發科技',
    category: 'RMX / Inpres 超高初速',
    tagline: '將樂器聲學共鳴技術導入桿頭設計，不僅擁有悅耳清脆的擊球音，Inpres 系列更具備越級遠距能力',
    priceRangeLabel: 'NT$ 22,000 ~ 55,000',
    minBudgetNew: 27000,
    minBudgetUsed: 12500,
    supportedTargets: ['wood', 'irons'],
    strongestTarget: 'wood',
    strategies: ['gradual', 'long_term'],
    vibes: ['expert', 'luxury'],
    leftHandSupply: 'low',
    femaleLineStrength: 'high',
    heightCustomAdvantage: false,
    usedLiquidity: 'medium',
    specialHighlight: '特別適合追求遠距快感與清脆擊球聲響的球友，女桿與寬底凹背鐵桿極為好打。',
  },
  {
    id: 'prgr',
    name: 'PRGR (プロギア / 橫濱橡膠)',
    searchToken: 'PRGR',
    origin: 'japanese',
    originLabel: '日本運動科學實驗室',
    category: 'RS 極限反發 / Egg 寬底',
    tagline: '以科學測量儀器起家，主打逼近法規極限的高反發係數（COR）與超低重心好起球設計',
    priceRangeLabel: 'NT$ 20,000 ~ 50,000',
    minBudgetNew: 25500,
    minBudgetUsed: 11500,
    supportedTargets: ['wood', 'irons'],
    strongestTarget: 'wood',
    strategies: ['long_term', 'gradual'],
    vibes: ['expert'],
    leftHandSupply: 'low',
    femaleLineStrength: 'high',
    heightCustomAdvantage: false,
    usedLiquidity: 'medium',
    specialHighlight: '著名的「0號鐵」與寬底球道木讓不敢打長桿的新手也能輕鬆把球掃向空中。',
  },
  {
    id: 'onoff',
    name: 'ONOFF (オノフ / Daiwa 旗下)',
    searchToken: 'ONOFF Golf',
    origin: 'japanese',
    originLabel: '日本頂級碳纖美學',
    category: 'AKA 容錯 / KURO 操控',
    tagline: '母公司為全球釣具碳纖巨擘 Daiwa，桿身回彈精準度傲視群雄，日系質感生活風格首選',
    priceRangeLabel: 'NT$ 26,000 ~ 58,000',
    minBudgetNew: 31000,
    minBudgetUsed: 15500,
    supportedTargets: ['irons', 'wood', 'fullset'],
    strongestTarget: 'irons',
    strategies: ['gradual', 'long_term'],
    vibes: ['luxury', 'expert'],
    leftHandSupply: 'low',
    femaleLineStrength: 'high',
    heightCustomAdvantage: false,
    usedLiquidity: 'medium',
    specialHighlight: '外型設計極具日系都會雅痞格調，女性系列更在亞洲擁有極高顏值口碑。',
  },
  {
    id: 'fourteen',
    name: 'Fourteen (フォーティーン)',
    searchToken: 'Fourteen Golf',
    origin: 'japanese',
    originLabel: '日本設計師工坊名門',
    category: '中空鐵桿與羽毛標挖起桿',
    tagline: '以「讓業餘球友也能打出職業球路」為宗旨，流線型中空鐵桿與高倒旋挖起桿享譽球界',
    priceRangeLabel: 'NT$ 25,000 ~ 55,000',
    minBudgetNew: 29500,
    minBudgetUsed: 15000,
    supportedTargets: ['irons'],
    strongestTarget: 'irons',
    strategies: ['long_term', 'all_in_one'],
    vibes: ['expert'],
    leftHandSupply: 'low',
    femaleLineStrength: 'medium',
    heightCustomAdvantage: true,
    usedLiquidity: 'medium',
    specialHighlight: '經典羽毛標誌（Feather Logo）是正統本格派球友最愛的低調實力派象徵。',
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
    priceRangeLabel: 'NT$ 65,000 ~ 130,000+',
    minBudgetNew: 68000,
    minBudgetUsed: 39000,
    supportedTargets: ['irons'],
    strongestTarget: 'irons',
    strategies: ['all_in_one', 'long_term'],
    vibes: ['expert', 'luxury'],
    leftHandSupply: 'medium',
    femaleLineStrength: 'low',
    heightCustomAdvantage: true,
    usedLiquidity: 'high',
    specialHighlight: '高爾夫鐵桿界的殿堂級圖騰，兼顧極致本格派品味與收藏保值性，工坊可依身形精密客製長度與仰角。',
  },
  {
    id: 'epon',
    name: 'Epon (遠藤製作所)',
    searchToken: 'Epon Golf',
    origin: 'japanese',
    originLabel: '日本新潟精密鍛造巨擘',
    category: '頂尖工坊客製鍛造之王',
    tagline: '全球各大一線品牌背後的頂級代工母廠自營品牌，超軟 S20C 軟鐵與零公差重量控制',
    priceRangeLabel: 'NT$ 60,000 ~ 120,000+',
    minBudgetNew: 62000,
    minBudgetUsed: 35000,
    supportedTargets: ['irons', 'wood'],
    strongestTarget: 'irons',
    strategies: ['long_term', 'all_in_one', 'gradual'],
    vibes: ['expert', 'luxury'],
    leftHandSupply: 'low',
    femaleLineStrength: 'medium',
    heightCustomAdvantage: true,
    usedLiquidity: 'high',
    specialHighlight: 'AF-70x / AF-50x 等凹背鍛造系列讓新手也能同時享受「超大容錯距離」與「神級軟鐵手感」。',
  },
  {
    id: 'honma',
    name: 'Honma (本間高爾夫)',
    searchToken: 'Honma Golf',
    origin: 'japanese',
    originLabel: '日本酒田工坊皇家工藝',
    category: 'BERES 星級奢華 / TW 巡迴賽',
    tagline: '從 TW 專業競技系列到鑲金 2~5 星級 BERES 殿堂系列，搭配酒田職人手捲 ARMRQ 多軸碳纖桿身',
    priceRangeLabel: 'NT$ 35,000 ~ 250,000+',
    minBudgetNew: 42000,
    minBudgetUsed: 19000,
    supportedTargets: ['fullset', 'wood', 'irons'],
    strongestTarget: 'fullset',
    strategies: ['long_term', 'gradual', 'all_in_one'],
    vibes: ['luxury', 'expert'],
    leftHandSupply: 'low',
    femaleLineStrength: 'high',
    heightCustomAdvantage: false,
    usedLiquidity: 'high',
    specialHighlight: '亞洲政商名流與高球貴族最具代表性的尊榮名片，手捲多軸碳纖桿身防扭回正效果極佳。',
  },
  {
    id: 'majesty',
    name: 'Majesty (瑪潔斯帝)',
    searchToken: 'Majesty Golf',
    origin: 'japanese',
    originLabel: '日本頂級奢華工藝旗艦',
    category: 'Prestigio / Royale 金質高反發',
    tagline: '採用航太級高純度鎢鋼與精細雷射雕花桿面，將輕量化遠距物理學與藝術品般的金色電鍍完美融合',
    priceRangeLabel: 'NT$ 65,000 ~ 280,000+',
    minBudgetNew: 72000,
    minBudgetUsed: 34000,
    supportedTargets: ['fullset', 'wood', 'irons'],
    strongestTarget: 'wood',
    strategies: ['gradual', 'long_term'],
    vibes: ['luxury'],
    leftHandSupply: 'low',
    femaleLineStrength: 'high',
    heightCustomAdvantage: false,
    usedLiquidity: 'medium',
    specialHighlight: '果嶺上最耀眼的奢華象徵，特別適合追求輕鬆揮桿即能打出華麗高飛球路的層峰男女球友。',
  },
  {
    id: 'roddio',
    name: 'Roddio (ロッディオ)',
    searchToken: 'Roddio Golf',
    origin: 'japanese',
    originLabel: '日本高階客製工坊精品',
    category: '蜂巢標誌與頂級手工桿身',
    tagline: '母公司為釣竿與精密碳纖大廠，透過可替換配重螺絲與獨門手工調校，打造獨一無二的私人兵器',
    priceRangeLabel: 'NT$ 65,000 ~ 140,000+',
    minBudgetNew: 66000,
    minBudgetUsed: 36000,
    supportedTargets: ['wood', 'irons'],
    strongestTarget: 'wood',
    strategies: ['long_term', 'all_in_one'],
    vibes: ['luxury', 'expert'],
    leftHandSupply: 'low',
    femaleLineStrength: 'medium',
    heightCustomAdvantage: true,
    usedLiquidity: 'medium',
    specialHighlight: '標誌性的蜂巢底座與多彩客製配件，是高階球友展示不撞桿獨特品味的秘密武器。',
  },
  {
    id: 'itobori',
    name: 'Itobori (一刀雕 / MTG Studio)',
    searchToken: 'Itobori Golf',
    origin: 'japanese',
    originLabel: '日本名古屋藝術研磨工坊',
    category: '粗獷手工鑿削刀痕工藝',
    tagline: '由名匠手工研磨出充滿張力的刀鑿切面與火焰烤藍/黑銅塗裝，每支桿頭皆是不可複製的雕塑作品',
    priceRangeLabel: 'NT$ 68,000 ~ 150,000+',
    minBudgetNew: 70000,
    minBudgetUsed: 40000,
    supportedTargets: ['irons'],
    strongestTarget: 'irons',
    strategies: ['all_in_one', 'long_term'],
    vibes: ['luxury', 'expert'],
    leftHandSupply: 'low',
    femaleLineStrength: 'low',
    heightCustomAdvantage: true,
    usedLiquidity: 'low',
    specialHighlight: '視覺衝擊力滿分的手工鍛造逸品，從球袋抽出瞬間絕對吸引全場目光。',
  },
  {
    id: 'vega',
    name: 'Vega (ベガ / 市川町鍛造)',
    searchToken: 'Vega Golf',
    origin: 'japanese',
    originLabel: '日本高球鍛造發源地始祖',
    category: '市川町古典手工刀背/凹背',
    tagline: '源自日本首支鍛造鐵桿誕生地兵庫縣市川町，傳承武士刀鍛造淬火工法，手感純粹溫潤',
    priceRangeLabel: 'NT$ 52,000 ~ 105,000',
    minBudgetNew: 54000,
    minBudgetUsed: 29000,
    supportedTargets: ['irons'],
    strongestTarget: 'irons',
    strategies: ['all_in_one', 'long_term'],
    vibes: ['expert', 'luxury'],
    leftHandSupply: 'medium',
    femaleLineStrength: 'low',
    heightCustomAdvantage: true,
    usedLiquidity: 'low',
    specialHighlight: '極致內斂的日本匠人精神，稀少設有左手專用手工鍛造款式的日本精品工坊。',
  },
  {
    id: 'ryoma',
    name: 'Ryoma (龍馬高爾夫)',
    searchToken: 'Ryoma Golf',
    origin: 'japanese',
    originLabel: '日本深重心遠距黑科技',
    category: 'DSI 超深重心鈦合金木桿',
    tagline: '全年僅鑽研少數幾款球桿，以驚人的超高擊球初速與超低後旋率聞名亞洲球壇',
    priceRangeLabel: 'NT$ 28,000 ~ 65,000',
    minBudgetNew: 33000,
    minBudgetUsed: 16500,
    supportedTargets: ['wood'],
    strongestTarget: 'wood',
    strategies: ['gradual', 'long_term'],
    vibes: ['luxury', 'expert'],
    leftHandSupply: 'low',
    femaleLineStrength: 'high',
    heightCustomAdvantage: false,
    usedLiquidity: 'medium',
    specialHighlight: '木桿與球道木被眾多球友譽為「距離作弊器」，失擊偏離中心依然能飛出驚人距離。',
  },

  // ================= 歐美巡迴賽主流與科技巨頭 =================
  {
    id: 'titleist',
    name: 'Titleist (泰特利斯)',
    searchToken: 'Titleist',
    origin: 'western',
    originLabel: '美巡賽最高佔有率殿堂',
    category: 'T-Series 鐵桿 / GT 木桿',
    tagline: '全球職業選手與單差點高手信仰中心，從經典 MB/T100 刀背到高容錯 T350 皆具備洗鍊競技美學',
    priceRangeLabel: 'NT$ 26,000 ~ 62,000',
    minBudgetNew: 32000,
    minBudgetUsed: 16500,
    supportedTargets: ['irons', 'wood'],
    strongestTarget: 'irons',
    strategies: ['all_in_one', 'long_term'],
    vibes: ['expert', 'luxury'],
    leftHandSupply: 'high',
    femaleLineStrength: 'medium',
    heightCustomAdvantage: true,
    usedLiquidity: 'high',
    specialHighlight: '「本格派裝備取向」的歐美頭號代表，左手球桿供應極為完整，二手市場秒殺級流通性。',
  },
  {
    id: 'taylormade',
    name: 'TaylorMade (泰勒梅)',
    searchToken: 'TaylorMade',
    origin: 'western',
    originLabel: '美系巡迴賽科技霸主',
    category: '碳纖桿面木桿 / P790 & Qi 鐵桿',
    tagline: '老虎伍茲、Rory McIlroy 御用品牌，開創多層碳纖維木桿與中空SpeedFoam填充鐵桿風潮',
    priceRangeLabel: 'NT$ 22,000 ~ 58,000',
    minBudgetNew: 26500,
    minBudgetUsed: 12500,
    supportedTargets: ['wood', 'irons', 'fullset'],
    strongestTarget: 'wood',
    strategies: ['long_term', 'gradual', 'all_in_one'],
    vibes: ['expert'],
    leftHandSupply: 'high',
    femaleLineStrength: 'high',
    heightCustomAdvantage: true,
    usedLiquidity: 'high',
    specialHighlight: 'P系列中空鐵桿顏值極高，木桿球速狂暴，女用 Kalea 全套組與二手市場貨源極為充沛。',
  },
  {
    id: 'callaway',
    name: 'Callaway (卡拉威)',
    searchToken: 'Callaway',
    origin: 'western',
    originLabel: '美系 AI 人工智慧桿面先驅',
    category: 'Ai Smart Face 超高容錯',
    tagline: '透過超級電腦模擬數萬次新手失擊點位來設計桿面厚薄，無論打在趾部或根部都能修正飛行距離',
    priceRangeLabel: 'NT$ 18,000 ~ 55,000',
    minBudgetNew: 22500,
    minBudgetUsed: 10500,
    supportedTargets: ['fullset', 'wood', 'irons'],
    strongestTarget: 'fullset',
    strategies: ['gradual', 'long_term', 'budget_first'],
    vibes: ['expert', 'budget_practice'],
    leftHandSupply: 'high',
    femaleLineStrength: 'high',
    heightCustomAdvantage: true,
    usedLiquidity: 'high',
    specialHighlight: '產品線最廣：男用 Warbird 與女用 Solaire/Reva 整套組是全球新手入坑首選，左手款貨源極多。',
  },
  {
    id: 'ping',
    name: 'Ping (萍)',
    searchToken: 'Ping Golf',
    origin: 'western',
    originLabel: '美系量身訂做與容錯率之王',
    category: 'G-Series 超高 MOI / 色碼仰角',
    tagline: '由航太工程師創立，「絕不為了花俏外觀犧牲一絲一毫的直球穩定性」，球界公認方向最直的救星',
    priceRangeLabel: 'NT$ 25,000 ~ 58,000',
    minBudgetNew: 29000,
    minBudgetUsed: 15500,
    supportedTargets: ['wood', 'irons', 'fullset'],
    strongestTarget: 'wood',
    strategies: ['gradual', 'long_term', 'all_in_one'],
    vibes: ['expert'],
    leftHandSupply: 'high',
    femaleLineStrength: 'high',
    heightCustomAdvantage: true,
    usedLiquidity: 'high',
    specialHighlight: '獨創「色碼點（Color Code，如黑點、藍點、紅點、綠點）」代表不同身高與手長的仰角，高個子與嬌小身材必看！',
  },
  {
    id: 'cobra',
    name: 'Cobra (Puma 旗下)',
    searchToken: 'Cobra Golf',
    origin: 'western',
    originLabel: '美系前衛空氣力學運動風',
    category: 'Aerojet/Darkspeed & 3D列印',
    tagline: '充滿年輕賽車流線感，除了強悍的遠距木桿外，更獨創「單一長度（One Length）」全套同7號鐵長度鐵桿',
    priceRangeLabel: 'NT$ 16,000 ~ 45,000',
    minBudgetNew: 19500,
    minBudgetUsed: 9500,
    supportedTargets: ['wood', 'irons', 'fullset'],
    strongestTarget: 'wood',
    strategies: ['gradual', 'budget_first', 'long_term'],
    vibes: ['expert', 'budget_practice'],
    leftHandSupply: 'high',
    femaleLineStrength: 'medium',
    heightCustomAdvantage: false,
    usedLiquidity: 'medium',
    specialHighlight: '歐美一線科技品牌中性價比最高的選擇，Fly-XL 整套組與二手開球木桿超值度爆表。',
  },
  {
    id: 'cleveland',
    name: 'Cleveland (克里夫蘭)',
    searchToken: 'Cleveland Golf',
    origin: 'western',
    originLabel: '美系短桿權威與寬底易打名家',
    category: 'Launcher XL Halo 鐵木桿型鐵桿',
    tagline: '與 Srixon 同屬登祿普集團，除了名滿天下的 RTX 挖起桿，其全中空寬底鐵桿能讓新手像打木桿一樣輕鬆起球',
    priceRangeLabel: 'NT$ 15,000 ~ 36,000',
    minBudgetNew: 17500,
    minBudgetUsed: 8500,
    supportedTargets: ['irons', 'fullset', 'wood'],
    strongestTarget: 'irons',
    strategies: ['gradual', 'budget_first'],
    vibes: ['expert', 'budget_practice'],
    leftHandSupply: 'high',
    femaleLineStrength: 'medium',
    heightCustomAdvantage: false,
    usedLiquidity: 'medium',
    specialHighlight: '價格實惠且容錯率極高，特別適合害怕鐵桿打不起來、希望每一支鐵桿都像小雞腿一樣好打的新手。',
  },
  {
    id: 'wilson',
    name: 'Wilson Staff (威爾森)',
    searchToken: 'Wilson Golf',
    origin: 'western',
    originLabel: '美系百年大滿貫傳奇',
    category: 'Staff Model 刀背 / Profile 套桿',
    tagline: '歷史累積最多大滿貫冠軍獎盃的元老品牌，既有極致古典的鍛造刀背，也有全球熱銷的平價入門整套組',
    priceRangeLabel: 'NT$ 12,000 ~ 42,000',
    minBudgetNew: 13500,
    minBudgetUsed: 7000,
    supportedTargets: ['fullset', 'irons'],
    strongestTarget: 'fullset',
    strategies: ['budget_first', 'gradual', 'all_in_one'],
    vibes: ['budget_practice', 'expert'],
    leftHandSupply: 'high',
    femaleLineStrength: 'high',
    heightCustomAdvantage: true,
    usedLiquidity: 'medium',
    specialHighlight: 'Profile SGI 整套組專為高個子（Tall）與嬌小身材提供原廠不同長度版本，萬元出頭即可買到百年品牌全套。',
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
    priceRangeLabel: 'NT$ 35,000 ~ 95,000+',
    minBudgetNew: 38000,
    minBudgetUsed: 21000,
    supportedTargets: ['irons', 'wood', 'fullset'],
    strongestTarget: 'irons',
    strategies: ['long_term', 'all_in_one', 'gradual'],
    vibes: ['luxury', 'expert'],
    leftHandSupply: 'high',
    femaleLineStrength: 'medium',
    heightCustomAdvantage: true,
    usedLiquidity: 'high',
    specialHighlight: '軍事工業風的配重螺絲辨識度極高，對左手球員與高矮身材客製化極度友善。',
  },
  {
    id: 'mclaren',
    name: 'McLaren Golf (麥拉倫高爾夫)',
    searchToken: 'McLaren Golf',
    origin: 'western',
    originLabel: '英國 F1 與超跑工程直系品牌',
    category: 'Series 1 / Series 3 MIM 精密鐵桿',
    tagline: '由麥拉倫官方獨立打造的頂級高球品牌，導入 F1 賽車空氣力學、MIM 金屬射出成型、輕量網格與碳纖維工程',
    priceRangeLabel: 'NT$ 75,000 ~ 130,000+',
    minBudgetNew: 82000,
    minBudgetUsed: 55000,
    supportedTargets: ['irons'],
    strongestTarget: 'irons',
    strategies: ['all_in_one', 'long_term'],
    vibes: ['luxury', 'expert'],
    leftHandSupply: 'medium',
    femaleLineStrength: 'low',
    heightCustomAdvantage: true,
    usedLiquidity: 'low',
    specialHighlight: '非貼牌聯名，而是真正以超跑工程師團隊研發的現代工藝結晶，適合追求極致科技奢華與稀有度的藏家級球友。',
  },
  {
    id: 'bettinardi',
    name: 'Bettinardi (貝蒂納迪)',
    searchToken: 'Bettinardi Golf',
    origin: 'western',
    originLabel: '美國芝加哥精密 CNC 車削精品',
    category: '一體精密鍛造鐵桿與蜂巢推桿',
    tagline: '原本為軍工與醫療精密金屬加工廠，招牌 Honeycomb 蜂巢車削工藝與 S20C 複合鍛造鐵桿質感非凡',
    priceRangeLabel: 'NT$ 45,000 ~ 85,000',
    minBudgetNew: 49000,
    minBudgetUsed: 28000,
    supportedTargets: ['irons'],
    strongestTarget: 'irons',
    strategies: ['all_in_one', 'long_term'],
    vibes: ['luxury', 'expert'],
    leftHandSupply: 'medium',
    femaleLineStrength: 'low',
    heightCustomAdvantage: true,
    usedLiquidity: 'medium',
    specialHighlight: '歐美少數能與日本手工鍛造工坊比拼金屬雕琢細節的奢華工藝品牌。',
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
    priceRangeLabel: 'NT$ 12,000 ~ 19,000',
    minBudgetNew: 14500,
    minBudgetUsed: 9500,
    supportedTargets: ['irons', 'wood', 'fullset'],
    strongestTarget: 'irons',
    strategies: ['budget_first', 'long_term', 'gradual'],
    vibes: ['budget_practice', 'expert'],
    leftHandSupply: 'medium',
    femaleLineStrength: 'low',
    heightCustomAdvantage: false,
    usedLiquidity: 'high',
    specialHighlight: '常常一上架即秒殺缺貨，不僅性能超越價格數倍，未來升級換桿時在二手社團更是幾乎原價秒出！',
  },
  {
    id: 'inesis',
    name: 'Inesis (Decathlon 迪卡農)',
    searchToken: 'Inesis Decathlon Golf',
    origin: 'other',
    originLabel: '法國運動量販人體工學名作',
    category: '100 新手半套組 / 500 進階凹背',
    tagline: '破除繁複號數迷思，獨創依「手腕離地距離（Size 1 短版 / Size 2 長版）」與「揮速」直接分級的聰明球桿',
    priceRangeLabel: 'NT$ 6,500 ~ 22,000',
    minBudgetNew: 8500,
    minBudgetUsed: 4500,
    supportedTargets: ['fullset', 'irons', 'wood'],
    strongestTarget: 'fullset',
    strategies: ['budget_first', 'gradual'],
    vibes: ['budget_practice'],
    leftHandSupply: 'high',
    femaleLineStrength: 'high',
    heightCustomAdvantage: true,
    usedLiquidity: 'medium',
    specialHighlight: '對「身高偏高或偏矮」以及「左手球友」最友善的平價品牌！直接買 Size 1 或 Size 2 就不用花錢改桿長。',
  },
  {
    id: 'pgm',
    name: 'PGM (淘寶/天貓平價銷量王)',
    searchToken: 'PGM 高爾夫球桿',
    origin: 'other',
    originLabel: '亞洲電商極致平價入門霸主',
    category: '全套碳纖/不鏽鋼新手練習套桿',
    tagline: '用幾張練習場球券的價格就能買齊整套含球袋，超大凹背桿頭讓新手毫無心理負擔地盡情揮擊',
    priceRangeLabel: 'NT$ 4,500 ~ 15,000',
    minBudgetNew: 5500,
    minBudgetUsed: 2800,
    supportedTargets: ['fullset', 'irons', 'wood'],
    strongestTarget: 'fullset',
    strategies: ['budget_first', 'gradual'],
    vibes: ['budget_practice'],
    leftHandSupply: 'high',
    femaleLineStrength: 'high',
    heightCustomAdvantage: false,
    usedLiquidity: 'low',
    specialHighlight: '適合「還不確定自己會不會長期打下去、第一組只想買最便宜來練習場揮汗」的新手，敲地完全不心疼。',
  },
  {
    id: 'touredge',
    name: 'Tour Edge (美系高CP黑馬)',
    searchToken: 'Tour Edge Golf',
    origin: 'other',
    originLabel: '美國伊利諾州高性價比工坊',
    category: 'Bazooka 全套組 / Hot Launch 超容錯',
    tagline: '在北美被譽為「最被低估的良心品牌」，以中價位提供媲美四大巨頭的鈦合金面杯科技與終身保固精神',
    priceRangeLabel: 'NT$ 14,000 ~ 32,000',
    minBudgetNew: 16500,
    minBudgetUsed: 8500,
    supportedTargets: ['fullset', 'wood', 'irons'],
    strongestTarget: 'fullset',
    strategies: ['budget_first', 'gradual', 'long_term'],
    vibes: ['budget_practice', 'expert'],
    leftHandSupply: 'high',
    femaleLineStrength: 'high',
    heightCustomAdvantage: true,
    usedLiquidity: 'medium',
    specialHighlight: '冠軍常勝軍 Bernhard Langer 代言，其全套組與鐵木桿在歐美高球評測網站長年霸榜最佳性價比獎。',
  },
  {
    id: 'strata',
    name: 'Strata (Callaway 旗下入門品牌)',
    searchToken: 'Callaway Strata Golf Set',
    origin: 'other',
    originLabel: 'Amazon 全球銷售冠軍套桿',
    category: '9支 / 12支 / 16支開箱即打全套組',
    tagline: '由卡拉威工程團隊針對純新手調校的副牌，省略昂貴可調式接頭，將成本全部灌注在易打性與耐用度',
    priceRangeLabel: 'NT$ 11,500 ~ 21,000',
    minBudgetNew: 12800,
    minBudgetUsed: 6800,
    supportedTargets: ['fullset'],
    strongestTarget: 'fullset',
    strategies: ['budget_first', 'gradual'],
    vibes: ['budget_practice'],
    leftHandSupply: 'high',
    femaleLineStrength: 'high',
    heightCustomAdvantage: false,
    usedLiquidity: 'high',
    specialHighlight: '想要大廠血統品控、又想在一萬多元內一次搞定木桿、鐵桿、推桿與腳架球袋的最佳解答。',
  },
  {
    id: 'macgregor',
    name: 'MacGregor (麥克格雷格)',
    searchToken: 'MacGregor Golf Set',
    origin: 'other',
    originLabel: '歐美百年高CP值套桿名門',
    category: 'CG3000 / DCT 超值整套組',
    tagline: '金熊 Jack Nicklaus 昔日奪冠傳奇品牌，現今轉型專攻極致親民的高容錯全套球桿，萬元上下輕鬆下場',
    priceRangeLabel: 'NT$ 8,500 ~ 16,000',
    minBudgetNew: 9800,
    minBudgetUsed: 5200,
    supportedTargets: ['fullset'],
    strongestTarget: 'fullset',
    strategies: ['budget_first', 'gradual'],
    vibes: ['budget_practice'],
    leftHandSupply: 'high',
    femaleLineStrength: 'high',
    heightCustomAdvantage: true,
    usedLiquidity: 'medium',
    specialHighlight: '歐美高球電商長年熱銷，提供加長版（+1 inch）選項，對預算有限的高個子新手非常貼心。',
  },
];

/**
 * 根據使用者的 7 道問題回答，對所有品牌進行精細連續計分與正規化，確保每個品牌的匹配度皆有真實區隔 (Distinguishable Scores)
 */
function scoreAndRankBrands(answers: QuizAnswers): {
  primaryBrands: RecommendedBrand[];
  alternativeBrands: RecommendedBrand[];
} {
  const isFemale = answers.genderOrientation === 'female';
  const isLeftHand = answers.handOrientation === 'left';
  const isCheapest = answers.budgetMode === 'cheapest';
  const isUnlimited = answers.budgetMode === 'unlimited';
  const effectiveBudget = isCheapest
    ? 10000
    : isUnlimited
    ? 150000
    : answers.budgetValue;

  const rawScored = GOLF_BRAND_DATABASE.map((brand) => {
    let rawPoints = 0;
    const reasons: string[] = [];

    // 1. Q0: 購買目標品項 (最高 +22, 不支援 -26)
    const targetIdx = brand.supportedTargets.indexOf(answers.targetType);
    if (brand.strongestTarget === answers.targetType) {
      rawPoints += 22;
      const targetName =
        answers.targetType === 'irons'
          ? '鐵桿組'
          : answers.targetType === 'wood'
          ? '開球/球道木桿'
          : '開箱即打全套組';
      reasons.push(`王牌主力正是「${targetName}」`);
    } else if (targetIdx === 1) {
      rawPoints += 14;
    } else if (targetIdx >= 2) {
      rawPoints += 9;
    } else {
      rawPoints -= 26;
    }

    // 2. Q1: 購買策略 (最高 +25, 次順位 +14, 第三順位 +8, 不支援 -18)
    const stratIdx = brand.strategies.indexOf(answers.purchaseStrategy);
    if (stratIdx === 0) {
      rawPoints += 25;
      const stratMap: Record<PurchaseStrategy, string> = {
        all_in_one: '完美契合「一次到位」職業級鍛造/競技要求',
        long_term: '旗下中空與半凹背系列是「長久使用 3~5 年」的平衡典範',
        gradual: '超低深重心設計符合「循序漸進」高容錯好起球訴求',
        budget_first: '專為「預算優先」打造，大幅省下器材折舊費',
      };
      reasons.push(stratMap[answers.purchaseStrategy]);
    } else if (stratIdx === 1) {
      rawPoints += 15;
    } else if (stratIdx >= 2) {
      rawPoints += 8;
    } else {
      rawPoints -= 18;
    }

    // 3. Q2: 預算連續距離計分 (Continuous proximity scoring，確保不同價位品牌分數拉開差距)
    const refBasePrice = answers.considerUsed ? brand.minBudgetUsed : brand.minBudgetNew;
    const idealSweetPrice = refBasePrice * 1.25;

    if (isCheapest) {
      if (brand.minBudgetNew <= 16000) {
        // 越便宜分數越高 (連続分數 18 ~ 32)
        const cheapBonus = Math.round(32 - (brand.minBudgetNew / 16000) * 14);
        rawPoints += cheapBonus;
        reasons.push('符合「越便宜越好」極致親民門檻');
      } else {
        rawPoints -= Math.min(35, Math.round((brand.minBudgetNew - 15000) / 1500));
      }
    } else if (isUnlimited) {
      if (brand.minBudgetNew >= 40000 || brand.vibes.includes('luxury')) {
        const luxuryTierBonus = Math.min(30, Math.round(15 + brand.minBudgetNew / 5000));
        rawPoints += luxuryTierBonus;
        reasons.push('預算無上限下必看的頂級工藝/旗艦規格');
      } else if (brand.minBudgetNew <= 18000) {
        rawPoints -= 22;
      }
    } else {
      // 滑桿模式：依據使用者預算與品牌甜蜜點距離給出連續分數 (-25 ~ +26)
      const ratio = effectiveBudget / idealSweetPrice;
      if (ratio >= 0.8 && ratio <= 1.8) {
        // 越接近 1.15 倍得分越高
        const closeness = 1 - Math.min(1, Math.abs(ratio - 1.15) / 0.85);
        const budgetScore = Math.round(14 + closeness * 12);
        rawPoints += budgetScore;
        reasons.push(
          `精準落於您的 NT$ ${effectiveBudget.toLocaleString()} ${
            answers.considerUsed ? '二手/新品' : '新品'
          }預算甜蜜帶`
        );
      } else if (ratio < 0.8) {
        // 預算不足以購買該品牌
        const shortfallPenalty = Math.min(30, Math.round((0.85 - ratio) * 40));
        rawPoints -= shortfallPenalty;
      } else {
        // 預算遠高於該平價品牌
        const excessPenalty = Math.min(18, Math.round((ratio - 1.8) * 6));
        rawPoints -= excessPenalty;
      }
    }

    // 4. Q3: 身高、慣用手與性別體能
    if (isLeftHand) {
      if (brand.leftHandSupply === 'high') {
        rawPoints += 22;
        reasons.push('左手球桿（LH）原廠開模齊全、現貨好找');
      } else if (brand.leftHandSupply === 'medium') {
        rawPoints += 4;
      } else {
        rawPoints -= 32;
      }
    }

    if (isFemale) {
      if (brand.femaleLineStrength === 'high') {
        rawPoints += 20;
        reasons.push('擁有專為女性揮速與手圍研發的輕量化 L 桿身產品線');
      } else if (brand.femaleLineStrength === 'medium') {
        rawPoints += 5;
      } else {
        rawPoints -= 20;
      }
    }

    if (answers.heightCategory !== 'standard') {
      if (brand.heightCustomAdvantage) {
        rawPoints += 13;
        reasons.push(
          `針對「身形${answers.heightCategory === 'tall' ? '偏高' : '偏矮'}」提供友善的桿長/仰角（Lie Angle）規格體系`
        );
      } else {
        rawPoints -= 4;
      }
    }

    // 5. Q4: 二手考量
    if (answers.considerUsed) {
      if (brand.usedLiquidity === 'high') {
        rawPoints += 12;
        reasons.push('二手市場流通量極大，好買且未來升級轉手保值');
      } else if (brand.usedLiquidity === 'medium') {
        rawPoints += 5;
      } else {
        rawPoints -= 5;
      }
    } else {
      // 全新購買時，大廠與平價新品保固加分
      if (brand.usedLiquidity === 'high' || brand.origin === 'other') {
        rawPoints += 7;
      }
    }

    // 6. Q5: 品牌地域偏好 (歐美 / 日系 / 其他 / 無偏好)
    if (answers.brandOrigin === 'no_preference') {
      rawPoints += 12; // 無偏好時不因地域扣分，完全依硬體規格與預算競爭
    } else if (brand.origin === answers.brandOrigin) {
      rawPoints += 24;
    } else if (brand.origin === 'other' && answers.brandVibe === 'budget_practice') {
      rawPoints += 8;
    } else {
      rawPoints -= 16;
    }

    // 7. Q6: 品牌調性 (本格派裝備取向 / 帶奢侈品屬性 / 買最便宜就好 / 無偏好)
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
      } else if (vibeIdx === 1) {
        rawPoints += 14;
      } else {
        rawPoints -= 20;
      }
    }

    // 若因為選擇無偏好而 reasons 較少，補充通用匹配理由
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

    return {
      name: brand.name,
      searchToken: brand.searchToken,
      category: brand.category,
      tagline: `${brand.tagline}。${brand.specialHighlight}`,
      origin: brand.originLabel,
      priceRangeLabel: brand.priceRangeLabel,
      rawPoints,
      matchReasons: reasons.slice(0, 3),
      leftHandNote,
      usedMarketNote,
    };
  });

  // 依原始得分由高至低排序
  rawScored.sort((a, b) => b.rawPoints - a.rawPoints);

  // 將原始得分正規化映射至有梯度的百分比 (最高約 96~98%，並確保每一名之間根據真實分差拉開 2%~5% 的梯度，絕不全卡在 99%)
  const maxRaw = rawScored[0]?.rawPoints ?? 100;
  const minRaw = rawScored[rawScored.length - 1]?.rawPoints ?? 0;
  const rawSpan = Math.max(40, maxRaw - minRaw);

  let prevScore = 99;
  const normalizedList: RecommendedBrand[] = rawScored.map((item, idx) => {
    // 依據在全體品牌中的相對位置計算 58 ~ 97 之間的分數
    const relativeRatio = (item.rawPoints - minRaw) / rawSpan;
    let computed = Math.round(58 + relativeRatio * 39);

    // 確保名次之間有明確辨識度 (Distinguishable)，不會出現並排同分或全部 99%
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
  const isFemale = answers.genderOrientation === 'female';
  const isLeftHand = answers.handOrientation === 'left';
  const isAllInOne = answers.purchaseStrategy === 'all_in_one';
  const isBudgetPractice = answers.brandVibe === 'budget_practice';
  const isLuxury = answers.brandVibe === 'luxury';
  const isCheapest = answers.budgetMode === 'cheapest';

  // 1. 決定目標品項標籤
  const targetLabelMap: Record<TargetType, string> = {
    irons: '鐵桿組 (Iron Set 5-PW/AW)',
    wood: '木桿系列 (Driver 開球木 / Fairway 球道木 / Hybrid)',
    fullset: '全套組 (Full Package Set 含桿袋與推桿)',
  };
  const targetCategoryLabel = targetLabelMap[answers.targetType];

  // 2. 桿頭造型與構造設計 (Head Structure & Process)
  let headStructure = '';
  let headProcess = '';
  let bladeWarning = false;
  let bladeWarningText = '';

  if (answers.targetType === 'wood') {
    if (isAllInOne) {
      headStructure = '低後旋緊湊型巡迴賽桿頭 (Low Spin / 440-450cc Tour Head)';
      headProcess = '鍛造鈦合金桿面複合碳纖維頂蓋 (Forged Ti-Face + Carbon Crown)';
      bladeWarning = true;
      bladeWarningText =
        '【⚠️ 職業級低後旋木桿重要警語】一次到位的選手級低後旋（Low Spin / LS）木桿雖然能打出極具穿透力的強勁平飛球，但慣性矩（MOI）較低、桿面容錯較小。若揮桿速度未達 95mph 以上或觸球點不穩，極易產生嚴重側旋（大右曲 Slice）或因後旋不足而提早落地。';
    } else if (answers.purchaseStrategy === 'gradual' || isBudgetPractice || isCheapest) {
      headStructure = '高 MOI 超寬容防右曲大桿頭 (High MOI / 460cc Draw-bias)';
      headProcess = '一體成型高強度鈦合金桿頭 (Precision Cast Titanium)';
    } else {
      headStructure = '平衡型深重心大甜點桿頭 (Balanced Low CG / 460cc MAX)';
      headProcess = '鍛造杯型桿面搭配輕量化碳纖複合構造 (Forged Face Cup + Carbon Composite)';
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
      // 預算優先
      headStructure = '高容錯寬底大凹背一體構造 (Wide-Sole Cavity Back)';
      headProcess = '高耐用度壓鑄不鏽鋼 (Precision Cast Stainless Steel)';
    }
  }

  // 3. 桿身規格推導 (Shaft Material & Flex)
  let shaftMaterial = '';
  let shaftFlex = '';
  let swingWeight = '';

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
      // 一次到位
      shaftMaterial = '職業巡迴賽標竿重鋼管 (Dynamic Gold S200 / Project X / Modus3 120, 115g~129g)';
      shaftFlex = 'S (Stiff 硬) 或 X (Extra Stiff)';
      swingWeight = 'D2 ~ D3+ (重頭感鮮明，抗扭力極強)';
    }
  }

  // 4. 身高與仰角校正 (Height & Lie Angle)
  let shaftLength = '標準長度 (Standard Asian/OEM Spec)';
  let lieAngle = '標準桿面仰角 (Standard Lie Angle)';

  if (answers.heightCategory === 'tall') {
    shaftLength = '建議加長 +0.5" 至 +1.0" (Extended Length)';
    lieAngle = '調陡 Upright 1° ~ 2° (防止高個子擊球時桿趾先觸地導致球往右偏)';
  } else if (answers.heightCategory === 'short') {
    shaftLength = '建議縮短 -0.5" (Shortened Length)';
    lieAngle = '調平 Flat 1° ~ 2° (防止嬌小身形擊球時桿根先卡地導致球往左拉)';
  }

  // 5. 慣用手備註
  const handRemark = isLeftHand
    ? '左手球員 (Left-Handed / LH)：市場庫存約佔 8%~10%。系統已自動為您優先排序「左手開模齊全」之品牌（如 Ping、Titleist、Callaway、TaylorMade、PXG、迪卡農 Inesis 等）。選購二手球桿時左手競爭者少，常能談到極佳折扣！'
    : '右手球友 (Right-Handed / RH)：全球最核心主流規格，無論歐美科技廠、日本手工鍛造工坊或二手挖寶皆 100% 全型號支援。';

  // 6. 執行多維度品牌評分與匹配引擎
  const { primaryBrands, alternativeBrands } = scoreAndRankBrands(answers);

  // 7. Google Shopping 搜尋關鍵字與連結組裝
  const searchKeywords: string[] = [];
  searchKeywords.push('高爾夫球桿');
  searchKeywords.push(isFemale ? '女用' : '男用');
  if (isLeftHand) searchKeywords.push('左手');

  if (answers.targetType === 'irons') searchKeywords.push('鐵桿組');
  else if (answers.targetType === 'wood') searchKeywords.push('一號木桿');
  else searchKeywords.push('整套套桿');

  // 加入前 3 名高分品牌關鍵字
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
    ? '越便宜越好（約 NT$ 15,000 以下）'
    : answers.budgetMode === 'unlimited'
    ? '預算無上限（頂級旗艦/手工客製）'
    : `約新台幣 ${answers.budgetValue.toLocaleString()} 元`;

  const aiPromptHelper = `你好！我是一位高爾夫新手，剛透過「我的第一組高爾夫球桿選擇器」完成了球具規格配置，以下是我的個人化規格筆記：
- 想購買品項：${targetCategoryLabel}
- 購桿策略：${
    answers.purchaseStrategy === 'all_in_one'
      ? '一次到位（直上職業級/鍛造刀背）'
      : answers.purchaseStrategy === 'long_term'
      ? '長久使用（平衡型中空/半凹背）'
      : answers.purchaseStrategy === 'gradual'
      ? '循序漸進（高容錯深凹背）'
      : '預算優先（高CP值組合）'
  }
- 預算設定：${budgetText}（${answers.considerUsed ? '可接受優質二手桿' : '僅考慮全新正品'}）
- 身體與擊球條件：${isFemale ? '女性' : '男性'} / ${isLeftHand ? '左手擊球 (LH)' : '右手擊球 (RH)'} / 身高${
    answers.heightCategory === 'tall' ? '偏高（需注意加長與Upright仰角）' : answers.heightCategory === 'short' ? '偏矮（需注意縮短與Flat仰角）' : '標準區間'
  }
- 推薦硬體規格：${headStructure}（${headProcess}），搭配 ${shaftMaterial}，硬度 ${shaftFlex}，揮重 ${swingWeight}
- 鎖定品牌群（依匹配度排序）：${primaryBrands.map((b) => `${b.name}(${b.matchScore}%)`).join('、')}

請開啟你的聯網搜尋功能，幫我在目前的台灣市場（或日本二手匯率划算管道）中，推薦 3~5 款符合上述規格的「具體球桿型號（包含近 1~3 年熱門款）」以及目前的合理入手行情價！`;

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
    isCheapest,
    isLuxury,
    isAllInOne,
    isLeftHand,
    budgetText,
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
  isCheapest: boolean;
  isLuxury: boolean;
  isAllInOne: boolean;
  isLeftHand: boolean;
  budgetText: string;
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
  } = params;

  const brandNamesText = brandsList.map((b) => b.name).join('、');
  const altBrandNamesText = alternativeBrands.map((b) => b.name).join('、');

  const headline = `【專屬診斷專文】新手的首套球桿選型指南：鎖定${targetCategoryLabel}與關鍵物理規格`;

  const summary = `針對您所設定的 7 大維度條件（${answers.genderOrientation === 'female' ? '女性' : '男性'}球友、${
    isLeftHand ? '左手擊球' : '右手慣用'
  }、身高${answers.heightCategory === 'tall' ? '偏高' : answers.heightCategory === 'short' ? '偏矮' : '標準'}、預算「${budgetText}」、目標為${targetCategoryLabel}，並採行「${
    answers.purchaseStrategy === 'all_in_one'
      ? '一次到位（直攻職業規格）'
      : answers.purchaseStrategy === 'long_term'
      ? '長久使用（進階平衡型）'
      : answers.purchaseStrategy === 'gradual'
      ? '循序漸進（高容錯易打）'
      : '預算優先（高CP值實用）'
  }」策略），系統已從 26 個全球主流、日系手工鍛造工坊、超跑工程品牌與量販高CP神桿資料庫中完成交叉比對。我們刻意不在文章中綁定單一年度型號，而是賦予您看穿「桿頭幾何、鍛造鑄造製程與桿身配重」的透視眼。`;

  const headSection = `【一、桿頭構造與製程工藝：${headStructure}】
在高爾夫球具物理學中，桿頭的幾何結構直接決定了擊球的容錯率（MOI 慣性矩）、起飛角度（Launch Angle）與震動回饋：
• 建議構造型式：${headStructure}。
• 建議製程工藝：${headProcess}。
${
  isAllInOne
    ? `深入剖析：您選擇了「一次到位」策略。在球具領域，這代表直上巡迴賽選手規格的「一體成型軟鐵鍛造刀背（Forged Muscle Back）」或緊湊型低後旋桿頭。軟鐵鍛造（如 S20C/S25C）或 MIM 金屬射出成型能帶來如刀切奶油般綿密紮實的擊球手感，並讓您敏銳感知觸球點偏差。但請務必做好心理建設：刀背沒有周邊配重保護，偏離甜蜜點 5 毫米就會產生明顯震手與距離折損，需要極高的練球熱忱。`
    : answers.purchaseStrategy === 'long_term'
    ? `深入剖析：最適合「長久使用」的結構是現代主流的「中空構造（Hollow Body）」或「複合鍛造半凹背（Players Distance / Forged Cavity）」。這類設計外觀擁有接近刀背的俐落窄頂線（Top Line）與適中桿面大小，但內部嵌入高密度鎢鋼配重與高彈性麻鋼桿面（Maraging Steel），兼具「本格派的高級顏值」、「綿密打感」與「失擊補救容錯」，從新手一路打到 80 幾桿都無需換桿。`
    : `深入剖析：針對您的需求，強烈建議鎖定「寬底深凹背（Deep Undercut Cavity）」或高 MOI 大型桿頭。透過精密壓鑄（Cast）工藝將重量極大化分配至桿頭底部與周圍，創造極深且極低的重心（Deep & Low CG）。即便初學時常打薄（Thin）或打厚啃地（Fat），寬厚的底部（Wide Sole）也能順暢滑過草皮，輕易將球高高托起。`
}`;

  const shaftSection = `【二、桿身重量、硬度與身形幾何校正：${shaftMaterial}】
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
        `${i + 1}. 【${b.name}】（匹配度 ${b.matchScore}%｜參考區間：${b.priceRangeLabel}）\n   • 入選原因：${b.matchReasons.join('；')}。\n   • 品牌特質：${b.tagline}\n   • 左右手與二手流動：${b.leftHandNote}｜${b.usedMarketNote}。`
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

  const marketStrategySection = `【四、採購策略與市場實戰建言：${
    answers.considerUsed ? '優質二手挖寶與防坑指南' : '全新正品公司貨選購指南'
  }】
${
  answers.considerUsed
    ? `您選擇了「考慮二手球桿」，這是高爾夫圈最聰明的入門槓桿——常能以 3~5 折價格入手兩三年前的頂級名器。請務必牢記二手驗桿四部曲：
1. 桿面溝槽（Grooves）磨損檢查：特別是 7 號鐵、P 桿與挖起桿，若擊球中心溝槽已磨平發亮，停球倒旋力會大打折扣。
2. 桿身頸部（Hosel）與碳纖微裂紋：檢查桿頭與桿身接合處的塑膠套環（Ferrule）是否鬆動位移；碳纖桿身請用指腹摸過確認無碰撞裂痕。
3. 握把（Grip）硬化程度：二手桿若握把橡膠已反光硬化龜裂，入手後建議花每支約 250~350 元換新握把，手感會宛如新桿。
4. 防範高仿假桿：熱門大廠（如 Titleist、TaylorMade、Honma、PXG、Miura）網路上仿冒品極多，切忌在來路不明的個人賣場貪小便宜，優先選擇知名二手連鎖球具店（如 Golf Partner）或信譽良好的實體工坊。`
    : `您選擇了「堅持全新正品」，對於新手而言有三大不可取代的保障：
1. 完整原廠保固：新手初期常有打厚敲地或擊中桿頸的情況，台灣授權代理商公司貨享有原廠桿身與桿頭保固，無後顧之憂。
2. 最新材料容錯科技：近兩年的新桿在周邊鎢鋼配重與可變厚度桿面（VFT）技術上大幅躍進，失擊時的球速維持率歷代最強。
3. 規格一次買對：新品可自由指定桿身硬度（如 L / R / SR / S）與握把尺寸，不必遷就二手市場零散的規格。`
}
${
  isLeftHand
    ? `\n⚡ 左手球友實戰秘訣：搜尋商品時，請務必在關鍵字加上「左手」或英文縮寫「LH (Left Hand)」。歐美四大廠（Ping、Callaway、TaylorMade、Titleist）與平價神桿迪卡農 Inesis、PGM 對左手支援度最高；若在二手店看到合適的左手好桿，通常議價空間比右手桿更大！`
    : ''
}`;

  const closingTips = `【五、總結行動建議】
高爾夫是一項結合力學、節奏與心態的迷人運動。拿到合適的球桿後，建議保留部分預算投資在「基礎教練課程」與「練習場球券」上，建立正確的握桿與轉體機制。現在，您可以直接點擊下方的 Google Shopping 按鈕查看市場現貨，或複製規格筆記前往實體球具店試打！`;

  const staticDisclaimer = `📌 【關於本工具之特別說明】本網頁是一個規則寫死的靜態網頁（類似結構化互動表單與工坊配重決策樹），並沒有內建即時 AI 問答功能。如果您想要針對您的結果獲得更細節的解答（例如查詢當季最新具體型號或比價），非常推薦點擊下方的按鈕把「規格筆記」複製起來，直接拿去給具備聯網能力的 AI（如 Gemini、ChatGPT、Perplexity 等）問一下！`;

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
