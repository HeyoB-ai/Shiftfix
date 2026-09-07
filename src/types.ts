export type Language = 'nl' | 'en' | 'de' | 'es' | 'fr';

export interface TranslationData {
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    floatingDemoTitle: string;
    backToTop: string;
    logoTagline: string;
    howItWorks: string;
    forWhom: string;
    benefits: string;
    pricing: string;
    roi: string;
    faq: string;
    requestDemo: string;
    taglineBadge: string;
  };
  hero: {
    statPlanningTime: string;
    statEqualChances: string;
    statFirstReplies: string;
    motto: string;
    sectorPills: string[];
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    pillFast: string;
    pillFair: string;
    pillNoCalls: string;
    sectorsLabel: string;
    noteScript: string;
  };
  chat: {
    todayLabel: string;
    aiActiveBadge: string;
    typingLabel: string;
    replayLabel: string;
    replayTitle: string;
    inputPlaceholder: string;
    trustPill: string;
    scenarios: ChatScenario[];
  };
  problem: {
    eyebrow: string;
    traditionalBadge: string;
    traditionalTime: string;
    shiftFixBadge: string;
    shiftFixTime: string;
    takeawayLabel: string;
    noCallsPill: string;
    title: string;
    subtitle: string;
    traditionalTitle: string;
    traditionalSteps: string[];
    traditionalResult: string;
    shiftFixTitle: string;
    shiftFixSteps: string[];
    shiftFixResult: string;
    impactQuote: string;
  };
  howItWorks: {
    eyebrow: string;
    whatsappOnlyPill: string;
    title: string;
    subtitle: string;
    steps: {
      number: string;
      title: string;
      description: string;
      tag: string;
    }[];
    highlightTitle: string;
    highlightSubtitle: string;
    highlightPills: string[];
  };
  benefits: {
    eyebrow: string;
    itemBadgeBenefit: string;
    itemBadgeFriction: string;
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  sectors: {
    eyebrow: string;
    exampleShiftLabel: string;
    genericNoticeLabel: string;
    title: string;
    subtitle: string;
    genericNotice: string;
    items: {
      name: string;
      description: string;
      exampleShift: string;
    }[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    perMonth: string;
    badgeMostPopular: string;
    cancelAnytime: string;
    plan1: {
      name: string;
      tierLabel: string;
      capacity: string;
      price: string;
      description: string;
      featuresLabel: string;
      features: string[];
      cta: string;
    };
    plan2: {
      name: string;
      tierLabel: string;
      capacity: string;
      price: string;
      description: string;
      featuresLabel: string;
      features: string[];
      cta: string;
    };
  };
  roi: {
    eyebrow: string;
    exampleLabel: string;
    controlsTitle: string;
    controlsHint: string;
    ctaButton: string;
    title: string;
    subtitle: string;
    exampleText: string;
    calloutText: string;
    labels: {
      perMonth: string;
      absencesUnit: string;
      hours: string;
      absencesPerMonth: string;
      callTimePerAbsence: string;
      minutes: string;
      hourlyWage: string;
      euroPerHour: string;
    };
    results: {
      estimatedReturn: string;
      investmentLabel: string;
      netProfitLabel: string;
      perMonthSuffix: string;
      perMonthBack: string;
      monthlyHoursSaved: string;
      monthlyCostSaved: string;
      annualCostSaved: string;
      roiMultiplier: string;
      formulaExplanation: string;
    };
  };
  demo: {
    eyebrow: string;
    summaryTitle: string;
    title: string;
    subtitle: string;
    fields: {
      name: string;
      namePlaceholder: string;
      org: string;
      orgPlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      phoneOptional: string;
      employees: string;
      employeesOptions: string[];
      sector: string;
      sectorPlaceholder: string;
      sectorOptions: {
        value: string;
        label: string;
      }[];
      message: string;
      messagePlaceholder: string;
    };
    submitButton: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    newRequestButton: string;
    privacyNotice: string;
    errors: {
      nameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      orgRequired: string;
    };
  };
  faq: {
    eyebrow: string;
    moreQuestionsTitle: string;
    moreQuestionsSubtitle: string;
    moreQuestionsCta: string;
    title: string;
    subtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  security: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  bottomCta: {
    noInstall: string;
    cancelMonthly: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badge: string;
  };
  footer: {
    sectorFocus: string;
    avgSavingsLabel: string;
    avgSavingsBasis: string;
    supportActive: string;
    productCol: string;
    sectorsCol: string;
    companyCol: string;
    about: string;
    contact: string;
    privacy: string;
    terms: string;
    rights: string;
    language: string;
    tagline: string;
  };
}

export type ChatMessageKind = 'employee' | 'ai' | 'planner';

/** Gestructureerd AI-bericht: kop, regels en een optionele oproep met trefwoord. */
export interface ChatCard {
  icon: string;
  title: string;
  lines: string[];
  highlight?: string;
  volunteers?: string[];
  footerBefore?: string;
  keyword?: string;
  footerAfter?: string;
}

export interface ChatMessage {
  kind: ChatMessageKind;
  sender: string;
  time: string;
  text?: string;
  card?: ChatCard;
}

export interface ChatScenario {
  id: string;
  name: string;
  company: string;
  groupTitle: string;
  members: string;
  messages: ChatMessage[];
}
