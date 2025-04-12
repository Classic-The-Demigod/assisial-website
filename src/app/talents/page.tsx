import Image from "next/image";
import star from "@/app/assets/icons/star.svg";
import checkbox from "@/app/assets/images/Checkbox.png";

const Talents = () => {
  return (
    <section>
      <section>
        <main className="md:py-30 py-20">
          <h1 className="md:text-5xl text-3xl font-extrabold text-center">
            Our Talents
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
          <div className=" space-y-4 md:mx-10">
            <h1 className="md:text-8xl text-center text-3xl font-extrabold text-[#7B7B7B73]">
              OUR TALENTS
            </h1>
            <h1 className="md:text-4xl text-center text-3xl font-extrabold">
              Join The{" "}
              <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                Assisials Talent Network
              </span>
            </h1>
            <p className="text-xl text-center">
              Are you a passionate marketer, designer, strategist, or business
              expert looking for exciting opportunities? At The Assisials, we
              connect top talent with dynamic projects that make an impact. Join
              our growing network and be part of a team that drives business
              success!
            </p>
            <div className="my-20 space-y-8">
              <div className="flex items-center gap-2 border-3 border-[#0D0D0D]/28 p-4 rounded-3xl">
                <Image src={checkbox} alt="icon" className="min-w-[40px]" />
                <p className="md:text-xl font-extrabold">
                  Work on exciting projects with top brands
                </p>
              </div>
              <div className="flex items-center gap-2 border-3 border-[#0D0D0D]/28 p-4 rounded-3xl">
                <Image src={checkbox} alt="icon" className="min-w-[40px]" />
                <p className="md:text-xl font-extrabold">
                  Collaborate with industry experts
                </p>
              </div>
              <div className="flex items-center gap-2 border-3 border-[#0D0D0D]/28 p-4 rounded-3xl">
                <Image src={checkbox} alt="icon" className="min-w-[40px]" />
                <p className="md:text-xl font-extrabold">
                  Get flexible work opportunities that fit your schedule
                </p>
              </div>
              <div className="flex items-center gap-2 border-3 border-[#0D0D0D]/28 p-4 rounded-3xl">
                <Image src={checkbox} alt="icon" className="min-w-[40px]" />
                <p className="md:text-xl font-extrabold">
                  Grow your career with innovative experiences
                </p>
              </div>
            </div>

            <div className="flex md:flex-row flex-col items-start md:items-center justify-center gap-4">
              <p className="text-lg">
                📩 Ready to be part of our talent network?
              </p>
              <button className="p-3 text-white bg-gradient-to-r from-[#160F92] to-[#AF47AA] rounded-4xl font-medium">
                Apply Now
              </button>
            </div>
          </div>
        </main>
      </section>

      <section>
        <main className="px-4 py-16">

        <h1 className="md:text-4xl text-center text-3xl font-extrabold">
         Wide Pool of{" "}
          <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
            Assisials Talent Network
          </span>
        </h1>

        </main>
      </section>
    </section>
  );
};

export default Talents;
