import React, { Suspense } from "react";
import { Route, Routes } from "react-router";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

//const YogaClass = React.lazy(() => import("./components/yogaClass/YogaClass"));
const TrainersPage = React.lazy(() =>
  import("./components/trainersPage/TrainersPage")
);

//const Blog = React.lazy(() => import("./components/blog/Blog"));

const Contact = React.lazy(() => import("./components/contact/Contact"));
//const Schedule = React.lazy(() => import("./components/schedule/Schedule"));

const ErrorPage = React.lazy(() => import("./components/errorPage/ErrorPage"));

const App = () => {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
  
          <Route path="trainers" element={<TrainersPage />} />
          
          <Route path="contact" element={<Contact />} />
    
          <Route path="errorPage" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
