import AuthorList from "@/components/AuthorList"
import LinkSection from "@/components/LinkSection"
import AbstractSection from "@/components/AbstractSection"
import VideoSection from "@/components/VideoSection"
import ComparisonSection from "@/components/ComparisonSection"
import BibTexSection from "@/components/BibTexSection"
import ContributionDescription from "@/components/ContributionDescription"

const coreContributors = [
  { name: "Florent Bartoccioni", link: "https://f-barto.github.io" },
  { name: "Elias Ramzi", link: "https://elias-ramzi.github.io" },
]

const contributors = [
  { name: "Victor Besnier", link: "https://scholar.google.com/citations?hl=fr&user=n_C2h-QAAAAJ" },
  { name: "Shashanka Venkataramanan", link: "https://shashankvkt.github.io" },
  { name: "Tuan-Hung Vu", link: "https://tuanhungvu.github.io" },
  { name: "Yihong Xu", link: "https://github.com/yihongXU" },
  { name: "Loick Chambon", link: "https://loickch.github.io" },
  { name: "Spyros Gidaris", link: "https://scholar.google.fr/citations?hl=en&user=7atfg7EAAAAJ&view_op=list_works&sortby=pubdate" },
  { name: "Serkan Odabas", link: "https://www.linkedin.com/in/serkan-odabas-774144113" },
  { name: "David Hurych", link: " https://www.linkedin.com/in/david-hurych-1b862b82" },
  { name: "Renaud Marlet", link: "https://imagine.enpc.fr/~marletr" },
  { name: "Alexandre Boulch", link: "https://boulch.eu" },
  { name: "Mickael Chen", link: "https://www.linkedin.com/in/mickael-chen-ml" },
  { name: "Eloi Zablocki", link: "https://eloiz.github.io" },
  { name: "Andrei Bursuc", link: "https://abursuc.github.io" },
  { name: "Eduardo Valle", link: "https://eduardovalle.com/" },
  { name: "Matthieu Cord", link: "https://cord.isir.upmc.fr/" },
]

const links = [
  { text: "Paper", href: "#paper" },
  { text: "Code", href: "https://github.com/valeoai/VideoActionModel" },
]

const abstract = `We explore the potential of large-scale generative video models for autonomous driving, introducing an open-source auto-regressive video model (VaViM) and its companion video-action model (VaVAM) to investigate how video pre-training transfers to real-world driving. VaViM is a simple auto-regressive video model that predicts frames using spatio-temporal token sequences. We show that it captures the semantics and dynamics of driving scenes. VaVAM, the video-action model, leverages the learned representations of VaViM to generate driving trajectories through imitation learning. Together, the models form a complete perception-to-action pipeline. We evaluate our models in open- and closed-loop driving scenarios, revealing that video-based pre-training holds promise for autonomous driving. Key insights include the semantic richness of the learned representations, the benefits of scaling for video synthesis, and the complex relationship between model size, data, and safety metrics in closed-loop evaluations.`

const bibTexEntry = `@article{vavam2025,
  title={VaViM and VaVAM: Autonomous Driving through Video Generative Modeling},
  author={Bartoccioni, Florent and Ramzi, Elias and Besnier, Victor and Venkataramanan, Shashanka and Vu, Tuan-Hung and Xu, Yihong and Chambon, Loick and Gidaris, Spyros and Odabas, Serkan and Hurych, David and Marlet, Renaud and Boulch, Alexandre and Chen, Mickael and Zablocki, Eloi and Bursuc, Andrei and Valle, Eduardo and Cord, Matthieu},
  journal={arXiv preprint arXiv:XXXX.XXXXX},
  year={2025}
}`


const VaViM_examples = [
  {
    //subtitle: "",
    videos: [
      { title: "", src: "/videos/VaViM/nuscenes_vavim_l_3605.mp4" },
      { title: "", src: "/videos/VaViM/nuscenes_vavim_l_2357.mp4" },
      { title: "", src: "/videos/VaViM/nuscenes_vavim_l_94.mp4" },
      { title: "", src: "/videos/VaViM/nuscenes_vavim_l_829.mp4" },
      { title: "", src: "/videos/VaViM/night_nuscenes_vavim_l_4526.mp4" },
      { title: "", src: "/videos/VaViM/rain_nuscenes_vavim_l_2579.mp4" },
    ],
  },
]

const comparisonGroups = [
  {
    subtitle: "1. Front scenario 0013 -- gray BEV boxes are GT vehicles for vis. purposes",
    videos: [
      { title: "UniAD #1", src: "/videos/VaVAM/UniAD_frontal_0103_run_45.mp4" },
      { title: "UniAD #2", src: "/videos/VaVAM/UniAD_frontal_0103_run_47.mp4" },
      { title: "VaVaM", src: "/videos/VaVAM/ours_frontal_0103_run_45.mp4" },
    ],
  },
]

const failureCases = [
  {
    //subtitle: "1. Front scenario 0013 -- gray BEV boxes are GT vehicles for vis. purposes",
    videos: [
      { title: "Critical Failure", src: "/videos/VaVAM/failure_frontal_0923_run_2.mp4" },
      { title: "Model ignore command. Train and val set overlap on nuScenes?", src: "/videos/VaVAM/failure_side_0108_run_36.mp4" },
      { title: "Fails to brake", src: "/videos/VaVAM/failure_stationary_0783_run_19.mp4" },
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

        <ComparisonSection title="VaViM Video Generation" groups={VaViM_examples} />

        <ComparisonSection title="Driving Comparison: UniAD vs VaVaM" groups={comparisonGroups} />

        <VideoSection title="Emerging behavior of avoiding oncoming vehicle" videoSrc="/vavim-vavam/videos/VaVAM/ours_frontal_0110_run_5.mp4" />

        <ComparisonSection title="Failure Cases" groups={failureCases} />
        
        <BibTexSection bibTexEntry={bibTexEntry} />

        <ContributionDescription contributions={contributions} />
      </div>
    </main>
  )
}
