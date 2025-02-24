import AuthorList from "@/components/AuthorList"
import LinkSection from "@/components/LinkSection"
import AbstractSection from "@/components/AbstractSection"
import VideoSection from "@/components/VideoSection"
import ComparisonSection from "@/components/ComparisonSection"
import BibTexSection from "@/components/BibTexSection"
import ContributionDescription from "@/components/ContributionDescription"
import { FileText, Github } from "lucide-react"

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
  { text: "Paper", href: "https://arxiv.org/abs/2502.15672", icon: <FileText className="h-4 w-4" /> },
  { text: "Code", href: "https://github.com/valeoai/VideoActionModel", icon: <Github className="h-4 w-4" /> },
]

const abstract = `We explores the potential of large-scale generative video models to enhance autonomous driving capabilities, introducing an open-source autoregressive video model (VaViM) and a companion video-action model (VaVAM). VaViM is a simple autoregressive model that predicts frames using spatio-temporal token sequences, while VaVAM leverages the learned representations to generate driving trajectories through imitation learning. Together, they offer a complete perception-to-action pipeline.`

const bibTexEntry = `@article{vavam2025,
  title={VaViM and VaVAM: Autonomous Driving through Video Generative Modeling},
  author={Florent Bartoccioni and Elias Ramzi and Victor Besnier and Shashanka Venkataramanan and Tuan-Hung Vu and Yihong Xu and Loick Chambon and Spyros Gidaris and Serkan Odabas and David Hurych and Renaud Marlet and Alexandre Boulch and Mickael Chen and Éloi Zablocki and Andrei Bursuc and Eduardo Valle and Matthieu Cord},
  journal={arXiv preprint arXiv:2502.15672},
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
    subtitle: "1. Front scenario 0013",
    description: "Although UniAD successfully detects and predicts the trajectory of the oncoming vehicle, it is unable to execute a safe evasive maneuver to avoid the hazardous situation.\n\nGray BEV boxes are GT vehicles for visualization purposes and not inputs to the model. More results and detailed comparison in our paper.",
    videos: [
      { title: "UniAD #1", src: "/videos/VaVAM/UniAD_frontal_0103_run_45.mp4" },
      { title: "UniAD #2", src: "/videos/VaVAM/UniAD_frontal_0103_run_47.mp4" },
      { title: "VaVaM", src: "/videos/VaVAM/ours_frontal_0103_run_45.mp4" },
    ],
  },
]

const failureCases = [
  {
    description: "While our model demonstrates strong overall performance, analyzing failure cases provides crucial insights into its limitations and helps identify areas for future improvement. Below, we present three representative examples that highlight different types of challenges in our framework.\n\n We propose future work directions in our paper to address the fundamental challenges exposed by these critical scenarios",
    videos: [
      { 
        title: "#1 Collision Course with Oncoming Vehicle.", 
        src: "/videos/VaVAM/failure_frontal_0923_run_2.mp4",
        description: "The model maintains its trajectory despite an oncoming white vehicle, making no attempt at evasive action. This is particularly intriguing because our model demonstrates collision avoidance capabilities in many similar scenarios, achieving state-of-the-art performance in frontal situations. This raises important questions about what scene elements trigger appropriate safety responses versus failures in visually similar situations."
      },
      { 
        title: "#2 Command-Trajectory Mismatch", 
        src: "/videos/VaVAM/failure_side_0108_run_36.mp4",
        description: "At this intersection, despite receiving a clear \"turn right\" command, the model executes a left turn instead. We hypothesize this behavior stems from the model overfitting to training data - this specific intersection likely appears in the training set but with left turns, leading to a failure to generalize to alternative commands during evaluation."
      },
      { 
        title: "#3 Limited Emergency Braking Response", 
        src: "/videos/VaVAM/failure_stationary_0783_run_19.mp4",
        description: "When encountering a bus positioned diagonally across the road - an obvious situation requiring a complete stop - the model maintains motion. We've observed that our model rarely initiates complete stops or emergency braking, even in scenarios where such actions would be the optimal safety response."
      },
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

        <VideoSection 
          title="Emerging behavior of avoiding oncoming vehicle" 
          videoSrc="/videos/VaVAM/ours_frontal_0110_run_5.mp4" 
          description={"We now showcase several driving demonstrations extracted from NeuroNCAP simulations.\n\n The left panel displays a bird's-eye-view where gray boxes represent objects in the scene (for visualization purposes only), the red curve indicates the intended guiding path (from which a high-level command [RIGHT,LEFT,STRAIGHT] is derived), and black dots show the model's driving trajectory decision.\n\n The right panels show the corresponding camera views from the front, front-left, and front-right perspectives (note that VaVAM only uses the front cam).\n\n In this video, despite being instructed to follow the guiding path straight ahead (shown in red), VaVAM demonstrates emergent defensive driving behavior when encountering a hazardous situation. In this scenario, an oncoming vehicle has entered our lane, creating a potential head-on collision.\n\n Without explicit programming or supervision for such scenarios, VaVAM autonomously deviates from its prescribed path to safely maneuver around the opposing vehicle."}
        />

        <ComparisonSection title="Driving Comparison: UniAD (Hu et al., CVPR 2023) vs VaVaM" groups={comparisonGroups} />

        <ComparisonSection title="Failure Cases" groups={failureCases} />
        
        <BibTexSection bibTexEntry={bibTexEntry} />

        <ContributionDescription contributions={contributions} />
      </div>
    </main>
  )
}
