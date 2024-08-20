import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "@/components/Bounded";
import Logo from "@/components/Logo";

export default async function Footer() {
  const client = createClient()
  const settings = await client.getSingle("settings")
  const date = new Date()

  return (
    <Bounded as="footer">
      <div
        className="flex sm:flex-row flex-col justify-between items-center gap-6"
      >
        <Link href="/">
          <Logo />
        </Link>

        <p className="text-xs">
          ©{date.getFullYear()} {settings.data.site_title}
        </p>

        <ul className="flex">
          {settings.data.navigation.map(({ link, label }) => (
            <li key={label}>
              <PrismicNextLink
                field={link}
                className="p-3"
              >
                {label}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </div>
    </Bounded>
  )
}