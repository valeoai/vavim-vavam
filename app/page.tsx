import AuthorList from "@/components/AuthorList"
import LinkSection from "@/components/LinkSection"
import AbstractSection from "@/components/AbstractSection"
import VideoSection from "@/components/VideoSection"
import ComparisonSection from "@/components/ComparisonSection"
import BibTexSection from "@/components/BibTexSection"
import ContributionDescription from "@/components/ContributionDescription"

const coreContributors = [
  { name: "Florent Bartoccioni", link: "#florent-bartoccioni" },
  { name: "Elias Ramzi", link: "https://elias-ramzi.github.io/" },
]

const contributors = [
  { name: "Victor Besnier", link: "#victor-besnier" },
  { name: "Shashanka Venkataramanan", link: "#shashanka-venkataramanan" },
  { name: "Tuan-Hung Vu", link: "#tuan-hung-vu" },
  { name: "Yihong Xu", link: "#yihong-xu" },
  { name: "Loick Chambon", link: "#loick-chambon" },
  { name: "Spyros Gidaris", link: "#spyros-gidaris" },
  { name: "Serkan Odabas", link: "#serkan-odabas" },
  { name: "David Hurych", link: "#david-hurych" },
  { name: "Renaud Marlet", link: "#renaud-marlet" },
  { name: "Alexandre Boulch", link: "#alexandre-boulch" },
  { name: "Mickael Chen", link: "#mickael-chen" },
  { name: "Eloi Zablocki", link: "#eloi-zablocki" },
  { name: "Andrei Bursuc", link: "#andrei-bursuc" },
  { name: "Eduardo Valle", link: "#eduardo-valle" },
  { name: "Matthieu Cord", link: "#matthieu-cord" },
]

const links = [
  { text: "Paper", href: "#paper" },
  { text: "Code", href: "https://github.com/valeoai/VideoActionModel" },
]

const abstract = `We explores the potential of large-scale generative video models to enhance autonomous driving capabilities, introducing an open-source autoregressive video model (VaViM) and a companion video-action model (VaVAM). VaViM is a simple autoregressive model that predicts frames using spatio-temporal token sequences, while VaVAM leverages the learned representations to generate driving trajectories through imitation learning. Together, they offer a complete perception-to-action pipeline.`

const bibTexEntry = `@article{vavam2025,
  title={VaViM and VaVAM: Autonomous Driving through Video Generative Modeling},
  author={Bartoccioni, Florent and Ramzi, Elias and Besnier, Victor and Venkataramanan, Shashanka and Vu, Tuan-Hung and Xu, Yihong and Chambon, Loick and Gidaris, Spyros and Odabas, Serkan and Hurych, David and Marlet, Renaud and Boulch, Alexandre and Chen, Mickael and Zablocki, Eloi and Bursuc, Andrei and Valle, Eduardo and Cord, Matthieu},
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
    category: "Project Lead (Research direction, technical roadmap, project coordination)",
    description: "Florent Bartoccioni",
  },
  {
    category: "Core contributors (All aspects of the codebase, experiments, evaluations)",
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
    category: "Technical report (Manuscript preparation, design, visualization, figures)",
    description:
      "Florent Bartoccioni, Elias Ramzi, Victor Besnier, Shashanka Venkataramanan, Eloi Zablocki, Yihong Xu, Tuan-Hung Vu",
  },
  {
    category:
      "Grant Acquisition (Grant proposals for Adastra, EuroHPC, and Jean Zay Grand Challenges)",
    description:
      "Florent Bartoccioni, Alexandre Boulch, Eduardo Valle, Spyros Gidaris, Eloi Zablocki, Matthieu Cord, Serkan Odabas, David Hurych",
  },
  {
    category: "Advisory (Research and organization guidance)",
    description: "Eloi Zablocki, Alexandre Boulch, Mickael Chen",
  },
  {
    category: "Senior Advisory (Research and organization guidance)",
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
