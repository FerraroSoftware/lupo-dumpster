import { FadeIn, FadeInStagger } from "./FadeIn";

function Corefeatures({ points, header, subheader, ptag }) {
  return (
    <div className=" py-16 sm:py-24" id="junkremoval">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-red-600 uppercase">
            {header}
          </h2>
          <h3 className="mt-2 text-3xl font-bold tracking-wide text-white sm:text-4xl uppercase text-center">
            {subheader}
          </h3>
          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-300">
            {ptag}
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <FadeInStagger>
            <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
              {points.map((feature, key) => (
                <div
                  key={key}
                  className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
                >
                  <FadeIn>
                    <div className="flex h-12 w-12 items-center justify-center  text-red-600 sm:shrink-0 mb-4">
                      <feature.icon
                        className="h-12 w-12 bg-black shadow shadow-zinc-700 rounded-lg p-2 "
                        aria-hidden="true"
                      />
                    </div>
                    <div className="sm:min-w-0 sm:flex-1">
                      <p className="text-lg font-semibold uppercase leading-8 text-white">
                        {feature.name}
                      </p>
                      <p className="mt-2 text-base leading-7 text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </FadeIn>
                </div>
              ))}
            </div>
          </FadeInStagger>
        </div>
      </div>
    </div>
  );
}

export default Corefeatures;
