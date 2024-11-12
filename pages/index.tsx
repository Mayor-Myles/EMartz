import type { NextPage } from "next";
//import Head from "next/head";
//import Image from "next/image";
//import styles from "../styles/Home.module.css";
import TopNavbar from "../components/topNavbar";
import  Hero from "../components/hero";
import  FastSelling from "../components/fastSelling";

import FeaturedProducts from "../components/featuredProducts";

import Testimonials from "../components/testimonials";

import NewsletterSubscription from "../components/newsletter";

import Categories from "../components/categories";

import Footer from "../components/footer";



const Home: NextPage = () => {
  return (
    <>
    <TopNavbar/>
    <Hero/>
      <FeaturedProducts/>
      <FastSelling/>
      <Categories/>
      <Testimonials/>
      <NewsletterSubscription/>
     
      <Footer/>
    </>
  );
};

export default Home;
