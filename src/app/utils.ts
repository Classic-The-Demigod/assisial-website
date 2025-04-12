import userOctagon from "@/app/assets/icons/user-octagon.svg";
import people from "@/app/assets/icons/people.svg";
import briefcase from "@/app/assets/icons/briefcase.svg";
import emptyWallet from "@/app/assets/icons/empty-wallet-tick.svg";
import globalRefresh from "@/app/assets/icons/global-refresh.svg";
import routeSquare from "@/app/assets/icons/route-square.svg";
import Mike from "@/app/assets/images/Ellipse 6.png";
import David from "@/app/assets/images/Ellipse 1.png";
import Sarah from "@/app/assets/images/Ellipse 4.png";
import { StaticImageData } from "next/image";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  services: string[];
  benefits: benefit[];
}

interface benefit {
  title: string;
  content: string;
}

interface Testimonial {
  id: number;
  name: string;
  position: string;

  image: string | StaticImageData;
  quote: string;
}

interface SlideProps {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  appLabel: string;
  buttonText: string;
}

interface faq {
  id: string;
  question: string;
  answer: string;
}

export interface SecretList {
  id: number;
  title: string;
  content: string;
}

export interface MenuItem {
  label: string;
  items: string[];
}

export interface DropdownMenuProps {
  menuItems: MenuItem[];
}

export const services: Service[] = [
  {
    id: 1,
    title: "Public Relations",
    description:
      "Our Public Relations strategies help your brand craft the right message, foster strong relationships, and m...",
    icon: userOctagon,
    services: [
      "Brand Awareness Campaigns",
      "Media Planning & Buying",
      "Press Releases & Media Outreach",
      "Influencer & Community Engagement",
      "Reputation Management",
    ],
    benefits: [
      {
        title: "Enhanced Brand Awareness –",
        content: "Reach a wider audience with targeted advertising.",
      },
      {
        title: "Credibility & Trust –",
        content:
          "Strengthen your reputation with media coverage and PR efforts.",
      },
      {
        title: "Higher Engagement –",
        content: "Craft compelling stories that resonate with your audience.",
      },
      {
        title: "Crisis Management –",
        content: "Proactively handle public perception and reputation risks.",
      },
      {
        title: "Increased Sales & Leads –",
        content:
          " Effective PR and advertising drive customer interest and conversions.",
      },
    ],
  },
  {
    id: 2,
    title: "Digital Marketing",
    description:
      "Strategic marketing solutions that boost visibility, engage audiences, and drive real results for your brand",
    icon: globalRefresh,
    services: [
      "Social Media Marketing & Management",
      "SEO & SEM Strategies",
      "Email & Content Marketing",
      "PPC & Performance Advertising",
      "Data Analytics & Conversion Optimization",
    ],
    benefits: [
      {
        title: "Higher Website Traffic –",
        content: "Drive qualified leads through SEO and PPC campaigns.",
      },
      {
        title: "Better Conversion Rates –",
        content: "Optimize your marketing funnel to maximize sales.",
      },
      {
        title: "Stronger Online Presence –",
        content: "Use advanced targeting techniques for better ROI.",
      },
      {
        title: "Targeted Audience Reach –",
        content: "Establish authority across social media and search engines.",
      },
      {
        title: "Data-Driven Insights –",
        content: "Make informed decisions based on real-time analytics.",
      },
    ],
  },
  {
    id: 3,
    title: "Advertising",
    description:
      "Our targeted advertising strategies ensure your brand gets in front of the right audience at the right time...",
    icon: routeSquare,
    services: [
      "Brand Awareness Campaigns",
      "Media Planning & Buying",
      "Press Releases & Media Outreach",
      "Influencer & Community Engagement",
      "Reputation Management",
    ],
    benefits: [
      {
        title: "Enhanced Brand Awareness –",
        content: "Reach a wider audience with targeted advertising.",
      },
      {
        title: "Credibility & Trust –",
        content:
          "Strengthen your reputation with media coverage a nd PR efforts.",
      },
      {
        title: "Higher Engagement –",
        content: "Craft compelling stories that resonate with your audience.",
      },
      {
        title: "Crisis Management –",
        content: "Proactively handle public perception and reputation risks.",
      },
      {
        title: "Increased Sales & Leads –",
        content:
          "Effective PR and advertising drive customer interest and conversions.",
      },
    ],
  },
  {
    id: 4,
    title: "Business Consulting",
    description:
      "Our business consulting services provide expert guidance to help you streamline operations, optimize...",
    icon: briefcase,
    services: [
      "Market Research & Competitive Analysis",
      "Business Development & Expansion Plans",
      "Brand Strategy & Positioning",
      "Financial & Operational Consulting",
    ],
    benefits: [
      {
        title: "Improved Decision-Making –",
        content: "Leverage market research and strategic insights.",
      },
      {
        title: "Optimized Business Processes –",
        content: "Enhance productivity and eliminate inefficiencies.",
      },
      {
        title: "Higher Profitability –",
        content: "Develop strategies to maximize revenue and reduce costs.",
      },
      {
        title: "Stronger Competitive Edge –",
        content:
          "Stay ahead with industry-specific insights and innovative approaches.",
      },
      {
        title: "Scalable Business Growth –",
        content: "Implement frameworks for sustainable expansion.",
      },
    ],
  },
  {
    id: 5,
    title: "Recruitment",
    description:
      "We connect businesses with top talent through strategic recruitment solutions, ensuring th...",
    icon: people,
    services: [
      "Executive & Specialized Recruitment",
      "Employer Branding & Talent Strategy",
      "HR Consulting & Workforce Planning",
      "Onboarding & Employee Retention Programs",
    ],
    benefits: [
      {
        title: "Access to Qualified Candidates –",
        content: "We connect you with the right professionals for your needs.",
      },
      {
        title: "Faster Hiring Process –",
        content:
          "Reduce time-to-hire with our streamlined recruitment strategies.",
      },
      {
        title: "Better Employee Fit –",
        content:
          "Match candidates to your company culture and role requirements.",
      },
      {
        title: "Stronger Employer Brand –",
        content: "Improve your company’s reputation to attract top talent.",
      },
      {
        title: "Reduced Turnover Rates –",
        content: "Implement strategies that increase employee retention.",
      },
    ],
  },
  {
    id: 6,
    title: "Project Management",
    description:
      "Effortlessly manage projects, improve team collaboration, and s...",
    icon: emptyWallet,
    services: [
      "Agile & Traditional Project Management",
      "Process Improvement & Workflow Optimization",
      "Risk Assessment & Mitigation Strategies",
      "Stakeholder & Team Coordination",
    ],
    benefits: [
      {
        title: "On-Time & On-Budget Delivery –",
        content: "Keep projects within deadlines and financial constraints.",
      },
      {
        title: "Reduced Risks & Challenges –",
        content: "Identify and mitigate potential project roadblocks.",
      },
      {
        title: "Improved Team Collaboration –",
        content: "Streamline workflows and communication.",
      },
      {
        title: "Higher Project Success Rate –",
        content: "Ensure quality execution and goal achievement.",
      },
      {
        title: "Efficient Resource Utilization –",
        content: "Maximize efficiency and minimize waste.",
      },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mike Torello",
    position: "Marketing Director",

    image: Mike,
    quote:
      "Working with [Your Agency Name] was a game-changer for our brand. Their strategic approach and creative execution helped us reach a wider audience and boost engagement like never before!",
  },
  {
    id: 2,
    name: "David L.",
    position: "CEO, Tech Startup",

    image: David,
    quote:
      "The team at Assisial truly understands digital marketing. Their expertise in branding and customer engagement has significantly improved our online presence and conversions.",
  },
  {
    id: 3,
    name: "Sarah K.",
    position: "Founder, E-commerce Brand",

    image: Sarah,
    quote:
      "From the initial consultation to execution, [Your Agency Name] exceeded our expectations. Their attention to detail and commitment to results made a huge difference in our campaign’s success.",
  },

  {
    id: 4,
    name: "Mike Torello",
    position: "Marketing Director",

    image: Mike,
    quote:
      "Working with [Your Agency Name] was a game-changer for our brand. Their strategic approach and creative execution helped us reach a wider audience and boost engagement like never before!",
  },
  {
    id: 5,
    name: "David L.",
    position: "CEO, Tech Startup",

    image: David,
    quote:
      "The team at Assisial truly understands digital marketing. Their expertise in branding and customer engagement has significantly improved our online presence and conversions.",
  },
  {
    id: 6,
    name: "Sarah K.",
    position: "Founder, E-commerce Brand",

    image: Sarah,
    quote:
      "From the initial consultation to execution, [Your Agency Name] exceeded our expectations. Their attention to detail and commitment to results made a huge difference in our campaign’s success.",
  },
  {
    id: 7,
    name: "Mike Torello",
    position: "Marketing Director",

    image: Mike,
    quote:
      "Working with [Your Agency Name] was a game-changer for our brand. Their strategic approach and creative execution helped us reach a wider audience and boost engagement like never before!",
  },
  {
    id: 8,
    name: "David L.",
    position: "CEO, Tech Startup",

    image: David,
    quote:
      "The team at Assisial truly understands digital marketing. Their expertise in branding and customer engagement has significantly improved our online presence and conversions.",
  },
  {
    id: 9,
    name: "Sarah K.",
    position: "Founder, E-commerce Brand",
    image: Sarah,
    quote:
      "From the initial consultation to execution, [Your Agency Name] exceeded our expectations. Their attention to detail and commitment to results made a huge difference in our campaign’s success.",
  },
];

export const slides: SlideProps[] = [
  {
    id: 1,
    imageSrc: "/images/design-slide-1.jpg",
    title: "Unraveling Design: The Science Behind UI/UX",
    description:
      "In today's digital world, a product's success isn't just about looks—it's about experience. UI/User Experience(UX)/UI user interface design work hand in hand to create seamless, engaging and intuitive interactions.",
    appLabel: "Adobe XD",
    buttonText: "UX Exploration",
  },
  {
    id: 2,
    imageSrc: "/images/design-slide-2.jpg",
    title: "Unraveling Design: The Science Behind UI/UX",
    description:
      "In today's digital world, a product's success isn't just about looks—it's about experience. UI/User Experience(UX)/UI user interface design work hand in hand to create seamless, engaging and intuitive interactions.",
    appLabel: "Adobe XD",
    buttonText: "UX Exploration",
  },
  {
    id: 3,
    imageSrc: "/images/design-slide-3.jpg",
    title: "Unraveling Design: The Science Behind UI/UX",
    description:
      "In today's digital world, a product's success isn't just about looks—it's about experience. UI/User Experience(UX)/UI user interface design work hand in hand to create seamless, engaging and intuitive interactions.",
    appLabel: "Adobe XD",
    buttonText: "UX Exploration",
  },
  {
    id: 4,
    imageSrc: "/images/design-slide-1.jpg",
    title: "Unraveling Design: The Science Behind UI/UX",
    description:
      "In today's digital world, a product's success isn't just about looks—it's about experience. UI/User Experience(UX)/UI user interface design work hand in hand to create seamless, engaging and intuitive interactions.",
    appLabel: "Adobe XD",
    buttonText: "UX Exploration",
  },
  {
    id: 5,
    imageSrc: "/images/design-slide-2.jpg",
    title: "Unraveling Design: The Science Behind UI/UX",
    description:
      "In today's digital world, a product's success isn't just about looks—it's about experience. UI/User Experience(UX)/UI user interface design work hand in hand to create seamless, engaging and intuitive interactions.",
    appLabel: "Adobe XD",
    buttonText: "UX Exploration",
  },
  {
    id: 6,
    imageSrc: "/images/design-slide-3.jpg",
    title: "Unraveling Design: The Science Behind UI/UX",
    description:
      "In today's digital world, a product's success isn't just about looks—it's about experience. UI/User Experience(UX)/UI user interface design work hand in hand to create seamless, engaging and intuitive interactions.",
    appLabel: "Adobe XD",
    buttonText: "UX Exploration",
  },
  {
    id: 7,
    imageSrc: "/images/design-slide-1.jpg",
    title: "Unraveling Design: The Science Behind UI/UX",
    description:
      "In today's digital world, a product's success isn't just about looks—it's about experience. UI/User Experience(UX)/UI user interface design work hand in hand to create seamless, engaging and intuitive interactions.",
    appLabel: "Adobe XD",
    buttonText: "UX Exploration",
  },
  {
    id: 8,
    imageSrc: "/images/design-slide-2.jpg",
    title: "Unraveling Design: The Science Behind UI/UX",
    description:
      "In today's digital world, a product's success isn't just about looks—it's about experience. UI/User Experience(UX)/UI user interface design work hand in hand to create seamless, engaging and intuitive interactions.",
    appLabel: "Adobe XD",
    buttonText: "UX Exploration",
  },
  {
    id: 9,
    imageSrc: "/images/design-slide-3.jpg",
    title: "Unraveling Design: The Science Behind UI/UX",
    description:
      "In today's digital world, a product's success isn't just about looks—it's about experience. UI/User Experience(UX)/UI user interface design work hand in hand to create seamless, engaging and intuitive interactions.",
    appLabel: "Adobe XD",
    buttonText: "UX Exploration",
  },
];

export const faqData: faq[] = [
  {
    id: "faq-1",
    question: "What services do you offer?",
    answer:
      "We offer a comprehensive range of marketing, consulting, and digital services including brand strategy, digital marketing, content creation, web development, and marketing automation solutions tailored to your business goals.",
  },
  {
    id: "faq-2",
    question: "How can your consulting services help my business?",
    answer:
      "Our consulting services are tailored to your specific business needs. We analyze market trends, customer behavior, and your current strategies to develop actionable plans that drive sales, improve brand awareness, and optimize operations for long-term success.",
  },
  {
    id: "faq-3",
    question: "What industries do you specialize in?",
    answer:
      "We have expertise across multiple industries including technology, healthcare, finance, retail, education, and manufacturing. Our diverse experience allows us to bring proven strategies while understanding the unique challenges of your specific industry.",
  },
  {
    id: "faq-4",
    question: "How do you measure the success of a marketing campaign?",
    answer:
      "We establish clear KPIs from the beginning based on your business objectives. These may include ROI, conversion rates, traffic increases, engagement metrics, lead generation, and brand awareness. We provide regular reporting with actionable insights to continuously improve performance.",
  },
  {
    id: "faq-5",
    question: "How can I get started with your services?",
    answer:
      "Getting started is easy! Simply schedule a consultation through our website or call us directly. We'll discuss your needs, develop a tailored proposal, and once approved, begin with a strategic planning session to align our approach with your business goals.",
  },
];

export const SecretLists: SecretList[] = [
  {
    id: 1,
    title: "User-Centered Approach",
    content:
      "The best UX/UI designs start with understanding the user.Through user research, journey mapping, and usability testin designers craft experiences that align with user expectations and behaviors. A design that puts users first leads to higher engagement and retention.",
  },
  {
    id: 2,
    title: "Simplicity is Key",
    content:
      "The most effective designs are often the simplest. Cluttered interfaces overwhelm users, while clean, minimalistic designs make navigation effortless. Every element should have a purpose, reducing cognitive load and guiding users seamlessly.",
  },
  {
    id: 3,
    title: "Visual Hierarchy & Consistency",
    content:
      "A well-structured UI guides users effortlessly. Strategic placement of elements, bold typography, and contrasting colors help users navigate with ease. Consistency in design—using the same styles for buttons, typography, and spacing—builds familiarity and trust.",
  },
  {
    id: 4,
    title: "Accessibility & Inclusivity",
    content:
      "A truly great UX/UI design is accessible to all users, including those with disabilities. Features like color contrast, readable fonts, voice navigation, and alternative text for images ensure an inclusive experience for everyone.",
  },
  {
    id: 5,
    title: "Micro interactions & Animation",
    content:
      "Small details make a big impact. Subtle animations, hover effects, and transitions add a touch of delight to the user experience, making interactions feel more natural and engaging.",
  },
  {
    id: 6,
    title: "Data-Driven Design",
    content:
      "Successful UX/UI isn’t based on guesswork—it’s backed by analytics, user feedback, and A/B testing. Continuous iteration ensures the design evolves to meet user needs and business goals effectively.",
  },
];

export const menuData: MenuItem[] = [
  {
    label: "Marketing & Advertising",
    items: [
      "Digital Marketing Manager",
      "Social Media Strategist",
      "Content Writer & Copywriter",
    ],
  },
  {
    label: "Business & Strategy",
    items: ["Business Consultant", "Project Manager", "Brand Strategist"],
  },
  {
    label: "Design & Development",
    items: ["UI/UX Designer", "Graphic Designer", "Web Developer"],
  },
  {
    label: "Recruitment & HR",
    items: ["Talent Acquisition Specialist", "HR Business Partner"],
  },
];
