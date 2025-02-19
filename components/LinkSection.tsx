import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface LinkItem {
  text: string
  href: string
}

interface LinkSectionProps {
  links: LinkItem[]
}

export default function LinkSection({ links }: LinkSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 font-montserrat">Links</h2>
      <div className="flex flex-wrap gap-4">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="inline-flex items-center bg-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm font-bold hover:bg-[#82E600] transition-colors"
          >
            {link.text} <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        ))}
      </div>
    </section>
  )
}

