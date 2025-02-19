interface AbstractSectionProps {
  abstract: string
}

export default function AbstractSection({ abstract }: AbstractSectionProps) {
  return (
    <section className="mb-8 bg-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 font-montserrat">Abstract</h2>
      <p className="font-ibm-plex-sans">{abstract}</p>
    </section>
  )
}

