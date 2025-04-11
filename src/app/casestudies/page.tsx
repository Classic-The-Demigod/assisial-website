import Image from "next/image";
import star from "@/app/assets/icons/star.svg";
import ButtonSecondary from "../components/ui/buttonSecondary";
import arrowCircle from "@/app/assets/icons/arrow-circle.svg";
import stackDesktop from "@/app/assets/images/stacked-desktop.png";
import stackMobile from "@/app/assets/images/stacked-mobile.png";

const CaseStudies = () => {
  return (
    <section>
      <section>
        <main className="md:py-30 py-20">
          <h1 className="md:text-5xl text-3xl font-extrabold text-center">
            Case Studies
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
        <main className="px-4 py-16">
          <div className="text-center space-y-4">
            <h1 className="md:text-8xl text-3xl font-extrabold text-[#7B7B7B73]">
              CASE STUDIES
            </h1>
            <h1 className="md:text-5xl text-2xl font-extrabold">
              Let's have a look at <br />
              <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                Our Case Studies
              </span>
            </h1>
          </div>

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

          <div className="flex justify-center items-center mt-8">
            <button className="p-3 text-white bg-gradient-to-r min-w-[180px] from-[#160F92] to-[#AF47AA] rounded-4xl font-bold">
              Load More
            </button>
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

export default CaseStudies;
