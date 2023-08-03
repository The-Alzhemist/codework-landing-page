import React from "react";

const dataList = [
  {
    id: 1,
    name: "UX/UI Design",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet",
  },
  {
    id: 2,
    name: "Project Solution Consulting",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet",
  },
  {
    id: 3,
    name: "Web Development",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet",
  },
  {
    id: 4,
    name: "Mobile app Development",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet",
  },
  {
    id: 5,
    name: "Digital Marketing",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet",
  },
  {
    id: 6,
    name: "Digital Transformation Consulting",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet",
  },
];
const OurService = () => {
  return (
    <section className="max-w-7xl mx-auto py-[30px] md:py-[50px] px-4 ">
      <h2 className="text-left mb-5 text-3xl md:text-5xl font-extrabold uppercase">
        Our service
      </h2>
      <div className="grid md:grid-cols-3 gap-10">
        {dataList.map((item, index) => (
          <div key={index} className="flex flex-col max-w-[400px] border-[2px] border-slate-900 rounded-md">
            <img className="rounded-md" src="https://placehold.co/400x150" alt="" />
            <div className="p-3">
              <h3 className="font-bold  text-xl border-b-[5px] border-[#C8D94C] inline">{item.name}</h3>
              <p className="text-sm opacity-70 my-2">
              {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurService;
