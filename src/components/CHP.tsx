import Link from "next/link";

export default function CHP() {
  return (
    <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-max lg:max-w-7xl mx-auto">
        <div className="relative z-10 mb-8 md:mb-2 md:px-6">
          <div className="text-base max-w-prose lg:max-w-none">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What is CHP?
            </p>
          </div>
        </div>
        <div className="relative">
          <svg
            className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
            />
          </svg>
          <svg
            className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
            />
          </svg>
          <div className="relative md:bg-white md:p-6">
            <div className="lg:grid lg:grid-cols-2 lg:gap-6">
              <div className="prose prose-indigo prose-lg text-gray-500 lg:max-w-none">
                <p>
                  Combined Heat and Power (CHP), also known as Co-generation, is
                  a technology that enables the production of both heat and
                  electricity using a single unit. This means that you can
                  generate hot water, heating, and electricity for your own
                  consumption, resulting in significant savings in on-site
                  energy costs.≈
                </p>
                <p>
                  The thermal energy produced by the CHP unit can be used for
                  various heating and hot water applications, as well as
                  numerous processes that require heat.
                </p>
                <p>
                  Co-generation can achieve energy savings of over 30% when
                  compared to independent power and heat generation.
                </p>

                <div className="relative z-10 mb-8 md:mb-2 ">
                  <div className="text-base max-w-prose lg:max-w-none">
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl">
                      Benefits of CHP
                    </p>
                  </div>
                </div>
                <p>
                  A CHP unit provides on-site power generation and independence
                  from the national power grid. This not only results in
                  significant energy savings, but also provides energy security
                  during power cuts.
                </p>
                <p>
                  Moreover, any excess generated electricity can be exported to
                  the national grid, providing additional revenue opportunities.
                </p>
                <p>
                  As energy production becomes more decentralised, it is now
                  more important than ever for businesses to take control of
                  their energy and have secure, reliable, on-site energy
                  generation.
                </p>
              </div>
              <div className="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">
                <div className="relative z-10 mb-8 md:mb-2 ">
                  <div className="text-base max-w-prose lg:max-w-none">
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                      How it Works
                    </p>
                  </div>
                </div>

                <p>
                  A CHP unit comprises three main components: an engine,
                  alternator, and control system. The engine converts the fuel
                  into both mechanical and thermal energy.
                </p>
                <p>
                  The mechanical energy produced by the engine drives the
                  alternator, which generates electricity. By integrating
                  seamlessly with your building management system, a CHP unit
                  provides full control over your on-site energy generation.
                </p>
                <p>
                  A CHP system is typically over 90% efficient, producing both
                  heat and electricity.
                </p>
                <div className="relative z-10 mb-8 md:mb-2">
                  <div className="text-base max-w-prose lg:max-w-none">
                    <p className="mt-2  py-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                    Fuel Options
                    </p>
                  </div>
                </div>
                <p>
                CHP units can work with a variety of fuel sources, including natural gas, biogas (anaerobic digestion), liquid natural gas, and syngas.
                </p>
                <div className="relative z-10 mb-8 md:mb-2">
                  <div className="text-base max-w-prose lg:max-w-none">
                    <p className="mt-2 py-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                    Proven Technology
                    </p>
                  </div>
                </div>
                <p>
                CHP is an established and proven technology that is widely used all over the world. The component parts of a CHP unit are similar to those used in car engines and generators, which means that spare parts and ongoing support are readily available locally.
                </p>
              </div>
            </div>
            <div className="mt-8 inline-flex rounded-md shadow">
              <Link
                href="/engagement/ourwork"
                className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-600"
              >
                Find Out More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
