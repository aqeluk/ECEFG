import Link from 'next/link';

export default function ParaphrasedContent() {

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">ECEFG - Renewable Energy Solution</h2>
      <p className="mb-6 text-xl">
        Recent global events have led to an unprecedented surge in energy prices. The push for environmentally friendly energy sources has prompted businesses to seek alternatives to fossil fuels and grid power.
      </p>
      <p className="mb-6 text-xl">
        Biofuel generators offer a viable solution as they are specifically designed to run on biofuel, producing on-site electrical power.
      </p>
      <p className="mb-6 text-xl">
        Our fully-funded, off-balance-sheet solution includes on-site power and heat generation using biofuel generators or CHPs, a biofuel supply, and a Power Purchase Agreement (PPA) that ensures fixed kWh costs for increased business sustainability.
      </p>
      <p className="mb-6 text-xl">
        By generating your own electricity on-site, you can lower your energy costs, reduce reliance on fossil fuels, and even export excess energy to the grid or nearby locations. Experience reduced energy prices with price stability, allowing you to confidently plan ahead. Additionally, you&apos;ll be contributing to a reduced carbon footprint.
      </p>
      <Link
        href="/engagement/ourwork"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Learn more
      </Link>
    </div>
  );
}
