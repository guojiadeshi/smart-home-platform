export type Plan = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  houseType: string;
  areaRange: string;
  budgetRange: string;
  renovationStage: string;
  coverImage: string;
  featured?: boolean;
  modules: {
    name: string;
    description: string;
  }[];
};

export type InquiryPayload = {
  name: string;
  phone: string;
  city: string;
  houseType: string;
  areaSize: string;
  budgetRange: string;
  renovationStage: string;
  selectedPlanId?: string;
  demandNotes?: string;
};

export type PartnerPayload = {
  companyName: string;
  contactName: string;
  phone: string;
  email: string;
  city: string;
  partnerType: "contractor" | "supplier";
  businessScope: string;
  caseIntro: string;
};
