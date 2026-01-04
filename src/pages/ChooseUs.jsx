import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import img2 from '../assets/img2.jpg';
import img8 from '../assets/img8.PNG';
import PageTransition from '../components/PageTransition';

const ChooseUs = () => {
  const features = [
    "Expert event planning & coordination",
    "Custom design & decoration",
    "Vendor management & coordination",
    "Budget planning & optimization",
    "Timeline creation & execution",
    "On-site event management"
  ];

 

  return (
    <PageTransition>
    <div className="py-16 px-4 sm:px-6 md:px-12 px-12 lg:px-24 bg-white md:mt-20 sm:mt-10 mt-15">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content */}
        <div className="animate-fade-in-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Us
          </h2>
          
          <p className="text-gray-600 leading-relaxed mb-10 max-w-xl">
            With over a decade of experience in event planning, we've perfected the art of 
            creating magical moments that last a lifetime. Our dedicated team ensures every 
            detail is flawlessly executed, allowing you to fully enjoy your special day.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 md:mb-12 mb-5">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0" />
                <span className="text-brand-black font-medium text-sm md:text-base">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Stats Row */}
        
        </div>

        {/* Right Side: Images */}
      <div className="hidden md:flex flex-col sm:flex-row gap-4 h-[350px] md:h-[500px] animate-fade-in-right">

          {/* Main Wedding Party Image */}
          <div className="flex-1 rounded-[2rem] overflow-hidden shadow-lg">
            <img 
              src={img2}
              alt="Wedding celebration"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Close-up Ring/Couple Image */}
          <div className="flex-1 rounded-[2rem] overflow-hidden shadow-lg transform translate-y-8 lg:translate-y-12">
            <img 
              src={img8} 
              alt="Couple close up"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </div>
    </PageTransition>
  );
};

export default ChooseUs;