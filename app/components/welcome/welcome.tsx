import { Merriweather } from "next/font/google";
import Image from "next/image";

const merriweatherp = Merriweather({
  weight: "400",
  subsets: ["latin"],
});

const Welcome = () => {
  return (
    <div className={merriweatherp.className}>
      <div className="flex items-center justify-center overflow-visible  md:pt-[120px] bg-white">
        <div className="max-w-[400px] sm:max-w-[750px] lg:max-w-[940px]  flex flex-col gap-2 md:gap-[3.2rem]">
          <div className="flex items-center justify-center">
            <Image
              src="/logo.svg"
              width={145}
              height={200}
              alt="Soller-tennis-club"
            />
          </div>

          <p className="text-center text-6xl leading-[5rem] text-primary-color font-medium">
            <span>Welcome to the sporting</span> <br />{" "}
            <span>heart of Sóller</span>.
          </p>

          <p className="text-center text-3xl leading-[2.8rem] text-orange-color">
            Sóller Tennis Club is a wellness and lifestyle community for local
            neighbours, international friends and touring pros
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
