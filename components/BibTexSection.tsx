interface BibTexSectionProps {
  bibTexEntry: string
}

export default function BibTexSection({ bibTexEntry }: BibTexSectionProps) {
  return (
    <section className="mb-8 bg-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 font-montserrat">BibTeX</h2>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto font-ibm-plex-sans text-sm">{bibTexEntry}</pre>
    </section>
  )
}

