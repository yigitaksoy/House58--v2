import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { motion, useScroll } from "framer-motion";
import LogoWhite from "../assets/images/logos/house58.png";
import LogoBlack from "../assets/images/logos/house58-black.png";

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [navColorClass, setNavColorClass] = useState("text-house-black");
  const [navLogo, setNavLogo] = useState(LogoWhite);
  const navRef = useRef();
  const prevScrollY = useRef(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update nav appearance based on intersection
        if (entry.isIntersecting) {
          setNavColorClass("text-white");
          setNavLogo(LogoWhite);
        } else {
          setNavColorClass("text-house-black");
          setNavLogo(LogoBlack);
        }
      },
      {
        root: null, // viewport
        threshold: 0.1, // Trigger when 50% of the hero section is visible
      },
    );

    // Start observing the hero section
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      observer.observe(heroSection);
    }

    // Clean up observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we're at the top of the page
      if (window.scrollY === 0) {
        setHidden(false); // Always show the navbar at the top of the page
      } else {
        setHidden(scrollY.current > prevScrollY.current);
      }
      prevScrollY.current = scrollY.current;
    };

    const unsubscribe = scrollY.onChange(handleScroll);

    return () => unsubscribe();
  }, [scrollY]);

  const handleLogoClick = (event) => {
    if (location.pathname === "/") {
      event.preventDefault();
      gsap.to(window, {
        duration: 1.6,
        scrollTo: { y: 0, autoKill: false },
        ease: "power4.inOut",
      });
    } else {
      navigate("/");
    }
  };

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 },
  };

  return (
    <motion.nav
      id="navbar"
      ref={navRef}
      variants={variants}
      initial={{ opacity: 0 }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      className={`fixed top-14 w-full z-50 lg:px-10 flex justify-between items-center h-10 lg:pl-28 lg:pr-20 bg-transparent ${navColorClass}`}
      role="navigation"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex justify-start items-center w-full lg:w-auto"
      >
        <Link
          to="/"
          className={`object-fit  transition duration-300 ${navColorClass}`}
          onClick={handleLogoClick}
        >
          <motion.img
            src={navLogo}
            alt="logo"
            className="object-fit w-36 h-18 transition duration-300"
          />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex justify-end items-center gap-4 md:gap-8 pr-4 md:pr-10 w-full lg:w-auto"
      >
        <Link
          to="/services"
          className={`hover:text-house-bluelight transition font-heavy duration-300 ${navColorClass}`}
        >
          Services
        </Link>
        <Link
          to="/contact"
          className={`hover:text-house-bluelight transition font-heavy duration-300 ${navColorClass}`}
        >
          Contact
        </Link>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
