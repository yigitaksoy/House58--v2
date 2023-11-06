import clsx from "clsx";
import { Container } from "./Container";
import { FadeIn } from "./FadeIn";

export function StackIntro({ eyebrow, title, children, centered = false }) {
  return (
    <Container
      className={clsx("mt-4 sm:mt-2 lg:mt-4", centered && "text-center")}
    >
      <FadeIn>
        <h1>
          <span className="block font-display text-base font-semibold text-neutral-950">
            {eyebrow}
          </span>
          <span className="sr-only"> - </span>
          <span
            className={clsx(
              "mt-6 block max-w-5xl font-display text-3xl font-heavy tracking-tight text-house-bluelight [text-wrap:balance] sm:text-4xl",
              centered && "mx-auto",
            )}
          >
            {title}
          </span>
        </h1>
        <div
          className={clsx(
            "mt-6 max-w-3xl text-3xl text-house-black font-heavy",
            centered && "mx-auto",
          )}
        >
          {children}
        </div>
      </FadeIn>
    </Container>
  );
}
