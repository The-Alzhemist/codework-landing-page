import React from "react";

const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto py-[30px] md:py-[50px] px-4 ">
      <h2 className="text-left mb-5 text-3xl md:text-5xl font-extrabold uppercase">
        About Us
      </h2>
      <div className="border-2 rounded-md  border-slate-700 bg-[#C8D94C]  font-semibold text-2xl p-[30px] md:p-[100px] text-center">
       {`We are thrilled to announce the launch of our brand-new software house,
        and we can't wait to partner with you on your next project! At our
        state-of-the-art development hub, we've assembled a team of highly
        skilled and experienced senior developers and designers who are eager to
        bring your ideas to life.`} 
      </div>
    </section>
  );
};

export default AboutUs;
