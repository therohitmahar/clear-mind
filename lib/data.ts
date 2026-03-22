export interface Therapist {
  id: string;
  name: string;
  title: string;
  specialization: string;
  description: string;
  image: string;
  slug: string;
  concernsHelped?: string[];
  approaches?: string[];
  qualifications?: string[];
  languages?: string[];
  termsAndConditions?: string[];
  bookingNote?: string;
  sessionPrice?: {
    original: number;
    discounted: number;
  };
  sessionDuration?: string;
  location?: string;
  taglines?: string[];
}

export interface Symptom {
  icon: string;
  title: string;
  description: string;
}

export interface MethodologyItem {
  icon: string;
  title: string;
  description: string;
  borderColor: string;
  iconColor: string;
}

export interface JourneyStep {
  step: number;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  rating: number;
  image?: string;
}

export interface ContactInfo {
  address: string;
  addressShort: string;
  phone: string;
  email: string;
  hours: string;
  hoursExtended: {
    weekdays: string;
    sunday: string;
  };
  mapEmbedUrl: string;
  googleMapsUrl: string;
}

export interface PricingInfo {
  currentPrice: number;
  originalPrice: number;
  discountPercent: number;
  sessionDuration: string;
  promoCode: string;
  features: string[];
}

export const siteConfig = {
  name: "ClearMind Counseling",
  shortName: "ClearMind",
  tagline: "Online Counseling & Mental Health Therapy Services",
  heroTagline: "Your mental health is interconnected. We address how your thoughts, body, relationships, and surroundings affect you.",
  heroSubtitle: "We believe in a client-centred approach that offers compassionate, non-judgmental support tailored to your unique experiences",
  heroCtaText: "You didn't come this far to stop",
  description:
    "ClearMind Counseling offers professional online counseling and in-person therapy services to individuals seeking support for their mental health needs. Discover a compassionate platform dedicated to your well-being.",
  url: "https://clearmindcounseling.vercel.app",
  location: "Mira Road (E), Maharashtra, India",
  established: 2023,
};

export const stats = {
  rating: 4.9,
  sessionsCompleted: 1200,
  returningClientsPercent: 87,
  yearsOfExperience: 3,
};

export const contactInfo: ContactInfo = {
  address:
    "JP Imperia, Tower no. 2, Flat no. 903, Vinay Nagar, Kahimira Road, Mira-Bhayender Link Road, Mira Road East, Maharashtra, 401107",
  addressShort: "Mira Road (E), Maharashtra, India",
  phone: "+91 83692 46976",
  email: "clearmind.counseling18@gmail.com",
  hours: "Mon - Sat: 9:00 AM - 8:00 PM",
  hoursExtended: {
    weekdays: "Mon – Sat: 9:00 AM – 8:00 PM",
    sunday: "By appointment",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30154.567634261763!2d72.85292672320504!3d19.281692131237626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b045e7514013%3A0xb36d9d066311681!2sMira%20Road%20East%2C%20Mira%20Bhayandar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709653852899!5m2!1sen!2sin",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=JP%20Imperia%20Tower%20No.%202%20Flat%20No.%20903%20Vinay%20Nagar%20Kashimira%20Road%20Mira%20Road%20East%20Maharashtra%20401107",
};

export const pricingInfo: PricingInfo = {
  currentPrice: 1500,
  originalPrice: 2000,
  discountPercent: 20,
  sessionDuration: "50 min",
  promoCode: "FIRSTSESSION20",
  features: ["No hidden fees", "Flexible rescheduling", "Online & In-Person"],
};

export const socialLinks = {
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/clearmind_mhc",
  linkedin: "https://www.linkedin.com/company/samaadhan-mental-health-counseling/",
  twitter: "https://twitter.com/",
};

export const therapists: Therapist[] = [
  {
    id: "janhavi-more",
    name: "Ms. Janhavi More",
    title: "Psychologist",
    specialization: "Clinical Psychology",
    description:
      "Hi! I'm Janhavi More, a passionate and experienced psychologist with a Master's degree in Clinical Psychology and over 3 years of experience. I believe that seeking help is a courageous step, and I'm here to support you on your journey toward better mental health.\n\nLife can be overwhelming at times, and it's perfectly okay to not have it all figured out. My approach is focused on understanding your concerns, helping you gain clarity, and working together to find practical solutions.\n\nWhether you're facing stress, anxiety, or other challenges, I provide a safe, non-judgmental space where you can explore your thoughts and feelings freely. Let's focus on progress, not perfection, and build a path toward a more balanced and fulfilling life.",
    image:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=380,fit=crop/38vAKHLEMdCqcl02/whatsapp-image-2026-02-11-at-8.26.24-pm-LhFYxqYoEaWFeIXk.jpeg",
    slug: "janhavi-more",
    concernsHelped: [
      "I feel lost",
      "I feel misunderstood",
      "I struggle with loving myself",
      "I feel anxious /depressed",
      "I feel low",
    ],
    approaches: [
      "Cognitive Behavioural Therapy",
      "Dialectical Behavioural Therapy",
      "Rational-Emotive and Behavioural Therapy",
      "Narrative Therapy",
      "Client-centred and Solution Focused",
      "Eclectic Approach",
    ],
    qualifications: [
      "M.A Clinical Psychology, Mumbai University",
      "B.A Psychology HONS, Mumbai University",
      "Certified CBT Practitioner",
    ],
    languages: ["English", "Hindi", "Marathi", "Gujarati"],
    termsAndConditions: [
      "Please arrive 10 minutes before the session.",
      "Ensure you are seated in a quiet space with a reliable internet connection.",
      "Once booked, sessions cannot be cancelled or refunded. In the event of an emergency, sessions may be rescheduled with prior notice.",
      "Cancellations from expert's end may be fully refunded within 3-4 working days.",
    ],
    bookingNote: "If you are booking a session with me I would appreciate it if you book a slot at least 2 hours prior to your appointment. Thank you :)",
    sessionPrice: {
      original: 2000,
      discounted: 1500,
    },
    sessionDuration: "50 min",
    location: "JP North Imperia, Tower 2",
  },
  {
    id: "vikas-kamble",
    name: "Mr. Vikas Kamble",
    title: "Psychologist",
    specialization: "Clinical Psychology",
    taglines: [
      "Overthinking at 2 a.m.?",
      "Feeling exhausted but still pushing through work every day?",
      "Smiling outside, overwhelmed inside?",
    ],
    description:
      "Hi, I'm Vikas — a psychologist with over three years of experience supporting students, adults and working professionals through stress, anxiety, burnout, relationship struggles, and self-doubt.\n\nTherapy with me is a safe, honest space to untangle what's weighing on you and understand yourself better. You bring your experiences; I help you make sense of them with practical psychological tools.\n\nYou don't have to wait for a breakdown to seek support. Sometimes, clarity begins with one conversation.",
    image:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=535,fit=crop/38vAKHLEMdCqcl02/whatsapp-image-2026-02-19-at-6.20.47-pm-IJkh3eJHQ03Nfbzj.jpeg",
    slug: "vikas-kamble",
    concernsHelped: [
      "Overthinking",
      "Emotionally exhausted",
      "Low mood",
      "Relationship stress, family dynamics",
      "Lack of focus, brain fog",
      "Career confusion — or just a quiet sense of \"something isn't right.\"",
    ],
    approaches: [
      "CBT",
      "REBT",
      "Transactional Analysis",
      "Positive Psychotherapy",
      "Hypnotherapy",
      "Art Therapy",
      "Graphotherapy",
      "Other integrative methods",
    ],
    qualifications: [
      "Master's in Clinical Psychology",
      "Post Graduate diploma in Psychotherapies",
    ],
    languages: ["English", "Hindi", "Kannada"],
    termsAndConditions: [
      "Please arrive 10 minutes before the session.",
      "Ensure you are seated in a quiet space with a reliable internet connection.",
      "Once booked, sessions cannot be cancelled or refunded. In the event of an emergency, sessions may be rescheduled with prior notice.",
      "Cancellations from expert's end may be fully refunded within 3-4 working days.",
    ],
    sessionPrice: {
      original: 2000,
      discounted: 1500,
    },
    sessionDuration: "50 min",
    location: "JP North Imperia, Tower 2",
  },
];

export const symptoms: Symptom[] = [
  {
    icon: "Brain",
    title: "Racing Thoughts",
    description:
      "Constant mental chatter that prevents you from focusing on work or relaxing at home. It feels like a browser with too many tabs open.",
  },
  {
    icon: "Heart",
    title: "Physical Symptoms",
    description:
      "Unexpected rapid heartbeat, tightness in the chest, sweating palms, or sudden fatigue without physical exertion.",
  },
  {
    icon: "Cloud",
    title: "Worst-Case Scenarios",
    description:
      'Catastrophizing future events, constantly asking "what if," and preparing for disasters that rarely happen.',
  },
];

export const methodologyItems: MethodologyItem[] = [
  {
    icon: "User",
    title: "Client-Centered Therapy",
    description:
      "Your experience is unique. We adapt our sessions to your pace, ensuring you feel heard and understood without judgment.",
    borderColor: "border-primary",
    iconColor: "text-primary",
  },
  {
    icon: "Flower2",
    title: "Emotional Clarity",
    description:
      "We help you untangle complex emotions, giving names to your feelings and reducing the overwhelm of the unknown.",
    borderColor: "border-secondary",
    iconColor: "text-red-400",
  },
  {
    icon: "Waypoints",
    title: "Identifying Patterns",
    description:
      "Discover the triggers and thought loops that fuel your anxiety, empowering you to break the cycle effectively.",
    borderColor: "border-blue-400",
    iconColor: "text-blue-400",
  },
  {
    icon: "MessageCircle",
    title: "Trauma-Aware Care",
    description:
      "Safe, paced conversations that respect your history, ensuring therapy never feels overwhelming or re-traumatizing.",
    borderColor: "border-purple-400",
    iconColor: "text-purple-400",
  },
];

export const journeySteps: JourneyStep[] = [
  {
    step: 1,
    title: "Initial Assessment",
    description:
      "A friendly chat to understand your struggles and goals.",
  },
  {
    step: 2,
    title: "Custom Plan",
    description:
      "We design a therapy roadmap tailored specifically to you.",
  },
  {
    step: 3,
    title: "Active Therapy",
    description:
      "Weekly sessions focusing on tools, processing, and healing.",
  },
  {
    step: 4,
    title: "Long-term Stability",
    description:
      "Building resilience so you can thrive independently.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "I was going through a very difficult phase with anxiety and overthinking. Janhavi created such a safe and non-judgmental space for me that I could finally open up. The techniques she suggested were practical and actually worked in my daily life. I genuinely feel more in control of my thoughts now. Highly recommend ClearMind Counseling.",
    name: "User ClearMind Counseling",
    rating: 4,
  },
  {
    quote:
      "ClearMind Counseling stands out because of their personalized approach.",
    name: "User ClearMind Counseling",
    rating: 5,
  },
  {
    quote:
      "Great experience with ClearMind Counseling. Professional and empathetic team. I've seen real improvement in my emotional well-being.",
    name: "User ClearMind Counseling",
    rating: 5,
  },
  {
    quote:
      "Vikas sir helped me during one of the lowest points of my life. I was struggling with self-doubt and stress related to work. His calm approach and structured sessions made things feel manageable. I appreciated how he listened patiently without rushing to conclusions. ClearMind Counseling is doing meaningful work.",
    name: "User ClearMind Counseling",
    rating: 4,
  },
];

export const missionStatement = {
  title: "Our Mission",
  description:
    "Our mission is to encourage people to prioritize their mental health before it becomes overwhelming. We aim to break the belief that emotional well-being is optional and promote seeking support as an act of care, not weakness.\n\nAt ClearMind Counseling, we strive to help individuals think clearly, understand themselves better, and lead more balanced, fulfilling lives.",
};

export const aboutFounders = {
  intro:
    "ClearMind Counseling is a mental health organization established in 2023 by Senior Psychologists Janhavi More and Vikas Kamble with a belief that, therapy isn't about \"fixing\" you. It's about understanding you, challenging unhelpful patterns and building emotional stability that doesn't depend on external circumstances. Because real change doesn't happen when the world changes. It happens when you do.",
  founders: [
    {
      name: "Ms. Janhavi More",
      role: "Founder",
      description:
        "Ms. Janhavi More is a psychologist and the founder of ClearMind Counseling. With a strong clinical foundation and a client-centered approach, she is committed to creating a safe, empathetic space where individuals can heal, grow, and rediscover their strength. Her vision is clear — mental health should be a priority, not an option.",
    },
    {
      name: "Mr. Vikas Kamble",
      role: "Co-Founder",
      description:
        "Mr. Vikas Kamble is a psychologist and co-founder of ClearMind Counseling. Known for his calm, structured, and practical approach, he helps clients build emotional clarity and resilience in a supportive, non-judgmental environment. He believes that seeking help is a sign of courage, and mental well-being deserves the same importance as physical health.",
    },
  ],
};

export const inPersonSessions = {
  announcement:
    "We are delighted to inform you that we are now open for in-person therapy sessions. Experience calmness and soothe your mind and body.",
  available: true,
};

export const faqItems: FAQItem[] = [
  {
    question: "I've never taken therapy before. What should I expect in the first session?",
    answer:
      "Arrive 10 minutes early to complete any necessary forms and relax before your session. Avoid eating a heavy meal right before your appointment. Wear comfortable clothing, and communicate any health conditions or concerns to your therapist.",
  },
  {
    question: "How do I know if I really need therapy?",
    answer:
      "If something is affecting your daily life, relationships, work, or emotional well-being, therapy can help. You don't have to be in a \"crisis\" to seek support. Therapy is also for self-growth, clarity, and emotional balance.",
  },
  {
    question: "Is everything I share kept confidential?",
    answer:
      "Yes. Your privacy is very important to us. Everything discussed in sessions remains confidential, except in rare situations where safety is at risk (which will always be discussed with you).",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "It depends on your goals and concerns. Some people benefit from short-term therapy (6–8 sessions), while others prefer longer support. We will regularly review your progress together.",
  },
  {
    question: "How do I book a session?",
    answer:
      "You can book a session through our website, WhatsApp button, or by directly contacting ClearMind Counseling. Our team will guide you through the next steps. We are open for both online sessions and in-person sessions.",
  },
];

// Navigation - Routes match app folder structure
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerServices = [
  { label: "Individual Therapy", href: "/services" },
  { label: "Group/ Family Therapy", href: "/services" },
  { label: "Child Counseling", href: "/services" },
];

export const footerCompany = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const heroFeatures = [
  { icon: "Monitor", label: "Online & In-Person" },
  { icon: "Clock", label: "50-min Sessions" },
  { icon: "IndianRupee", label: "₹1500" },
  { icon: "Lock", label: "100% Confidential" },
];

// ─── Services Page Data ─────────────────────────────────────────────────────

export interface ServiceItem {
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  slug: string;
}

export const services: ServiceItem[] = [
  {
    icon: "BrainCircuit",
    iconBg: "bg-red-50",
    iconColor: "text-red-400",
    title: "Individual Therapy",
    description:
      "One-on-one therapy sessions tailored to your unique needs. Work through anxiety, depression, stress, and personal challenges with personalized support.",
    slug: "individual-therapy",
  },
  {
    icon: "Users",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-400",
    title: "Group/ Family Therapy",
    description:
      "Strengthen relationships and improve family dynamics. Navigate complex interactions with professional guidance in a supportive group setting.",
    slug: "group-family-therapy",
  },
  {
    icon: "Baby",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-400",
    title: "Child & Adolescents Therapy",
    description:
      "Age-appropriate support for young minds. Help your child navigate emotional challenges, behavioral issues, and developmental concerns.",
    slug: "child-therapy",
  },
  {
    icon: "Briefcase",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    title: "Corporate Events",
    description:
      "Mental health workshops and sessions for organizations. Promote employee well-being and create a supportive workplace environment.",
    slug: "corporate-events",
  },
];

export const servicesFaqItems: FAQItem[] = [
  {
    question: "How do I know which therapy is right for me?",
    answer:
      "During your initial assessment, our therapist will work with you to understand your concerns and recommend the most suitable approach. You don't need to decide beforehand.",
  },
  {
    question: "What can I expect in the first session?",
    answer:
      "The first session is about getting to know you. We'll discuss your history, current challenges, and goals. It's a safe, judgment-free conversation to set the foundation for your therapy journey.",
  },
  {
    question: "Do you offer online sessions?",
    answer:
      "Yes! We offer secure video sessions for clients who prefer the comfort of their own space or live outside the area. We also offer in-person sessions at our office.",
  },
  {
    question: "Are sessions confidential?",
    answer:
      "Absolutely. Your privacy is very important to us. Everything discussed in sessions remains confidential, except in rare situations where safety is at risk.",
  },
  {
    question: "How do I book a session?",
    answer:
      "You can book a session through our website, WhatsApp button, or by directly contacting ClearMind Counseling. Our team will guide you through the next steps.",
  },
];

// ─── About Page Data ────────────────────────────────────────────────────────

export interface GuidingPrinciple {
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
}

export const guidingPrinciples: GuidingPrinciple[] = [
  {
    icon: "Heart",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    title: "Compassion First",
    description:
      "We approach every story with empathy and without judgment. Your feelings are valid, and we create a safe container for them to be expressed.",
  },
  {
    icon: "Lock",
    iconBg: "bg-secondary/20",
    iconColor: "text-amber-700",
    title: "Absolute Confidentiality",
    description:
      "Trust is the foundation of therapy. Everything discussed remains confidential, except in rare situations where safety is at risk.",
  },
  {
    icon: "BrainCircuit",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    title: "Clinical Expertise",
    description:
      "Our methods aren't just intuitive; they are scientific. We utilize CBT, mindfulness, and trauma-informed care to drive real change.",
  },
];

export interface ClinicPhoto {
  src: string;
  alt: string;
  label: string;
}

export const clinicPhotos: ClinicPhoto[] = [
  {
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/38vAKHLEMdCqcl02/whatsapp-image-2026-02-09-at-9.39.50-am-qJl79C3UlPMQrfVV.jpeg",
    alt: "ClearMind Counseling therapy room",
    label: "Therapy Space",
  },
  {
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/38vAKHLEMdCqcl02/whatsapp-image-2026-02-03-at-4.28.21-pm-KS2yJWzAsrpGoKKt.jpeg",
    alt: "Clinic interior",
    label: "Our Space",
  },
];

export const aboutStats = [
  { value: "4.9", label: "Rating" },
  { value: "1,200+", label: "Sessions Completed" },
  { value: "87%", label: "Returning Clients" },
  { value: "3+", label: "Years Experience" },
];

// ─── Blog / Resources Data ──────────────────────────────────────────────────

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  date?: string;
  readTime?: string;
  author?: string;
  authorImage?: string;
  content?: string;
}

export const blogCategories = [
  "All Articles",
  "Anxiety",
  "Relationships",
  "Self-Care",
  "Mindfulness",
];

export const blogArticles: BlogArticle[] = [
  {
    slug: "5-ways-manage-racing-thoughts",
    title: "5 Ways to Manage Racing Thoughts",
    excerpt: "It often starts as a single worry, but before you know it, your mind is a high-speed freeway of 'what-ifs' and past regrets. Here is how you can find your center again.",
    category: "Anxiety",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&h=450",
    imageAlt: "Calming nature scene with a peaceful lake and misty mountains",
    featured: true,
    date: "Mar 15, 2026",
    readTime: "8 min read",
    author: "Ms. Janhavi More",
    authorImage: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=96,h=96,fit=crop/38vAKHLEMdCqcl02/whatsapp-image-2026-02-11-at-8.26.24-pm-LhFYxqYoEaWFeIXk.jpeg",
  },
  {
    slug: "understanding-social-anxiety",
    title: "Understanding the Roots of Social Anxiety",
    excerpt: "Learn how to identify triggers and implement grounding techniques for more confident social interactions.",
    category: "Anxiety",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&h=450",
    imageAlt: "Calming sunset lake with morning mist",
    date: "Mar 10, 2026",
    readTime: "6 min read",
    author: "Ms. Janhavi More",
  },
  {
    slug: "mindful-habits-morning-peace",
    title: "5 Mindful Habits for Morning Peace",
    excerpt: "Starting your day with intention can transform your overall mental well-being.",
    category: "Self-Care",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&h=450",
    imageAlt: "Person practicing meditation in nature",
    date: "Mar 5, 2026",
    readTime: "5 min read",
    author: "Mr. Vikas Kamble",
  },
  {
    slug: "navigating-conflict-compassion",
    title: "Navigating Conflict with Compassion",
    excerpt: "Communication tools for maintaining healthy boundaries and deep connections.",
    category: "Relationships",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&h=450",
    imageAlt: "Two hands holding cups of coffee",
    date: "Feb 28, 2026",
    readTime: "7 min read",
    author: "Ms. Janhavi More",
  },
  {
    slug: "breaking-cycle-overthinking",
    title: "Breaking the Cycle of Overthinking",
    excerpt: "Practical cognitive behavioral steps to quiet a busy mind before bed.",
    category: "Anxiety",
    image:
      "https://images.unsplash.com/photo-1519155824345-64fd7b2b0b1b?auto=format&fit=crop&w=800&h=450",
    imageAlt: "Warm cozy indoor setting with lamp",
    date: "Feb 20, 2026",
    readTime: "5 min read",
    author: "Mr. Vikas Kamble",
  },
  {
    slug: "science-forest-bathing",
    title: "The Science of Forest Bathing",
    excerpt: "How nature therapy impacts cortisol levels and promotes inner calm.",
    category: "Self-Care",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&h=450",
    imageAlt: "Beautiful green lush forest floor",
    date: "Feb 15, 2026",
    readTime: "6 min read",
    author: "Mr. Vikas Kamble",
  },
];

// ─── Contact Page Data ──────────────────────────────────────────────────────

export const contactConcerns = [
  { value: "anxiety", label: "Anxiety & Overthinking" },
  { value: "depression", label: "Depression or Low Mood" },
  { value: "trauma", label: "Trauma & PTSD" },
  { value: "relationship", label: "Relationship Issues" },
  { value: "general", label: "General Inquiry" },
];

export interface ConnectionMode {
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  badge: string;
  badgeBg: string;
  badgeText: string;
}

export const connectionModes: ConnectionMode[] = [
  {
    icon: "Armchair",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-400",
    title: "In-Person Sessions",
    description:
      "Experience our serene therapy space at Mira Road. Designed for privacy and deep reflection away from daily distractions.",
    badge: "Now Available",
    badgeBg: "bg-orange-100",
    badgeText: "text-orange-800",
  },
  {
    icon: "Video",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-400",
    title: "Online Therapy",
    description:
      "Secure video calls from the comfort of your own home. Perfect for busy professionals or those outside Mumbai.",
    badge: "Available Worldwide",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-800",
  },
];

// ─── Images ─────────────────────────────────────────────────────────────────

export const images = {
  logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop,q=95/38vAKHLEMdCqcl02/whatsapp-image-2024-09-03-at-1.58.04-pm-cEj4jDhhv6pXPu9S.jpeg",
  hero: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/38vAKHLEMdCqcl02/whatsapp-image-2026-02-12-at-8.17.14-pm-xX3glE8BLzcHWSPx.jpeg",
  heroAbout: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1920",
  gallery: [
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/38vAKHLEMdCqcl02/whatsapp-image-2026-02-09-at-9.39.50-am-qJl79C3UlPMQrfVV.jpeg",
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/38vAKHLEMdCqcl02/whatsapp-image-2026-02-03-at-4.28.21-pm-KS2yJWzAsrpGoKKt.jpeg",
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/38vAKHLEMdCqcl02/whatsapp-image-2024-12-02-at-11.08.31-am-mKJLcTwbYyr1BEbB.jpeg",
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/38vAKHLEMdCqcl02/whatsapp-image-2024-12-02-at-11.09.46-am-sEdza92Y5be5x1Cy.jpeg",
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/38vAKHLEMdCqcl02/whatsapp-image-2026-02-19-at-8.03.48-pm-qfw2kY5Fipz1pNa8.jpeg",
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/38vAKHLEMdCqcl02/whatsapp-image-2026-02-19-at-8.05.22-pm-thoAKdjQuUErGNMm.jpeg",
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/38vAKHLEMdCqcl02/whatsapp-image-2026-02-19-at-8.03.22-pm-6CcCb6Ekx6TLe3X2.jpeg",
  ],
  unsplash: [
    "https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?auto=format&fit=crop&w=570&h=624",
    "https://images.unsplash.com/photo-1615737986496-1d36ad26ae51?auto=format&fit=crop&w=606&h=664",
    "https://images.unsplash.com/photo-1617692855386-301ab29a945b?auto=format&fit=crop&w=1920",
  ],
};
