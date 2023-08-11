import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";
import { FunctionComponentType } from "../../interfaces/FunctionComponentType";
import withAppLayout from "./withAppLayout";
import { Prompt } from "@next/font/google";


const fontPrompt = Prompt({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-prompt",
});

const AppLayout = ({ children }: FunctionComponentType) => {

  return (
    <>
      <NavigationBar font={fontPrompt} />
      {/* <Header/> */}
      <main className="px-5 text-secondary bg-primary-200 sm:bg-transparent">{children}</main>
      <Footer />
    </>
  );
};


const WrappedComponent = withAppLayout(AppLayout)
export default WrappedComponent