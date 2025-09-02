
import { RxArrowBottomLeft } from "react-icons/rx";
import { HiArrowNarrowRight } from "react-icons/hi";

const steps = [
  {
    step: "Step 1",
    title: "Free Consultation",
    desc: "We assess your needs and show you a demo of Wabtune.",
  },
  {
    step: "Step 2",
    title: "WhatsApp API Approval",
    desc: "We handle business verification, template approvals, and on-boarding.",
  },
  {
    step: "Step 3",
    title: "Go Live & Grow",
    desc: "Start chatting, automating, and selling on WhatsApp with full support from our team.",
  },
];

const HowToGetStarted = () => {
  return (
    <section className="relative text-white py-12 sm:py-16 lg:py-5">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Title */}
        {/* Title */}
        <div className="mb-14" data-aos="fade-up" data-aos-delay="100">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            How to {"  "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Get Started
            </span>
          </h1>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-6 md:p-8 text-white shadow-lg"
              data-aos="fade-up"
              data-aos-delay={`${(idx + 1) * 150}`}
            >
              <div className="absolute top-4 right-4 bg-white/30 px-4 py-1 rounded-full text-sm font-medium">
                {step.step}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
              <p className="text-purple-100 text-md leading-relaxed whitespace-pre-line">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-5" data-aos="fade-up" data-aos-delay="500">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-2xl px-6 py-8 sm:px-10 sm:py-10 w-full mx-auto">
            <h3 className="text-white text-xl sm:text-2xl font-semibold mb-3 text-center">
              Ready to transform your business?
            </h3>
            <p className="text-white/80 text-sm sm:text-base mb-5 text-center max-w-3xl mx-auto">
              Join thousands of businesses already growing with Wabtune
            </p>
            <div className="flex justify-center">
              <a href="https://app.wabtune.com/login">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-xl flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl">
                  Start Your Journey
                  <HiArrowNarrowRight className="w-4 h-4" />
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div
          className="flex justify-end md:mt-14 md:-mr-8 -mr-5"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <RxArrowBottomLeft className="w-32 h-32 sm:w-36 sm:h-36" />
        </div>
      </div>
    </section>
  );
};

export default HowToGetStarted;
