import Title from "@/app/Shared/Title/Title";
import React from "react";

const About = () => {
  return (
    <div className="bg-[#012741] px-4 ">
      <div className="max-w-[1300px] mx-auto">
        {/* Title */}
        <div className="flex items-center pt-20  justify-center">
          <Title title="About Me"></Title>
        </div>

        <div className=" px-4 rounded-lg  flex flex-col md:flex-row justify-between items-center  p-10 gap-3">
          <p className=" text-white text-justify w-full">
            I'm Md Abdur Raman, a dedicated Performance Marketing & Tracking
            Specialist with a sharp focus on driving measurable growth through
            strategic advertising and precise analytics. I specialize in Google
            Ads (Building and optimizing high-ROI campaigns across Search,
            Display, Shopping, and YouTube), Meta Ads (Crafting full-funnel
            strategies on Facebook and Instagram to engage, convert, and retain
            customers), and Web Analytics & Tracking (Implementing advanced
            tracking solutions using Google Tag Manager (GTM) and Google
            Analytics 4 (GA4) to ensure clean, actionable data powers every
            decision). My strength lies in blending creative ad strategy with
            technical expertise—ensuring every click, impression, and conversion
            is accounted for. I work with brands to not only reach the right
            audience but to fully understand and scale what works. If you're
            looking to elevate your marketing with performance-backed strategies
            and reliable analytics, you're in the right place.
          </p>
          <div className="w-full  flex items-center justify-center">
            <img
              className=" w-[400px] h-[600pxn] "
              src="/assets/banner.png"
              alt="Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
