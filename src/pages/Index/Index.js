import React from "react";
import Header from "../../components/Header/Header";
import LastCourses from "../../components/LastCourses/LastCourses";
import AboutUs from "../../components/AboutUs/AboutUs";
import PopularCourses from "../../components/PopularCourses/PopularCourses";
import PresellCourses from "../../components/PresellCourses/PresellCourses";
import LastArticles from "../../components/LastArticles/LastArticles";

import "./Index.css";
import Footer from "../../components/Footer/Footer";

export default function Index() {
  return (
    <>
      <Header />
      <LastCourses />
      <AboutUs />
      <PopularCourses />
      <PresellCourses />
      <LastArticles />
      <Footer />
    </>
  );
}
