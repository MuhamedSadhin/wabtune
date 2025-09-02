
import flower from "../assets/ELE5.png";

const industries = [
  {
    title: "E-Commerce & D2C",
    points: [
      "Order confirmation & shipping updates",
      "Cart recovery messages",
      "Product launch alerts",
      "Customer service via chat",
    ],
    gradient: "from-purple-600/60 to-indigo-700/60",
  },
  {
    title: "Real Estate",
    points: [
      "Lead qualification bots",
      "Property updates",
      "Site visit confirmations",
      "Document sharing on chat",
    ],
    gradient: "from-indigo-600/60 to-purple-700/60",
  },
  {
    title: "Healthcare",
    points: [
      "Appointment reminders",
      "Prescription renewals",
      "Post-consultation support",
      "Patient follow-up messages",
    ],
    gradient: "from-purple-700/60 to-pink-600/60",
  },
  {
    title: "Education & EdTech",
    points: [
      "New admissions assistance",
      "Course updates & reminders",
      "Student support bots",
      "Payment follow-ups",
    ],
    gradient: "from-pink-600/60 to-purple-600/60",
  },
];

export default function SuitableIndustries() {
  return (
    <section className="relative min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20">
      {/* Background Shape */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none ">
        <div className="relative w-full h-full max-w-8xl">
          <img
            src={flower}
            alt="Decorative Shape"
            className="
              absolute 
              -right-28 sm:-right-36 
              top-1/2 transform -translate-y-1/2 
              w-[120%] sm:w-[100%] md:w-[90%] lg:w-[80%] xl:w-[70%] 
              h-auto object-contain 
              md:-top-60 md:-right-60 md:translate-y-0 
              lg:top-12 lg:-right-40 
              xl:top-16 xl:-right-44
            "
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
            Suitable for
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              All Industries
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap gap-6 justify-start">
          {industries.map((industry, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-xl bg-gradient-to-br from-white/5 to-white/0 w-full sm:w-[48%] max-w-[500px] min-h-[280px]"
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {industry.title}
              </h3>
              <ul className="list-disc list-inside text-purple-200 space-y-1 text-lg">
                {industry.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
