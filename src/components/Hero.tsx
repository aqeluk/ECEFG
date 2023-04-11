import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden height-75vh">
      <div className="absolute inset-0">
        <Image
          className="h-full w-screen"
          src="https://images.unsplash.com/photo-1500534623283-312aade485b7?fit=crop&w=1900&h=800&crop=entropy&q=80"
          alt="Renewable energy"
          width={2070}
                height={2380}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
          quality={80}
        />
        <div className="absolute inset-0 bg-opacity-50 bg-green-600 mix-blend-multiply" />
      </div>
      <div className="relative px-4 py-64 sm:px-6 sm:py-80 lg:py-48 lg:px-80">
        <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="block text-white">Capital-backed eco-friendly</span>
          <span className="block text-indigo-200">energy initiatives</span>
        </h1>
        <p className="mt-6 max-w-lg mx-auto text-center text-2xl text-indigo-200 sm:max-w-3xl">
          Struggling to secure funding for your project?
        </p>
        <p className="max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
          We specialize in discovering inventive financing options for
          large-scale sustainable energy endeavors
        </p>
        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
          <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
            <a
              href="#"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
            >
              Engage with ECEFG
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
