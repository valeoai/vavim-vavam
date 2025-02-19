import AuthorList from "@/components/AuthorList"
import LinkSection from "@/components/LinkSection"
import AbstractSection from "@/components/AbstractSection"
import VideoSection from "@/components/VideoSection"
import ComparisonSection from "@/components/ComparisonSection"
import BibTexSection from "@/components/BibTexSection"
import ContributionDescription from "@/components/ContributionDescription"

const coreContributors = [
  { name: "Florent Bartoccioni", link: "#florent-bartoccioni" },
  { name: "Elias Ramzi", link: "#elias-ramzi" },
]

const contributors = [
  { name: "John Doe", link: "#john-doe" }
]

const links = [
  { text: "Paper", href: "#paper" },
  { text: "Code", href: "#code" },
]

const abstract = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.`

const bibTexEntry = `@article{vavam2025,
  title={VaViM and VaVAM: Autonomous Driving through Video Generative Modeling},
  author={Smith, John and Johnson, Alice and Miller, Robert},
  journal={arXiv preprint arXiv:XXXX.XXXXX},
  year={2025}
}`

const comparisonGroups = [
  {
    subtitle: "1. Front scenario 0013 sample 45",
    videos: [
      { title: "UniAD", src: "/placeholder_uniad_front_0013_45.mp4" },
      { title: "VaVaM", src: "/placeholder_vavam_front_0013_45.mp4" },
    ],
  },
  {
    subtitle: "2. Side scenario 0016 sample 3",
    videos: [
      { title: "UniAD", src: "/placeholder_uniad_side_0016_3.mp4" },
      { title: "VaVaM", src: "/placeholder_vavam_side_0016_3.mp4" },
    ],
  },
]

const contributions = [
  {
    category: "Project Lead (Research direction, technical roadmap and project coordination)",
    description: "Florent Bartoccioni",
  },
  {
    category: "Core contributors (Contributed to all aspects of the codebase, ran experiments and evaluations)",
    description: "Florent Bartoccioni, Elias Ramzi",
  },
  {
    category: "Contributors",
    description: `Victor Besnier -- Visual Tokenization codebase using pre-trained VQGAN; FID metric code
Loick Chambon -- Data download, transfer and extraction; visualization code development
Eduardo Valle -- OpenDV preprocessing
Shashanka Venkataramanan -- Depth anything pseudo-GT generation
Tuan-Hung Vu -- GPT adaptation from nanoGPT
Yihong Xu -- nuPlan preprocessing and initial dataloader development`,
  },
  {
    category: "Paper (manuscript preparation, designing paper visualization and figures)",
    description:
      "Florent Bartoccioni, Elias Ramzi, Victor Besnier, Shashanka Venkataramanan, Eloi Zablocki, Yihong Xu, Tuan-Hung Vu",
  },
  {
    category:
      "Public Computing Grant Acquisition (project proposal writing for Adastra, EuroHPC and Jean-Zay grand challenges)",
    description:
      "Florent Bartoccioni, Alexandre Boulch, Eduardo Valle, Spyros Gidaris, Eloi Zablocki, Matthieu Cord, Serkan Odabas, David Hurych",
  },
  {
    category: "Advisory (research and organization guidance)",
    description: "Eloi Zablocki, Alexandre Boulch, Mickael Chen",
  },
  {
    category: "Senior Advisory (research and organization guidance)",
    description: "Eduardo Valle, Andrei Bursuc, Renaud Marlet, Matthieu Cord",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F7] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-montserrat text-center">
          VaViM and VaVAM: Autonomous Driving through Video Generative Modeling
        </h1>

        <AuthorList coreContributors={coreContributors} contributors={contributors} />
        <LinkSection links={links} />
        <AbstractSection abstract={abstract} />

        <VideoSection title="VaViM Video Generation" videoSrc="/placeholder_vavim_generation.mp4" />

        <ComparisonSection title="Driving Comparison: UniAD vs VaVaM" groups={comparisonGroups} />

        <VideoSection title="Failure Cases" videoSrc="/placeholder_failure_cases.mp4" />

        <BibTexSection bibTexEntry={bibTexEntry} />

        <ContributionDescription contributions={contributions} />
      </div>
    </main>
  )
}

