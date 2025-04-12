"use client"
import Image from "next/image";
import star from "@/app/assets/icons/star.svg";
import Facebook from "@/app/assets/images/facebook-white.png";
import X from "@/app/assets/images/X.png";
import LinkedIn from "@/app/assets/images/Li.png";
import Map from "@/app/assets/images/map.png";
import { useState } from "react";


const ContactUS = () => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <section>
      <section>
        <main className="md:py-30 py-20">
          <h1 className="md:text-5xl text-3xl font-extrabold text-center">
            Contact Us
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
              CONTACT US
            </h1>
            <h1 className="md:text-4xl text-3xl font-extrabold">
              Let's Talk For{" "}
              <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                Your Next Project
              </span>
            </h1>
          </div>

          <main className="my-20 md:mx-8 md:space-y-[16rem] space-y-[4rem]">
            <div className=" flex md:flex-row flex-col-reverse gap-4">
              <form action="" className="space-y-6">
                <div className="flex md:flex-row flex-col gap-4">
                  <div className="flex flex-col gap-3">
                    <label htmlFor="" className="text-xl font-medium">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      placeholder="Ex. Emmanuel"
                      className="w-full md:min-w-[400px] border-3 border-[#9B9B9B] rounded-2xl px-4 py-5"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label htmlFor="" className="text-xl font-medium">
                      Email*
                    </label>
                    <input
                      type="email"
                      placeholder="example@gmail.com"
                      className="w-full border-3 md:min-w-[400px] border-[#9B9B9B] rounded-2xl px-4 py-5"
                    />
                  </div>
                </div>
                <div className="flex md:flex-row flex-col gap-4">
                  <div className="flex flex-col gap-3">
                    <label htmlFor="" className="text-xl font-medium">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter Phone Number"
                      className="w-full md:min-w-[400px] border-3 border-[#9B9B9B] rounded-2xl px-4 py-5"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label htmlFor="" className="text-xl font-medium">
                      I'm interested in*
                    </label>
                    <select
                    
                      onChange={(e) => setSelectedValue(e.target.value)}
                      name=""
                      id=""
                      defaultValue="Select"
                      className="w-full md:min-w-[400px] border-3 border-[#9B9B9B] rounded-2xl px-4 py-5 appearance-none"
                    >
                      <option value="" disabled hidden>
                        Select
                      </option>
                    </select>
                  </div>
                </div>

                <textarea
                  name=""
                  id=""
                  placeholder="Enter here..."
                  className="w-full border-3 border-[#9B9B9B] rounded-2xl px-4 py-5 appearance-none h-[400px]"
                ></textarea>

                <button className="p-3 text-white bg-gradient-to-r from-[#160F92] to-[#AF47AA] rounded-4xl font-bold">
                  Send Message
                </button>
              </form>

              <div className="flex flex-col">
                <div className="px-4 py-2 space-y-6 border-[#0D0D0D]/45 border rounded-t-3xl ">
                  <div className="space-y-4">
                    <p className="text-3xl font-extrabold">
                      <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                        Address
                      </span>
                    </p>

                    <p className="text-xl">
                      123 Adeola Odeku Street, Victoria Island, Lagos, Nigeria.
                    </p>
                  </div>
                  <div className="space-y-4"></div>
                  <p className="text-3xl font-extrabold">
                    <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                      Contact
                    </span>
                  </p>

                  <p className="text-xl">Phone: 09035874412</p>
                  <p className="text-xl">Email: theassisials@gmail.com</p>
                </div>

                <div className="bg-gradient-to-br space-y-4 p-4 from-[#160F92] to-[#AF47AA] rounded-b-3xl">
                  <h1 className="text-white text-3xl font-extrabold ">
                    Stay Connected
                  </h1>

                  <div className="flex gap-4 items-center justify-center">
                    <button>
                      <Image src={Facebook} alt="socials" />
                    </button>
                    <button>
                      <Image src={X} alt="socials" />
                    </button>
                    <button>
                      <Image src={LinkedIn} alt="socials" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <Image src={Map} alt="map" />
          </main>
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
};

export default ContactUS;
