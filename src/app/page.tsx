import Link from "next/link";
import Nav from "./components/Nav";
import arrow from "@/app/assets/images/arrow.png";
import Mozilla from "@/app/assets/images/Mozilla.png";
import Uber from "@/app/assets/images/Uber.png";
import Google from "@/app/assets/images/Google.png";
import Alpaca from "@/app/assets/images/Alpaca.png";
import Asana from "@/app/assets/images/Asana.png";
import Paypal from "@/app/assets/images/PayPal.png";
import logoFrame from "@/app/assets/images/logo_frame.png";
import message from "@/app/assets/images/message-icon.png";
import rightArrow from "@/app/assets/icons/Right Arrow.svg";
import arrowCircle from "@/app/assets/icons/arrow-circle.svg";
import star from "@/app/assets/icons/star.svg";
import Image from "next/image";
import ButtonSecondary from "./components/ui/buttonSecondary";
import { faqData, services } from "./utils";
import TestimonialCarousel from "./components/TestimonialCarousel";
import ResponsiveSlider from "./components/ResponsiveSlider";
import FAQs from "./components/FAQs";
export default function Home() {
  return (
    <section>
      {/* Hero Section */}
      <main className=" hero px-4 pb-10">
        <div className="">
          <Nav />
        </div>

        <div className="mt-8 flex flex-col gap-6 items-center justify-center text-center">
          <h1 className="md:text-8xl text-3xl font-bold">
            Raising and Improving Brands Making Connections.
          </h1>
          <p className="md:text-xl text-sm font-semibold md:w-4/5">
            We craft data-driven strategies that boost visibility, engage
            audiences, and turn prospects into loyal customers. Let’s grow your
            brand with impact.
          </p>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-3 py-2 text-white bg-gradient-to-r from-[#160F92] to-[#AF47AA] rounded-4xl">
              <Link href="/" className="text-[16px] font-bold">
                Get Started
              </Link>
              <span>
                <Image src={arrow} alt="icon" />
              </span>
            </button>
            <ButtonSecondary>Contact Us</ButtonSecondary>
          </div>
          <div className="flex items-center gap-2">
            <hr className="w-10 border" />
            <p className=" font-bold font-primary">TRUSTED BY AMAZING BRANDS</p>
            <hr className="w-10 border" />
          </div>
        </div>
        <div className="flex items-center md:justify-between mt-8 gap-6 flex-wrap justify-center">
          <Image src={Mozilla} alt="mozilla" />
          <Image src={Uber} alt="uber" />
          <Image src={Google} alt="google" />
          <Image src={Alpaca} alt="alpaca" />
          <Image src={Asana} alt="asana" />
          <Image src={Paypal} alt="paypal" />
        </div>
      </main>

      {/* About Section */}
      <section>
        <main className="px-4 py-16">
          <h1 className="md:text-8xl text-3xl font-extrabold text-[#7B7B7B73]">
            ABOUT US
          </h1>

          <div className="flex sm:flex-row flex-col items-center gap-4 mt-8">
            <div className="space-y-4">
              <h1 className="md:text-5xl text-3xl font-extrabold">
                Who are{" "}
                <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                  theassisials
                </span>
              </h1>
              <p className="md:text-xl text-sm text-[#9B9B9B] font-semibold">
                At theassisials, we specialize in elevating brands through
                innovative digital marketing. Our mission is to connect
                businesses with their audiences through data-driven strategies,
                compelling storytelling, and impactful campaigns. Whether it's
                brand growth, audience engagement, or conversion optimization,
                we create solutions that drive real results. <br /> <br /> Let’s
                take your brand to the next level—because success starts with
                the right connections.
              </p>

              <button className="px-6 py-3 text-white bg-gradient-to-r from-[#160F92] to-[#AF47AA] rounded-4xl">
                Read more
              </button>
            </div>

            <Image
              className="object-contain w-full max-w-[510px]"
              src={logoFrame}
              alt="frame"
            />
          </div>
        </main>
      </section>

      {/* Services Section */}
      <section>
        <main className="px-4 py-16">
          <h1 className="md:text-8xl text-3xl font-extrabold text-[#7B7B7B73]">
            SERVICES
          </h1>

          <div className="sm:flex justify-between hidden">
            <h1 className="md:text-5xl text-3xl font-extrabold ">
              <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                Services
              </span>
            </h1>

            <button className="p-3  text-white bg-gradient-to-r from-[#160F92] to-[#AF47AA] rounded-4xl">
              View All Services
            </button>
          </div>

          <h1 className="md:text-5xl text-3xl font-extrabold mt-10 sm:hidden">
            <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
              Services
            </span>
            We Provide
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {services.map((service) => (
              <div className="flex" key={service.id}>
                <div className="min-w-5 h-20 bg-[#813798] mt-8 rounded-l-full"></div>

                <div className="flex flex-col justify-between gap-6 h-full rounded-3xl border-3 p-6 border-[#0D0D0D47] overflow-hidden">
                  <div className="bg-[#0D0D0D1A] p-4 rounded-full w-20 h-20 flex items-center justify-center">
                    <Image src={service.icon} alt={service.title} />
                  </div>

                  <h3 className="font-semibold text-4xl">{service.title}</h3>
                  <p className="font-medium text-lg">{service.description}</p>

                  <div className="flex items-center gap-4">
                    <button className="text-lg font-medium">Learn More</button>
                    <Image src={rightArrow} alt="arrow" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center sm:hidden mt-8">
            <button className="p-3 text-white bg-gradient-to-r from-[#160F92] to-[#AF47AA] rounded-4xl">
              View All Services
            </button>
          </div>
        </main>
      </section>

      {/* Case Study Section */}
      <section>
        <main className="px-4 py-16">
          <h1 className="md:text-8xl text-3xl font-extrabold text-[#7B7B7B73]">
            CASE STUDIES
          </h1>

          <div className="sm:flex justify-between hidden">
            <h1 className="md:text-5xl text-3xl font-extrabold ">
              Our
              <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                Case Studies
              </span>
            </h1>

            <button className="p-3  text-white bg-gradient-to-r from-[#160F92] to-[#AF47AA] rounded-4xl">
              View All Projects
            </button>
          </div>

          <h1 className="md:text-5xl text-3xl font-extrabold mt-10 sm:hidden">
            We Let's a <br /> Look at Our <br />
            <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
              Case Studies
            </span>
          </h1>

          <div className="border-3 border-[#0D0D0D47] items-center flex md:flex-row flex-col p-4 rounded-3xl mt-8 gap-6">
            <div className="w-full max-w-[601px] h-[500px] bg-[#0D0D0D] rounded-xl"></div>
            <div className="md:w-1/2 flex flex-col h-full md:gap-6 gap-4">
              <div className="flex md:flex-row flex-col md:items-center items-start gap-4">
                <ButtonSecondary>UI/UX</ButtonSecondary>
                <ButtonSecondary>Mobile App</ButtonSecondary>
                <ButtonSecondary>Prototyping</ButtonSecondary>
              </div>

              <h1 className="md:text-5xl  text-3xl font-semibold">
                Breeze Mobile App- E-Commerce Mobile App Solution
              </h1>

              <p className="md:text-xl text-lg font-medium text-[#9B9B9B]">
                Our team developed Breeze a cutting-edge mobile application
                designed to enhance user experience and drive engagement. From
                intuitive UI/UX design to seamless functionality, we crafted a
                solution that meets user needs while aligning with business
                goals.
              </p>

              <button>
                <Image src={arrowCircle} alt="arrow" />
              </button>
            </div>
          </div>
          <div className="border-3 border-[#0D0D0D47] items-center flex md:flex-row-reverse flex-col p-4 rounded-3xl mt-8 gap-6">
            <div className="w-full max-w-[601px] h-[500px] bg-[#0D0D0D] rounded-xl"></div>
            <div className="md:w-1/2 flex flex-col h-full md:gap-6 gap-4">
              <div className="flex md:flex-row flex-col md:items-center items-start gap-4">
                <ButtonSecondary>UI/UX</ButtonSecondary>
                <ButtonSecondary>Mobile App</ButtonSecondary>
                <ButtonSecondary>Prototyping</ButtonSecondary>
              </div>

              <h1 className="md:text-5xl  text-3xl font-semibold">
                Breeze Mobile App- E-Commerce Mobile App Solution
              </h1>

              <p className="md:text-xl text-lg font-medium text-[#9B9B9B]">
                Our team developed Breeze a cutting-edge mobile application
                designed to enhance user experience and drive engagement. From
                intuitive UI/UX design to seamless functionality, we crafted a
                solution that meets user needs while aligning with business
                goals.
              </p>

              <button>
                <Image src={arrowCircle} alt="arrow" />
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center sm:hidden mt-8">
            <button className="p-3 text-white bg-gradient-to-r from-[#160F92] to-[#AF47AA] rounded-4xl">
              View All Projects
            </button>
          </div>
        </main>

        <div className="md:p-10 p-7  bg-gradient-to-r from-[#160F92] to-[#AF47AA] flex justify-between overflow-hidden">
          <div className="flex items-center gap-2 w-full">
            <Image src={star} alt="star" />
            <h1 className="text-white md:text-3xl text-lg font-extrabold">
              Talent Management
            </h1>
          </div>
          <div className=" items-center gap-2 hidden sm:flex w-full">
            <Image src={star} alt="star" />
            <h1 className="text-white md:text-3xl text-lg font-extrabold ">
              Product Management
            </h1>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}

      <section>
        <main className=" py-16">
          <h1 className="md:text-8xl text-3xl font-extrabold text-[#7B7B7B73]">
            CLIENTS TESTIMONIALS
          </h1>
          {/* <TestimonialCarousel /> */}
        </main>
      </section>

      {/* Blog Section */}
      <section>
        <main className="px-4 py-16">
          <h1 className="md:text-8xl text-3xl font-extrabold text-[#7B7B7B73]">
            News & Blogs
          </h1>

          <div className="sm:flex justify-between">
            <h1 className="md:text-5xl text-3xl font-extrabold ">
              Insights From{" "}
              <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                Our Blog
              </span>
            </h1>

            <button className="hidden md:block p-3  text-white bg-gradient-to-r from-[#160F92] to-[#AF47AA] rounded-4xl">
              View All Blogs
            </button>
          </div>

          {/* <ResponsiveSlider /> */}
        </main>
      </section>

      {/* FAQS section */}

      <section>
        <main className="px-4 py-16">
          <h1 className="md:text-8xl text-3xl font-extrabold text-[#7B7B7B73]">
            FAQS
          </h1>

          <h1 className="md:text-5xl text-3xl font-extrabold mt-6">
            Questions?{" "}
            <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
              Look Here
            </span>
          </h1>

          <div className="my-6 flex md:flex-row items-start flex-col-reverse gap-10 md:mx-10">
            <FAQs faqs={faqData} />

            <div className="mt-8 flex flex-col item-center">
              <div className="flex flex-col items-center justify-center gap-4 text-center border-3 border-[#0D0D0D47] rounded-t-3xl  pt-3 pb-10">
                <Image src={message} alt="frame" />

                <h1 className="text-xl font-extrabold">
                  You have a different question? Ask away
                </h1>
                <p className="text-[#9B9B9B] text-lg font-semibold w-[70%]">
                  Your Questions, We Answers. Quick Response Guaranteed
                </p>

                <button className=" p-3  min-w-[150px] text-white bg-gradient-to-r from-[#160F92] to-[#AF47AA] rounded-4xl">
                  Contact Us
                </button>
              </div>

              <div className="w-full min-h-[60px] bg-gradient-to-r from-[#160F92] to-[#AF47AA] rounded-b-3xl"></div>
            </div>
          </div>
        </main>
        <div className="md:p-10 p-7  bg-gradient-to-r from-[#160F92] to-[#AF47AA] flex justify-between overflow-hidden">
          <div className="flex items-center gap-2 w-full">
            <Image src={star} alt="star" />
            <h1 className="text-white md:text-3xl text-lg font-extrabold">
              Talent Management
            </h1>
          </div>
          <div className=" items-center gap-2 hidden sm:flex w-full">
            <Image src={star} alt="star" />
            <h1 className="text-white md:text-3xl text-lg font-extrabold ">
              Product Management
            </h1>
          </div>
        </div>
      </section>
    </section>
  );
}
