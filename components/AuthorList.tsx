import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface Author {
  name: string
  link: string
}

interface AuthorListProps {
  coreContributors: Author[]
  contributors: Author[]
}

export default function AuthorList({ coreContributors, contributors }: AuthorListProps) {
  const renderAuthors = (authors: Author[]) => (
    <div className="flex flex-wrap gap-2 sm:gap-4">
      {authors.map((author, index) => (
        <Link
          key={index}
          href={author.link}
          className="inline-flex items-center bg-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm hover:bg-[#82E600] transition-colors"
        >
          {author.name}
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </Link>
      ))}
    </div>
  )

  return (
    <section className="mb-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 font-montserrat">Authors</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2 font-montserrat">Core Contributors*</h3>
          {renderAuthors(coreContributors)}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 font-montserrat">Contributors*</h3>
          {renderAuthors(contributors)}
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-600 font-ibm-plex-sans">
        * Detailed contributions are listed at the end of the page.
      </p>
    </section>
  )
}

