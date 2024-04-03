import Image from "next/image";

const Overview = () => {
  return (
    <>
      <div className="bg-white grid grid-cols-12 items-center overflow-visible overflow-x-clip min-[980px]:mt-15 py-32">
        <div className="relative col-span-12 aspect-[29/25] overflow-hidden rounded-site min-[980px]:col-span-6 xl:col-span-5  min-[980px]:col-start-1  xl:col-start-2 rounded-lg">
          <Image
            src="/slider/image1.webp"
            layout="fill"
            alt="Soller-tennis-club"
            sizes="(max-width: 768px) 100vw, 90vw"
            className="absolute w-full h-full"
          />
        </div>

        <div className="text-xl text-primary-color col-span-12 flex flex-col justify-center items-center gap-5 min-[980px]:col-span-5 min-[980px]:h-full min-[980px]:px-0 xl:col-span-4 min-[980px]:col-start-8 xl:col-start-8">
          <p>
            A one-of-a-kind destination where tennis, padel and swimming are
            metres away from a relaxed restaurant and panoramic views across the
            UNESCO World Heritage Serra de Tramuntana.
          </p>

          <p>
            Perched high between mountains and sea, our club overlooks the
            historic town of Sóller – highlighting one of the most beautiful
            courtside views anywhere in Europe.
          </p>
        </div>
      </div>
    </>
  );
};

export default Overview;
