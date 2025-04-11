import Image from "next/image";
import star from "@/app/assets/icons/star.svg";
import vision from "@/app/assets/images/vision.png";
import mission from "@/app/assets/images/mission.png";
import checkbox from "@/app/assets/images/Checkbox.png";
import team from "@/app/assets/images/team.png";
import David from "@/app/assets/images/Rectangle 25.png";
import Michael from "@/app/assets/images/Rectangle 26.png";
import Rachel from "@/app/assets/images/Rectangle 27.png";
import Cynthia from "@/app/assets/images/Rectangle 28.png";
import stackDesktop from "@/app/assets/images/stacked-desktop.png";
import stackMobile from "@/app/assets/images/stacked-mobile.png";
import ButtonSecondary from "../components/ui/buttonSecondary";

const About = () => {
  return (
    <section>
      <section>
        <main className="md:py-30 py-20">
          <h1 className="md:text-5xl text-3xl font-extrabold text-center">
            About Us
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
          <div className="w-full min-h-[400px] md:min-h-[600px] bg-black rounded-3xl"></div>

          <div className="flex md:flex-row flex-col gap-5 items-center justify-between mt-10">
            <div className="p-6 border-3 border-[#0D0D0D47] flex flex-col gap-5 rounded-3xl">
              <Image src={vision} alt="icon" />
              <h1 className="text-3xl font-extrabold">Our Vision</h1>
              <p className=" text-lg font-medium">
                To be the leading marketing, advertising, and business solutions
                agency, empowering brands with innovative strategies that drive
                growth, enhance visibility, and create lasting impact in the
                digital and corporate landscape.
              </p>
            </div>
            <div className="p-6 border-3 border-[#0D0D0D47] flex flex-col gap-5 rounded-3xl">
              <Image src={mission} alt="icon" />
              <h1 className="text-3xl font-extrabold">Our Mission</h1>
              <p className=" text-lg font-medium">
                Our mission is to empower businesses with innovative marketing,
                advertising, and consulting services that elevate brands, drive
                growth, and ensure long-term success through tailored,
                data-driven solutions and collaborative strategies.
              </p>
            </div>
          </div>
        </main>
      </section>

      <section>
        <main className="px-4 py-16">
          <div className="text-center space-y-4">
            <h1 className="md:text-8xl text-3xl font-extrabold text-[#7B7B7B73]">
              ABOUT US
            </h1>
            <h1 className="md:text-5xl text-3xl font-extrabold">
              Who are{" "}
              <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                The Assisials?
              </span>
            </h1>
          </div>

          <div className="flex md:flex-row flex-col gap-5 items-center justify-between mt-10">
            <div className="md:w-1/2 w-full min-h-[500px] md:min-h-[700px] bg-black rounded-3xl"></div>

            <div className="md:w-1/2 flex flex-col gap-5">
              <h1 className=" text-3xl font-extrabold">
                Company{" "}
                <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                  Background
                </span>
              </h1>

              <p className="text-lg font-medium">
                The Assisials was founded with a vision to revolutionize the
                marketing, advertising, and business consulting industry by
                providing strategic, data-driven, and results-oriented
                solutions. Our journey began with a simple yet powerful idea: to
                help businesses not only survive but thrive in an ever-evolving
                digital and corporate landscape.
              </p>
              <h1 className=" text-3xl font-extrabold">
                How It{" "}
                <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                  All Started
                </span>
              </h1>

              <p className="text-lg font-medium">
                The Assisials was established by a team of passionate marketing,
                advertising, and business professionals who recognized a growing
                need for holistic brand-building, digital transformation, and
                strategic business solutions. With years of experience in
                various industries, they noticed that many businesses especially
                startups, SMEs, and growing enterprises struggled with:
                {/*      */}
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Image src={checkbox} alt="icon" />
                  <p className="text-base font-medium text-[#9B9B9B]">
                    Ineffective marketing strategies that didn’t translate into
                    tangible results.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={checkbox} alt="icon" />
                  <p className="text-base font-medium text-[#9B9B9B]">
                    Brand positioning challenges in an increasingly competitive
                    market.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={checkbox} alt="icon" />
                  <p className="text-base font-medium text-[#9B9B9B]">
                    Talent acquisition and management gaps that hindered
                    business growth.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={checkbox} alt="icon" />
                  <p className="text-base font-medium text-[#9B9B9B]">
                    Lack of structured business strategies to scale efficiently.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={checkbox} alt="icon" />
                  <p className="text-base font-medium text-[#9B9B9B]">
                    Poor digital presence and low engagement despite investments
                    in advertising.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>

      <section>
        <main className="px-4 py-16">
          <div className="text-center space-y-4">
            <h1 className="md:text-8xl text-3xl font-extrabold text-[#7B7B7B73]">
              Our Team
            </h1>
            <h1 className="md:text-4xl text-3xl font-extrabold">
              Meet the Team At{" "}
              <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                The Assisials?
              </span>
            </h1>
          </div>

          <Image src={team} alt="team" className="mt-10 hidden md:block" />

          <div className="flex flex-col gap-5 md:hidden items-center justify-center mt-10">
            <div className="flex flex-col min-w-[366px]">
              <Image src={David} alt="David" />

              <div className="p-5 space-y-4 border border-[#0D0D0D73] rounded-b-2xl">
                <h1 className="md:text-4xl text-3xl font-extrabold">
                  <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                    David
                  </span>
                </h1>
                <p className="text-3xl font-semibold">CEO</p>
              </div>
            </div>
            <div className="flex flex-col min-w-[366px]">
              <Image src={Michael} alt="David" className="w-full" />

              <div className="p-5 space-y-4 border border-[#0D0D0D73] rounded-b-2xl">
                <h1 className="md:text-4xl text-3xl font-extrabold">
                  <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                    Michael. K
                  </span>
                </h1>
                <p className="text-3xl font-semibold">Chief of Operations</p>
              </div>
            </div>
            <div className="flex flex-col min-w-[366px]">
              <Image src={Rachel} alt="David" className="w-full" />

              <div className="p-5 space-y-4 border border-[#0D0D0D73] rounded-b-2xl">
                <h1 className="md:text-4xl text-3xl font-extrabold">
                  <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                    Racheal. B
                  </span>
                </h1>
                <p className="text-3xl font-semibold">Marketing Executive</p>
              </div>
            </div>
            <div className="flex flex-col min-w-[366px]">
              <Image src={Cynthia} alt="David" className="w-full" />

              <div className="p-5 space-y-4 border border-[#0D0D0D73] rounded-b-2xl">
                <h1 className="md:text-4xl text-3xl font-extrabold">
                  <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                    Cynthia. G
                  </span>
                </h1>
                <p className="text-3xl font-semibold">
                  Human Resources Management (HR)
                </p>
              </div>
            </div>
          </div>
        </main>
      </section>

      <section>
        <main className="px-4 py-16">
          <div className="text-center space-y-4">
            <h1 className="md:text-4xl text-3xl font-extrabold">
              Let's bring your <br />
              <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                Vision to life
              </span>
            </h1>

            <ButtonSecondary>Contact Us</ButtonSecondary>
          </div>
        </main>
<div className="mb-20">

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
      </section>
    </section>
  );
};

export default About;
