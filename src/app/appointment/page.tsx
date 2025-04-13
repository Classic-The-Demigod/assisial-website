"use client";
import Image from "next/image";
import star from "@/app/assets/icons/star.svg";
import CustomSelect from "../components/ui/CustomSelect";

const Appointment = () => {
  return (
    <section>
      <section>
        <main className="md:py-30 py-20">
          <h1 className="md:text-5xl text-3xl font-extrabold text-center">
            Book Appointment
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
        <main className="md:py-30 py-20 mx-10">
          <p className="md:text-3xl text-xl text-center font-medium">
            Let’s take your business to the next level! Book a consultation with
            our experts today and discover tailored solutions to drive growth,
            boost visibility, and achieve your goals.
          </p>

          <form action="" className="md:px-6 space-y-6">
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-xl font-medium">
                Which service are you interested in?
              </label>

              <CustomSelect
                placeholder="Digital Marketing"
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-xl font-medium">
                What digital marketing strategies are you currently using?
              </label>

              <CustomSelect placeholder="SEO" className="w-full" />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-xl font-medium">
                What is your primary goal?
              </label>

              <CustomSelect placeholder="Brand Awareness" className="w-full" />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-xl font-medium">
                Are you interested in organic marketing, paid advertising, or
                both?
              </label>

              <CustomSelect placeholder="Organic" className="w-full" />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-xl font-medium">
                What services do you need?
              </label>

              <CustomSelect placeholder="Content Creation" className="w-full" />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-xl font-medium">
                What is your estimated marketing budget?
              </label>

              <CustomSelect
                placeholder="Less than ₦100,000"
                className="w-full"
              />
            </div>

            <div className="flex items-center gap-4 justify-center">
              <button className="p-3  border-3 border-[#813798] rounded-4xl font-medium min-w-[150px]">
                Schedule a Date
              </button>
              <button className="p-3  bg-[#9B9B9B] rounded-4xl font-medium min-w-[150px]">
                Book Appointment
              </button>
            </div>
          </form>
        </main>
      </section>
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
  );
};

export default Appointment;
