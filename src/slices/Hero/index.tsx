import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      className="px-4 py-10 md:py-14 md:px-6 lg:py-16"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className="mx-auto w-full max-w-6xl"
      >
        <div
          className="grid grid-cols-1 place-items-center text-center"
        >
          <PrismicRichText
            field={slice.primary.heading}
            components={{
              heading1: ({ children }) => (
                <h1
                  className="text-5xl md:text-7xl font-bold leading-tight tracking-tight font-display text-slate-700 text-center"
                >
                  {children}
                </h1>
              )
            }}
          />
          <PrismicRichText
            field={slice.primary.body}
            components={{
              paragraph: ({ children }) => (
                <p
                  className="text-2xl text-slate-600 text-center font-normal leading-10 font-body mb-4 md:mb-8 max-w-md"
                >
                  {children}
                </p>
              )
            }}
          />
          <PrismicNextLink
            field={slice.primary.button_link}
            className="block w-fit bg-cyan-700 hover:bg-cyan-800 transition-colors duration-200 ease-in-out py-3 px-12 font-display text-base text-white rounded-full tracking-wider mb-8 md:mb-10"
          >
            {slice.primary.button_text}
          </PrismicNextLink>
          <PrismicNextImage
            field={slice.primary.image}
            className="drop-shadow-xl max-w-4xl w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
