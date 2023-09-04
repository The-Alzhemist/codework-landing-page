import React from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import MetaTag from "@/components/Seo/MetaTag";


const projects = () => {
  return (
    <>
      <MetaTag />

      <AppLayout>
        <div className="text-right text-xl flex flex-col items-center z-20 min-h-[500px] justify-center">
          <div className="font-normal text-4xl bg-line ml-3">
            Project page is coming soon...
          </div>
        </div>
      </AppLayout>
    </>
  );
};

export default projects;
