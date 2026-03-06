import { Plan } from "./types";

export const plans: Plan[] = [
  {
    id: "plan-1",
    slug: "starter-smart-home",
    title: "入门型 Smart Home 方案",
    summary: "适合首次尝试智能家居的家庭，覆盖门锁、灯光和基础安防。",
    description:
      "面向中小户型与预算敏感用户，优先解决回家开锁、基础照明联动、安防提醒等高频需求。",
    houseType: "两居 / 三居",
    areaRange: "60㎡ - 100㎡",
    budgetRange: "¥15,000 - ¥35,000",
    renovationStage: "装修中 / 已装修改造",
    coverImage:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    modules: [
      { name: "智能门锁", description: "支持密码、指纹、临时授权管理。" },
      { name: "基础灯光联动", description: "回家、离家、夜起模式自动切换。" },
      { name: "入门安防", description: "门磁、人体感应、异常提醒。" },
    ],
  },
  {
    id: "plan-2",
    slug: "comfort-smart-home",
    title: "舒适型全屋联动方案",
    summary: "适合注重生活品质的家庭，覆盖灯光、窗帘、环境与安防联动。",
    description:
      "在基础智能化之外，强化居家舒适度与联动体验，适合新装修或整体改造项目。",
    houseType: "三居 / 四居",
    areaRange: "90㎡ - 140㎡",
    budgetRange: "¥40,000 - ¥90,000",
    renovationStage: "未装修 / 装修中",
    coverImage:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    modules: [
      { name: "智能照明系统", description: "多回路场景控制与氛围调节。" },
      { name: "智能窗帘", description: "定时、光照联动、语音控制。" },
      { name: "环境控制", description: "空调、新风、温湿度联动控制。" },
      { name: "安防系统", description: "摄像头、门磁、异常告警联动。" },
    ],
  },
  {
    id: "plan-3",
    slug: "premium-villa-smart-home",
    title: "高端别墅定制方案",
    summary: "适合大平层、复式、别墅项目，支持影音、能源、安防和全屋中控。",
    description:
      "面向高端住宅项目的全屋智能集成方案，兼顾设计统一性、系统稳定性与工程落地能力。",
    houseType: "复式 / 别墅 / 大平层",
    areaRange: "140㎡+",
    budgetRange: "¥100,000+",
    renovationStage: "未装修 / 深度改造",
    coverImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    modules: [
      { name: "全屋中控", description: "统一控制照明、窗帘、空调、安防和影音。" },
      { name: "影音娱乐", description: "家庭影院、多房间音频分区。" },
      { name: "能源管理", description: "用电监控与节能联动。" },
      { name: "高等级安防", description: "周界、视频、门禁统一策略。" },
    ],
  },
];
