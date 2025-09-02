import React from "react";
import { HiBriefcase } from "react-icons/hi2";

const benefits = [
  {
    title: "Boost Engagement",
    description:
      "Connect with customers in real time with personalized 1:1 conversations.",
  },
  {
    title: "Drive Sales",
    description:
      "Send offers, recover carts, and guide buyers through their journey.",
  },
  {
    title: "Automate Interactions",
    description:"Manage messaging, campaigns, catalogs, and payments from one platform.",
  },
  {
    title: "Simplify Operations",
    description:
      "Manage messaging, campaigns, catalogs, and payments from one platform.",
  },
  {
    title: "Improve Support",
    description:
      "Resolve issues faster and manage queries with a shared team inbox.",
  },
];

const KeyBenefit = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 md:px-16 text-white">
      <h1 className="text-5xl md:text-8xl font-bold text-center mb-4">
        Key Benefits
      </h1>
      <h2 className="text-2xl md:text-5xl text-center mb-12 text-purple-300">
        of WABtune
      </h2>

      <div className="flex flex-wrap gap-6 justify-center max-w-6xl">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex flex-row items-start gap-4 bg-gradient-to-r from-indigo-500/40 to-purple-700/40  p-5 rounded-2xl w-full md:w-[300px] hover:scale-105 transform transition"
          >
            {/* <HiBriefcase className="h-8 w-8 flex-shrink-0" /> */}
            <div className="">
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-md text-gray-300">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyBenefit;
