import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";

export default function Button({
  className,
  ...restProps
}: PrismicNextLinkProps) {
  return (
    <PrismicNextLink
      className={clsx(
        "block w-fit bg-cyan-700 hover:bg-cyan-800 transition-colors duration-200 ease-in-out py-3 px-12 font-display text-base text-white rounded-full tracking-wider",
        className
      )}
      {...restProps}
    />
  )
}