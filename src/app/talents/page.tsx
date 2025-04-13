"use client";
import Image from "next/image";
import star from "@/app/assets/icons/star.svg";
import checkbox from "@/app/assets/images/Checkbox.png";
import Group from "@/app/assets/images/Group.png";
import Michael from "@/app/assets/images/Rectangle  1.png";
import Ayoola from "@/app/assets/images/Rectangle 26.png";
import Benson from "@/app/assets/images/Rectangle 29.png";
import Henry from "@/app/assets/images/Rectangle 30.png";
import Ben from "@/app/assets/images/Rectangle 31.png";
import Fiyin from "@/app/assets/images/Rectangle 32.png";
import CustomSelect from "../components/ui/CustomSelect";
import { useState } from "react";
import FileUpload from "../components/ui/FileUpload";
import ButtonSecondary from "../components/ui/buttonSecondary";
import stackDesktop from "@/app/assets/images/stacked-desktop.png";
import stackMobile from "@/app/assets/images/stacked-mobile.png";

const Talents = () => {
  const [selectedCollaboration, setSelectedCollaboration] =
    useState<string>("");

  const collaborationOptions = [
    "Marketing",
    "PR",
    "Business Strategy",
    "Co-Branding",
    "Creative Design",
    "Social Media Management",
    "Content Creation",
  ];

  const handleCollaborationChange = (option: string) => {
    setSelectedCollaboration(option);
  };

  const handleFileSelect = (file: File) => {
    console.log("Selected file:", file.name);
  };
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
        <main className="px-4 py-16 space-y-20">
          <h1 className="md:text-4xl text-center text-3xl font-extrabold">
            Wide Pool of{" "}
            <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
              Assisials Talent Network
            </span>
          </h1>

          <div className="flex items-center justify-center">
            <Image src={Group} alt="" />
          </div>

          <div className=" space-y-4 text-center">
            <h1 className="md:text-8xl text-3xl font-extrabold text-[#7B7B7B73]">
              THE ASSISIALS
            </h1>
            <h1 className="md:text-4xl text-3xl font-extrabold">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                Talents
              </span>
            </h1>
            <p className="text-xl text-center">
              Meet the creative minds and strategic experts behind our success.
              Our talented professionals bring innovation, expertise, and
              passion to every project, helping businesses thrive in today’s
              competitive landscape.
            </p>
          </div>
          <div className=" grid md:grid-cols-3 grid-cols-1 gap-5 items-center justify-center mt-10">
            <div className="flex flex-col h-full">
              <div className="aspect-square w-full">
                <Image
                  src={Michael}
                  alt="David"
                  className="w-full h-full object-cover rounded-t-3xl"
                />
              </div>

              <div className="p-5 space-y-4 border border-[#0D0D0D73] rounded-b-2xl">
                <h1 className="md:text-4xl text-3xl font-extrabold">
                  <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                    Michael B.
                  </span>
                </h1>
                <p className="text-xl font-semibold">UI/UX Designer</p>
              </div>
            </div>
            <div className="flex flex-col h-full">
              <div className="aspect-square w-full">
                <Image
                  src={Benson}
                  alt="David"
                  className="w-full h-full object-cover rounded-t-3xl"
                />
              </div>

              <div className="p-5 space-y-4 border border-[#0D0D0D73] rounded-b-2xl">
                <h1 className="md:text-4xl text-3xl font-extrabold">
                  <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                    Benson O.
                  </span>
                </h1>
                <p className="text-xl font-semibold">Project Manager</p>
              </div>
            </div>
            <div className="flex flex-col h-full">
              <div className="aspect-square w-full">
                <Image
                  src={Henry}
                  alt="David"
                  className="w-full h-full object-cover rounded-t-3xl"
                />
              </div>

              <div className="p-5 space-y-4 border border-[#0D0D0D73] rounded-b-2xl">
                <h1 className="md:text-4xl text-3xl font-extrabold">
                  <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                    Henry K.
                  </span>
                </h1>
                <p className="text-xl font-semibold">Human Resource Manager</p>
              </div>
            </div>
            <div className="flex flex-col h-full">
              <div className="aspect-square w-full">
                <Image
                  src={Ben}
                  alt="David"
                  className="w-full h-full object-cover rounded-t-3xl"
                />
              </div>

              <div className="p-5 space-y-4 border border-[#0D0D0D73] rounded-b-2xl">
                <h1 className="md:text-4xl text-3xl font-extrabold">
                  <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                    Ben F.
                  </span>
                </h1>
                <p className="text-xl font-semibold">UX Writer</p>
              </div>
            </div>
            <div className="flex flex-col h-full">
              <div className="aspect-square w-full">
                <Image
                  src={Fiyin}
                  alt="David"
                  className="w-full h-full object-cover rounded-t-3xl"
                />
              </div>

              <div className="p-5 space-y-4 border border-[#0D0D0D73] rounded-b-2xl">
                <h1 className="text-3xl font-extrabold">
                  <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                    Fiyinfoluwa A.
                  </span>
                </h1>
                <p className="text-xl font-semibold">Product Manager</p>
              </div>
            </div>
            <div className="flex flex-col h-full">
              <div className="aspect-square w-full">
                <Image
                  src={Ayoola}
                  alt="David"
                  className="w-full h-full object-cover rounded-t-3xl"
                />
              </div>

              <div className="p-5 space-y-4 border border-[#0D0D0D73] rounded-b-2xl">
                <h1 className="md:text-4xl text-3xl font-extrabold">
                  <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                    Ayoola O.
                  </span>
                </h1>
                <p className="text-xl font-semibold">Head Recruitment</p>
              </div>
            </div>
          </div>

          <div className="mt-20 space-y-6 flex flex-col items-center justify-center">
            <h1 className="md:text-4xl text-center text-3xl font-extrabold">
              <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                Assisials
              </span>
            </h1>

            <div className="flex border gap-4 p-2 rounded-full item-center justify-center">
              <button className="p-3 text-white bg-gradient-to-r from-[#160F92] to-[#AF47AA] rounded-4xl font-bold">
                Book Appointment
              </button>

              <button>Collaboration</button>
            </div>
          </div>
          <form action="" className="md:px-6 space-y-6">
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-xl font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full md:min-w-[400px] border-3 border-[#9B9B9B] rounded-2xl px-4 py-5"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-xl font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full md:min-w-[400px] border-3 border-[#9B9B9B] rounded-2xl px-4 py-5"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-xl font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full md:min-w-[400px] border-3 border-[#9B9B9B] rounded-2xl px-4 py-5"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-xl font-medium">
                Location (City & Country)
              </label>
              <input
                type="text"
                placeholder="Location (City & Country)"
                className="w-full md:min-w-[400px] border-3 border-[#9B9B9B] rounded-2xl px-4 py-5"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-xl font-medium">
                Field of Expertise
              </label>

              <CustomSelect
                placeholder="Field of Expertise"
                options={collaborationOptions}
                onChange={handleCollaborationChange}
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-xl font-medium">
                Years of Experience
              </label>
              <input
                type="text"
                placeholder="Years of Experience"
                className="w-full md:min-w-[400px] border-3 border-[#9B9B9B] rounded-2xl px-4 py-5"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-xl font-medium">
                Portfolio/Website Link (if applicable)
              </label>
              <input
                type="text"
                placeholder="Portfolio/Website Link (if applicable)"
                className="w-full md:min-w-[400px] border-3 border-[#9B9B9B] rounded-2xl px-4 py-5"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-xl font-medium">
                Upload Resume/CV
              </label>
              <FileUpload
                supportedFormats="PDF,doc"
                onFileSelect={handleFileSelect}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-xl font-medium">
                Tell Us About Yourself (Brief Bio)
              </label>
              <textarea
                name=""
                id=""
                placeholder="Tell Us About Yourself (Brief Bio)"
                className="w-full border-3 border-[#9B9B9B] rounded-2xl px-4 py-5 appearance-none h-[300px]"
              ></textarea>
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-xl font-medium">
                Why Do You Want to Work With The Assisials?
              </label>
              <textarea
                name=""
                id=""
                placeholder="Why Do You Want to Work With The Assisials?"
                className="w-full border-3 border-[#9B9B9B] rounded-2xl px-4 py-5 appearance-none h-[300px]"
              ></textarea>
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-xl font-medium">
                Availability (Full-time, Part-time, Freelance, Contract-based)
              </label>

              <CustomSelect
                placeholder="Availability (Full-time, Part-time, Freelance, Contract-based)"
                options={collaborationOptions}
                onChange={handleCollaborationChange}
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-xl font-medium">
                Preferred Project Types (Marketing, Business Consulting, PR,
                etc.)
              </label>

              <CustomSelect
                placeholder="Preferred Project Types (Marketing, Business Consulting, PR, etc.)"
                options={collaborationOptions}
                onChange={handleCollaborationChange}
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-xl font-medium">
                LinkedIn Profile (Optional)
              </label>
              <input
                type="text"
                placeholder="LinkedIn Profile (Optional)"
                className="w-full md:min-w-[400px] border-3 border-[#9B9B9B] rounded-2xl px-4 py-5"
              />
            </div>
            <div className="flex items-center justify-center">
              <button className="p-3 text-white bg-gradient-to-r from-[#160F92] to-[#AF47AA] rounded-4xl font-medium min-w-[150px]">
                Submit
              </button>
            </div>
          </form>
        </main>
      </section>

      <section>
        <main className="my-20">
          <div className="text-center space-y-4">
            <h1 className="md:text-4xl text-3xl font-extrabold">
              Apply Now or <br />
              <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
               Contact Us
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

export default Talents;
