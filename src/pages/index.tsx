import HeroSection from "@/features/HomePage/HeroSection/HeroSection";
import AppLayout from "../components/AppLayout/AppLayout";
import MetaTag from "@/components/Seo/MetaTag";

// import HeroSection from "../components/Home/HeroSection/HeroSection";
// import AboutUs from "../components/Home/AboutUs/AboutUs";
// import OurClient from "../components/Home/OurPartner/OurPartner";
// import ContactUs from "../components/Home/ContactUs/ContactUs";
// import OurProduct from "../components/Home/OurProduct/OurProduct";
// import OurService from "../components/Home/OurService/OurService";


import AboutUs from "@/features/HomePage/AboutUs/AboutUs";
import OurService from "@/features/HomePage/OurService/OurService";
import OurProduct from "@/features/HomePage/OurProduct/OurProduct";
import ContactUs from "@/features/HomePage/ContactUs/ContactUs";
import OurPartner from "@/features/HomePage/OurPartner/OurPartner";


export default function Home() {
  return (
    <>
     <MetaTag image="/seo/codework-meta-cover-v2.jpg" />

      <AppLayout>
        <HeroSection />
        <AboutUs />
        <OurService />
        <OurProduct />
        <OurPartner />
        <ContactUs />
      </AppLayout>
    </>
  );
}

