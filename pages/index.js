// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
import Script from "next/script";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Head from "next/head";
import Image from "next/image";
import MainSection from "../components/mainSection";

export default function Home() {
  return (
    <div
      css={css`
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #101010;
        height: 100vh;
      `}
    >
      <Script
        id="google-analytics-1"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-LD3GCMKT13%22%3E"
      ></Script>
      <Script id="google-analytics-2">
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-LD3GCMKT13');
      </Script>
      <Head>
        <title>How Burn Out Are You?</title>
        <meta
          name="description"
          content="Burnout is a state of emotional, physical, and mental exhaustion caused by excessive and prolonged stress. It occurs when you feel overwhelmed, emotionally drained, and unable to meet constant demands."
        />

        <meta property="og:image" content="/landingImage.svg" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/Avenir-Black.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Avenir-BlackOblique.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Avenir-Book.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Avenir-BookOblique.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Avenir-Heavy.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Avenir-Light.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Avenir-Medium.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Avenir-Roman.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Avenir-HeavyOblique.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Avenir-LightOblique.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Avenir-MediumOblique.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Avenir-Oblique.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>

      <main>
        <MainSection />
      </main>

      <footer>
        {/* <a
          href="https://www.getairvoice.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image
              src="/airvoice.png"
              alt="Vercel Logo"
              width={72}
              height={16}
            />
          </span>
        </a> */}
      </footer>
    </div>
  );
}
