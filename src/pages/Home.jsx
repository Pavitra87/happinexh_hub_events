import React from 'react';
import ChooseUs from './ChooseUs';
import Services from './Services';
import { Link } from 'react-router-dom'; 
import img9 from '../assets/img9.PNG';
import { portfolioImages } from '../data';
import PageTransition from '../components/PageTransition';


const Home = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <PageTransition>
    <section className="bg-[#FDF6F9] min-h-[80vh] flex items-center px-8 sm:px-6 md:px-12 lg:px-24 py-12 md:py-20 overflow-hidden mt-20 xs:mt-10">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-9 items-center">
        
        {/* Left Side: Text Content */}
        <div className="order-2 md:order-1 animate-fade-in-left ">
          <h1 className="text-5xl sm:text-5xl md:text-7xl  xs:mx-auto font-serif font-bold text-brand-black leading-tight">
           Your Hub For <br />  Unforgettable Events
          </h1>
          <p className="mt-6   text-gray-500 text-lg  md:text-xl  leading-relaxed">
            From intimate proposals to grand celebrations, we bring your 
            dream events to life with elegance and perfection.
          </p>
          
          <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
            <Link to='/portfolio' className="bg-primary hover:bg-primary-dark text-white sm:px-4 px-8 py-4 rounded-full font-semibold shadow-lg transition-all">
              Explore Events
            </Link>
           
          </div>
        </div>

        {/* Right Side: Image & Floating Card */}
        <div className="order-1 md:order-2 relative flex justify-center md:justify-end animate-fade-in-right">
          <div className="relative w-full max-w-[500px]">
            {/* Main Rounded Image */}
            <img 
              src={img9}
              alt="Event Setup" 
              className="rounded-[3rem] shadow-2xl w-full h-[400px] sm:h-[550px] md:h-[550px] object-cover"
            />

            {/* Floating Stats Card */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 md:-left-12 bg-white p-1 sm:p-2 md:p-4 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center">
              <span className="text-1xl md:text-2xl font-bold text-brand-black">150+</span>
              <span className="text-gray-500 sm:text-xs text-sm  mt-1  tracking-wide">
                Events Completed
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
    <section className='!mt-[-50px]'>
    <ChooseUs/>
    </section>
   <section className='!mt-[-120px]'><Services/></section>
   <section className="py-16 px-8 sm:px-6 md:px-12 lg:px-24 bg-white !mt-[-70px]">
      {/* Header */}
      <div className="text-center mb-12 max-w-7xl mx-auto animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl  font-bold text-brand-black mb-1 ">
          Our Portfolio
        </h2>
        <p className="text-gray-500 leading-relaxed  mb-8">
          Take a look at some of the beautiful events we've brought to life.
        </p>
      </div>

      {/* Responsive Image Grid - 6 Images Only */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {portfolioImages.slice(0, 6).map((image, idx) => (
          <div 
            key={image.id} 
            className="group relative overflow-hidden rounded-[2rem] shadow-md transition-all duration-300 hover:shadow-xl"
            style={{
              animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
            }}
          >
            {/* Image Wrapper for Aspect Ratio */}
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={image.url} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center">
        <Link 
          to="/portfolio" 
          onClick={handleScrollToTop}
          className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full font-semibold shadow-lg transition-all inline-block"
        >
          View All Portfolio
        </Link>
      </div>
    </section>
    </PageTransition>
  );
};

export default Home;