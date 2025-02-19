interface Contribution {
  category: string
  description: string
}

interface ContributionDescriptionProps {
  contributions: Contribution[]
}

export default function ContributionDescription({ contributions }: ContributionDescriptionProps) {
  return (
    <section className="mb-8 bg-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 font-montserrat">Detailed Contributions</h2>
      <div className="space-y-6">
        {contributions.map((contribution, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-2 font-montserrat">{contribution.category}</h3>
            <p className="font-ibm-plex-sans whitespace-pre-line">{contribution.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

