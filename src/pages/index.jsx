import Head from "next/head";
import { Suspense } from "react";
//= Layout
import MainLayout from "@layouts/Main";
//= Components
import Navbar from "@components/Navbars/SoftwareNav";
import Header from "@components/Software/Header";
import Testimonials from "@components/Software/Testimonials";
import Services from "@components/Software/Services";
import About from "@components/Software/About";
import Technology from "@components/Software/Technology";
import Projects from "@components/Software/Projects";
import Pricing from "@components/Software/Pricing";
import Team from "@components/Software/Team";
import Blog from "@components/Software/Blog";
import ChatBanner from "@components/Software/ChatBanner";
import Footer from "@components/Software/Footer";
import Form from "@components/Contact/Form";

const LandingPreview = () => {
  return (
    <>
      
        <Head>
          <title>Iteck - Software Company</title>
        </Head>

        <MainLayout>
          <Navbar />
          <Header />
          <main>
            {/* <Testimonials />
          <Services /> */}
            <About />
            <Technology />
            {/* <Projects />
          <Pricing /> */}
            <Team />
            {/* <Blog /> */}
            <ChatBanner />
            <Form style="5" />
          </main>
          <Footer />
        </MainLayout>
  
    </>
  );
};

export default LandingPreview;
