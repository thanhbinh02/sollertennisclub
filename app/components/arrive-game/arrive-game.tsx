import { Merriweather } from "next/font/google";

const merriweatherp = Merriweather({
  weight: "400",
  subsets: ["latin"],
});

const merriweatherPItalic = Merriweather({
  weight: "400",
  subsets: ["latin"],
  style: "italic",
});

const ArriveGame = () => {
  return (
    <div className="contained py-[35px] grid auto-rows-auto grid-cols-12 gap-x-2 md:py-20 bg-white">
      <h2
        className={`${merriweatherp.className} text-primary-color text-h1 col-span-full col-start-1 xl:col-start-2`}
      >
        Arrive for the game.
      </h2>

      <h2
        className={`${merriweatherp.className} text-h1 text-orange-color col-span-full col-start-1 lg:col-start-2 xl:col-start-3`}
      >
        Stay for the day.
      </h2>

      <h2
        className={`${merriweatherp.className} text-h1 text-brown-color col-span-full col-start-1 lg:col-start-3 xl:col-start-4`}
      >
        Return for the moments
      </h2>

      <p className="text-body col-span-full col-start-3 mt-[35px] md:col-span-10 md:col-start-2 md:mt-7 lg:col-span-6 lg:col-start-4 xl:col-start-5">
        Our grounds are carved into a hillside that’s drenched in sunshine with
        dappled shade, where clean coastal air is filtered through cool
        mountains. Twisting paths amble through fragrant lemon and orange trees,
        connecting a variety of lounge spaces – from comfortable seating and
        family picnic areas to hidden corners where you can be alone with
        nature.
      </p>

      <div
        className={`${merriweatherPItalic.className} text-h2 col-span-12 col-start-3 mt-[35px] italic sm:col-span-10 sm:col-start-3 md:col-start-4 md:mt-7 lg:col-span-7 lg:col-start-5 xl:col-start-6`}
      >
        <h3 className="text-yellow-color text-3xl">
          Sociable spaces and quiet corners.
        </h3>

        <h3 className="text-green-color text-3xl">Find your place.</h3>
      </div>
    </div>
  );
};

export default ArriveGame;
