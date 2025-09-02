
import { HiArrowUpRight } from "react-icons/hi2";

const features = [
  {
    title: "Official WhatsApp Business API",
    description:
      "Get access to WhatsApp’s secure, verified messaging platform; ideal for businesses that need to scale. Includes:",
    points: [
      "Verified green tick",
      "Business profile with logo, website, catalog",
      "End-to-end encryption",
    ],
  },
  {
    title: "Broadcast Messaging (Bulk Campaigns)",
    description:
      "Send targeted messages to thousands of customers at once using pre-approved templates.",
    points: [
      "Run offers, discounts, new launches",
      "Send reminders, announcements, and alerts",
      "Advanced segmentation and personalization",
      "Real-time delivery and engagement tracking",
    ],
  },
  {
    title: "Shared Team Inbox",
    description: "Collaborate on customer chats with whole team.",
    points: [
      "Assign chats to specific agents",
      "Add private notes",
      "View full customer chat history",
      "Track agent response time",
    ],
  },
  {
    title: "Product Catalog & Payments",
    description: "Turn WhatsApp into a mini storefront.",
    points: [
      "Showcase product images, prices, and descriptions",
      "Customers can browse, add to cart, and place orders",
      "Integration with Razorpay, PayU, and other payment gateway",
    ],
  },
  {
    title: "Smart Automations & No-Code Chatbots",
    description: "Create automated workflows and chatbots that run 24/7.",
    points: [
      "Auto-replies to FAQs",
      "Lead qualification",
      "Abandoned cart recovery",
      "Post-purchase follow-ups",
    ],
  },
  {
    title: "Analytics & Insights",
    description: "Stay on top of performance with built-in dashboards.",
    points: [
      "Track open and click-through rates",
      "Analyze agent productivity",
      "Monitor campaign success",
      "Export detailed reports",
    ],
  },
];

const CoreFeatures = () => {
  return (
    <section
      id="features"
      className="relative w-full px-4 sm:px-6 lg:px-16 py-20 bg-transparent text-white"
    >
      {/* Title */}
      <div className="flex justify-center mb-16 text-center">
        <h1 className="font-bold flex  sm:flex-row items-center gap-4">
          <span className="rounded-4xl bg-gradient-to-b from-purple-400 to-indigo-500 text-white text-4xl md:text-6xl py-4 px-6">
            Core
          </span>
          <span className="text-white text-4xl md:text-6xl">Features</span>
        </h1>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto z-10 relative">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex group"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="w-1 bg-gradient-to-b from-purple-400 to-indigo-500 rounded group-hover:from-cyan-400 group-hover:to-purple-300 transition-all duration-700"></div>
            <div className="ml-4 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 animate-pulse"></div>
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  {feature.title}
                </h2>
              </div>
              <p className="text-gray-300 font-medium leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-2 pl-6 list-inside">
                {feature.points.map((point, idx) => (
                  <li key={idx} className="text-purple-200">
                    <span className="flex items-center gap-3">
                      <HiArrowUpRight
                        strokeWidth={2}
                        className="flex-shrink-0 text-purple-400"
                      />
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreFeatures;
