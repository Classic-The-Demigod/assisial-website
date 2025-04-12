import Image from "next/image";
import star from "@/app/assets/icons/star.svg";
import David from "@/app/assets/images/Ellipse 20.png";
import Twitter from "@/app/assets/images/Twitter.png";
import LinkedIn from "@/app/assets/images/LinkedIn.png";
import Instagram from "@/app/assets/images/Instagram.png";
import Image1 from "@/app/assets/images/blog-image1.png";
import Image2 from "@/app/assets/images/blog-image2.png";
import Image3 from "@/app/assets/images/blog-image3.png";

import Link from "next/link";
import { SecretLists } from "@/app/utils";

import Secret from "@/app/components/ui/Secret";
import ButtonSecondary from "@/app/components/ui/buttonSecondary";

const BlogDetails = () => {
  return (
    <section>
      <section>
        <main className="md:py-30 py-20">
          <h1 className="md:text-5xl text-3xl font-extrabold text-center">
            Blog Details
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
          <div className="w-full min-h-[400px] md:min-h-[800px] bg-black rounded-3xl"></div>
          <div className="my-8 space-y-8 md:px-8">
            <div className="flex item-center justify-center text-center">
              <h1 className="md:text-3xl text-xl font-extrabold md:w-1/2 w-full">
                Unraveling Design: The Secret Behind UX/UI
              </h1>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Image src={David} alt="Creator's Image" />

              <div className="flex items-center flex-col gap-1">
                <h1 className="text-xl font-medium">
                  Written by{" "}
                  <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                    David Ojo
                  </span>
                </h1>

                <p className="text-[#9B9B9B]">26 March 2025 l 16 mins Read</p>
              </div>
            </div>
            <p className="font-medium md:text-3xl text-xl">
              In today’s digital world, a product’s success isn’t just about
              functionality—it’s about experience. Every swipe, click, and
              interaction shapes how users feel about a brand. This is where UX
              (User Experience) and UI (User Interface) design come into play,
              blending creativity and strategy to craft seamless, engaging
              digital experiences. But what’s the secret behind great UX/UI
              design? Let’s unravel the mystery.
            </p>
          </div>

          <h1 className="md:text-3xl text-xl font-extrabold">
            Understanding UX & UI: The Core of Digital Success
          </h1>

          <div className="my-8 flex md:flex-row flex-col gap-6">
            <div className="flex md:flex-col flex-row items-center gap-6">
              <p className="font-medium text-[#9B9B9B]">SHARE</p>

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

            <div className="space-y-6">
              <p className="font-medium md:text-2xl text-xl">
                At its core, UX design is about how a product feels, while UI
                design is about how it looks. Together, they form a powerful
                combination that determines how users interact with a website,
                app, or digital product.
              </p>

              <ul className="text-[#9B9B9B] md:text-2xl text-xl space-y-6 square-marker px-6">
                <li>
                  User Experience (UX): Focuses on the entire journey of a user,
                  from ease of navigation to usability and accessibility. It
                  ensures a product is intuitive and solves a real problem.
                </li>
                <li>
                  User Interface (UI): Involves the visual aspects—colors,
                  typography, buttons, and layout—that enhance engagement and
                  guide users seamlessly through the interface.
                </li>
              </ul>
            </div>
          </div>

          <div className="md:px-10 space-y-6">
            <h1 className="md:text-3xl text-xl font-extrabold">
              The Secret Behind Exceptional UX/UI Design
            </h1>

            {SecretLists.map((secret, i) => (
              <div className="font-medium text-xl " key={i}>
                <Secret
                  id={secret.id}
                  title={secret.title}
                  content={secret.content}
                />
              </div>
            ))}

            <h1 className="md:text-3xl text-xl font-extrabold">
              Why UX/UI Design Matters More Than Ever
            </h1>

            <p className="font-medium md:text-2xl text-xl">
              In today’s competitive market, businesses that prioritize UX/UI
              design outperform those that don’t. A well-designed digital
              experience:
            </p>

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

            <h1 className="md:text-3xl text-xl font-extrabold">
              Final Thoughts: Design with Purpose
            </h1>

            <p className="font-medium md:text-2xl text-xl">
              Great UX/UI design isn’t just about aesthetics—it’s about
              problem-solving, efficiency, and creating a delightful user
              journey. By focusing on user needs, simplicity, and accessibility,
              businesses can turn visitors into loyal customers and create
              memorable digital experiences.
            </p>
            <p className="font-bold md:text-2xl text-xl">
              Ready to take your UX/UI design to the next level? Let’s craft
              experiences that truly matter!
            </p>
          </div>
        </main>
      </section>

      <section>
        <main className="md:px-10 mb-10 px-5">
          <div className="text-center space-y-4">
            <h1 className="md:text-7xl text-3xl font-extrabold text-[#7B7B7B73]">
              RELATED BLOGS
            </h1>
            <h1 className="md:text-4xl text-3xl font-extrabold">
              Related{" "}
              <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
          </div>
        </main>
        <div className="my-8 mx-4 flex md:flex-row flex-col items-center gap-2">
          <div className="flex flex-col gap-4 px-4 py-6 border-3 border-[#0D0D0D]/28 rounded-3xl">
            <Image src={Image1} alt="blog-img" />

            <div className="flex items-center gap-2">
              <ButtonSecondary>Mobile App</ButtonSecondary>
              <button className="p-3 text-white bg-gradient-to-r min-w-[180px] from-[#160F92] to-[#AF47AA] rounded-4xl font-bold">
                19th March, 2025
              </button>
            </div>
            <h1 className="text-2xl font-extrabold">
              Unraveling Design: The Secret Behind UX/UI
            </h1>
            <p className="text-[#9B9B9B]">
              In today’s digital world, a product’s success isn’t just about
              looks—it’s about experience. UX (User Experience) and UI (User
              Interface)...
            </p>
          </div>
          <div className="flex flex-col gap-4 px-4 py-6 border-3 border-[#0D0D0D]/28 rounded-3xl">
            <Image src={Image2} alt="blog-img" />

            <div className="flex items-center gap-2">
              <ButtonSecondary>Mobile App</ButtonSecondary>
              <button className="p-3 text-white bg-gradient-to-r min-w-[180px] from-[#160F92] to-[#AF47AA] rounded-4xl font-bold">
                19th March, 2025
              </button>
            </div>
            <h1 className="text-2xl font-extrabold">
              Unraveling Design: The Secret Behind UX/UI
            </h1>
            <p className="text-[#9B9B9B]">
              In today’s digital world, a product’s success isn’t just about
              looks—it’s about experience. UX (User Experience) and UI (User
              Interface)...
            </p>
          </div>
          <div className="flex flex-col gap-4 px-4 py-6 border-3 border-[#0D0D0D]/28 rounded-3xl">
            <Image src={Image3} alt="blog-img" />

            <div className="flex items-center gap-2">
              <ButtonSecondary>Mobile App</ButtonSecondary>
              <button className="p-3 text-white bg-gradient-to-r min-w-[180px] from-[#160F92] to-[#AF47AA] rounded-4xl font-bold">
                19th March, 2025
              </button>
            </div>
            <h1 className="text-2xl font-extrabold">
              Unraveling Design: The Secret Behind UX/UI
            </h1>
            <p className="text-[#9B9B9B]">
              In today’s digital world, a product’s success isn’t just about
              looks—it’s about experience. UX (User Experience) and UI (User
              Interface)...
            </p>
          </div>
        </div>
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

export default BlogDetails;
