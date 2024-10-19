import { useEffect, useRef, useState } from "react";
import { owlFeatures } from "@/utils/dummydata/featuresData";
import Lottie from "react-lottie";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useMediaQuery } from "react-responsive";

export default function BentoGrid() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [play, setPlay] = useState<boolean>(true);

  const isMobile = useMediaQuery({ maxWidth: 640 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        containerRef.current?.style.setProperty("--mouse-x", `${x}px`);
        containerRef.current?.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    containerRef.current?.addEventListener("mousemove", handleMouseMove);
    return () =>
      containerRef.current?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="bento-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:p-6 lg:p-8"
    >
      {owlFeatures.map((element, index) => (
        <div
          key={element.id}
          className={`relative overflow-hidden rounded-xl bg-neutral-900 transition-transform hover:scale-105 ${
            index === 3 || index === 6 ? "col-span-1 sm:col-span-2" : ""
          }`}
          onMouseLeave={() => setPlay(true)}
        >
          <div className="absolute inset-0 opacity-50" />
          <div className="relative z-10 p-6 flex flex-col h-full">
            <h2 className="text-xl font-jura sm:text-2xl font-bold text-white mb-2">
              {element.heading}
            </h2>
            <p className="font-inter text-sm sm:text-base text-gray-300 mb-4 flex-grow">
              {element.description}
            </p>
            <div className="flex items-center justify-between">
              <Button
                variant="secondary"
                className="bg-white/10 text-white hover:bg-white/20"
              >
                Explore
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              {(!isMobile || (isMobile && index < 3)) && (
                <div className="w-24 h-24 sm:w-32 sm:h-32">
                  <Lottie
                    options={{
                      loop: true,
                      autoplay: false,
                      animationData: element.lottieData,
                      rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice",
                      },
                    }}
                    height="100%"
                    width="100%"
                    isStopped={play}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
