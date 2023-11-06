import { Container } from "../components/Container";
import { FadeIn } from "../components/FadeIn";

const Hero = () => {
  return (
    <section id="hero" className="h-screen">
      <Container className="mt-36 sm:mt-32 md:mt-60">
        <FadeIn className="max-w-2xl">
          <h1 className="font-display text-4xl font-heavy tracking-tight text-white [text-wrap:balance] sm:text-6xl">
            Crafting Digital Experiences in the heart of Amsterdam.
          </h1>
          <p className="mt-6 text-xl text-house-white">
            We focus on clear design and dependable technology to develop
            easy-to-use web and e-commerce platforms.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
};

export default Hero;
