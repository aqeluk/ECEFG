export default function TwoColumn() {
    return (
      <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-max lg:max-w-7xl mx-auto">
          <div className="relative z-10 mb-8 md:mb-2 md:px-6">
            <div className="text-base max-w-prose lg:max-w-none">
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How We Work
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
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" />
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
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
            </svg>
            <div className="relative md:bg-white md:p-6">
              <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                <div className="prose prose-indigo prose-lg text-gray-500 lg:max-w-none">
                  <p>
                  We help clients over-achieve their energy management objectives by understanding their current situation, their drivers and their goals. Using our industry knowledge and contacts, we design and implement the best in class solution for their particular situation. 
                  </p>
                  <p>
                  Before ECEFG proposes a project, we need to understand your business objectives and drivers relating to energy and your current energy usage and spend through an initial meeting or conversation.
                  </p>
                  <ol role="list">
                    <li>We then ask for copies of your most recent power and heating bills </li>
                    <li>(electric/gas/oil etc.) and the last 12 months of energy bills and profile data, if available.</li>
                  </ol>
                  <p>
                  This information enables us to understand your energy demand profile and to recommend the most cost effective energy solution or solutions to meet your unique situation.
                  </p>
                  <p>
                    
We also ask you to sign a Letter of Authority. This enables us to contact energy suppliers and network operators on your behalf.


We then produce a financial business case that models the project and details the expected returns over a number of years.


ECEFG act as the 'glue' that binds all the various parties together to deliver the project. This includes planners, DNOs, technology providers, installers and funders.

                  </p>
                </div>
                <div className="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">
                  <p className="text-2xl">

                  Independent Advice
                  </p>
                  <p>

Importantly, ECEFG is not tied to any one manufacturer, distributor or installer, enabling us to select the most appropriate solution for your unique solution. SEFG works with a number of technology partners who deliver and install the projects.
                  </p>
                  <p className="text-2xl">

                  Funding Solutions
</p>
                  <p>
                  ECEFG has partnered with a number of financial institutions to provide a variety of funding solutions for your Renewable Energy project. From asset funding to equity partnership, follow the link below to find out more...
funding a project
                  </p>
                </div>
              </div>
              <div className="mt-8 inline-flex rounded-md shadow">
                <a
                  href="/engagement/funding"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-600"
                >
                  See Project Funding Opportunities
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  