import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "../components/Container";
import { FadeIn } from "../components/FadeIn";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const main = useRef();
  const h1Ref = useRef();
  const pRef = useRef();

  useLayoutEffect(() => {
    // ScrollTrigger animations for desktop and mobile
    let animate = gsap.utils.selector(main.current)(".animate");

    let mm = gsap.matchMedia();

    mm.add("(min-width: 800px)", () => {
      // Desktop animations
      gsap.to(animate, {
        y: -50,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: animate,
          start: "40% 40%",
          end: "bottom 5%",
          scrub: true,
        },
      });
    });

    mm.add("(max-width: 799px)", () => {
      // Mobile animations
      gsap.to(animate, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: animate,
          start: "bottom 10%",
          end: "top 20%",
          scrub: 1,
          reverse: true,
          smoothChildTiming: true,
        },
      });
    });

    // Mouse move effect
    const moveText = (event) => {
      const { clientX, clientY } = event;
      const { left, top, width, height } = main.current.getBoundingClientRect();
      const x = ((clientX - left - width / 2) / width) * 20; // strength of the effect
      const y = ((clientY - top - height / 2) / height) * 20;

      gsap.to([h1Ref.current, pRef.current], {
        x,
        y,
        duration: 1,
        ease: "power1.out",
      });
    };

    main.current.addEventListener("mousemove", moveText);

    // Cleanup
    return () => {
      mm.revert();
      main.current.removeEventListener("mousemove", moveText);
    };
  }, []);

  return (
    <section id="hero" className="h-screen" ref={main}>
      <Container className="mt-36 sm:mt-32 md:mt-60">
        <FadeIn className="max-w-2xl">
          <h1
            ref={h1Ref}
            className="font-display text-4xl font-heavy tracking-tight text-white [text-wrap:balance] sm:text-6xl animate"
          >
            Crafting Digital Experiences in the heart of Amsterdam.
          </h1>
          <p ref={pRef} className="mt-6 text-xl text-house-white animate">
            We focus on clear design and dependable technology to develop
            easy-to-use web and e-commerce platforms.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
};

export default Hero;
