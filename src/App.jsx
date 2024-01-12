import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Body from "./components/Body.jsx";
import Content from "./components/Content.jsx";
import MoreContent from "./components/MoreContent.jsx";
import Footer from "./components/Footer.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Founders from "./components/Founders.jsx";
import Activities from "./components/Activities.jsx";
import Auth from "./components/Auth.jsx";
import Header from "./components/Header.jsx";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Content />
      <MoreContent />
      <Testimonial />
      <Founders />
      <Activities />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<AppLayout />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
