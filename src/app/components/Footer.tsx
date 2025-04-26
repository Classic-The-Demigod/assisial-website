import Image from "next/image";
import A from "@/app/assets/images/A_white.png";
import Twitter from "@/app/assets/images/Twitter.png";
import LinkedIn from "@/app/assets/images/LinkedIn.png";
import Instagram from "@/app/assets/images/Instagram.png";
import Send from "@/app/assets/images/Send.png";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
const Footer = () => {
  return (
    <section className="p-6">
      <h1 className="md:text-5xl text-3xl font-extrabold">
        Let's{" "}
        <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
          Connect
        </span>
      </h1>

      <hr className="mt-6 border-[#0D0D0D]" />

      <div className="flex flex-col md:flex-row justify-between sm:gap-0 gap-6 mt-6 ">
        <div className="space-y-6 hidden sm:block w-full max-w-[300px]">
          <Image src={A} alt="Logo" />
          <ThemeToggle />
          <p className="md:text-xl text-[16px] font-medium">
            Helping brands grow with creative advertising, strategic marketing,
            and innovative business solutions.{" "}
          </p>

          <div className="flex items-center gap-6">
            <Link href="#">
              <Image src={Twitter} alt="icon" />
            </Link>
            <Link href="#">
              <Image src={LinkedIn} alt="icon" />
            </Link>
            <Link href="#">
              <Image src={Instagram} alt="icon" />
            </Link>
          </div>
        </div>

        <div className="space-y-6 max-w-[300px]">
          <h1 className="text-xl font-extrabold bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
            Navigation
          </h1>

          <div className="flex flex-col gap-6">
            <Link className="font-xl font-medium" href={"/"}>
              Home
            </Link>
            <Link className="font-xl font-medium" href={"/about"}>
              About Us
            </Link>
            <Link className="font-xl font-medium" href={"/casestudies"}>
              Case Study
            </Link>
            <Link className="font-xl font-medium" href={"/contact"}>
              Contact Us
            </Link>
            <Link className="font-xl font-medium" href={"/blog"}>
              Blog
            </Link>
            <Link className="font-xl font-medium" href={"#FAQ"}>
              FAQ
            </Link>
          </div>
        </div>
        <div className="space-y-6 max-w-[300px]">
          <h1 className="text-xl font-extrabold bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
            Contact
          </h1>

          <div className="flex flex-col gap-6">
            <p className="font-xl font-medium">+234 80457856</p>
            <p className="font-xl font-medium">www.theassisials.com</p>
            <p className="font-xl font-medium">theassisials@gmail.com</p>
            <p className="font-xl font-medium">Address</p>
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-xl font-extrabold bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
            Get the latest Information
          </h1>

          <div className="flex">
            <input
              type="email"
              name=""
              id=""
              placeholder="Email Address"
              className="border-3 p-3 rounded-l-2xl border-[#0D0D0D47]/28 md:min-w-[330px] focus:ring-0 focus:outline-[#160F92] placeholder:text-[#0D0D0D] font-primary text-lg font-medium"
            />

            <button className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] p-3 rounded-r-2xl flex items-center justify-center">
              <Image src={Send} alt="icon" />
            </button>
          </div>

          <div className="space-y-6 w-full sm:hidden block max-w-[300px]">
            <Image src={A} alt="Logo" />

            <p className="md:text-xl text-[16px] font-medium">
              Helping brands grow with creative advertising, strategic
              marketing, and innovative business solutions.{" "}
            </p>

            <div className="flex items-center gap-6">
              <Link href="#">
                <Image src={Twitter} alt="icon" />
              </Link>
              <Link href="#">
                <Image src={LinkedIn} alt="icon" />
              </Link>
              <Link href="#">
                <Image src={Instagram} alt="icon" />
              </Link>
            </div>
          </div>

          <hr className="mt-6 border-[#0D0D0D] sm:hidden block" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
