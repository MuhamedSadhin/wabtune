"use client";

import {
  Play,
  ArrowRight,
  Users,
  Award,
  Clock,
  CheckCircle,
} from "lucide-react";
import tube from "../assets/ELE1.png";
import Element4 from "../assets/ELE4cut.png";
import star from '../assets/star.png'
import { TypeAnimation } from "react-type-animation";

const BusinessHeroSection = () => {

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: CheckCircle },
    { number: "150+", label: "Clients Served", icon: Users },
    { number: "98%", label: "Success Rate", icon: Award },
    { number: "24/7", label: "Support Available", icon: Clock },
  ];

  return (
    <div id="home" className="relative min-h-screen mt-50 md:mt-20">
      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 lg:py-24 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Heading */}
          <div className="space-y-4 mb-8 ">
            <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
              <span className="text-white">Tune Your </span>
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Businesses
              </span>
            </h1>
            <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-white">
              <div className="flex justify-center items-center gap-2 sm:gap-4 lg:gap-8 ml-10">
                <span className="text-white">on</span>
                <span
                  className="bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent inline-block text-left"
                  style={{ display: "inline-block", minWidth: "10ch" }}
                >
                  <TypeAnimation
                    sequence={[
                      "WhatsApp?",
                      2500,
                      "Instagram?",
                      2500,
                      "Auto-Pilot?",
                      2500,
                      "Chatbots?",
                      2500,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </div>
            </h1>
          </div>

          <p className=" text-xl lg:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-16">
            We build impactful digital solutions that deliver measurable results
            and drive meaningful business growth through innovative technology
            and strategic thinking.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-4 justify-center items-center mb-20">
            <a href="#about">
              <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold px-4 py-3 rounded-full flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
            </a>
            <a href="#features">
              <button className="bg-white/10  border border-white/20 text-white font-semibold px-4 py-3 rounded-full flex items-center gap-3 transition-all duration-300 hover:bg-white/20 hover:scale-105">
                <Play className="w-5 h-5" />
                Features
              </button>
            </a>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 border-t border-white/20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center mb-3">
                  <stat.icon className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-white/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
      {/* top tube */}
      <div
        className="gentle-float absolute -top-65 -left-20 rotate-180 opacity-80 
                sm:top-[-260px] sm:left-[-40px]
                md:top-[-200px] md:left-[-80px]
                lg:top-[-250px] lg:left-[-100px]
                xl:top-[-260px] xl:left-[-140px] 
                w-[400px] sm:w-[350px] md:w-[500px] lg:w-[600px] xl:w-[600px]"
      >
        <img src={tube} alt="tube" className="w-full h-auto object-contain" />
      </div>
      {/* botton tube */}
      <div
        className=" absolute bottom-50 -right-5 opacity-80 
             sm:bottom-[120px] sm:right-[-40px]
             md:bottom-[150px] md:right-[-80px]
             lg:bottom-[-140px] lg:right-[-100px]
             xl:bottom-[10px] xl:right-[-140px]
             w-[300px] sm:w-[350px] md:w-[400px] lg:w-[600px] xl:w-[600px]"
      >
        <img
          src={Element4}
          alt="tube"
          className="liquid-element-Hero animate-float-xy w-full h-auto object-contain"
        />
      </div>
      {/* top star */}
      <div
        className="animate-star-one absolute -top-10 right-10 opacity-80 
            md:top-5 lg:right-20
            w-10 sm:w-12 md:w-14 lg:w-16 xl:w-16"
      >
        <img src={star} alt="star" className="w-full h-auto object-contain" />
      </div>
      {/* bottom star */}
      <div
        className="animate-star-two absolute bottom-110 left-10 opacity-80 
            md:bottom-80 lg:left-40
            w-10 sm:w-12 md:w-14 lg:w-16 xl:w-16"
      >
        <img src={star} alt="star" className="w-full h-auto object-contain" />
      </div>
    </div>
  );
};

export default BusinessHeroSection;
