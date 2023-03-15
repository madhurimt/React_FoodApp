import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import BodyComponent from "./components/Body";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <>
      <Header />
      <BodyComponent />
      <Footer />
    </>
  );
};

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<AppLayout />);
