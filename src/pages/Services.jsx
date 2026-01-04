import React from 'react';
import { 
  Cake, 
  Heart, 
 
  UserRound, 
  Sparkles, 
  Building2, 
  Briefcase, 
  PartyPopper ,
  Gem
} from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Services= () => {
  const events = [
    {
      title: "Birthday Parties",
      description: "Celebrate another year with joy, laughter, and unforgettable memories for all ages.",
      cta: "Plan Birthday",
      icon: <Cake className="w-6 h-6 text-purple-500" />,
      bgColor: "bg-[#F5F3FF]" // Light Purple
    },
   
    {
      title: "Weddings",
      description: "Your perfect day deserves perfect planning. From ceremony to reception, we handle it all.",
      cta: "Plan Wedding",
      icon: <Heart className="w-6 h-6 text-pink-700" />,
      bgColor: "bg-[#FFF1F2]" // Light Pink
    },
   
    {
      title: "Engagements",
      description: "Celebrate your commitment with an elegant engagement party your guests will remember.",
      cta: "Plan Engagement",
      icon: <UserRound className="w-6 h-6 text-yellow-600" />,
      bgColor: "bg-[#FFFBEB]" // Light Yellow/Cream
    },
    {
      title: "Anniversaries",
      description: "Mark your milestones with celebrations that honor your journey together.",
      cta: "Plan Anniversary",
      icon: <Sparkles className="w-6 h-6 text-blue-500" />,
      bgColor: "bg-[#EFF6FF]" // Light Blue
    },
     {
      title: "Proposals",
      description: "Pop the question in the most romantic and memorable way possible.",
      cta: "Plan Proposal",
      icon: <Gem className="w-6 h-6 text-red-300" />,
      bgColor: "bg-[#FEF2F6]" // Very Light Red/Pink
    },
    {
      title: "Grand Openings",
      description: "Launch your business with a spectacular opening event that attracts attention.",
      cta: "Plan Opening",
      icon: <Building2 className="w-6 h-6 text-green-500" />,
      bgColor: "bg-[#F0FDF4]" // Light Green
    },
    {
      title: "Corporate Events",
      description: "Professional events that leave lasting impressions on clients and employees.",
      cta: "Plan Corporate",
      icon: <Briefcase className="w-6 h-6 text-indigo-500" />,
      bgColor: "bg-[#F5F3FF]" // Light Indigo
    },
    {
      title: "Special Occasions",
      description: "Any celebration you can dream of, we can bring to life with creativity and care.",
      cta: "Plan Event",
      icon: <PartyPopper className="w-6 h-6 text-orange-500" />,
      bgColor: "bg-[#FFF7ED]" 
    }
  ];

  return (
    <PageTransition>
 <div className="py-20 px-8 sm:px-6 md:px-12 bg-white mt-10 md:mt-20">

      {/* Section Header */}
      <div className="text-center mb-9 max-w-7xl mx-auto animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-1 md:mb-3">
          Our Specializations
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed  ">
          Every occasion deserves to be celebrated in style. Discover our comprehensive event planning services.
        </p>
      </div>

      {/* Grid of Event Cards */}
    <div className="w-full max-w-2xl sm:max-w-4xl md:max-w-7xl lg:max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {events.map((event, index) => (
          <div 
            key={index} 
            className={`${event.bgColor} p-8 rounded-3xl  transition-transform hover:scale-[1.02] hover:shadow-md cursor-default`}
          >
            {/* Icon Circle */}
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
              {event.icon}
            </div>

            <h3 className="text-xl  font-bold text-brand-black mb-3">
              {event.title}
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {event.description}
            </p>

           
          </div>
        ))}
      </div>
    </div>
    </PageTransition>
  );
};

export default Services;