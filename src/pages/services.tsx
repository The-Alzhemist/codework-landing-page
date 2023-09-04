import React from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import MetaTag from "@/components/MetaTag/MetaTag";

const Services = () => {
  return (
    <>
      <MetaTag />

      <AppLayout>
        <div className="text-right text-xl flex flex-col items-center z-20 min-h-[500px] justify-center">
          <div className="font-normal text-4xl bg-line ml-3">
            Services page is coming soon...
          </div>
        </div>
      </AppLayout>
    </>
  );
};

export default Services;
