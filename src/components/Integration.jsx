
import Instagram from '../assets/icons/Instagram.svg';
import Facebook from '../assets/icons/facebook.svg';
import Telegram from '../assets/icons/telegram.svg';
import Mail from '../assets/icons/Mail.svg';
import FileText from '../assets/icons/FileText.svg';
import Zapier from '../assets/icons/Zapier.svg';
import Brevo from '../assets/icons/brevo.svg';
import Mailchimp from '../assets/icons/Mailchimp.svg';
import Shopify from '../assets/icons/Shopify.svg';
import Slack from "../assets/icons/Slack.svg";
import Tableau from "../assets/icons/Tableau.svg";
import GoogleAnalytics from "../assets/icons/Google Analytics.svg";
import AWS from "../assets/icons/AWS.svg";
import API from "../assets/icons/API.svg";
import Web from "../assets/icons/Web.svg";
import SMS from "../assets/icons/SMS.svg";
import CRM from "../assets/icons/CRM.png";
import Forms from "../assets/icons/Forms.svg";
import Maps from "../assets/icons/Maps.svg";
import Database from "../assets/icons/Database.svg";
import Platform from "../assets/icons/Platform.svg";

// PNG icons (colored)
import Stripe from '../assets/icons/stripe.png';
import PayPal from '../assets/icons/PayPal.png';
import Commerce from '../assets/icons/Commerce.png';
import GooglePay from "../assets/icons/google-pay.png";

import whatsapp from "../assets/icons/WhatsApp.svg";
import { CheckCircle } from 'lucide-react';

const integrations = [
  {
    title: "Messaging & Communication",
    gradient: "from-[#6366F1] to-[#8B5CF6]",
    icons: [
      { Icon: whatsapp, name: "WhatsApp" },
      { Icon: Telegram, name: "Telegram" },
      { Icon: Mail, name: "SMTP" },
      { Icon: AWS, name: "AWS" },
      { Icon: API, name: "API" },
      { Icon: Web, name: "Web" },
      { Icon: SMS, name: "SMS" },
    ],
  },
  {
    title: "Email & Marketing Automation",
    gradient: "from-[#8B5CF6] to-[#EC4899]",
    icons: [
      { Icon: Zapier, name: "Zapier" },
      { Icon: Brevo, name: "Brevo" },
      { Icon: Mailchimp, name: "Mailchimp" },
      { Icon: CRM, name: "CRM" },
    ],
  },
  {
    title: "CRM, Forms & Website Tools",
    gradient: "from-[#00C6FB] to-[#005BEA]",
    icons: [
      { Icon: Facebook, name: "Facebook" },
      { Icon: Instagram, name: "Instagram" },
      { Icon: FileText, name: "Forms" },

      { Icon: Maps, name: "Maps" },
      { Icon: Database, name: "Database" },
      { Icon: Forms, name: "Forms" },
    ],
  },
  {
    title: "Payments & E-Commerce",
    gradient: "from-[#F857A6] to-[#FF5858]",
    icons: [
      { Icon: Stripe, name: "Stripe" },
      { Icon: PayPal, name: "PayPal" },
      { Icon: GooglePay, name: "Google Pay" },
    ],
  },
  {
    title: "E‑Commerce Platforms",
    gradient: "from-[#C471F5] to-[#FA71CD]",
    icons: [
      { Icon: Shopify, name: "Shopify" },
      { Icon: Platform, name: "Platform" },
      { Icon: Commerce, name: "Commerce" },
    ],
  },
  {
    title: "Analytics & Reporting",
    gradient: "from-[#6366F1] to-[#0575E6]",
    icons: [
      { Icon: GoogleAnalytics, name: "Google Analytics" },
      { Icon: Slack, name: "Slack" },
      { Icon: Tableau, name: "Tableau" },
    ],
  },
];

export default function IntegrationCapabilities() {
  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-sm sm:text-base font-semibold px-3 py-1">
                  50+ Integrations Available
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Integration{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Capabilities
                </span>
              </h2>

              <p className="text-purple-200 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed">
                Connect Wabtune with the tools already using in your business.
                Streamline workflows, automate tasks, and grow faster with
                seamless integrations.
              </p>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>All integrations active</span>
              </div>
              <div className=" sm:block w-px h-4 bg-gray-600" />
              <div className=" items-center gap-2 flex">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Real-time sync</span>
              </div>
            </div>
          </div>
        </div>

        {/* integration content */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {integrations.map((integration, idx) => (
            <div
              key={idx}
              className="group"
              data-aos="fade-up"
              data-aos-delay={`${(idx + 1) * 100}`}
            >
              {/* Category Label */}
              <div className="flex items-center mb-4 sm:mb-5 lg:mb-5">
                <div
                  className={`bg-gradient-to-r ${integration.gradient} px-3 sm:px-4 md:px-5 lg:px-5 py-1.5 sm:py-2.5 rounded-full shadow-lg`}
                >
                  <h3 className="text-white font-semibold text-sm sm:text-base md:text-sm lg:text-sm whitespace-nowrap">
                    {integration.title}
                  </h3>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-purple-500/50 to-transparent ml-3 sm:ml-4 md:ml-5 lg:ml-5"></div>
              </div>

              {/* Icons Row */}
              <div className="flex items-center gap-3 sm:gap-4 md:gap-3 lg:gap-4 flex-wrap pl-4 sm:pl-6 md:pl-4 lg:pl-4">
                {integration.icons.map((iconData, i) => {
                  const IconComponent = iconData.Icon;
                  return (
                    <div
                      key={i}
                      data-aos="zoom-in"
                      data-aos-delay={`${i * 50}`}
                      className="group/icon relative transition-transform duration-300 hover:scale-110 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12 lg:h-12"
                      title={iconData.name}
                    >
                      <img
                        src={IconComponent}
                        alt={iconData.name}
                        className="w-full h-full object-contain"
                      />

                      {/* Tooltip */}
                      <div className="absolute -top-9 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-0.5 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-20">
                        {iconData.name}
                      </div>
                    </div>
                  );
                })}

                {/* More indicator */}
                <div
                  data-aos="fade-left"
                  className="flex items-center gap-1 text-purple-300 text-xs sm:text-sm md:text-sm lg:text-xs font-medium ml-2"
                >
                  <span>+</span>
                  <span className="hidden sm:inline">more</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}










