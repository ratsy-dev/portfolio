import Navbar from "./sections/navbar/nav";
import Header from "./sections/header/header";
import About from "./sections/about/about";
import Services from "./sections/services/services";
import Portfolio from "./sections/portfolio/portfolio";
import Testimonials from "./sections/Testimonials/testimonials";
import FAQs from "./sections/faqs/faqs";
import Contact from "./sections/contact/contact";
import Footer from "./sections/footer/footer";
import FloatingNav from "./sections/floating-nav/floatingnav";
import Theme from "./theme/theme";
import { useThemeContext } from "./context/theme-context";
import { useRef, useState, useEffect, useCallback } from "react";

const App = () => {
  const { themeState } = useThemeContext();

  const mainRef = useRef();
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPostion, setSiteYPosition] = useState(0);

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  };

  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  };

  // check if floating nav should be shown or hidden
  // const floatingNavToggleHandler = () => {
  //   // check if we scrolled up or down at least 20px
  //   if (
  //     siteYPostion < mainRef?.current?.getBoundingClientRect().y - 20 ||
  //     siteYPostion > mainRef?.current?.getBoundingClientRect().y + 20
  //   ) {
  //     showFloatingNavHandler();
  //   } else {
  //     hideFloatingNavHandler();
  //   }

  //   setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
  // };

  // check if floating nav should be shown or hidden
  const floatingNavToggleHandler = useCallback(() => {
    // check if we scrolled up or down at least 20px
    const currentY = mainRef?.current?.getBoundingClientRect().y;

    if (siteYPostion < currentY - 20 || siteYPostion > currentY + 20) {
      showFloatingNavHandler();
    } else {
      hideFloatingNavHandler();
    }

    setSiteYPosition(currentY);
  }, [siteYPostion]);

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 2000);

    // cleanup function
    return () => clearInterval(checkYPosition);
  }, [floatingNavToggleHandler]);

  return (
    <main
      className={`${themeState.primary} ${themeState.background}`}
      ref={mainRef}
    >
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
      <Theme />
      {showFloatingNav && <FloatingNav />}
    </main>
  );
};

export default App;
