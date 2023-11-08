import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "../components/Container";
import { FadeIn } from "../components/FadeIn";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const main = useRef();

  useLayoutEffect(() => {
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

    // Cleanup
    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section id="hero" className="h-screen" ref={main}>
      <Container className="mt-36 sm:mt-32 md:mt-60">
        <FadeIn className="max-w-2xl">
          <h1 className="font-display text-4xl font-heavy tracking-tight text-white [text-wrap:balance] sm:text-6xl animate">
            Crafting Digital Experiences in the heart of Amsterdam.
          </h1>
          <p className="mt-6 text-xl text-house-white animate">
            We focus on clear design and dependable technology to develop
            easy-to-use web and e-commerce platforms.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
};

export default Hero;
