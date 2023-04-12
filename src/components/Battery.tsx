import React from 'react';
import Image from 'next/image';

const Battery = () => {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 py-8 md:grid-cols-2 gap-6 items-center">
        <p className="text-2xl mx-4">
          ECEFG&apos;s battery energy storage systems (ESS) help to store excess
          energy produced by renewable sources, providing a reliable power
          supply even when the sun isn&apos;t shining or the wind isn&apos;t blowing. Our
          ESS intelligently manages power distribution, minimizing your energy
          costs and maximizing efficiency.
        </p>
        <Image
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="Solar Panel"
          width={600}
          height={400}
          className="rounded-md"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <Image
          src="https://images.unsplash.com/photo-1467533003447-e295ff1b0435?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Battery Storage"
          width={600}
          height={400}
          className="mx-8 rounded-md"
        />
        <p className="text-2xl">
          Our plug-and-play battery ESS are AC-coupled, with power outputs
          ranging from 12kW to multi-megawatts and storage capacities from 25kWh
          to 1MW+. With various options for integration, our ESS is suitable
          for a wide range of projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <p className="text-2xl mx-4">
          With a battery ESS, you can bridge power generation gaps, provide UPS
          support, reduce peak demand charges, enhance existing renewable energy
          solutions, optimize interconnect agreements, offer off-grid
          capabilities, and more. Our ESS helps you improve performance, save
          money, and provide a reliable energy supply.
        </p>
        <Image
          src="https://images.unsplash.com/photo-1498084393753-b411b2d26b34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
          alt="UPS System"
          width={600}
          height={400}
          style={{
            height: "100%",
            width: "70%",
            objectFit: "cover",
          }}
          className="rounded-md"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <Image
          src="https://images.unsplash.com/photo-1615209853186-e4bd66602508?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          alt="Grid Services"
          width={600}
          height={400}
          style={{
            height: "70%",
            width: "70%",
            objectFit: "cover",
          }}
          className="rounded-md mx-8 my-10"
        />
        <p className="text-2xl">
          Our plug-and-play ESS is designed for a 20-25 year lifespan, though
          battery performance will deteriorate over time. We help you choose the
          right solution to ensure optimal performance throughout its lifespan.
          Our ESS uses high-quality components from leading manufacturers like
          BYD, ABB, Samsung, Siemens, Victron, and SMA, enabling fast response
          times and grid balancing services.
        </p>
      </div>
    </div>
  );
};

export default Battery;
