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

export const services: Service[] = [
  {
    id: 1,
    title: "Public Relations",
    description:
      "Our Public Relations strategies help your brand craft the right message, foster strong relationships, and m...",
    icon: userOctagon,
  },
  {
    id: 2,
    title: "Digital Marketing",
    description:
      "Strategic marketing solutions that boost visibility, engage audiences, and drive real results for your brand",
    icon: globalRefresh,
  },
  {
    id: 3,
    title: "Advertising",
    description:
      "Our targeted advertising strategies ensure your brand gets in front of the right audience at the right time...",
    icon: routeSquare,
  },
  {
    id: 4,
    title: "Business Consulting",
    description:
      "Our business consulting services provide expert guidance to help you streamline operations, optimize...",
    icon: briefcase,
  },
  {
    id: 5,
    title: "Recruitment",
    description:
      "We connect businesses with top talent through strategic recruitment solutions, ensuring th...",
    icon: people,
  },
  {
    id: 6,
    title: "Project Management",
    description:
      "Effortlessly manage projects, improve team collaboration, and s...",
    icon: emptyWallet,
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
