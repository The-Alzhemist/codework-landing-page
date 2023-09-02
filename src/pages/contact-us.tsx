import React from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import MetaTag from "@/components/Seo/MetaTag";
import FormPage from "@/features/ContactPage/FormPage";


const ContactUsPage = () => {
  return (
    <>
      <MetaTag />

      <AppLayout>
        <div className="flex flex-col items-center z-20 min-h-[500px] justify-center ">
        <FormPage/>
        </div>
      </AppLayout>
    </>
  );
};

export default ContactUsPage;
