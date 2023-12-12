import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import {
  About,
  Main,
  Navbar,
  Tracks,
  Rules,
  Timeline,
  Footer,
  FAQ,
  Prizes,
  Sponsors,
} from "../components";

const Home=()=>{
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Hack The Verse | Hackathon</title>
        {/* <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" /> */}
        <script
          defer
          data-domain=""
          src="https://plausible.io/js/plausible.js"
        ></script>
        {/* <Script
          src="https://plausible.io/js/plausible.js"
          strategy="beforeInteractive"
        /> */}
      </Head>
      <div className="flex flex-col gap-5">
        <div className="page-bg"></div>
        <Navbar />

        <div className="container">
          {/* <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div class="circle-container">
    <div class="circle"></div>
  </div> */}
          {/* <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>

          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>

          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div> */}
        </div>


        <Main />

        <About />

        <Timeline/>
        <Prizes />
        <Sponsors />
        <Rules />
        <Tracks />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}

export default dynamic (()=>Promise.resolve(Home),{ssr:false})
