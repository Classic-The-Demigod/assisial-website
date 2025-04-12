import Image from "next/image";
import star from "@/app/assets/icons/star.svg";
import Inbox from "@/app/assets/images/Inbox Empty 4 1.png";
import DropdownMenu from "../components/ui/DropdownMenu";
import { menuData } from "../utils";

const Career = () => {
  return (
    <section>
      <section>
        <main className="md:py-30 py-20">
          <h1 className="md:text-5xl text-3xl font-extrabold text-center">
            Careers
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
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <h1 className="md:text-8xl text-3xl font-extrabold text-[#7B7B7B73]">
                CAREERS
              </h1>
              <h1 className="md:text-4xl text-3xl font-extrabold">
                Unlock Your{" "}
                <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                  Potential
                </span>
              </h1>
            </div>
            <p className="text-xl">
              At The Assisials, we are more than just a marketing, advertising,
              and business consulting agency we are a team of creative thinkers,
              strategic planners, and problem-solvers dedicated to transforming
              brands and driving success. <br /> <br /> If you're passionate
              about innovation, collaboration, and making a real impact, we’d
              love to have you on board!
            </p>
            <h1 className="md:text-4xl text-3xl font-extrabold text-center">
              Why{" "}
              <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                Work With Us
              </span>
            </h1>

            <p className="space-x-2 text-xl md:text-3xl font-medium">
              <span className=" font-extrabold">✔</span>
              Boosts Conversions –{" "}
              <span className="text-[#9B9B9B]">
                A seamless, intuitive interface encourages users to take action.
              </span>
            </p>

            <p className="space-x-2 text-xl md:text-3xl font-medium">
              <span className=" font-extrabold">✔</span>
              Enhances Brand Loyalty –{" "}
              <span className="text-[#9B9B9B]">
                A positive user experience fosters trust and keeps customers
                coming back.{" "}
              </span>
            </p>
            <p className="space-x-2 text-xl md:text-3xl font-medium">
              <span className=" font-extrabold">✔</span>
              Reduces Bounce Rates –{" "}
              <span className="text-[#9B9B9B]">
                A smooth, engaging design keeps users from leaving too soon.
              </span>
            </p>
            <p className="space-x-2 text-xl md:text-3xl font-medium">
              <span className=" font-extrabold">✔</span>
              Increases Accessibility –{" "}
              <span className="text-[#9B9B9B]">
                Reaching a broader audience ensures inclusivity and better user
                satisfaction.
              </span>
            </p>
          </div>
        </main>
      </section>

      <section>
        <main className="px-4 py-16">
          <div className="flex flex-col items-center justify-center">
            <DropdownMenu menuItems={menuData} />
            <Image src={Inbox} alt="inbox-empty" />
            <h1 className="md:text-4xl text-3xl font-extrabold text-center">
              No{" "}
              <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                Job
              </span>{" "}
              At The Moment
            </h1>
          </div>
        </main>

        <div className="md:p-10 p-7 mt-20 bg-gradient-to-r from-[#160F92] to-[#AF47AA] flex justify-between overflow-hidden">
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
};

export default Career;
