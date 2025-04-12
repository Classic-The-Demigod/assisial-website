"use client";
import Image from "next/image";
import star from "@/app/assets/icons/star.svg";
import play from "@/app/assets/images/play.png";
import checkbox from "@/app/assets/images/Checkbox.png";
import { useParams, useRouter } from "next/navigation";
import rightArrow from "@/app/assets/icons/Right Arrow.svg";
import stackDesktop from "@/app/assets/images/stacked-desktop.png";
import stackMobile from "@/app/assets/images/stacked-mobile.png";
import { services } from "@/app/utils";
import ButtonSecondary from "@/app/components/ui/buttonSecondary";

const Service = () => {
  const params = useParams();
  const router = useRouter();

  const serviceId = params?.id;

  const service = services.filter(
    (service) => service.id === Number(serviceId)
  );

  const { title, services: serviceList, benefits } = service[0] || {};

  console.log(title, serviceList, benefits);

  return (
    <section>
      <section>
        <main className="md:py-30 py-20">
          <h1 className="md:text-5xl text-3xl font-extrabold text-center">
            {title}
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
        <main className="md:px-10 py-20 px-5">
          <div className="w-full min-h-[400px] md:min-h-[800px] bg-[#333333] rounded-3xl flex items-center justify-center">
            <Image src={play} alt="icon" />
          </div>

          <div className="my-8 space-y-6">
            <p className="text-2xl">
              We craft impactful advertising campaigns and strategic PR
              initiatives that strengthen your brand’s reputation, engage your
              target audience, and create lasting impressions.
            </p>
            <h1 className="text-3xl font-extrabold">Service Includes</h1>
            <div className="space-y-4">
              {serviceList.map((service, i) => (
                <div className="flex items-center gap-2" key={i}>
                  <Image src={checkbox} alt="icon" className="min-w-[40px]" />
                  <p className="md:text-3xl font-medium">{service}</p>
                </div>
              ))}
            </div>
            <h1 className="text-3xl font-extrabold">Service Benefits</h1>

            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div className="flex items-center gap-2" key={i}>
                  <Image src={checkbox} alt="icon" className="min-w-[40px]" />
                  <p className="md:text-3xl font-medium text-[#9B9B9B]">
                    <span className="font-bold text-black">
                      {benefit.title}
                    </span>{" "}
                    {benefit.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex item-center justify-center">
            <button className="p-3 text-white bg-gradient-to-r from-[#160F92] to-[#AF47AA] rounded-4xl font-bold">
              Book Appointment
            </button>
          </div>
        </main>
      </section>

      <section>
        <main className="px-4 py-16">
          <div className="text-center space-y-4">
            <h1 className="md:text-8xl text-3xl font-extrabold text-[#7B7B7B73]">
              RELATED SERVICES
            </h1>
            <h1 className="md:text-4xl text-3xl font-extrabold">
              Other{" "}
              <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                Services
              </span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {services.slice(-3).map((service) => (
              <div
                className="flex flex-col justify-between gap-6 h-full rounded-3xl border-3 p-6 border-[#0D0D0D47] overflow-hidden"
                key={service.id}
              >
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
            ))}
          </div>
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

export default Service;
