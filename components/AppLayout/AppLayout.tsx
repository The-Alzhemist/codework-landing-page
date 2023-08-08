import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";
import { FunctionComponentType } from "../../interfaces/FunctionComponentType";
import withAppLayout from "./withAppLayout";
import { Header } from "./components/NavigationBar/Header";

const AppLayout = ({ children }: FunctionComponentType) => {
  return (
    <>
      {/* <NavigationBar /> */}
      <Header/>
      <main className="px-5">{children}</main>
      <Footer />
    </>
  );
};


const WrappedComponent = withAppLayout(AppLayout)
export default WrappedComponent