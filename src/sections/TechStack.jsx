import clsx from "clsx";
import { Container } from "../components/Container";
import { FadeIn, FadeInStagger } from "../components/FadeIn";
import { GridPattern } from "../components/GridPattern";
import { StackIntro } from "../components/StackIntro";
import logoAws from "../assets/images/logos/aws.svg";
import logoGcp from "../assets/images/logos/gcp.svg";
import logoDjango from "../assets/images/logos/django.svg";
import logoReact from "../assets/images/logos/reactjs.svg";
import logoShopify from "../assets/images/logos/shopify.svg";
import logoWordpress from "../assets/images/logos/wordpress.svg";
import logoGA from "../assets/images/logos/google_analytics.svg";
import logoGtm from "../assets/images/logos/gtm.svg";
import logoNodejs from "../assets/images/logos/nodejs.svg";
import logoWoocommerce from "../assets/images/logos/woocommerce.svg";

const techStack = [
  { img: logoAws, alt: "AWS", width: 110 },
  { img: logoGcp, alt: "GCP", width: 110 },
  { img: logoReact, alt: "React", width: 110 },
  { img: logoNodejs, alt: "Node.js", width: 80 },
  { img: logoDjango, alt: "Django", width: 100 },
  { img: logoShopify, alt: "Shopify", width: 110 },
  { img: logoWoocommerce, alt: "Woo Commerce", width: 120 },
  { img: logoWordpress, alt: "Wordpress", width: 115 },
  { img: logoGA, alt: "Google Analytics", width: 110 },
  { img: logoGtm, alt: "Google Tag Manager", width: 110 },
];

export default function Stack({ centered = false }) {
  return (
    <div
      id="stack"
      className="relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32"
    >
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
        interactive
      />

      <FadeIn>
        <StackIntro title="Our Tech Stack">
          <p>
            We&apos;ll carefully pair the right frameworks and platforms with
            your business objectives.
          </p>
        </StackIntro>
        <Container
          className={clsx("mt-4 sm:mt-2 lg:mt-4", centered && "text-center")}
        ></Container>
      </FadeIn>
      <Container>
        <FadeInStagger faster>
          {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-10 gap-y-10 lg:grid-cols-5"
          >
            {techStack.map((tech, index) => (
              <li key={index}>
                <FadeIn>
                  <img
                    src={tech.img}
                    alt={tech.alt}
                    style={{ width: `${tech.width}px` }}
                    className="w-full h-auto grayscale hover:grayscale-0"
                  />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
}
