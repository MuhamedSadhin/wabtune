
import robot from "../assets/ELE6.png";

const PlansSection = () => {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-16 flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10 md:gap-16">
        {/* Left Content */}
        <div
          className="w-full md:w-1/2 text-left md:text-left"
          data-aos="fade-up"
        >
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8">
            Plans
          </h1>
          <ul className="space-y-5 text-white text-lg sm:text-xl md:text-2xl">
            {[
              "Startups & SMBs",
              "Large enterprises",
              "Nonprofits & educational institutions",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center md:justify-start gap-3 sm:gap-4 lg:gap-5 group cursor-pointer transition-all duration-300 hover:translate-x-2"
              >
                <span
                  className="flex-shrink-0 text-2xl lg:text-3xl font-bold bg-gradient-to-tr from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent transform rotate-45 group-hover:rotate-90 transition-transform duration-300"
                  aria-hidden="true"
                >
                  ↗
                </span>
                <span className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium group-hover:text-purple-200 transition-colors duration-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Robot Image - Appears on top in small screens */}
        <div
          className="w-full md:w-1/2 flex justify-center md:justify-end"
          data-aos="fade-up"
        >
          <img
            src={robot}
            alt="Chatbot illustration"
            className="waving-animation w-[75%] max-w-[320px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[550px] xl:max-w-[600px] object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
