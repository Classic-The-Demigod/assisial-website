"use client";
import Image from "next/image";
import star from "@/app/assets/icons/star.svg";
import rightArrow from "@/app/assets/icons/Right Arrow.svg";
import { services } from "../utils";
import ButtonSecondary from "../components/ui/buttonSecondary";
import stackDesktop from "@/app/assets/images/stacked-desktop.png";
import stackMobile from "@/app/assets/images/stacked-mobile.png";
import { useRouter } from "next/navigation";
import TestimonialCarousel from "../components/TestimonialCarousel";
const Services = () => {
  const router = useRouter();
  return (
    <section>
      <section>
        <main className="md:py-30 py-20">
          <h1 className="md:text-5xl text-3xl font-extrabold text-center">
            Services
          </h1>
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

      <section>
        <main className="md:py-30 py-20 px-5 md:px-10">
          <div className=" space-y-4">
            <h1 className="md:text-8xl text-center text-3xl font-extrabold text-[#7B7B7B73]">
              SERVICES
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

                    <button
                      onClick={() => router.push(`services/${service.id}`)}
                      className="text-lg flex items-center gap-4 font-medium"
                    >
                      Learn More
                      <Image src={rightArrow} alt="arrow" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </section>

      <section>
        <main>
          <TestimonialCarousel />
        </main>
      </section>

      <section>
        <main className="my-20">
          <div className="text-center space-y-4">
            <h1 className="md:text-4xl text-3xl font-extrabold">
              Let's bring your <br />
              <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                Vision to life
              </span>
            </h1>

            <ButtonSecondary>Contact Us</ButtonSecondary>
          </div>
          <div>
            <Image src={stackDesktop} alt="stack" className="hidden sm:block" />
            <Image src={stackMobile} alt="stack" className="block sm:hidden" />
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
          </div>
        </main>
      </section>
    </section>
  );
};

export default Services;
