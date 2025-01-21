import { Link } from "react-router-dom";
import Diamante_logo from "../../assets/diamlogo.png";
export function CTA() {
  return (
    <section className="py-10 mt-20 mb-20">
      <div className="mx-auto flex justify-center max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <Button
          variant="solid"
          className="p-2 h-fit my-4 font-extrabold font-jura text-neutral-900 text-lg  bg-stone-400 "
        >
          <p className="font-extrabold text-xl">Whitepaper</p>
          <p className="text-xs italic font-extrabold">coming soon...</p>
        </Button> */}
        <div className="w-fit p-6 my-10  flex  gap-x-8 justify-center items-center ">
          <span className="text-violet-400 text-2xl font-bold uppercase tracking-wider font-jura ">
            Supported by:
          </span>
          <Link to="/">
            <span>
              <img
                width={200}
                height={200}
                src={Diamante_logo}
                alt="diamante_logo"
              />
            </span>
          </Link>
        </div>
        {/* <div className=" my-4 mx-auto w-full text-center md:max-w-2xl">
          <p className="mx-auto mt-4 text-lg  font-urbanist leading-relaxed text-white">
            <span className="text-violet-400 text-3xl font-extrabold ">
              Welcome to the future of gaming!
            </span>
            <br /> Join us in revolutionizing how we play and own games.
          </p>
        </div> */}

        {/* <div className="mt-8 flex items-center justify-center px-8 sm:px-0">
          <span className="ml-2 text-sm text-white font-inter">
            Begin your{" "}
            <span className="text-violet-400 font-extrabold ">Journey </span>
            with us today
          </span>
        </div> */}
      </div>
    </section>
  );
}
