// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion, useScroll } from "framer-motion";
// import Logo from "../assets/images/logos/house58.png";
// import LogoBlack from "../assets/images/logos/house58-black.png";

// const Navbar = () => {
//   const { scrollY } = useScroll();
//   const [hidden, setHidden] = useState(false);
//   const [navColorClass, setNavColorClass] = useState("text-house-black"); // Initial color class
//   const [navLogo, setNavLogo] = useState(Logo); // Initial logo

//   function updateNavColor() {
//     const homeSection = document.getElementById("hero"); // The home section element
//     if (homeSection) {
//       const homePosition = homeSection.getBoundingClientRect();
//       const threshold = 650;

//       if (
//         homePosition.top + threshold > 0 &&
//         homePosition.top < window.innerHeight
//       ) {
//         setNavColorClass("text-white");
//         // Use the black logo when in the hero section
//         setNavLogo(Logo);
//       } else {
//         setNavColorClass("text-house-black");

//         setNavLogo(LogoBlack); // Use the white logo otherwise
//       }
//     }
//   }

//   function update() {
//     if (scrollY?.current < scrollY?.prev) {
//       setHidden(false);
//     } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
//       setHidden(true);
//     }
//     updateNavColor(); // Update the nav color based on the current scroll position
//   }

//   useEffect(() => {
//     const unsubscribe = scrollY.onChange(() => update());

//     // Update the nav color when the component mounts in case the initial position is not at the top
//     updateNavColor();

//     // Cleanup the event listener on unmount
//     return () => unsubscribe();
//   }, [scrollY]);

//   const variants = {
//     visible: { opacity: 1, y: 0 },
//     hidden: { opacity: 0, y: -25 },
//   };

//   return (
//     <motion.nav
//       id="navbar"
//       variants={variants}
//       initial={{ opacity: 0 }}
//       animate={hidden ? "hidden" : "visible"}
//       transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
//       className={`absolute top-10 w-full z-50 lg:p-10 flex justify-between items-center h-10 bg-transparent lg:pl-20 lg:pr-20 ${navColorClass}`}
//       role="navigation"
//     >
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5 }}
//       >
//         <Link
//           to="/"
//           className={`object-fit w-40 h-26 transition duration-300 font-heavy ${navColorClass}`}
//         >
//           <motion.img
//             className="object-fit w-40 h-26 transition duration-300"
//             src={navLogo}
//             alt="logo"
//           />
//         </Link>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5 }}
//         className="md:pr-10 pr-10"
//       >
//         <Link
//           to="/contact"
//           className={`hover:text-house-bluelight font-heavy transition duration-300 ${navColorClass} difference`}
//         >
//           Let’s Talk!
//         </Link>
//       </motion.div>
//     </motion.nav>
//   );
// };

// export default Navbar;

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import LogoWhite from "../assets/images/logos/house58.png";
import LogoBlack from "../assets/images/logos/house58-black.png";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [navColorClass, setNavColorClass] = useState("text-house-black");
  const [navLogo, setNavLogo] = useState(LogoWhite);
  const navRef = useRef();
  const prevScrollY = useRef(0);

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
        root: null,
        threshold: 0.1,
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
      prevScrollY.current = scrollY.current; // Update the previous scroll position
    };

    const unsubscribe = scrollY.onChange(handleScroll);

    return () => unsubscribe();
  }, [scrollY]);

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
          className={`object-fit w-44 h-26 transition duration-300 ${navColorClass}`}
        >
          <motion.img
            src={navLogo}
            alt="logo"
            className="object-fit w-44 h-26 transition duration-300"
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
