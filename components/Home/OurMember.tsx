import React from "react";
const dataList = [
  {
    id: 1,
    name: "Elon Much",
    position:
      "Software Developer",
  },
  {
    id: 2,
    name: "Nicolas",
      position:
      "Software Developer",
  },
  {
    id: 3,
    name: "John",
      position:
      "Software Developer",
  },
  {
    id: 4,
    name: "Emmy",
      position:
      "Software Developer",
  },
  {
    id: 5,
    name: "Terra",
      position:
      "Software Developer",
  },
  {
    id: 6,
    name: "Andrew",
    position:
    "Software Developer",
  },
  {
    id: 6,
    name: "Nadia",
    position:
    "Software Developer",
  },
  {
    id: 6,
    name: "Lucus",
    position:
    "Software Developer",
  },
];

const OurMember = () => {
  return (
    <section className="max-w-7xl mx-auto py-[30px] md:py-[50px] px-4 ">
      <h2 className="text-left mb-5 text-3xl md:text-5xl font-extrabold uppercase">
        Our Members
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
       {dataList?.map((item, index) => (
     <div key={index}  className="grid justify-center text-center">
     <img
       className="rounded-full mb-4"
       src="https://placehold.co/150x150"
       alt=""
     />
     <div className="font-bold text">{item.name}</div>
     <div className="font-sm text-sm">{item.position}</div>
   </div>
      ))} 
       
      </div>
    </section>
  );
};

export default OurMember;
