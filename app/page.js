import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import NewsDe from "./news_de";
import Header from "./header";
import Search from "./search";
import Footer from "./footer";


export default function Home() {
  return (
    <>
      <Header/>
      <Search/>
      <NewsDe/>
      <Footer/>
    </>
    );
}
