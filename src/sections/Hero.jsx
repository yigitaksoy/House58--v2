import { GridPattern } from "../components/GridPattern";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex h-screen w-screen items-center justify-center "
    >
      <GridPattern
        className="absolute inset-x-0 -top-14 -z-10 h-screen w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
        yOffset={-96}
        interactive
      />
    </section>
  );
};

export default Hero;
