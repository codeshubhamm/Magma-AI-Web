import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="w-full py-12 bg-white relative" id="about">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">06</span>
            <span>About Us</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image and Founder Info */}
          <div className="space-y-8">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <div className="aspect-w-4 aspect-h-3">
                <img 
                  src="/background-section1.png" 
                  alt="Magma Studio" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-elegant">
              <h3 className="text-2xl font-display font-bold mb-4">Heyy, I'm Shubham Gungunwar</h3>
              <p className="text-gray-700 mb-4">
                Founder & Co-Founder of Magma Studio, a dynamic full-stack web development agency. 
                While we excel in creating powerful web solutions, we're also passionate about exploring 
                cutting-edge technologies like AI. MagmaAI is just one of our innovative ventures, 
                showcasing our commitment to pushing technological boundaries.
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href="https://github.com/shubhamgungunwar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-pulse-500 hover:text-pulse-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Mission and Values */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-elegant">
              <h3 className="text-2xl font-display font-bold mb-6">Our Mission</h3>
              <p className="text-gray-700 mb-6">
                At Magma Studio, we're not just developers – we're innovators and problem solvers. 
                From crafting robust web applications to exploring the frontiers of AI technology, 
                we're committed to delivering excellence across all our ventures.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-pulse-500 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Full-Stack Excellence</h4>
                    <p className="text-gray-600">Delivering comprehensive web solutions from frontend to backend</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-pulse-500 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Innovation Hub</h4>
                    <p className="text-gray-600">Exploring and implementing cutting-edge technologies like AI and machine learning</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-pulse-500 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Client Success</h4>
                    <p className="text-gray-600">Building long-term partnerships and delivering solutions that drive business growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 