

import React from "react";
import whatsappTickImage from "../assets/tick.png";

const WabtuneIntro = () => {
  return (
    <section id="about" className="w-full lg:py-20 ">
      <div className="mx-auto flex h-full w-full max-w-[85rem] flex-col items-center justify-center px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:gap-12 xl:gap-20">
        {/* Text Content - Left Side */}
        <div className="w-full lg:w-1/2 lg:pl-8 ">
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-[2.7rem] lg:text-5xl xl:text-[3.2rem] leading-tight mb-6 md:mb-8">
            What is{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              WABtune?
            </span>
          </h1>

          <p className="text-base text-gray-300 sm:text-lg md:text-xl leading-relaxed md:leading-8 mb-4">
            Wabtune is a full-featured WhatsApp Business Platform designed to
            help brands communicate with customers more efficiently, build
            stronger relationships, and grow revenue – all inside WhatsApp.
          </p>

          <p className="text-base text-gray-300 sm:text-lg md:text-xl leading-relaxed md:leading-8 mb-8 md:mb-10">
            From personalized conversations to bulk messaging, automation,
            catalog sharing, and payment collection, Wabtune gives everything
            businesses need to turn WhatsApp into a powerful sales, marketing,
            and support tool.
          </p>

          {/* Features Grid */}
          <div className="mt-8 md:mt-10">
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:gap-6 md:gap-x-8 md:gap-y-5 max-w-md">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base text-gray-300">
                  Bulk Messaging
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base text-gray-300">
                  Automation
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base text-gray-300">
                  Catalog Sharing
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base text-gray-300">
                  Payment Collection
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Image - Right Side */}
        <div className="w-full mt-12 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={whatsappTickImage}
            alt="Wabtune Illustration"
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default WabtuneIntro;





