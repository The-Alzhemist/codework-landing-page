import React from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import MetaTag from "@/components/MetaTag/MetaTag";
import FormPage from "@/features/ContactPage/FormPage";
import BackgroundGradientBlur from "@/components/BackgroundGradientBlur/BackgroundGradientBlur";



const ContactUsPage = () => {
  return (
    <>
      <MetaTag title="CodeWork Tech | Contact Us" description="Get in touch with us and make your dream come true. Let’s create something extraordinary together!" image="/seo/metatag-contact-us.png"  />

      <AppLayout>
        <div className="w-full relative overflow-hidden flex flex-col items-center z-20 min-h-[500px] justify-center ">
      
        <FormPage/>
        </div>
      </AppLayout>
    </>
  );
};

export default ContactUsPage;
