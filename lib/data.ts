export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const COMPANY_HISTORY =
  "Founded in 2014, nCinga set out to transform manufacturing with its smart factory solution, nFactory. By 2018, it became a world-leading MES platform, powering efficiency across the global apparel industry. Its success led to a landmark acquisition by a Singapore-based unicorn in 2019, marking one of Sri Lanka's biggest tech exits. Building on this momentum, Nventures launched Qbitum in 2022 to drive tech innovation. By 2024, Qbitum joined the Google for Startups Cloud Program, reinforcing our commitment to engineering excellence at scale. Today, we partner with startups and enterprises to turn ambition into shipped products — through studio-quality build, complete development teams, and hands-on consultancy.";

export const FOOTER_COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Meet Our Team", href: "/about#team" },
  { label: "Contact Us", href: "/contact" },
  { label: "News & Media", href: "/news" },
];

export const FOOTER_SOLUTION_LINKS = [
  { label: "Idea to MVP", href: "/#services" },
  { label: "Development Outsourcing", href: "/#services" },
  { label: "Staff Augmentation", href: "/#services" },
  { label: "Design & Development Consultancy", href: "/#services" },
];

export const EXPERTISE_TILES = [
  {
    title: "Idea to MVP",
    description:
      "Lean workshops, fast prototyping, and a structured build process that takes you from concept to shipped product in weeks.",
    tags: ["PRODUCT DISCOVERY", "MVP BUILD"],
  },
  {
    title: "Development Outsourcing",
    description:
      "Full, pre-formed engineering teams — tech lead, engineers, designer, QA — embedded in your workflow from day one.",
    tags: ["TEAM VELOCITY", "EMBEDDED TEAMS"],
  },
  {
    title: "Staff Augmentation",
    description:
      "Senior engineers and specialists who slot into your existing team, aligned to your stack and process.",
    tags: ["ON-DEMAND TALENT", "SCALE-UP"],
  },
  {
    title: "Design & Development Consultancy",
    description:
      "Architecture reviews, product design advisory, and engineering leadership — accessed as a service.",
    tags: ["ADVISORY", "ARCHITECTURE"],
  },
];

export const PARTNER_NAMES = [
  "Google Cloud",
  "Amazon Web Services",
  "Microsoft Azure",
  "OpenAI",
  "Anthropic",
  "TensorFlow",
  "Kubernetes",
  "Next.js",
  "Google for Startups",
  "nCinga",
];

export const HOME_SERVICES = [
  {
    title: "Idea to MVP",
    description:
      "We take your concept through lean product workshops, rapid prototyping, and full-stack build — shipping a working MVP in weeks.",
    image: "/images/product-engineering.jpg",
    imageLeft: false,
  },
  {
    title: "Development Outsourcing",
    description: "Pre-assembled, senior-led engineering teams that embed in your business and deliver from day one.",
    image: "/images/dedicated-teams.jpg",
    imageLeft: true,
  },
  {
    title: "Staff Augmentation",
    description: "Senior engineers and specialists placed directly into your team — filling gaps, accelerating delivery.",
    image: "/images/product-outsourcing.jpg",
    imageLeft: false,
  },
];

export const INDUSTRIES = [
  { name: "Logistics", image: "/images/industry-logistics.jpg" },
  { name: "Energy", image: "/images/industry-energy.jpg" },
  { name: "Technology", image: "/images/industry-tech.jpg" },
  { name: "Healthcare", image: "/images/industry-healthcare.jpg" },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechStart Inc.",
    content:
      "Qbitum transformed our product development process. Their team delivered a robust cloud platform on time and significantly accelerated our go-to-market timeline.",
    avatar: "/images/testimonial-1.jpg",
  },
  {
    name: "Michael Chen",
    role: "CEO, DataFlow Systems",
    content:
      "The dedicated remote team from Qbitum integrated seamlessly with our in-house engineers. The quality and speed of delivery exceeded our expectations.",
    avatar: "/images/testimonial-2.jpg",
  },
];

export const LIFE_IMAGES = [
  "/images/life-1.jpg",
  "/images/life-2.jpg",
  "/images/life-3.jpg",
  "/images/life-4.jpg",
];

export const CORE_VALUES = [
  {
    title: "Innovation",
    description:
      "We continuously explore emerging technologies to deliver breakthrough solutions that keep our clients ahead of the curve.",
    icon: "💡",
  },
  {
    title: "Integrity",
    description:
      "We build trust through transparency, honest communication, and always doing what's right — for our clients and our team.",
    icon: "🤝",
  },
  {
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards, delivering quality that not only meets but consistently exceeds expectations.",
    icon: "⭐",
  },
  {
    title: "Collaboration",
    description:
      "We believe the best outcomes come from working together — with our clients, partners, and each other — as one unified team.",
    icon: "🌐",
  },
];

export const SERVICES_LIST = [
  {
    slug: "idea-to-mvp",
    title: "Idea to MVP",
    shortDesc:
      "From whiteboard to working product in weeks — strategy, prototyping, and build under one roof.",
    fullDesc:
      "Most startups stall between idea and execution. Qbitum collapses that gap. We begin with lean product workshops to stress-test your concept, define the minimum viable scope, and map the right tech choices. We prototype quickly to validate assumptions with real users before committing to build. The result: a production-ready MVP delivered in weeks, not months — with a clear path to what comes next.",
    image: "/images/product-engineering.jpg",
    highlights: [
      "Lean product discovery workshop",
      "MVP scope document & feature map",
      "Interactive prototype for user validation",
      "Full-stack MVP build (web and/or mobile)",
      "Deployment to production",
      "Post-launch roadmap & handoff",
    ],
    process: [
      {
        title: "Discovery Workshop",
        desc: "We run a focused lean product workshop to map your idea, stress-test assumptions, and identify the core value proposition worth building.",
      },
      {
        title: "Scope & Architecture",
        desc: "Define the minimum feature set, choose the right tech stack, and produce a clear build plan with timeline and milestones.",
      },
      {
        title: "Prototype",
        desc: "Build a clickable, testable prototype and put it in front of real users to validate the concept before a line of production code is written.",
      },
      {
        title: "Build",
        desc: "Agile sprints deliver working software incrementally, with regular demos so you see progress at every step.",
      },
      {
        title: "Launch & Handoff",
        desc: "Deploy to production, hand over source code and documentation, and define the roadmap for what comes next.",
      },
    ],
  },
  {
    slug: "development-teams",
    title: "Development Outsourcing",
    shortDesc:
      "A fully assembled, senior-led development team — embedded in your business and built for velocity.",
    fullDesc:
      "Hiring and retaining a full engineering team takes months and capital most companies cannot spare. Qbitum provides complete, pre-formed development teams — engineers, a tech lead, a designer, and a QA specialist — who embed directly into your product process. They operate on your tools, in your rituals, and against your roadmap. You get the output of a seasoned in-house team from day one.",
    image: "/images/dedicated-teams.jpg",
    highlights: [
      "Full team: tech lead, engineers, designer & QA",
      "Works inside your tools and processes",
      "Sprint-based delivery from day one",
      "Regular demos and standups",
      "Scalable team composition over time",
      "HR and administration handled by Qbitum",
    ],
    process: [
      {
        title: "Team Design",
        desc: "We assess your product, stack, and culture to design the right team composition — the exact mix of roles your roadmap needs.",
      },
      {
        title: "Candidate Selection",
        desc: "You meet and approve every team member before they start. No surprises.",
      },
      {
        title: "Onboarding",
        desc: "The team integrates into your codebase, tools, and ceremonies — typically ready to ship meaningful work within the first week.",
      },
      {
        title: "Sprint Delivery",
        desc: "The team operates inside your rhythm: standups, sprint planning, retrospectives, and regular demos — just like an in-house team.",
      },
      {
        title: "Scale & Adjust",
        desc: "As your roadmap evolves, we adjust team size and skill composition without the delays of open recruitment.",
      },
    ],
  },
  {
    slug: "staff-augmentation",
    title: "Staff Augmentation",
    shortDesc:
      "Expand your team's capacity with senior engineers and specialists — on demand, no long-term overhead.",
    fullDesc:
      "When your roadmap grows faster than your headcount can, Qbitum staff augmentation fills the gap precisely. We place senior engineers, designers, and technical specialists directly into your existing team — aligned to your stack, culture, and process. Whether you need to accelerate a sprint, cover a skill gap, or scale through a peak, our people integrate immediately and operate without friction.",
    image: "/images/product-outsourcing.jpg",
    highlights: [
      "Pre-vetted senior engineers and specialists",
      "Aligned to your stack and tooling",
      "No recruitment or HR overhead for you",
      "Flexible engagement length",
      "Contributing within days of starting",
      "Full IP ownership stays with you",
    ],
    process: [
      {
        title: "Needs Assessment",
        desc: "A short call to understand the skill gap, your tech stack, team culture, and how quickly you need someone in place.",
      },
      {
        title: "Candidate Matching",
        desc: "We present 2–3 pre-vetted candidates within days, each aligned to your specific requirements and working style.",
      },
      {
        title: "Selection & Contract",
        desc: "You choose who you want. We handle contracts, HR administration, and payroll so you have zero overhead.",
      },
      {
        title: "Integration",
        desc: "Selected engineers join your communication channels, codebase, and workflow immediately — no lengthy onboarding ramp.",
      },
      {
        title: "Ongoing Management",
        desc: "We handle performance, time-tracking, and any HR matters behind the scenes so you stay focused on shipping.",
      },
    ],
  },
  {
    slug: "design-development-consultancy",
    title: "Design & Development Consultancy",
    shortDesc:
      "Expert advisory on product design, architecture, and engineering decisions — when you need a clear head.",
    fullDesc:
      "Technology decisions made without the right expertise cost organisations years of rework. Qbitum's consultancy practice gives you direct access to senior practitioners in product design, software architecture, and engineering leadership. Engagements range from a single architecture review to embedded advisory across a quarter — we bring the outside perspective and technical depth to make better calls faster.",
    image: "/images/product-engineering.jpg",
    highlights: [
      "Architecture reviews and technical audits",
      "Product design assessments and UX reviews",
      "Engineering leadership advisory",
      "Technology selection and vendor evaluation",
      "Clear, written recommendations and documentation",
      "Optional implementation support",
    ],
    process: [
      {
        title: "Engagement Scoping",
        desc: "Define the problem, the deliverables, and the duration. Most engagements start with a half-day discovery session.",
      },
      {
        title: "Discovery & Audit",
        desc: "We review your codebase, designs, architecture, or processes — going deep on the area that matters most to you.",
      },
      {
        title: "Analysis & Findings",
        desc: "We synthesise our findings into a clear, prioritised set of observations, risks, and opportunities.",
      },
      {
        title: "Recommendations",
        desc: "We deliver actionable recommendations with enough context to understand the tradeoffs involved — written, not just verbal.",
      },
      {
        title: "Implementation Support",
        desc: "Optionally, we work alongside your team to help implement the recommended changes and ensure they land correctly.",
      },
    ],
  },
];
