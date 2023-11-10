import { useRef, useState, useLayoutEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Logo from "../assets/images/logos/house58.png";

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const navRef = useRef();
  const [navBackground, setNavBackground] = useState("bg-transparent");
  const prevScrollY = useRef(0);
  const navigate = useNavigate();
  const location = useLocation();

  useLayoutEffect(() => {
    // GSAP animation for fade in on mount
    gsap.set(navRef.current, { autoAlpha: 1 });

    gsap.from(navRef.current, {
      autoAlpha: 0,
      duration: 0.5,
      delay: 0.5,
      ease: "power4.out",
    });

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const isTop = window.scrollY < 50;

      // Show or hide navbar based on scroll direction
      gsap.to(navRef.current, {
        yPercent: currentScrollY > prevScrollY.current && !isTop ? -100 : 0,
        ease: "power1.out",
        duration: 0.6,
      });

      // Update navbar background based on scroll position
      setNavBackground(
        currentScrollY > 50 ? "bg-house-black" : "bg-transparent",
      );

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      gsap.killTweensOf(navRef.current); // Kills any ongoing animations on the navbar
    };
  }, []);

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

  return (
    <nav
      id="navbar"
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 lg:px-16 py-7 transition-colors duration-300 ${navBackground}`}
      role="navigation"
    >
      <Link to="/" onClick={handleLogoClick}>
        <img src={Logo} alt="Company logo" className="w-36 h-auto" />
      </Link>
      <div className="flex gap-6 lg:gap-20 text-md font-bold">
        <Link
          to="/"
          className="text-white hover:text-house-bluelight transition duration-200"
        >
          About
        </Link>
        <Link
          to="/"
          className="text-white hover:text-house-bluelight transition duration-200"
        >
          Services
        </Link>
        <Link
          to="/"
          className="text-white  hover:text-house-bluelight transition duration-200"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
