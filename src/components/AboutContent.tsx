import { CameraIcon } from '@heroicons/react/solid'

export default function Aboutcontent() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Who We Are
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src="https://images.unsplash.com/photo-1548613053-22087dd8edb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
                    alt="Whitney leaning against a railing on a downtown street"
                    width={1184}
                    height={1376}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <CameraIcon className="flex-none w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-2">Photograph by Marcus O’Leary</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">
              At ECEFG, we are a group of energy specialists who specialize in clean energy projects such as Combined Heat & Power, Waste Management, Battery Energy Storage, Solar PV, and Wind. Our focus is on equity-funded projects and we act as the interface between local authority planners, network operators, technology providers, installers, and funders to ensure successful project delivery.
              </p>
            </div>
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              
              <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div className='my-2'>
            <h3 className="mt-2 my-4 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Goals
            </h3>
          </div>
        </div>
              <p>
              In today's context of closing power plants and inadequate power supplies, Renewable Energy is a reliable, cost-effective alternative to traditional heating and power sources. With rising energy prices and unpredictable weather patterns affecting grid resilience, Renewable Energy is becoming an increasingly attractive and viable option for many.
              </p>
             
              <p>
              <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div className='my-4'>
            <h3 className="mt-2  my-4 text-23xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Plug the Knowledge Gap
            </h3>
          </div>
        </div>
        We understand that while most people have heard of Combined Heat & Power solutions or Heat Pumps, they may not know which companies are leaders in the industry, which to avoid, or who can provide the best solutions. That's why we're here - with our industry knowledge, contacts, and experience, we can provide you and your clients with the best advice and deliver the most cost-effective renewable energy solutions.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
