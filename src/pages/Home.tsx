import Carousel from "@/components/Home/Carousel";
import BentoGrid from "@/components/Home/BentoGrid";
import { CTA } from "@/components/Home/CTA";
import Footer from "@/components/Home/Footer";
import { GenreTray } from "@/components/Home/GenreTray";
import HeroBanner from "@/components/Home/HeroBanner";
import { NavbarComp } from "@/components/Navbar";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

import { ScrollTrigger } from "gsap/all";

function Home() {
  const component = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          start: 400,
          end: 700,
          scrub: 2,
        },
      });
      tl.fromTo(
        ".carousel-temp",
        {
          y: 100,
          scale: 1,
          opacity: 0,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.65,
        }
      );

      let tl2 = gsap.timeline({
        scrollTrigger: {
          markers: false,
          start: 1080,
          end: 1450,
          scrub: 2,
        },
      });

      tl2.fromTo(
        ".bento-grid",
        {
          y: 200,
          scale: 1,
          opacity: 0,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.65,
        }
      );
      // const createAnimation = (selector, startTrigger) => {
      //   return gsap
      //     .timeline({
      //       scrollTrigger: {
      //         trigger: selector,
      //         start: `top ${startTrigger}`,
      //         end: "bottom 70%",
      //         scrub: true,
      //         markers: false,
      //       },
      //     })
      //     .fromTo(
      //       selector,
      //       {
      //         y: "10vh",
      //         opacity: 0,
      //       },
      //       {
      //         y: 0,
      //         opacity: 1,
      //         duration: 1,
      //         ease: "power2.out",
      //       }
      //     );
      // };

      // createAnimation(".carousel-temp", "80%");
      // createAnimation(".bento-grid", "80%");
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <section className="h-max">
      <div
        className="px-2 py-4 flex mb-5 justify-center flex-col 2xl:px-36 medium:px-48 extra:px-60"
        ref={component}
      >
        <NavbarComp />
        <HeroBanner />
        <div className="carousel-temp">
          <Carousel />
        </div>
      </div>
      <GenreTray />
      <div className="px-2 flex justify-center flex-col sm:px-60 md:px-20">
        <div className="bento-grid" ref={component}>
          <BentoGrid />
        </div>

        <CTA />
        <Footer />
      </div>
    </section>
  );
}

export default Home;
