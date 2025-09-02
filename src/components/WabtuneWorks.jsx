import React from "react";
import Element4 from "../assets/ELE4cut.png";
import colorBubble from "../assets/blurElement.svg";
import colorBubble2 from "../assets/blurElement2.svg";

const tags = [
  "Real-time chats",
  "Bulk promotional campaigns",
  "Smart customer support",
  "Transactional notifications",
  "Automated lead capture",
];

const WabtuneWorks = () => {
  return (
    <section
      id="work"
      className="relative text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-16 "
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Text Content */}
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            How{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              WABtune{" "}
            </span>
            <br className="hidden md:block" /> Works?
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            Wabtune connects businesses to develop systems (like CRM,
            e-commerce, or support tools) with the WhatsApp Business API via a
            robust backend — giving a single, intelligent platform for:
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-purple-500/40 to-indigo-500/40 border border-white/10 rounded-full text-sm sm:text-base whitespace-nowrap hover:scale-105 transition"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute bottom-10 -right-10 w-52 sm:w-64 md:w-72 lg:w-80 opacity-60 z-0">
        <img src={colorBubble} alt="decor-bubble" className="w-full" />
      </div>
      <div className="absolute top-10 left-0 w-60 sm:w-72 opacity-40 rotate-45 z-0">
        <img src={colorBubble2} alt="decor-bubble" className="w-full" />
      </div>
      <div className="liquid-element-float absolute w-[500px] top-40 -right-20  md:top-20 md:-right-40  md:w-[800px] lg:w-[900px] z-0 pointer-events-none">
        <img src={Element4} className="w-full  " alt="Decorative Element" />
      </div>
    </section>
  );
};

export default WabtuneWorks;
