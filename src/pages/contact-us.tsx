import React from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import MetaTag from "@/components/seo/MetaTag";
import ContactForm from "@/components/ContactUs/FormSpree-form";

const ContactUsPage = () => {
  return (
    <>
      <MetaTag />

      <AppLayout>
        <div className="flex flex-col items-center z-20 min-h-[500px] justify-center ">
        <ContactForm />
        </div>
      </AppLayout>
    </>
  );
};

export default ContactUsPage;
