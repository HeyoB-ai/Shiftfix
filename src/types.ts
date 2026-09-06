export type Language = 'nl' | 'en' | 'de' | 'es' | 'fr';

export interface TranslationData {
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
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
    chatGroupName: string;
    chatGroupMembers: string;
  };
  problem: {
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
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  sectors: {
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
    title: string;
    subtitle: string;
    exampleText: string;
    calloutText: string;
    labels: {
      absencesPerMonth: string;
      callTimePerAbsence: string;
      minutes: string;
      hourlyWage: string;
      euroPerHour: string;
    };
    results: {
      monthlyHoursSaved: string;
      monthlyCostSaved: string;
      annualCostSaved: string;
      roiMultiplier: string;
      formulaExplanation: string;
    };
  };
  demo: {
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
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badge: string;
  };
  footer: {
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

export interface ChatMessage {
  id: string;
  sender: string;
  avatarLetter?: string;
  avatarColor?: string;
  isAI?: boolean;
  isPlanner?: boolean;
  time: string;
  text: string;
  badge?: string;
}
