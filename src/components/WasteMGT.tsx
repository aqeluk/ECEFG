import React from "react";
import Image from "next/image";
import Link from "next/link";

const WasteMGT = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
      <h2 className="text-3xl font-semibold">The Waste Problem</h2>
      <p className="text-xl">
        Waste generation is escalating, increasing by 3% annually. The UK is
        rapidly approaching its landfill capacity, with full capacity
        anticipated by 2024 if current rates persist. (Source: Defra)
      </p>

      <h2 className="text-3xl font-semibold">Our Solution</h2>
      <p className="text-xl">
        In order to manage and minimize waste in a sustainable manner, the UK
        must embrace innovative solutions. By employing Advanced Conversion
        Technologies (ACT) in conjunction with a Combined Heat and Power (CHP)
        system, waste weight and volume can be effectively diminished.
      </p>

      <h2 className="text-3xl font-semibold">The Benefits</h2>
      <p className="text-xl">
        ACT can successfully decrease waste volume by up to 80% and reduce its
        weight by 50%. The remaining residue, referred to as flock, can be
        pelletized and used as a sustainable fuel source in various
        manufacturing processes.
      </p>

      <Link href='/engagement/ourwork' legacyBehavior>


      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
        Learn More
      </button>
      </Link>
      <div className="mt-6">
        <Image
          src="https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1829&q=80"
          alt="Your Image Description"
          width={500}
          height={300}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default WasteMGT;
