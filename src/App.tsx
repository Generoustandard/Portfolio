import { useEffect, useState } from 'react'
import {
  ArrowRight,
  BookOpenCheck,
  Boxes,
  BrainCircuit,
  ExternalLink,
  Globe2,
  Maximize2,
  Music2,
  Sparkles,
  X,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type LinkItem = {
  label: string
  href: string
}

type PortfolioThread = {
  id: string
  file: string
  title: string
  subtitle: string
  status: string
  icon: LucideIcon
  intro: string
  role: string
  context: string
  built: string[]
  dxSignal: string[]
  focus: string[]
  links?: LinkItem[]
  note?: string
}

type ActivityPhoto = {
  src: string
  alt: string
  year: string
  event: string
  context: string
  eventHref?: string
  reviewHref: string
}

const githubUrl = 'https://github.com/Generoustandard'
const codexCommunityUrl = 'https://codex-community-korea.lovable.app/'
const scienceLeaderboardUrl =
  'https://github.com/Generoustandard/Science-Agent-Leaderboard'
const bonUrl = 'https://github.com/Generoustandard/Bon'
const docsKrUrl =
  'https://github.com/Generoustandard/Codex-Community-Docs-KR'
const assetBaseUrl = import.meta.env.BASE_URL
const profilePhotoUrl = `${assetBaseUrl}profile/junho-kong.jpeg`
const lumaEventUrls = {
  codexMeetup: 'https://luma.com/hdwrnztq',
  robertWalters: 'https://luma.com/64ztqype',
  searchOsSkillathon: 'https://luma.com/nlvl7fww',
} as const
const linkedInRecapUrls = {
  codexSkillathon:
    'https://www.linkedin.com/posts/junho-kong_codex-skillathon-ai-activity-7461671528787496960-ciHK',
  elev8:
    'https://www.linkedin.com/posts/junho-kong_elev8-openai-codexcommunitykorea-activity-7460133915027148801-ZZsK',
  codexAiEngineering:
    'https://www.linkedin.com/posts/junho-kong_ai-codex-aiengineering-activity-7449428527592148992-S5N_',
  openAiCodexDeveloperCommunity:
    'https://www.linkedin.com/posts/junho-kong_openai-codex-developercommunity-activity-7436287028834484224-Q4w0',
  buildersNight:
    'https://www.linkedin.com/posts/junho-kong_qootfosmyqvosqs-pseudolab-codexcommunitykorea-activity-7463576437690699778-3jvH',
  scienceAgent:
    'https://www.linkedin.com/posts/junho-kong_%EA%B0%80%EC%A7%9C%EC%97%B0%EA%B5%AC%EC%86%8C-%EC%97%90%EC%84%9C-%EC%B5%9C%EA%B7%BC-%EB%AA%87%EB%8B%AC%EB%8F%99%EC%95%88-openai-api-%EA%B8%B0%EB%B0%98-science-agent-activity-7464311242212659201-mYHS',
  nvidia:
    'https://www.linkedin.com/posts/junho-kong_ai-agent-nvidia-activity-7458304691748098048-YKvZ',
  multiAgent:
    'https://www.linkedin.com/posts/junho-kong_multi-agent-%EA%B0%99%EC%9D%80-%EC%A2%8B%EC%9D%80-%EC%97%B0%EA%B2%B0%EA%B3%BC-%EC%97%B4%EC%A0%95%EC%9D%80-%EB%8D%94-%EB%86%92%EC%9D%80-%EC%84%B1%EA%B3%BC%EB%A5%BC-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%83%85%EB%8B%88%EB%8B%A4-activity-7420105919721598976-uyq4',
  learningInPublic:
    'https://www.linkedin.com/posts/junho-kong_%ED%96%89%EB%8F%99%EC%97%90%EB%8A%94-%EA%B4%80%EC%84%B1%EC%9D%B4-%EC%9E%88%EA%B3%A0-%EC%9E%91%EC%9D%80-%ED%96%89%EB%8F%99%EC%9D%80-%ED%81%B0-%EA%B4%80%EC%84%B1%EC%9D%84-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%83%85%EB%8B%88%EB%8B%A4-%EA%B7%B8-%EA%B4%80%EC%84%B1%EC%9D%84-activity-7416481268084817923-xQ4M',
  hackSeoul:
    'https://www.linkedin.com/posts/junho-kong_hackseoul2025-angelhack-coupang-activity-7392906068139499520-2LIY',
  pseudoLabGrandGathering:
    'https://www.linkedin.com/posts/junho-kong_1st-grand-gathering-sudo-pseudo-explorer-activity-7266465444604108801-KqVM',
} as const

const threads: PortfolioThread[] = [
  {
    id: 'overview',
    file: '00-overview.md',
    title: 'Overview',
    subtitle: 'Developer experience around frontier AI.',
    status: 'open',
    icon: Sparkles,
    intro:
      'I build practical developer experiences around frontier AI, connecting community onboarding, platform architecture, agent evaluation, and creative AI builder projects.',
    role: 'Developer Experience-oriented AI Platform Engineer',
    context:
      'My work sits between real AI systems and the people trying to adopt them: developers, builders, researchers, and platform users.',
    built: [
      'Developer onboarding surfaces for Korean Codex builders.',
      'A public-safe manufacturing AI platform case study focused on traceable workflows.',
      'Open-source agent evaluation and creative AI experiments.',
      'Documentation and localization workflows for Korean developer experience.',
      'Public activity evidence across Codex-facing community work and PseudoLab builder projects.',
    ],
    dxSignal: [
      'Build something useful.',
      'Explain the workflow clearly.',
      'Share with developers and communities.',
      'Collect feedback.',
      'Improve the product, docs, and onboarding flow.',
    ],
    focus: [
      'Developer onboarding',
      'AI platform architecture',
      'Agent evaluation',
      'Documentation loops',
    ],
    note:
      'This portfolio is public-safe. It does not include confidential manufacturing data, internal system names, or private screenshots.',
  },
  {
    id: 'codex',
    file: '01-codex-community.md',
    title: 'Codex Community Korea',
    subtitle: 'Developer onboarding hub for Korean Codex builders.',
    status: 'shipping',
    icon: Globe2,
    intro:
      'Built an ambassador-led community hub to help Korean developers discover Codex resources, events, workshops, and practical agentic coding workflows.',
    role: 'Builder / Codex Ambassador',
    context:
      'Korean developers needed a clearer path from curiosity about Codex to hands-on agentic coding practice.',
    built: [
      'A live community hub for resources, events, workshops, and onboarding.',
      'Learning surfaces that connect Codex concepts to practical developer workflows.',
      'Public activity loops through workshops, recaps, and community feedback.',
    ],
    dxSignal: [
      'Turns a new AI capability into an approachable developer journey.',
      'Connects documentation, examples, community feedback, and real adoption behavior.',
      'Supports Korean-first developer onboarding without presenting itself as an official OpenAI site.',
    ],
    focus: [
      'Developer Onboarding',
      'Codex',
      'Korean Developer Ecosystem',
      'Community Adoption',
    ],
    links: [{ label: 'Visit live hub', href: codexCommunityUrl }],
    note:
      'Ambassador-led community initiative. Not an official OpenAI website.',
  },
  {
    id: 'on-platform',
    file: '02-on-platform.ts',
    title: 'On-Platform',
    subtitle: 'Manufacturing-first AI analysis platform.',
    status: 'case-study',
    icon: Boxes,
    intro:
      'Designed a public-safe manufacturing-first AI analysis platform concept that connects data management, modeling, visualization, RAG, memory, report generation, and LLM orchestration into a traceable workflow.',
    role: 'Architect / Builder',
    context:
      'Industrial AI workflows need evidence, traceability, and user-facing surfaces that help people trust results rather than just receive model output.',
    built: [
      'A workflow model where every run is traceable by run_id.',
      'An artifact registration pattern for outputs, reports, and generated results.',
      'Evidence-backed report and chatbot answer flows.',
      'A Korean-first UX direction for practical manufacturing AI workflows.',
      'A synthetic case-study framing with no confidential manufacturing data or internal system details.',
    ],
    dxSignal: [
      'Treats LLMs as orchestration coordinators, not blind calculators.',
      'Connects platform architecture with developer-facing trust surfaces.',
      'Frames complex AI workflows as inspectable steps, artifacts, and evidence.',
    ],
    focus: [
      'AI Platform',
      'LLM Orchestration',
      'Evidence-backed Workflows',
      'Korean-first UX',
    ],
    note:
      'Public-safe summary based on synthetic scenarios. No confidential manufacturing data or internal system details included.',
  },
  {
    id: 'science-agent',
    file: '03-science-agent.eval',
    title: 'Science Agent Leaderboard',
    subtitle: 'Evaluating agent workflows beyond accuracy.',
    status: 'early-mvp',
    icon: BrainCircuit,
    intro:
      'Leading an open-source project to evaluate scientific problem-solving agents not only by correctness, but also by workflow design, tool usage, cost, and reproducibility.',
    role: 'Project Lead / Architect',
    context:
      'Agent benchmarks should help builders understand how a result was reached, how expensive it was, and whether the workflow can be reproduced.',
    built: [
      'An evaluation direction for correctness, workflow design, tool usage, cost, and reproducibility.',
      'Leaderboard system planning for scientific problem-solving agents.',
      'A PseudoLab project loop for collaborative builder feedback and iteration.',
    ],
    dxSignal: [
      'Makes agent behavior easier to compare and debug.',
      'Turns benchmark design into a developer-facing evaluation surface.',
      'Keeps the project clearly marked as in progress rather than a completed benchmark.',
    ],
    focus: [
      'Agent Evaluation',
      'Benchmark Design',
      'Open-source',
      'Cost-aware Evaluation',
    ],
    links: [{ label: 'View repository', href: scienceLeaderboardUrl }],
    note: 'Early MVP / in progress.',
  },
  {
    id: 'builder',
    file: '04-builder-experiments.md',
    title: 'Builder Experiments',
    subtitle: 'Creative AI UX and practical AI builder work.',
    status: 'supporting',
    icon: Music2,
    intro:
      'Explored creative AI interfaces and builder ecosystem projects that connect product direction, interaction design, and Copilot-style workflows.',
    role: 'Lead / Creative Experience Planner',
    context:
      'Not every developer experience is a documentation site. Creative tools also need clear control, suggestions, feedback, and understandable AI assistance.',
    built: [
      'Bon, a visual-to-music creation experience.',
      'Rule-based creative music mappings with AI-assisted recommendations.',
      'Copilot-style interaction planning for music composition.',
      'PseudoLab and hackathon builder activities that strengthened the public builder loop.',
    ],
    dxSignal: [
      'Frames AI as an assistant inside a human-controlled creative workflow.',
      'Connects interface planning, team leadership, and practical builder execution.',
      'Avoids overstating the work as a foundation model or fully automated generation system.',
    ],
    focus: [
      'Creative AI UX',
      'Copilot-style Creation',
      'Rule-based Mapping',
      'AI-assisted Recommendations',
    ],
    links: [{ label: 'View Bon repository', href: bonUrl }],
    note:
      'Bon is a rule-based creative music system with AI-assisted recommendations.',
  },
  {
    id: 'docs',
    file: '05-docs-kr.review',
    title: 'Codex-Community-Docs-KR',
    subtitle: 'Early MVP for Korean documentation evaluation.',
    status: 'mvp-stage',
    icon: BookOpenCheck,
    intro:
      'Built an early MVP to explore Korean translation quality evaluation for OpenAI-related documentation workflows through paragraph alignment, candidate generation, rewrite, evaluation, human review, and reviewed golden sets.',
    role: 'Builder',
    context:
      'Korean developer adoption depends on docs that are accurate, readable, reviewed, and connected to real human feedback.',
    built: [
      'Paragraph alignment and candidate generation workflow exploration.',
      'LLM-assisted rewrite and evaluation steps.',
      'Human-in-the-loop review direction with reviewed golden sets.',
    ],
    dxSignal: [
      'Treats localization as a product quality and developer adoption problem.',
      'Combines automated evaluation with human review instead of relying on unchecked output.',
      'Keeps the project clearly positioned as an ongoing MVP experiment.',
    ],
    focus: [
      'Documentation Quality',
      'Localization',
      'LLM-based Evaluation',
      'Human Review',
    ],
    links: [{ label: 'View repository', href: docsKrUrl }],
    note: 'Ongoing experiment / MVP stage. Supporting project under iteration.',
  },
]

const codexActivityPhotos: ActivityPhoto[] = [
  {
    src: `${assetBaseUrl}activity/codex-meetup.webp`,
    alt: 'Codex Community Korea meetup presentation room',
    year: '2026',
    event: 'OpenAI Codex Community Meetup - Korea',
    context:
      'Planned and hosted the meetup, introduced Codex workflows, and led Korean developer onboarding.',
    eventHref: lumaEventUrls.codexMeetup,
    reviewHref: linkedInRecapUrls.openAiCodexDeveloperCommunity,
  },
  {
    src: `${assetBaseUrl}activity/codex-elev8.webp`,
    alt: 'Elev8 Tech Leadership invited session group photo',
    year: '2026',
    event: 'Elev8 x Codex Community Korea',
    context:
      'Co-planned and co-hosted the event with Elev8, leading a talk salon for leadership executives.',
    reviewHref: linkedInRecapUrls.elev8,
  },
  {
    src: `${assetBaseUrl}activity/codex-robert-walters.webp`,
    alt: 'Robert Walters Codex Community Korea meetup group photo',
    year: '2026',
    event: 'Robert Walters x Codex Meetup',
    context: 'Community meetup',
    eventHref: lumaEventUrls.robertWalters,
    reviewHref: linkedInRecapUrls.openAiCodexDeveloperCommunity,
  },
  {
    src: `${assetBaseUrl}activity/codex-skillathon.webp`,
    alt: 'Codex skillathon workshop room',
    year: '2026',
    event: 'Search OS x Codex Skillathon',
    context: 'Hands-on agentic coding workshop',
    eventHref: lumaEventUrls.searchOsSkillathon,
    reviewHref: linkedInRecapUrls.codexSkillathon,
  },
]

const pseudoLabActivityPhotos: ActivityPhoto[] = [
  {
    src: `${assetBaseUrl}activity/codex-hackathon.webp`,
    alt: 'OpenAI x Coxwave Hackathon group photo',
    year: '2026',
    event: 'OpenAI x Coxwave Hackathon',
    context:
      'Joined through PseudoLab as a first-round hackathon judge.',
    reviewHref: linkedInRecapUrls.codexAiEngineering,
  },
  {
    src: `${assetBaseUrl}activity/pseudolab-angelhack.webp`,
    alt: 'AngelHack Hackathon team photo',
    year: '2025',
    event: 'Hack Seoul 2025 / AngelHack',
    context: 'Hackathon builder activity',
    reviewHref: linkedInRecapUrls.hackSeoul,
  },
  {
    src: `${assetBaseUrl}activity/pseudolab-builder-activity.webp`,
    alt: 'PseudoLab builder activity table discussion',
    year: '2025',
    event: 'PseudoLab Builder Activity',
    context: 'Builder ecosystem practice',
    reviewHref: linkedInRecapUrls.multiAgent,
  },
  {
    src: `${assetBaseUrl}activity/pseudolab-conference.webp`,
    alt: 'PseudoLab conference audience session',
    year: '2025',
    event: 'Pseudo Con 2025 1st',
    context: 'Builder community conference',
    reviewHref: linkedInRecapUrls.learningInPublic,
  },
  {
    src: `${assetBaseUrl}activity/pseudolab-pseudo-con-2025-2nd.webp`,
    alt: 'Pseudo Con 2025 second event networking room',
    year: '2025',
    event: 'Pseudo Con 2025 2nd',
    context: 'Builder community event',
    reviewHref: linkedInRecapUrls.pseudoLabGrandGathering,
  },
  {
    src: `${assetBaseUrl}activity/pseudolab-builder-activity-2026.webp`,
    alt: 'Science Agent Leaderboard PseudoLab project team photo',
    year: '2026',
    event: 'Science Agent Leaderboard Team',
    context: 'PseudoLab project team',
    reviewHref: linkedInRecapUrls.scienceAgent,
  },
  {
    src: `${assetBaseUrl}activity/pseudolab-builders-night.webp`,
    alt: "PseudoLab Builder's Night group photo",
    year: '2026',
    event: "PseudoLab Builder's Night",
    context: 'Talk on builder contribution',
    reviewHref: linkedInRecapUrls.buildersNight,
  },
  {
    src: `${assetBaseUrl}activity/pseudolab-nvidia.webp`,
    alt: 'NVIDIA Build-A-Claw builder activity group photo',
    year: '2026',
    event: 'NVIDIA Build-A-Claw',
    context: 'AI agent builder activity',
    reviewHref: linkedInRecapUrls.nvidia,
  },
]

const contactLinks: LinkItem[] = [
  { label: 'GitHub', href: githubUrl },
  { label: 'Codex Community Korea', href: codexCommunityUrl },
  { label: 'Science Agent Leaderboard', href: scienceLeaderboardUrl },
  { label: 'Bon', href: bonUrl },
  { label: 'Codex-Community-Docs-KR', href: docsKrUrl },
]

function App() {
  const [activeThreadId, setActiveThreadId] = useState(threads[0].id)
  const activeThread =
    threads.find((thread) => thread.id === activeThreadId) ?? threads[0]

  return (
    <main className="min-h-screen bg-[#f7f7f3] text-[#202123]">
      <div className="flex min-h-screen w-full flex-col overflow-hidden bg-[#f7f7f3]">
        <TopBar />
        <IntroPanel />
        <ThreadWorkspace
          activeThread={activeThread}
          activeThreadId={activeThreadId}
          onSelectThread={setActiveThreadId}
        />
        <Footer />
      </div>
    </main>
  )
}

function TopBar() {
  return (
    <header className="flex items-center justify-between border-b border-[#deded8] bg-[#fbfbf8] px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#f5c542]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#58c98b]" />
        </div>
        <span className="hidden font-mono text-xs font-semibold text-[#5f6368] sm:inline">
          junho-kong.dx
        </span>
      </div>
      <span className="font-mono text-xs font-semibold text-[#7a7a74]">
        portfolio.workspace
      </span>
    </header>
  )
}

function IntroPanel() {
  return (
    <section className="grid gap-6 border-b border-[#deded8] bg-[#f7f7f3] p-5 sm:p-6 lg:grid-cols-[minmax(0,0.96fr)_minmax(22rem,1fr)] lg:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <img
          className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-xl shadow-[#d6d6ce] ring-1 ring-[#c9c9c2] sm:h-32 sm:w-32"
          src={profilePhotoUrl}
          alt="Junho Kong profile portrait"
          width="128"
          height="128"
        />
        <div className="min-w-0">
          <h1 className="whitespace-nowrap text-4xl font-semibold leading-none text-[#202123] sm:text-5xl">
            Junho Kong
          </h1>
          <p className="mt-3 text-lg font-semibold leading-7 text-[#343541]">
            Developer Experience-oriented AI Platform Engineer
          </p>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[#5f6368]">
            I build practical developer experiences around frontier AI.
          </p>
        </div>
      </div>

      <div className="rounded-lg border border-[#deded8] bg-[#fbfbf8] p-4 shadow-sm">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#0f766e]">
          active mission
        </p>
        <p className="mt-3 text-lg font-semibold leading-7 text-[#202123]">
          Turn AI capability into workflows developers can understand, trust,
          and adopt.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {[
            'Manufacturing AI Platform',
            'Codex Ambassador',
            'Open-source AI Builder',
          ].map((item) => (
            <span
              className="rounded-md border border-[#deded8] bg-white px-3 py-1.5 text-sm font-semibold text-[#343541]"
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function ThreadWorkspace({
  activeThread,
  activeThreadId,
  onSelectThread,
}: {
  activeThread: PortfolioThread
  activeThreadId: string
  onSelectThread: (threadId: string) => void
}) {
  return (
    <section
      className="grid min-h-[650px] flex-1 bg-[#f7f7f3] lg:grid-cols-[18rem_minmax(0,1fr)]"
      aria-label="Portfolio thread workspace"
    >
      <ThreadSidebar
        activeThreadId={activeThreadId}
        onSelectThread={onSelectThread}
      />
      <ThreadMain thread={activeThread} />
    </section>
  )
}

function ThreadSidebar({
  activeThreadId,
  onSelectThread,
}: {
  activeThreadId: string
  onSelectThread: (threadId: string) => void
}) {
  return (
    <aside className="border-b border-[#deded8] bg-[#f1f1ed] lg:border-b-0 lg:border-r">
      <div className="hidden p-4 lg:block">
        <QuickLinks />
        <p className="mb-3 mt-5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#7a7a74]">
          Threads
        </p>
        <div className="space-y-2">
          {threads.map((thread, index) => (
            <ThreadButton
              index={index}
              isActive={thread.id === activeThreadId}
              key={thread.id}
              onSelectThread={onSelectThread}
              thread={thread}
            />
          ))}
        </div>
      </div>

      <div className="border-b border-[#deded8] p-3 lg:hidden">
        <QuickLinks compact />
      </div>

      <div className="overflow-x-auto p-3 lg:hidden">
        <div className="flex min-w-max gap-2">
          {threads.map((thread, index) => (
            <ThreadButton
              compact
              index={index}
              isActive={thread.id === activeThreadId}
              key={thread.id}
              onSelectThread={onSelectThread}
              thread={thread}
            />
          ))}
        </div>
      </div>
    </aside>
  )
}

function QuickLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div>
      <p
        className={`font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#7a7a74] ${
          compact ? 'sr-only' : 'mb-3'
        }`}
      >
        Quick Links
      </p>
      <div className={compact ? 'flex gap-2 overflow-x-auto' : 'space-y-2'}>
        {contactLinks.map((link) => (
          <a
            className={`inline-flex items-center justify-between gap-3 rounded-md border border-[#deded8] bg-white text-sm font-semibold text-[#343541] transition hover:border-[#8ea7db] hover:bg-[#f6f8ff] hover:text-[#202123] focus:outline-none focus:ring-2 focus:ring-[#4f7cff] ${
              compact
                ? 'min-w-max px-3 py-2'
                : 'w-full px-3 py-2'
            }`}
            href={link.href}
            key={link.href}
            target="_blank"
            rel="noreferrer"
          >
            <span>{link.label}</span>
            <ArrowRight size={14} aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  )
}

function ThreadButton({
  thread,
  index,
  isActive,
  onSelectThread,
  compact = false,
}: {
  thread: PortfolioThread
  index: number
  isActive: boolean
  onSelectThread: (threadId: string) => void
  compact?: boolean
}) {
  const Icon = thread.icon

  return (
    <button
      aria-pressed={isActive}
      className={`group text-left transition focus:outline-none focus:ring-2 focus:ring-[#6ea8ff] ${
        compact
          ? 'min-w-[13.5rem] rounded-md border px-3 py-3'
          : 'w-full rounded-lg border p-3'
      } ${
        isActive
          ? 'border-[#8ea7db] bg-[#e9f0ff] text-[#202123]'
          : 'border-[#deded8] bg-white/70 text-[#5f6368] hover:border-[#8ea7db] hover:bg-[#f6f8ff] hover:text-[#202123]'
      }`}
      onClick={() => onSelectThread(thread.id)}
      type="button"
    >
      <span className="flex items-center gap-2">
        <span className="font-mono text-[0.68rem] font-semibold text-[#0f766e]">
          {String(index).padStart(2, '0')}
        </span>
        <Icon size={15} aria-hidden="true" />
        <span className="truncate text-sm font-semibold">{thread.title}</span>
      </span>
      {!compact ? (
        <span className="mt-1 block truncate font-mono text-xs text-[#7a7a74]">
          {thread.file}
        </span>
      ) : null}
    </button>
  )
}

function ThreadMain({ thread }: { thread: PortfolioThread }) {
  return (
    <article className="min-w-0 bg-[#f7f7f3]">
      <div className="border-b border-[#deded8] bg-[#ececea] px-5 py-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-xs font-semibold text-[#5f6368]">
            {thread.file}
          </span>
          <span className="rounded-md border border-[#9fd8bd] bg-[#eefaf3] px-2.5 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#0f766e]">
            {thread.status}
          </span>
        </div>
      </div>

      <div className="space-y-5 p-5 sm:p-6 lg:p-7">
        <div>
          <h2 className="text-3xl font-semibold leading-tight text-[#202123] sm:text-4xl">
            {thread.title}
          </h2>
          <p className="mt-3 text-lg font-semibold leading-7 text-[#2857a8]">
            {thread.subtitle}
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#5f6368]">
            {thread.intro}
          </p>
        </div>

        <MessageBlock label="context" value={thread.context} />
        <div className="grid gap-4 lg:grid-cols-2">
          <ListBlock label="what I built" items={thread.built} />
          <ListBlock label="DX signal" items={thread.dxSignal} />
        </div>

        {thread.id === 'overview' ? <ActivityEvidence /> : null}

        <div className="rounded-lg border border-[#deded8] bg-[#fbfbf8] p-4 shadow-sm">
          <div className="flex flex-wrap gap-2">
            {thread.focus.map((item) => (
              <span
                className="rounded-md border border-[#deded8] bg-white px-2.5 py-1 text-xs font-semibold text-[#343541]"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {thread.links?.length ? (
          <div className="flex flex-wrap gap-3">
            {thread.links.map((link) => (
              <a
                className="inline-flex items-center gap-2 rounded-md bg-[#202123] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#343541] focus:outline-none focus:ring-2 focus:ring-[#4f7cff]"
                href={link.href}
                key={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
                <ExternalLink size={15} aria-hidden="true" />
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  )
}

function MessageBlock({ label, value }: { label: string; value: string }) {
  return (
    <section className="rounded-lg border border-[#deded8] bg-[#fbfbf8] p-4 shadow-sm">
      <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#0f766e]">
        {label}
      </p>
      <p className="mt-3 text-base leading-7 text-[#343541]">{value}</p>
    </section>
  )
}

function ListBlock({ label, items }: { label: string; items: string[] }) {
  return (
    <section className="rounded-lg border border-[#deded8] bg-[#fbfbf8] p-4 shadow-sm">
      <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#0f766e]">
        {label}
      </p>
      <ul className="mt-3 space-y-3 text-sm leading-6 text-[#5f6368]">
        {items.map((item) => (
          <li className="flex gap-3" key={item}>
            <span
              className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#4f7cff]"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function ActivityEvidence() {
  const [selectedPhoto, setSelectedPhoto] = useState<ActivityPhoto | null>(null)

  useEffect(() => {
    if (!selectedPhoto) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedPhoto(null)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedPhoto])

  return (
    <>
      <section className="space-y-4" aria-labelledby="activity-evidence-title">
        <div>
          <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#0f766e]">
            evidence
          </p>
          <h3
            className="mt-2 text-2xl font-semibold text-[#202123]"
            id="activity-evidence-title"
          >
            Public Activity Evidence
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[#5f6368]">
            Public posts and photos are grouped to separate Codex-facing
            developer community work from PseudoLab builder ecosystem activity.
          </p>
        </div>
        <div className="grid gap-4 xl:grid-cols-2">
          <ActivityGroup
            title="Codex / AI Developer Community"
            photos={codexActivityPhotos}
            onPhotoSelect={setSelectedPhoto}
          />
          <ActivityGroup
            title="PseudoLab / Builder Ecosystem"
            photos={pseudoLabActivityPhotos}
            onPhotoSelect={setSelectedPhoto}
          />
        </div>
      </section>

      {selectedPhoto ? (
        <PhotoLightbox
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      ) : null}
    </>
  )
}

function ActivityGroup({
  title,
  photos,
  onPhotoSelect,
}: {
  title: string
  photos: ActivityPhoto[]
  onPhotoSelect: (photo: ActivityPhoto) => void
}) {
  return (
    <div className="rounded-lg border border-[#deded8] bg-[#fbfbf8] p-4 shadow-sm">
      <h4 className="text-lg font-semibold text-[#202123]">{title}</h4>
      <div className="mt-4 space-y-3">
        {photos.map((photo) => (
          <article
            className="grid grid-cols-[6.25rem_minmax(0,1fr)] gap-3 rounded-md border border-[#deded8] bg-white p-2 sm:grid-cols-[10rem_minmax(0,1fr)]"
            key={photo.src}
          >
            <button
              aria-label={`Expand photo: ${photo.event}`}
              className="group relative block h-full min-h-24 overflow-hidden rounded-md text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#4f7cff] sm:min-h-28"
              onClick={() => onPhotoSelect(photo)}
              title="Expand photo"
              type="button"
            >
              <img
                className="h-full w-full object-cover transition duration-200 group-hover:scale-[1.03]"
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
              />
              <span
                className="pointer-events-none absolute right-2 top-2 inline-flex h-7 w-7 items-center justify-center rounded-md border border-white/70 bg-white/85 text-[#343541] opacity-0 shadow-sm transition group-hover:opacity-100 group-focus-visible:opacity-100"
                aria-hidden="true"
              >
                <Maximize2 size={14} />
              </span>
            </button>
            <div className="min-w-0 py-1 pr-1">
              <span className="block font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#0f766e]">
                {photo.year}
              </span>
              <h5 className="mt-1 whitespace-normal break-words text-sm font-semibold leading-5 text-[#202123]">
                {photo.event}
              </h5>
              <p className="mt-1 break-words text-xs leading-5 text-[#5f6368]">
                {photo.context}
              </p>
              <PhotoLinks photo={photo} variant="card" />
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

function PhotoLightbox({
  photo,
  onClose,
}: {
  photo: ActivityPhoto
  onClose: () => void
}) {
  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#202123]/80 px-4 py-6 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
      role="dialog"
    >
      <div className="max-h-full w-full max-w-5xl overflow-hidden rounded-lg border border-white/20 bg-[#fbfbf8] shadow-2xl">
        <div className="flex items-start justify-between gap-4 border-b border-[#deded8] px-4 py-3">
          <div>
            <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#0f766e]">
              {photo.year}
            </p>
            <h4 className="mt-1 text-base font-semibold text-[#202123]">
              {photo.event}
            </h4>
            <p className="mt-1 text-sm text-[#5f6368]">{photo.context}</p>
            <PhotoLinks photo={photo} variant="lightbox" />
          </div>
          <button
            aria-label="Close expanded photo"
            className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-md border border-[#deded8] bg-white text-[#343541] transition hover:bg-[#f1f1ed] focus:outline-none focus:ring-2 focus:ring-[#4f7cff]"
            onClick={onClose}
            title="Close"
            type="button"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>
        <div className="bg-[#111318] p-2 sm:p-3">
          <img
            className="max-h-[72vh] w-full object-contain"
            src={photo.src}
            alt={photo.alt}
          />
        </div>
      </div>
    </div>
  )
}

function PhotoLinks({
  photo,
  variant,
}: {
  photo: ActivityPhoto
  variant: 'card' | 'lightbox'
}) {
  const isLightbox = variant === 'lightbox'
  const linkClass = isLightbox
    ? 'inline-flex items-center gap-1.5 rounded-md border border-[#deded8] bg-white px-3 py-2 text-xs font-semibold text-[#343541] transition hover:bg-[#f1f1ed] focus:outline-none focus:ring-2 focus:ring-[#4f7cff]'
    : 'inline-flex items-center gap-1 rounded-md border border-[#deded8] bg-[#f7f7f3] px-2 py-1.5 text-[0.68rem] font-semibold text-[#2857a8] transition hover:border-[#8ea7db] hover:bg-[#f6f8ff] focus:outline-none focus:ring-2 focus:ring-[#4f7cff]'

  return (
    <div className={isLightbox ? 'mt-3 flex flex-wrap gap-2' : 'mt-3 flex flex-wrap gap-1.5'}>
      {photo.eventHref ? (
        <a
          aria-label={`Open Luma event for ${photo.event}`}
          className={linkClass}
          href={photo.eventHref}
          target="_blank"
          rel="noreferrer"
        >
          {isLightbox ? 'Luma event' : 'Luma'}
          <ExternalLink size={isLightbox ? 13 : 11} aria-hidden="true" />
        </a>
      ) : null}
      <a
        aria-label={`Open LinkedIn recap for ${photo.event}`}
        className={linkClass}
        href={photo.reviewHref}
        target="_blank"
        rel="noreferrer"
      >
        {isLightbox ? 'LinkedIn recap' : 'LinkedIn'}
        <ExternalLink size={isLightbox ? 13 : 11} aria-hidden="true" />
      </a>
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[#deded8] bg-[#f7f7f3] px-4 py-3 text-xs leading-5 text-[#7a7a74] sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-2 sm:flex-row">
        <span>Personal portfolio of Junho Kong.</span>
        <span>
          Codex Community Korea is an ambassador-led community initiative and
          not an official OpenAI website.
        </span>
      </div>
    </footer>
  )
}

export default App
