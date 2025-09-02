import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import botImage from "../assets/robo2.png";

const features = [
  "Smart Conversations. Instant Responses. 24/7.",
  "Wabtune's built-in AI-powered bot reply system lets you automate customer interactions intelligently, so you never miss a lead, question, or sale.",
  "Powered by advanced natural language processing, our AI bot understands customer intent and provides instant, human-like replies across various use cases.",
];

const AiBotReply = () => {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 px-4 sm:px-6 md:px-8">
        {/* Image Section - Always first */}
        <div className="relative w-full md:w-1/2 lg:w-[45%]">
          <div className="flex justify-center">
            <img
              src={botImage}
              alt="AI Bot"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            />
          </div>

          {/* Decorative elements */}
          <div className="chat-down absolute top-4 left-4 sm:top-8 sm:left-8 w-16 h-10 sm:w-20 sm:h-12 bg-gradient-to-b from-purple-400 to-indigo-500 rounded-xl flex flex-col items-center justify-center rotate-[15deg] shadow-lg">
            <div className="w-8 sm:w-10 h-1 bg-white mb-1"></div>
            <div className="w-6 sm:w-8 h-1 bg-white"></div>
          </div>

          <div className=" chat-up absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-16 h-10 sm:w-20 sm:h-12 bg-gradient-to-b from-purple-400 to-indigo-500 rounded-xl flex flex-col items-center justify-center -rotate-[10deg] shadow-lg">
            <div className="w-10 sm:w-14 h-1 bg-white mb-1"></div>
            <div className="w-10 sm:w-14 h-1 bg-white"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 lg:w-[55%] space-y-6 md:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            AI{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Bot
            </span>{" "}
            Reply
          </h1>

          <ul className="space-y-4 md:space-y-6 text-base sm:text-lg">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <HiArrowUpRight
                  strokeWidth={2}
                  className="mt-2 flex-shrink-0 text-purple-400"
                />
                <span className="text-purple-200">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AiBotReply;
