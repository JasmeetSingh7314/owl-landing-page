import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ScrollShadow } from "@nextui-org/react";
import Card from "../Home/Cards";
import { data } from "../../../data.ts";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CarouselPlugin() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <ScrollShadow
        hideScrollBar
        orientation="horizontal"
        size={200}
        visibility="both"
        className="overflow-hidden"
      >
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {data?.map((element: any, index: any) => (
              <div
                key={index}
                className="embla__slide flex gap-x-6 flex-[0_0_33.33%] min-w-0 sm:flex-[0_0_33.33%] md:flex-[0_0_33.33%] lg:flex-[0_0_33.33%] pl-4"
              >
                <Card
                  index={element.id}
                  url={element.cover.url}
                  name={element.name}
                />
              </div>
            ))}
          </div>
        </div>
      </ScrollShadow>
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
}
