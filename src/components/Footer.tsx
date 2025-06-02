import React from "react";
const Footer = () => {
  return <footer className="w-full bg-white py-0">
      <div className="section-container">
        <p className="text-center text-gray-600 text-sm">
          Made with ❤️ by{" "}
          <a href="https://github.com/shubhamgungunwar" target="_blank" rel="noopener noreferrer" className="text-pulse-500 hover:underline">
            Shubham Gungunwar
          </a>{" "}
          and{" "}
          <span className="text-pulse-500">
            AI
          </span>
        </p>
      </div>
    </footer>;
};
export default Footer;
