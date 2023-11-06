import clsx from "clsx";
import { Container } from "./Container";
import { FadeIn } from "./FadeIn";

export function SectionIntro({
  eyebrow,
  title,
  children,
  smaller = false,
  invert = false,
  ...props
}) {
  return (
    <Container {...props}>
      <FadeIn className="max-w-2xl">
        <h2>
          {eyebrow && (
            <>
              <span
                className={clsx(
                  "mb-6 block font-display font-heavy text-2xl",
                  invert ? "text-white" : "text-house-bluelight",
                )}
              >
                {eyebrow}
              </span>
              <span className="sr-only"> - </span>
            </>
          )}
          <span
            className={clsx(
              "block font-display tracking-tight [text-wrap:balance]",
              smaller
                ? "text-2xl font-semibold"
                : "text-4xl font-heavy sm:text-5xl",
              invert ? "text-white" : "text-house-black",
            )}
          >
            {title}
          </span>
        </h2>
        {children && (
          <div
            className={clsx(
              "mt-6 text-xl",
              invert ? "text-house-300" : "text-house-200",
            )}
          >
            {children}
          </div>
        )}
      </FadeIn>
    </Container>
  );
}
