import Image from "next/image";
import star from "@/app/assets/icons/star.svg";
import Image1 from "@/app/assets/images/blog-image1.png";
import Image2 from "@/app/assets/images/blog-image2.png";
import Image3 from "@/app/assets/images/blog-image3.png";
import ButtonSecondary from "../components/ui/buttonSecondary";

const Blog = () => {
  return (
    <section>
      <section>
        <main className="md:py-30 py-20">
          <h1 className="md:text-5xl text-3xl font-extrabold text-center">
            Blogs
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
        <main className="mx-5 my-16">
          <div className="text-center space-y-4">
            <h1 className="md:text-8xl text-3xl font-extrabold text-[#7B7B7B73]">
              BLOGS/NEWS
            </h1>
            <h1 className="md:text-4xl text-3xl font-extrabold">
              Check Out Our{" "}
              <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                Blog Posts and News Articles
              </span>
            </h1>
          </div>

          <div className="my-8">
            <h1 className="md:text-4xl text-3xl font-extrabold">Blogs</h1>
            <div className="my-8 flex md:flex-row flex-col items-center gap-4">
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
          </div>
          <div className="my-8">
            <h1 className="md:text-4xl text-3xl font-extrabold">
              News & Articles
            </h1>
            <div className="my-8 flex md:flex-row flex-col items-center gap-4">
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
            </div>
          </div>
        </main>
      </section>
    </section>
  );
};

export default Blog;
