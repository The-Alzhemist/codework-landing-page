import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";
import { FunctionComponentType } from "../../interfaces/FunctionComponentType";
import withAppLayout from "./withAppLayout";
import { Prompt } from "@next/font/google";
import { fontPromptInterface } from "./components/interface";



const fontPrompt = Prompt({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-prompt",
});


const AppLayout = ({ children }: FunctionComponentType) => {
  return (
    <>
      <NavigationBar fontPrompt={fontPrompt} />
      <main className={`${fontPrompt.variable} font-prompt px-5 text-secondary bg-primary-100 lg:bg-transparent`}>{children}</main>
      <Footer fontPrompt={fontPrompt}/>
    </>
  );
};


const WrappedComponent = withAppLayout(AppLayout)
export default WrappedComponent