import clsx from "clsx";
import { Border } from "./Border";
import { FadeIn, FadeInStagger } from "./FadeIn";

export function List({ className, children }) {
  return (
    <FadeInStagger>
      {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
      <ul role="list" className={clsx("text-base text-house-200", className)}>
        {children}
      </ul>
    </FadeInStagger>
  );
}

export function ListItem({ title, children }) {
  return (
    <li className="group mt-10 first:mt-0">
      <FadeIn>
        <Border className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
          {title && (
            <strong className="font-black text-house-black">{`${title}. `}</strong>
          )}
          {children}
        </Border>
      </FadeIn>
    </li>
  );
}
