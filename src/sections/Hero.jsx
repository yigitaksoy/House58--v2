import { Container } from "../components/Container";
import { FadeIn } from "../components/FadeIn";

const Hero = () => {
  return (
    <section id="hero" className="h-screen">
      <Container className="mt-36 sm:mt-32 md:mt-60">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-4xl font-heavy tracking-tight text-white [text-wrap:balance] sm:text-6xl">
            Digital Studio based in the heart of Amsterdam.
          </h1>
          <p className="mt-6 text-xl text-house-100">
            We are developer studio working at the intersection of design and
            technology. It’s a really busy intersection though — a lot of our
            staff have been involved in hit and runs.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
};

export default Hero;
