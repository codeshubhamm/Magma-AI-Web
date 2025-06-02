import React from "react";

const MadeByHumans = () => {
  return (
    <section id="made-by-humans" className="w-full bg-white py-12">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden relative">
          <div 
            className="bg-no-repeat bg-cover bg-center p-8 sm:p-12 min-h-[300px] sm:min-h-[400px] flex flex-col justify-between relative" 
            style={{
              backgroundImage: "url('/background-section3.png')",
              backgroundPosition: "center center"
            }}
          >
            {/* Overlay gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>
            
            {/* Main Text */}
            <div className="relative z-10 text-center">
              <h2 className="font-playfair text-white italic font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                Made By
                <br />
                <span className="font-normal">Shubham Gungunwar 🦄</span>
              </h2>
            </div>
            
            {/* Decorative bottom element */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MadeByHumans;
