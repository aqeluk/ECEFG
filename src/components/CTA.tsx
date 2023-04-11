import { MailIcon, PhoneIcon } from '@heroicons/react/outline';

export default function CTA() {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1561577724-507645521eaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2016&q=80")',
      }}
      className="bg-blue-200 bg-cover"
    >
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Customer Support
          </h2>
          <div className="mt-3">
            <p className="text-lg text-white">
              Experience seamless assistance from our dedicated team. For any
              inquiries or assistance, feel free to reach out to us:
            </p>
          </div>
          <div className="mt-9">
            <div className="flex">
              <div className="flex-shrink-0">
                <PhoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div className="ml-3 text-base">
                <div className="bg-blue-600 p-2 rounded">
                  <p className="text-white">+44(0) 1206 716241</p>
                  <p className="mt-1 text-white">Mon-Fri 8am to 6pm PST</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex">
              <div className="flex-shrink-0">
                <MailIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div className="ml-3 text-base">
                <div className="bg-blue-600 p-2 rounded">
                  <p className="text-white">support@ECEFG.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
