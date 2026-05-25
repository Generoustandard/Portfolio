import {
  ArrowRight,
  BookOpenCheck,
  Boxes,
  BrainCircuit,
  ExternalLink,
  GitBranch,
  Globe2,
  Layers3,
  Music2,
  Network,
  Sparkles,
  Workflow,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Project = {
  title: string
  subtitle: string
  description: string
  role: string
  focus: string
  tags: string[]
  icon: LucideIcon
  href?: string
  linkLabel?: string
  status?: string
  disclaimer?: string
  principles?: string[]
  priority: 'primary' | 'supporting'
}

type ActivityLink = {
  title: string
  theme: string
  context: string
  href: string
}

type ActivityPhoto = {
  src: string
  alt: string
  year: string
  event: string
  context: string
}

const githubUrl = 'https://github.com/Generoustandard'
const codexCommunityUrl = 'https://codex-community-korea.lovable.app/'
const assetBaseUrl = import.meta.env.BASE_URL
const profilePhotoUrl = `${assetBaseUrl}profile/junho-kong.jpeg`

const projects: Project[] = [
  {
    title: 'Codex Community Korea',
    subtitle: 'Developer onboarding hub for Korean Codex builders',
    description:
      'Built an ambassador-led community hub to help Korean developers discover Codex resources, events, workshops, and practical agentic coding workflows.',
    role: 'Builder / Codex Ambassador',
    focus:
      'Developer onboarding, community adoption, Korean developer ecosystem, Codex learning resources',
    tags: ['Developer Onboarding', 'Codex', 'Korean Dev Ecosystem'],
    icon: Globe2,
    href: codexCommunityUrl,
    linkLabel: 'Visit live hub',
    disclaimer:
      'Ambassador-led community initiative. Not an official OpenAI website.',
    priority: 'primary',
  },
  {
    title: 'On-Platform',
    subtitle: 'Manufacturing-first AI analysis platform',
    description:
      'Designed a manufacturing-first AI analysis platform concept that connects data management, modeling, visualization, RAG, memory, report generation, and LLM orchestration into a traceable workflow.',
    role: 'Architect / Builder',
    focus:
      'AI platform architecture, LLM orchestration, evidence-backed workflows, Korean-first UX, manufacturing AI',
    tags: ['AI Platform', 'LLM Orchestration', 'Evidence-backed'],
    icon: Boxes,
    principles: [
      'Every run should be traceable by run_id.',
      'Every output should be registered as an artifact.',
      'Reports and chatbot answers should be backed by evidence.',
      'LLMs should act as orchestration coordinators, not blind calculators.',
      'User-facing surfaces should support Korean-first workflows.',
    ],
    disclaimer:
      'Public-safe summary based on synthetic scenarios. No confidential manufacturing data or internal system details included.',
    priority: 'primary',
  },
  {
    title: 'Science Agent Leaderboard',
    subtitle: 'Evaluating agent workflows beyond accuracy',
    description:
      'Leading an open-source project to evaluate scientific problem-solving agents not only by correctness, but also by workflow design, tool usage, cost, and reproducibility.',
    role: 'Project Lead / Architect',
    focus:
      'Agent evaluation, benchmark design, leaderboard systems, reproducibility, tool usage, cost-aware evaluation',
    tags: ['Agent Evaluation', 'Benchmark Design', 'Open-source'],
    icon: BrainCircuit,
    href: 'https://github.com/Generoustandard/Science-Agent-Leaderboard',
    linkLabel: 'View repository',
    status: 'Early MVP / in progress',
    priority: 'primary',
  },
  {
    title: 'Bon',
    subtitle: 'Creative AI music UX',
    description:
      'Led product direction and interaction design for a visual-to-music creation experience, combining rule-based mappings with AI-assisted recommendations.',
    role: 'Lead / Creative Experience Planner',
    focus:
      'Creative AI UX, team leadership, Copilot-style creation, rule-based mapping, AI-assisted recommendations',
    tags: ['Creative AI', 'Music UX', 'AI-assisted'],
    icon: Music2,
    href: 'https://github.com/Generoustandard/Bon',
    linkLabel: 'View repository',
    disclaimer:
      'Rule-based creative music system with AI-assisted recommendations.',
    priority: 'supporting',
  },
  {
    title: 'Codex-Community-Docs-KR',
    subtitle: 'Early MVP for Korean documentation evaluation',
    description:
      'Built an early MVP to explore Korean translation quality evaluation for OpenAI-related documentation workflows through paragraph alignment, candidate generation, rewrite, evaluation, human review, and reviewed golden sets.',
    role: 'Builder',
    focus:
      'Documentation quality, localization, LLM-based evaluation, human-in-the-loop review, Korean developer experience',
    tags: ['Localization', 'Documentation Quality', 'MVP'],
    icon: BookOpenCheck,
    href: 'https://github.com/Generoustandard/Codex-Community-Docs-KR',
    linkLabel: 'View repository',
    status: 'Ongoing experiment / MVP stage',
    disclaimer: 'Supporting project under review and iteration.',
    priority: 'supporting',
  },
]

const loopSteps = [
  'Build practical demos and tools',
  'Explain complex workflows clearly',
  'Share with developers and communities',
  'Collect feedback',
  'Improve the product, documentation, and onboarding flow',
]

const codexActivityLinks: ActivityLink[] = [
  {
    title: 'Codex Skillathon',
    theme: 'Developer Workshop',
    context:
      'Hands-on community activity around Codex, AI workflows, and practical builder learning.',
    href: 'https://www.linkedin.com/posts/junho-kong_codex-skillathon-ai-activity-7461671528787496960-ciHK',
  },
  {
    title: 'Elev8 Codex community session',
    theme: 'Developer Community',
    context:
      'Public recap of a Codex Community Korea learning session with external event partners.',
    href: 'https://www.linkedin.com/posts/junho-kong_elev8-openai-codexcommunitykorea-activity-7460133915027148801-ZZsK',
  },
  {
    title: 'Codex AI engineering notes',
    theme: 'AI Engineering',
    context:
      'Public writing around Codex, AI engineering, and developer workflow adoption.',
    href: 'https://www.linkedin.com/posts/junho-kong_ai-codex-aiengineering-activity-7449428527592148992-S5N_',
  },
  {
    title: 'OpenAI Codex developer community note',
    theme: 'Developer Community',
    context:
      'Early public note on Codex community building and developer-facing learning surfaces.',
    href: 'https://www.linkedin.com/posts/junho-kong_openai-codex-developercommunity-activity-7436287028834484224-Q4w0',
  },
]

const pseudoLabActivityLinks: ActivityLink[] = [
  {
    title: "Builder's Night: Codex Community Korea",
    theme: 'PseudoLab Talk',
    context:
      'Public talk on how PseudoLab builder activity led into the Codex Community Korea onboarding hub.',
    href: 'https://www.linkedin.com/posts/junho-kong_qootfosmyqvosqs-pseudolab-codexcommunitykorea-activity-7463576437690699778-3jvH',
  },
  {
    title: 'Science Agent Leaderboard update',
    theme: 'PseudoLab Project',
    context:
      'PseudoLab open-source project update on science agent evaluation, workflow design, and reproducible builder practice.',
    href: 'https://www.linkedin.com/posts/junho-kong_%EA%B0%80%EC%A7%9C%EC%97%B0%EA%B5%AC%EC%86%8C-%EC%97%90%EC%84%9C-%EC%B5%9C%EA%B7%BC-%EB%AA%87%EB%8B%AC%EB%8F%99%EC%95%88-openai-api-%EA%B8%B0%EB%B0%98-science-agent-activity-7464311242212659201-mYHS',
  },
  {
    title: 'NVIDIA Build-A-Claw AI Agent activity',
    theme: 'AI Agent Builder',
    context:
      'Builder activity connected to AI agents, experimentation, and applied AI workflows.',
    href: 'https://www.linkedin.com/posts/junho-kong_ai-agent-nvidia-activity-7458304691748098048-YKvZ',
  },
  {
    title: 'Multi-agent builder collaboration',
    theme: 'Builder Collaboration',
    context:
      'Community reflection connected to multi-agent thinking, collaboration, and shared output.',
    href: 'https://www.linkedin.com/posts/junho-kong_multi-agent-%EA%B0%99%EC%9D%80-%EC%A2%8B%EC%9D%80-%EC%97%B0%EA%B2%B0%EA%B3%BC-%EC%97%B4%EC%A0%95%EC%9D%80-%EB%8D%94-%EB%86%92%EC%9D%80-%EC%84%B1%EA%B3%BC%EB%A5%BC-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%83%85%EB%8B%88%EB%8B%A4-activity-7420105919721598976-uyq4',
  },
  {
    title: 'Learning-in-public momentum',
    theme: 'Builder Habit',
    context:
      'Reflection on small actions, compounding practice, and consistent community contribution.',
    href: 'https://www.linkedin.com/posts/junho-kong_%ED%96%89%EB%8F%99%EC%97%90%EB%8A%94-%EA%B4%80%EC%84%B1%EC%9D%B4-%EC%9E%88%EA%B3%A0-%EC%9E%91%EC%9D%80-%ED%96%89%EB%8F%99%EC%9D%80-%ED%81%B0-%EA%B4%80%EC%84%B1%EC%9D%84-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%83%85%EB%8B%88%EB%8B%A4-%EA%B7%B8-%EA%B4%80%EC%84%B1%EC%9D%84-activity-7416481268084817923-xQ4M',
  },
  {
    title: 'Hack Seoul 2025 / AngelHack',
    theme: 'Hackathon',
    context:
      'Public activity from hackathon participation and applied builder practice.',
    href: 'https://www.linkedin.com/posts/junho-kong_hackseoul2025-angelhack-coupang-activity-7392906068139499520-2LIY',
  },
  {
    title: 'PseudoLab Grand Gathering',
    theme: 'Community Learning',
    context:
      'Earlier community activity connected to learning, contribution, and builder identity.',
    href: 'https://www.linkedin.com/posts/junho-kong_1st-grand-gathering-sudo-pseudo-explorer-activity-7266465444604108801-KqVM',
  },
]

const codexActivityPhotos: ActivityPhoto[] = [
  {
    src: `${assetBaseUrl}activity/codex-meetup.webp`,
    alt: 'Codex Community Korea meetup presentation room',
    year: '2026',
    event: 'Codex Community Korea 1st Meetup',
    context: 'Community onboarding session',
  },
  {
    src: `${assetBaseUrl}activity/codex-elev8.webp`,
    alt: 'Elev8 Codex community gathering group photo',
    year: '2026',
    event: 'Elev8 x Codex Community Korea',
    context: 'Developer community session',
  },
  {
    src: `${assetBaseUrl}activity/codex-hackathon.webp`,
    alt: 'Codex-related hackathon group photo',
    year: '2026',
    event: 'OpenAI x Coxwave Hackathon',
    context: 'Codex builder activity',
  },
  {
    src: `${assetBaseUrl}activity/codex-robert-walters.webp`,
    alt: 'Robert Walters Codex Community Korea meetup group photo',
    year: '2026',
    event: 'Robert Walters x Codex Meetup',
    context: 'Community meetup',
  },
  {
    src: `${assetBaseUrl}activity/codex-skillathon.webp`,
    alt: 'Codex skillathon workshop room',
    year: '2026',
    event: 'Search OS x Codex Skillathon',
    context: 'Hands-on agentic coding workshop',
  },
]

const pseudoLabActivityPhotos: ActivityPhoto[] = [
  {
    src: `${assetBaseUrl}activity/pseudolab-angelhack.webp`,
    alt: 'AngelHack Hackathon team photo',
    year: '2025',
    event: 'Hack Seoul 2025 / AngelHack',
    context: 'Hackathon builder activity',
  },
  {
    src: `${assetBaseUrl}activity/pseudolab-builder-activity.webp`,
    alt: 'PseudoLab builder activity table discussion',
    year: '2025',
    event: 'PseudoLab Builder Activity',
    context: 'Builder ecosystem practice',
  },
  {
    src: `${assetBaseUrl}activity/pseudolab-conference.webp`,
    alt: 'PseudoLab conference audience session',
    year: '2025',
    event: 'Pseudo Con 2025 1st',
    context: 'Builder community conference',
  },
  {
    src: `${assetBaseUrl}activity/pseudolab-pseudo-con-2025-2nd.webp`,
    alt: 'Pseudo Con 2025 second event networking room',
    year: '2025',
    event: 'Pseudo Con 2025 2nd',
    context: 'Builder community event',
  },
  {
    src: `${assetBaseUrl}activity/pseudolab-builder-activity-2026.webp`,
    alt: 'Science Agent Leaderboard PseudoLab project team photo',
    year: '2026',
    event: 'Science Agent Leaderboard Team',
    context: 'PseudoLab project team',
  },
  {
    src: `${assetBaseUrl}activity/pseudolab-builders-night.webp`,
    alt: "PseudoLab Builder's Night group photo",
    year: '2026',
    event: "PseudoLab Builder's Night",
    context: 'Talk on builder contribution',
  },
  {
    src: `${assetBaseUrl}activity/pseudolab-nvidia.webp`,
    alt: 'NVIDIA Build-A-Claw builder activity group photo',
    year: '2026',
    event: 'NVIDIA Build-A-Claw',
    context: 'AI agent builder activity',
  },
]

const contactLinks = [
  { label: 'GitHub', href: githubUrl, icon: GitBranch },
  { label: 'Codex Community Korea', href: codexCommunityUrl, icon: Globe2 },
  {
    label: 'Science Agent Leaderboard',
    href: 'https://github.com/Generoustandard/Science-Agent-Leaderboard',
    icon: BrainCircuit,
  },
  {
    label: 'Bon',
    href: 'https://github.com/Generoustandard/Bon',
    icon: Music2,
  },
  {
    label: 'Codex-Community-Docs-KR',
    href: 'https://github.com/Generoustandard/Codex-Community-Docs-KR',
    icon: BookOpenCheck,
  },
]

function App() {
  return (
    <main className="min-h-screen bg-[#f7f8fb] text-[#172033]">
      <Header />
      <Hero />
      <About />
      <Projects />
      <PublicActivityEvidence />
      <DeveloperExperienceLoop />
      <WhyDeveloperExperience />
      <Contact />
      <Footer />
    </main>
  )
}

function Header() {
  return (
    <header className="border-b border-[#d8deea] bg-[#f7f8fb]/95">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <a href="#top" className="text-sm font-semibold text-[#172033]">
          DX Portfolio
        </a>
        <div className="hidden items-center gap-6 text-sm text-[#4d5b73] md:flex">
          <a className="hover:text-[#1959ff]" href="#about">
            About
          </a>
          <a className="hover:text-[#1959ff]" href="#projects">
            Projects
          </a>
          <a className="hover:text-[#1959ff]" href="#dx-loop">
            DX Loop
          </a>
        </div>
        <a
          className="inline-flex items-center gap-2 rounded-md border border-[#b9c4d6] bg-white px-3 py-2 text-sm font-semibold text-[#172033] shadow-sm transition hover:border-[#1959ff] hover:text-[#1959ff] focus:outline-none focus:ring-2 focus:ring-[#1959ff] focus:ring-offset-2"
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          <GitBranch size={16} aria-hidden="true" />
          GitHub
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:px-6 sm:py-18 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20"
    >
      <div>
        <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] text-[#111827] sm:text-6xl lg:text-7xl">
          Junho Kong
        </h1>
        <p className="mt-5 text-xl font-semibold text-[#24314a] sm:text-2xl">
          Developer Experience-oriented AI Platform Engineer
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {[
            'Manufacturing AI Platform',
            'Codex Ambassador',
            'Open-source AI Builder',
          ].map((label) => (
            <span
              className="rounded-md border border-[#c6d2e5] bg-white px-3 py-1.5 text-sm font-semibold text-[#1959ff] shadow-sm"
              key={label}
            >
              {label}
            </span>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#44526a]">
          I build practical developer experiences around frontier AI, from
          Korean Codex community onboarding to industrial AI platforms, agent
          evaluation, and creative AI builder projects.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#1959ff] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0f46d9] focus:outline-none focus:ring-2 focus:ring-[#1959ff] focus:ring-offset-2"
            href="#projects"
          >
            View Projects
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a
            className="inline-flex items-center justify-center gap-2 rounded-md border border-[#b9c4d6] bg-white px-5 py-3 text-sm font-semibold text-[#172033] shadow-sm transition hover:border-[#1959ff] hover:text-[#1959ff] focus:outline-none focus:ring-2 focus:ring-[#1959ff] focus:ring-offset-2"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <GitBranch size={16} aria-hidden="true" />
            GitHub
          </a>
          <a
            className="inline-flex items-center justify-center gap-2 rounded-md border border-[#b9c4d6] bg-white px-5 py-3 text-sm font-semibold text-[#172033] shadow-sm transition hover:border-[#1959ff] hover:text-[#1959ff] focus:outline-none focus:ring-2 focus:ring-[#1959ff] focus:ring-offset-2"
            href={codexCommunityUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Globe2 size={16} aria-hidden="true" />
            Codex Community Korea
          </a>
        </div>
      </div>

      <aside
        className="rounded-lg border border-[#1e2b45] bg-[#101828] p-5 text-white shadow-xl shadow-[#101828]/20"
        aria-label="Portfolio evidence map"
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#f5c542]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#20c997]" />
          </div>
          <span className="text-xs font-medium text-[#aab8d4]">
            evidence-map.ts
          </span>
        </div>
        <div className="mt-5 flex items-center gap-4">
          <img
            className="h-20 w-20 rounded-full border border-white/20 object-cover shadow-lg shadow-black/20"
            src={profilePhotoUrl}
            alt="Junho Kong profile portrait"
            width="80"
            height="80"
          />
          <div>
            <p className="text-lg font-semibold text-white">Proof of work</p>
            <p className="mt-1 text-sm leading-5 text-[#aab8d4]">
              Public-safe evidence across community, platform, agent
              evaluation, and builder projects.
            </p>
          </div>
        </div>
        <div className="py-6">
          <p className="font-mono text-sm text-[#8bd7ff]">
            run_id: dx-frontier-ai-001
          </p>
          <h2 className="mt-4 text-2xl font-semibold leading-tight text-white">
            From capability to adoption.
          </h2>
          <p className="mt-4 text-sm leading-6 text-[#c9d5ea]">
            The through-line is practical adoption: make AI workflows visible,
            testable, explainable, and easier for developers to try.
          </p>
        </div>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {[
            ['01', 'Community', 'Onboarding and workshops'],
            ['02', 'Platform', 'Traceable runs and artifacts'],
            ['03', 'Evaluation', 'Reproducible agent workflows'],
            ['04', 'Docs', 'Localization and review loops'],
          ].map(([number, title, detail]) => (
            <div
              className="grid grid-cols-[2.5rem_1fr] gap-3 py-3"
              key={title}
            >
              <span className="font-mono text-xs font-semibold text-[#20c997]">
                {number}
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-sm text-[#aab8d4]">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </section>
  )
}

function About() {
  return (
    <section
      id="about"
      className="border-y border-[#d8deea] bg-white px-5 py-14 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.7fr_1.3fr]">
        <SectionHeading
          icon={Sparkles}
          title="About"
          subtitle="Builder first, community-facing by design."
        />
        <div className="space-y-5 text-lg leading-8 text-[#44526a]">
          <p>
            I am an AI platform engineer with experience designing manufacturing
            AI workflows and building developer-facing community projects around
            Codex and OpenAI-related technologies.
          </p>
          <p>
            My strength is connecting real-world AI platform architecture with
            developer experience: demos, tools, documentation workflows,
            onboarding content, and feedback loops that help developers adopt
            new AI workflows.
          </p>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionHeading
            icon={Layers3}
            title="Featured Projects"
            subtitle="Public-safe work that shows platform thinking, developer surfaces, and builder momentum."
          />
          <p className="max-w-md text-sm leading-6 text-[#5c6a82]">
            Ordered by relevance for Developer Experience: community onboarding,
            manufacturing AI platform architecture, agent evaluation, then
            supporting creative and documentation experiments.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
          {projects.map((project, index) => (
            <ProjectCard index={index} key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = project.icon
  const isLeadProject = index === 0
  const spanClass = isLeadProject
    ? 'md:col-span-2 lg:col-span-12'
    : 'lg:col-span-6'
  const visualClass =
    project.priority === 'primary'
      ? 'border-[#aebbd0] bg-white shadow-sm'
      : 'border-[#d9dee8] bg-[#fbfcfe]'

  return (
    <article
      className={`${spanClass} ${visualClass} flex h-full flex-col rounded-lg border p-6 transition hover:border-[#1959ff]`}
    >
      <div
        className={
          isLeadProject ? 'grid gap-8 lg:grid-cols-[1.25fr_0.75fr]' : ''
        }
      >
        <div>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#eef4ff] text-[#1959ff]">
                <Icon size={20} aria-hidden="true" />
              </span>
              <span className="font-mono text-sm font-semibold text-[#7a879c]">
                0{index + 1}
              </span>
            </div>
            {project.status ? (
              <span className="rounded-md border border-[#c8d2e3] bg-white px-2.5 py-1 text-xs font-semibold text-[#40506a]">
                {project.status}
              </span>
            ) : null}
          </div>

          <h3 className="mt-5 text-2xl font-semibold leading-tight text-[#111827]">
            {project.title}
          </h3>
          <p className="mt-2 text-base font-semibold text-[#1959ff]">
            {project.subtitle}
          </p>
          <p className="mt-4 text-base leading-7 text-[#44526a]">
            {project.description}
          </p>

          <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
            <div>
              <dt className="font-semibold text-[#172033]">Role</dt>
              <dd className="mt-1 leading-6 text-[#5c6a82]">{project.role}</dd>
            </div>
            <div>
              <dt className="font-semibold text-[#172033]">Focus</dt>
              <dd className="mt-1 leading-6 text-[#5c6a82]">{project.focus}</dd>
            </div>
          </dl>
        </div>

        <div className={isLeadProject ? 'mt-8 lg:mt-0' : ''}>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                className="rounded-md border border-[#c8d2e3] bg-[#f7f9fc] px-2.5 py-1 text-xs font-semibold text-[#40506a]"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>

          {project.principles ? (
            <ul className="mt-6 space-y-3 border-t border-[#d9dee8] pt-5 text-sm leading-6 text-[#44526a]">
              {project.principles.map((principle) => (
                <li className="flex gap-3" key={principle}>
                  <span
                    className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#20a486]"
                    aria-hidden="true"
                  />
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {project.disclaimer ? (
            <p className="mt-6 border-l-2 border-[#20a486] pl-4 text-sm leading-6 text-[#5c6a82]">
              {project.disclaimer}
            </p>
          ) : null}

          {project.href ? (
            <a
              className="mt-6 inline-flex items-center gap-2 rounded-md border border-[#b9c4d6] bg-white px-4 py-2.5 text-sm font-semibold text-[#172033] shadow-sm transition hover:border-[#1959ff] hover:text-[#1959ff] focus:outline-none focus:ring-2 focus:ring-[#1959ff] focus:ring-offset-2"
              href={project.href}
              target="_blank"
              rel="noreferrer"
            >
              {project.linkLabel ?? 'Open project'}
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}

function PublicActivityEvidence() {
  return (
    <section className="border-y border-[#d8deea] bg-white px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <SectionHeading
            icon={ExternalLink}
            title="Public Activity Evidence"
            subtitle="LinkedIn posts grouped by Codex-facing work and PseudoLab builder ecosystem activity."
          />
          <div>
            <p className="text-base leading-7 text-[#44526a]">
              These posts are included as public context for the work behind the
              portfolio. They support the builder story without replacing the
              core project summaries.
            </p>
            <p className="mt-3 text-sm leading-6 text-[#5c6a82]">
              Event and partner names appear as public activity references only.
              Codex Community Korea remains an ambassador-led community
              initiative, not an official OpenAI website.
            </p>
          </div>
        </div>

        <div className="mt-9 grid gap-10 lg:grid-cols-2">
          <ActivityGroup
            title="Codex / AI Developer Community"
            description="Evidence for Codex onboarding, agentic coding workshops, AI engineering notes, and developer community activity."
            activities={codexActivityLinks}
            photos={codexActivityPhotos}
          />
          <ActivityGroup
            title="PseudoLab / Builder Ecosystem"
            description="Community roots, PseudoLab projects, talks, hackathons, and builder activities that shaped the public-facing developer work."
            activities={pseudoLabActivityLinks}
            photos={pseudoLabActivityPhotos}
          />
        </div>
      </div>
    </section>
  )
}

function ActivityGroup({
  title,
  description,
  activities,
  photos,
}: {
  title: string
  description: string
  activities: ActivityLink[]
  photos: ActivityPhoto[]
}) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-[#111827]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#5c6a82]">{description}</p>
      <div className="mt-5 grid grid-cols-3 gap-2">
        {photos.map((photo) => (
          <figure
            className="overflow-hidden rounded-md border border-[#d9dee8] bg-white"
            key={photo.src}
          >
            <img
              className="aspect-[4/3] w-full object-cover"
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
            />
            <figcaption className="border-t border-[#d9dee8] px-2 py-1.5">
              <span className="mb-1 inline-flex rounded-sm bg-[#eef4ff] px-1.5 py-0.5 text-[10px] font-semibold leading-none text-[#1959ff]">
                {photo.year}
              </span>
              <span className="block text-[10px] font-semibold leading-4 text-[#172033]">
                {photo.event}
              </span>
              <span className="block text-[10px] leading-4 text-[#5c6a82]">
                {photo.context}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-5 grid gap-3">
        {activities.map((activity) => (
          <ActivityCard activity={activity} key={activity.href} />
        ))}
      </div>
    </div>
  )
}

function ActivityCard({
  activity,
}: {
  activity: ActivityLink
}) {
  return (
    <a
      className="group rounded-lg border border-[#d9dee8] bg-[#fbfcfe] p-4 transition hover:border-[#1959ff] focus:outline-none focus:ring-2 focus:ring-[#1959ff] focus:ring-offset-2"
      href={activity.href}
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="rounded-md border border-[#c8d2e3] bg-white px-2.5 py-1 text-xs font-semibold text-[#40506a]">
          {activity.theme}
        </span>
        <ExternalLink
          className="mt-1 text-[#7a879c] transition group-hover:text-[#1959ff]"
          size={15}
          aria-hidden="true"
        />
      </div>
      <h3 className="mt-4 text-base font-semibold leading-6 text-[#111827] group-hover:text-[#1959ff]">
        {activity.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-[#5c6a82]">
        {activity.context}
      </p>
    </a>
  )
}

function DeveloperExperienceLoop() {
  return (
    <section
      id="dx-loop"
      className="border-y border-[#d8deea] bg-[#101828] px-5 py-16 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            icon={Workflow}
            title="My Developer Experience Loop"
            subtitle="The same operating model across platform, community, and open-source work."
            inverted
          />
          <p className="text-lg leading-8 text-[#c9d5ea]">
            Across my platform, community, and open-source work, I focus on the
            same loop required for Developer Experience: build something useful,
            make it understandable, put it in front of developers, learn from
            feedback, and improve the workflow.
          </p>
        </div>

        <ol className="mt-10 grid gap-4 md:grid-cols-5">
          {loopSteps.map((step, index) => (
            <li
              className="rounded-lg border border-white/15 bg-white/[0.04] p-4"
              key={step}
            >
              <span className="font-mono text-sm font-semibold text-[#20c997]">
                0{index + 1}
              </span>
              <p className="mt-3 text-sm font-semibold leading-6 text-white">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function WhyDeveloperExperience() {
  return (
    <section className="px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.7fr_1.3fr]">
        <SectionHeading
          icon={Network}
          title="Why Developer Experience"
          subtitle="Adoption is an engineering problem and a communication problem."
        />
        <div className="space-y-5 text-lg leading-8 text-[#44526a]">
          <p>
            I enjoy turning advanced AI capabilities into practical workflows
            developers can understand, trust, and adopt.
          </p>
          <p>
            Through manufacturing AI platform work, Codex Ambassador activities,
            and open-source builder projects, I have learned that adoption
            depends not only on model capability, but also on onboarding,
            examples, documentation, trust, reproducibility, and community
            feedback.
          </p>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-[#d8deea] bg-white px-5 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          icon={ExternalLink}
          title="Contact / Links"
          subtitle="Public links for projects and community work."
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {contactLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                className="flex items-center justify-between gap-4 rounded-lg border border-[#d9dee8] bg-[#fbfcfe] p-4 text-sm font-semibold text-[#172033] transition hover:border-[#1959ff] hover:text-[#1959ff] focus:outline-none focus:ring-2 focus:ring-[#1959ff] focus:ring-offset-2"
                href={link.href}
                key={link.label}
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex items-center gap-3">
                  <Icon size={18} aria-hidden="true" />
                  {link.label}
                </span>
                <ExternalLink size={15} aria-hidden="true" />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#f7f8fb] px-5 py-8 text-sm text-[#5c6a82] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        Personal portfolio of Junho Kong. Codex Community Korea is an
        ambassador-led community initiative and not an official OpenAI website.
      </div>
    </footer>
  )
}

function SectionHeading({
  icon: Icon,
  title,
  subtitle,
  inverted = false,
}: {
  icon: LucideIcon
  title: string
  subtitle: string
  inverted?: boolean
}) {
  return (
    <div>
      <div
        className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md ${
          inverted ? 'bg-white/10 text-[#20c997]' : 'bg-[#eef4ff] text-[#1959ff]'
        }`}
      >
        <Icon size={20} aria-hidden="true" />
      </div>
      <h2
        className={`text-3xl font-semibold leading-tight sm:text-4xl ${
          inverted ? 'text-white' : 'text-[#111827]'
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-3 max-w-xl text-base leading-7 ${
          inverted ? 'text-[#c9d5ea]' : 'text-[#5c6a82]'
        }`}
      >
        {subtitle}
      </p>
    </div>
  )
}

export default App
