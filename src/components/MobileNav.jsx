import { useRef, useState, useLayoutEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import LogoWhite from "../assets/images/logos/house58.png";

gsap.registerPlugin(ScrollToPlugin);

const MobileNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  let el = useRef(null);
  let q = gsap.utils.selector(el);
  const tl = useRef(null);
  const tl2 = useRef(null);

  const handleLogoClick = (event) => {
    if (location.pathname === "/") {
      event.preventDefault();

      // Check if the scroll position is already at the top
      if (window.scrollY !== 0) {
        // If not at the top, then scroll to the top with animation
        gsap.to(window, {
          duration: 1.6,
          scrollTo: { y: 0, autoKill: false },
          ease: "power4.inOut",
        });
      }
    } else {
      navigate("/");
    }
  };

  useLayoutEffect(() => {
    tl2.current = gsap
      .timeline()
      .fromTo(
        el.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 1, ease: "power3.out" },
        0.5,
      );

    tl.current = gsap
      .timeline({ reversed: true })
      .to(
        q(".nav-side"),
        { translateX: 0, duration: 0.5, ease: "power2.inOut" },
        0,
      )
      .to(
        q(".nav-round"),
        { scaleX: 0, duration: 0.5, ease: "power2.inOut" },
        0,
      )
      .to(
        q(".nav-bg"),
        {
          autoAlpha: 0.2,
          duration: 0.5,
          ease: "power2.inOut",
          pointerEvents: "auto",
        },
        0,
      )
      .to(
        q(".nav-links"),
        { autoAlpha: 1, duration: 0.4, ease: "power2.inOut" },
        0.1,
      );

    return () => {
      // Clean up
      tl2.current.kill();
      tl.current.kill();
    };
  }, []);

  const toggleNav = () => {
    tl.current.reversed() ? tl.current.play() : tl.current.reverse();
    setOpen(!open);
  };

  return (
    <div ref={el} className="fixed top-0 left-0 w-full">
      <div className="nav-bg fixed top-0 left-0 bg-house-black w-full h-screen opacity-0 pointer-events-none"></div>
      <div className="fixed right-0 top-0 w-full md:w-[500px] h-screen pointer-events-none overflow-y-scroll">
        <div className="nav-side bg-house-black w-full h-full translate-x-[140%] relative pointer-events-auto">
          <div className="nav-round absolute left-0 -translate-x-1/2 h-[110vh] translate-y-[-5vh] rounded-[100%/100%] w-[80%] bg-house-black top-0"></div>
          <div className="nav-links text-left text-white opacity-0">
            <div className="text-[clamp(2.5rem,10vw,3.75rem)] absolute top-[45%] -translate-y-1/2 pl-8 lg:pl-10 w-full items-center">
              <Link
                to="/"
                className="group flex items-center py-[calc(2vh+5px)] cursor-pointer w-full"
                onClick={toggleNav}
              >
                <p
                  className={`group-hover:translate-x-[20px] transition font-heavy ${
                    open ? "" : "translate-x-[60px] duration-300 "
                  }`}
                >
                  Services
                </p>
              </Link>
              <Link
                to="/"
                className="group flex items-center py-[calc(2vh+5px)] cursor-pointer w-full"
                onClick={toggleNav}
              >
                <p
                  className={`group-hover:translate-x-[20px] transition font-heavy ${
                    open ? "" : "translate-x-[60px] duration-300"
                  }`}
                >
                  About
                </p>
              </Link>
              <Link
                to="/"
                className="group flex items-center py-[calc(2vh+5px)] cursor-pointer w-full"
                onClick={toggleNav}
              >
                <p
                  className={`group-hover:translate-x-[20px] font-heavy transition ${
                    open ? "" : "translate-x-[60px] duration-300"
                  }`}
                >
                  Contact
                </p>
              </Link>
            </div>
            <div className="absolute bottom-20 lg:bottom-12 px-[5vw] lg:px-8 flex">
              <a
                href="https://www.linkedin.com/company/house-58-digital/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <div
                  className={`group p-6 w-fit cursor-pointer transition ${
                    open ? "" : "translate-x-[40px] duration-300"
                  }`}
                >
                  <p className="transition group-hover:-translate-y-1 group-hover:text-white">
                    LinkedIn
                  </p>
                  <div className="h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition duration-200 origin-center"></div>
                </div>
              </a>
              <a
                href="mailto:hello@house58.nl?subject=Lets%20Start%20a%20Project"
                aria-label="Email"
              >
                <div
                  className={`group p-6 w-fit cursor-pointer transition ${
                    open ? "" : "translate-x-[80px] duration-300"
                  }`}
                >
                  <p className="transition group-hover:-translate-y-1 group-hover:text-white">
                    Email
                  </p>
                  <div className="h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition duration-200 origin-center"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100vw] fixed top-0 left-0 bg-house-black flex items-center pt-2 px-[5vw] justify-between">
        <Link to="/" className="pointer-events-auto" onClick={handleLogoClick}>
          <img src={LogoWhite} alt="Logo" className="object-fit w-36 h-18" />{" "}
        </Link>
        <div
          role="button"
          tabIndex="0"
          className={`w-16 h-16 bg-house-black rounded relative cursor-pointer grid place-items-center transition duration-300 pointer-events-auto ${
            open ? "bg-house-black hover:none" : "hover:bg-none"
          }`}
          onClick={() => toggleNav()}
          onKeyDown={(e) => e.key === "Enter" && toggleNav()}
        >
          <div
            className={`w-5 h-1 bg-neutral-100 rounded-full absolute [transition:transform_0.5s_cubic-bezier(0.3,1.3,0.6,1)] ${
              open ? "rotate-[225deg]" : "-translate-y-[125%]"
            }`}
          ></div>
          <div
            className={`w-5 h-1 bg-neutral-100 rounded-full absolute [transition:transform_0.5s_cubic-bezier(0.3,1.3,0.6,1)] ${
              open ? "rotate-[135deg]" : "translate-y-[125%]"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
