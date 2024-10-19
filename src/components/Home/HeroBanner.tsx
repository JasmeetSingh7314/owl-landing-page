import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import scorpion from "../../assets/scorpion.png";
import { Button } from "@nextui-org/react";

export default function HeroBanner() {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline();

      tl.fromTo(
        ".hero-banner",
        {
          y: 200,
          opacity: 0,
          scale: 1,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
        }
      );
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="dark:bg-gray-800 dark:text-gray-100 overflow-hidden md:px-24"
      ref={component}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="hero-banner lg:max-w-md xl:max-w-lg text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter mb-4">
              <span className="block">
                Transforming <span className="text-violet-400">Play</span>
              </span>
              <span className="block">
                Unleashing <span className="text-violet-400">Ownership</span>
              </span>
            </h1>
            <p className="text-base sm:text-lg mb-6 sm:mb-8">
              Your Games, Your Way,
              <br />
              Our <span className="font-bold">Innovation.</span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link rel="noopener noreferrer" to={""}>
                <Button
                  variant="solid"
                  className="p-2 h-fit font-extrabold font-jura text-neutral-900 text-lg  bg-violet-400 "
                >
                  <p className="font-extrabold text-xl">Whitepaper</p>
                  <p className="text-xs italic font-extrabold">
                    coming soon...
                  </p>
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:flex items-center justify-center hidden lg:visible w-full lg:w-1/2 mt-8 lg:mt-0">
            <img
              src={scorpion}
              alt="Scorpion-looking-kinda-cool"
              className="object-cover brightness-90 max-h-[500px] w-auto mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8E0E00" />
              <stop offset={2} stopColor="#1F1C18" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
