import Image from "next/image";
import star from "@/app/assets/icons/star.svg";
import checkbox from "@/app/assets/images/Checkbox.png";
import Mitchell from "@/app/assets/images/Mitchell.png";
import stars from "@/app/assets/images/Stars.png";
import ButtonSecondary from "@/app/components/ui/buttonSecondary";
import arrowCircle from "@/app/assets/icons/arrow-circle.svg";
import stackDesktop from "@/app/assets/images/stacked-desktop.png";
import stackMobile from "@/app/assets/images/stacked-mobile.png";
const ProjectDetails = () => {
  return (
    <section>
      <section>
        <main className="md:py-30 py-20">
          <h1 className="md:text-5xl text-3xl font-extrabold text-center">
            Project Details
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

          <div className="my-8 flex flex-col md:flex-row gap-6">
            <div>
              <h1 className="text-3xl font-extrabold">
                <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                  Breeze Mobile App
                </span>
              </h1>

              <p className="text-2xl">
                Breeze is a fast-growing online fashion retailer, approached
                theassisial to enhance their e-commerce performance. <br />{" "}
                <br /> Despite having a visually appealing website and quality
                products, they faced challenges in converting visitors into
                customers, reducing cart abandonment, and improving brand
                recognition. <br /> <br /> Our goal was to implement a
                data-driven, multi-channel marketing strategy to drive sales,
                increase customer retention, and maximize ROI on digital
                advertising efforts.
              </p>
            </div>
            <div className="text-white bg-gradient-to-br from-[#160F92] to-[#AF47AA] space-y-10 px-6 py-4 rounded-3xl w-full ">
              <p className="text-3xl">
                Project Category: <br />
                <span className="font-bold">App UX/UI Design</span>
              </p>
              <p className="text-3xl">
                Client: <br />
                <span className="font-bold">Mitchell Davidson</span>
              </p>
              <p className="text-3xl">
                Country: <br />
                <span className="font-bold">Nigeria</span>
              </p>
            </div>
          </div>

          <div className="my-8 space-y-6">
            <h1 className="text-3xl font-extrabold">The Challenges</h1>

            <p className="text-2xl">
              Breeze faced challenges with low conversion rates, high cart
              abandonment, poor brand awareness, ineffective digital
              advertising, and a lack of customer retention strategies, leading
              to inconsistent sales and growth.
            </p>
          </div>
          <div className="my-8 space-y-6">
            <h1 className="text-3xl font-extrabold">The Solution</h1>

            <p className="text-2xl">
              To address these challenges, we developed and executed a
              comprehensive strategy focusing on:
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image src={checkbox} alt="icon" className="min-w-[40px]" />
                <p className="md:text-3xl font-medium text-[#9B9B9B]">
                  <span className="font-bold text-black">
                    Conversion Rate Optimization (CRO) –
                  </span>{" "}
                  Revamped the website for a seamless shopping experience,
                  optimized product pages, and streamlined checkout.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={checkbox} alt="icon" className="min-w-[40px]" />
                <p className="md:text-3xl font-medium text-[#9B9B9B]">
                  <span className="font-bold text-black">
                    Cart Abandonment Recovery –
                  </span>{" "}
                  Implemented personalized retargeting emails and exit-intent
                  popups to recover lost sales.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={checkbox} alt="icon" className="min-w-[40px]" />
                <p className="md:text-3xl font-medium text-[#9B9B9B]">
                  <span className="font-bold text-black">
                    Brand Awareness Campaigns –
                  </span>{" "}
                  Leveraged influencer partnerships, PR initiatives, and social
                  media engagement to boost brand recognition.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={checkbox} alt="icon" className="min-w-[40px]" />
                <p className="md:text-3xl font-medium text-[#9B9B9B]">
                  <span className="font-bold text-black">
                    Social Media & Digital Ads –
                  </span>{" "}
                  Enhanced paid ad strategies with advanced audience
                  segmentation, A/B testing, and dynamic retargeting to improve
                  ROI.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={checkbox} alt="icon" className="min-w-[40px]" />
                <p className="md:text-3xl font-medium text-[#9B9B9B]">
                  <span className="font-bold text-black">
                    Customer Retention & Loyalty Programs –
                  </span>{" "}
                  Launched a rewards program and automated email marketing to
                  foster repeat purchases.
                </p>
              </div>
            </div>
          </div>

          <div className="my-8 space-y-4">
            <div className="flex md:flex-row flex-col gap-8 items-center">
              <div className="w-full min-h-[400px] md:min-h-[600px] bg-black rounded-3xl"></div>
              <div className="w-full min-h-[400px] md:min-h-[600px] bg-black rounded-3xl"></div>
            </div>
          </div>

          <div className="my-8 space-y-6">
            <h1 className="text-3xl font-extrabold">The Impact</h1>
            <div className="space-y-8">
              <div className="flex items-center gap-2">
                <Image src={checkbox} alt="icon" className="min-w-[40px]" />
                <p className="md:text-3xl font-medium text-[#9B9B9B]">
                  <span className="font-bold text-black">
                    42% Increase in Conversion Rates –
                  </span>{" "}
                  More website visitors turned into paying customers.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={checkbox} alt="icon" className="min-w-[40px]" />
                <p className="md:text-3xl font-medium text-[#9B9B9B]">
                  <span className="font-bold text-black">
                    30% Reduction in Cart Abandonment –
                  </span>{" "}
                  Customers completed more purchases.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={checkbox} alt="icon" className="min-w-[40px]" />
                <p className="md:text-3xl font-medium text-[#9B9B9B]">
                  <span className="font-bold text-black">
                    3X Social Media Growth –
                  </span>{" "}
                  Expanded reach and engagement through influencer
                  collaborations.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={checkbox} alt="icon" className="min-w-[40px]" />
                <p className="md:text-3xl font-medium text-[#9B9B9B]">
                  <span className="font-bold text-black">
                    58% Higher ROI on Digital Ads –
                  </span>{" "}
                  Improved targeting reduced ad spend waste.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={checkbox} alt="icon" className="min-w-[40px]" />
                <p className="md:text-3xl font-medium text-[#9B9B9B]">
                  <span className="font-bold text-black">
                    35% Increase in Repeat Customers –
                  </span>{" "}
                  Strengthened brand loyalty and customer retention.
                </p>
              </div>
            </div>
          </div>

          <div className="my-8 md:px-20 px-10 py-10 border rounded-3xl space-y-8">
            <div className="flex md:justify-between md:flex-row flex-col gap-4">
              <div className="flex items-center gap-4">
                <Image src={Mitchell} alt="mitchell" />

                <div className="flex flex-col gap-2">
                  <p className="md:text-3xl text-2xl font-bold">
                    Mitchell Davison
                  </p>
                  <p className="text-sm">CEO, BREEZE</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Image src={stars} alt="stars" />
                <h1 className="font-extrabold text-xl">5.0</h1>
              </div>
            </div>

            <p className="text-xl md:text-2xl">
              “Working with theassisials was a game-changer for Breeze. Their
              team took the time to understand our challenges and implemented
              solutions that delivered real results. Our sales have skyrocketed,
              and we now have a strong digital presence that continues to grow.
              From optimizing our website to executing highly effective ad
              campaigns, they exceeded our expectations at every step. We
              couldn’t be happier!”
            </p>
          </div>
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
          <div className="text-center space-y-4">
            <h1 className="md:text-8xl text-3xl font-extrabold text-[#7B7B7B73]">
              VIEW PROJECTS
            </h1>
            <h1 className="md:text-5xl text-3xl font-extrabold">
              View{" "}
              <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
                Other Projects
              </span>
            </h1>
          </div>

          <div className="flex gap-3 md:flex-row flex-col">
            <div className="border-3 border-[#0D0D0D47] items-center flex flex-col p-2 rounded-3xl mt-8 gap-6">
              <div className="w-full h-[500px] bg-[#0D0D0D] rounded-xl"></div>
              <div className=" flex flex-col md:gap-6 gap-4">
                <div className="flex md:flex-row flex-col items-start md:items-center  gap-4">
                  <ButtonSecondary>UI/UX</ButtonSecondary>
                  <ButtonSecondary>Mobile App</ButtonSecondary>
                  <ButtonSecondary>Prototyping</ButtonSecondary>
                </div>

                <h1 className="md:text-5xl  text-3xl font-semibold">
                  Breeze Mobile App- E-Commerce Mobile App Solution
                </h1>

                <button className="self-end">
                  <Image src={arrowCircle} alt="arrow" />
                </button>
              </div>
            </div>
            <div className="border-3 border-[#0D0D0D47] items-center flex flex-col p-2 rounded-3xl mt-8 gap-6">
              <div className="w-full h-[500px] bg-[#0D0D0D] rounded-xl"></div>
              <div className=" flex flex-col md:gap-6 gap-4">
                <div className="flex md:flex-row flex-col items-start md:items-center gap-4">
                  <ButtonSecondary>UI/UX</ButtonSecondary>
                  <ButtonSecondary>Mobile App</ButtonSecondary>
                  <ButtonSecondary>Prototyping</ButtonSecondary>
                </div>

                <h1 className="md:text-5xl  text-3xl font-semibold">
                  Breeze Mobile App- E-Commerce Mobile App Solution
                </h1>

                <button className="self-end">
                  <Image src={arrowCircle} alt="arrow" />
                </button>
              </div>
            </div>
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

export default ProjectDetails;
