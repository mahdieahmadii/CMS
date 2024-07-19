import React from "react";
import Header from "../../components/Header/Header";
import LastCourses from "../../components/LastCourses/LastCourses";
import AboutUs from "../../components/AboutUs/AboutUs";

import "./Index.css";

export default function Index() {
  return (
    <>
      <Header />
      <LastCourses />
      <AboutUs />
    </>
  );
}
