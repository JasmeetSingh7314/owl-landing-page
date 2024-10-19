import { CarouselPlugin } from "../common/Carousel";

export default function Carousel() {
  return (
    <section className=" carousel-temp container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <div className="w-full lg:w-1/2 max-w-2xl mx-auto lg:mx-0">
          <CarouselPlugin />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            <span className="text-violet-400">Explore</span> a wide
            <br className="hidden sm:inline" />
            variety of <span className="text-violet-400">games.</span>
          </h1>
          <p className="mt-4 mb-6 text-base sm:text-lg font-urbanist max-w-prose mx-auto lg:mx-0">
            Discover a curated collection of games that push the boundaries of
            traditional gaming, all stored securely on the blockchain.
          </p>
          <div className="flex justify-center lg:justify-start"></div>
        </div>
      </div>
    </section>
  );
}
