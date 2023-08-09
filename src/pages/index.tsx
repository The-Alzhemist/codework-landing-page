
import { Inter } from "next/font/google";
import HeroSection from "../../components/Home/HeroSection/HeroSection";
import AboutUs from "../../components/Home/AboutUs/AboutUs";

import OurClient from "../../components/Home/OurClient/OurClient";
import OurMember from "../../components/Home/OurMember";
import ContactUs from "../../components/Home/ContactUs/ContactUs";
import Footer from "../../components/AppLayout/components/Footer/Footer";
import AppLayout from "../../components/AppLayout/AppLayout";
import TeamCulture from "../../components/Home/TeamCulture/TeamCulture";
import OurProduct from "../../components/Home/OurProduct/OurProduct";
import OurService from "../../components/Home/OurService/OurService";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <AppLayout>
        <HeroSection /> 
        <AboutUs />
        <OurService/>
        {/* <TeamCulture/> */}
        <OurProduct />
       <OurClient />
       {/* <OurMember /> */}
        <ContactUs />  
      </AppLayout>
    </>
  );
}
