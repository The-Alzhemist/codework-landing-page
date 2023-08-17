import React from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import MetaTag from "@/components/seo/MetaTag";
import ContactUsForm from "@/components/ContactUs/contactus-form";

const ContactUsPage = () => {
  return (
    <>
      <MetaTag />

      <AppLayout>
        <div className="text-right text-xl flex flex-col items-center z-20 min-h-[500px] justify-center">
          <div className="font-normal text-4xl bg-line ml-3">
            Contact us page is coming soon...
          </div>
        </div>

       <ContactUsForm/>
      </AppLayout>
    </>
  );
};

export default ContactUsPage;
