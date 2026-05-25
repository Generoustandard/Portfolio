import { useState } from 'react'
import {
  ArrowRight,
  BookOpenCheck,
  Boxes,
  BrainCircuit,
  ExternalLink,
  Globe2,
  Music2,
  Network,
  Sparkles,
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
const scienceLeaderboardUrl =
  'https://github.com/Generoustandard/Science-Agent-Leaderboard'
const bonUrl = 'https://github.com/Generoustandard/Bon'
const docsKrUrl =
  'https://github.com/Generoustandard/Codex-Community-Docs-KR'
const assetBaseUrl = import.meta.env.BASE_URL
const profilePhotoUrl = `${assetBaseUrl}profile/junho-kong.jpeg`

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
    links: [
      { label: 'GitHub', href: githubUrl },
      { label: 'Codex Community Korea', href: codexCommunityUrl },
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
  {
    id: 'activity',
    file: '06-activity-evidence.md',
    title: 'Public Activity Evidence',
    subtitle: 'Codex activities and PseudoLab builder ecosystem context.',
    status: 'evidence',
    icon: Network,
    intro:
      'Public posts and photos are grouped to make the difference clear: Codex-facing developer community work is separate from PseudoLab builder ecosystem activity.',
    role: 'Builder / Community-facing Engineer',
    context:
      'The activity evidence supports the portfolio story without replacing project substance.',
    built: [
      'Codex / AI Developer Community activities for onboarding and practical AI developer workflows.',
      'PseudoLab / Builder Ecosystem activities for project collaboration, talks, hackathons, and builder practice.',
      'A public-safe evidence trail using only public posts and sanitized event photos.',
    ],
    dxSignal: [
      'Shows feedback loops with real builders.',
      'Separates ambassador-led Codex activity from PseudoLab project and community roots.',
      'Keeps community evidence tied to developer adoption, not generic event organizing.',
    ],
    focus: [
      'Public Evidence',
      'Codex Community',
      'PseudoLab',
      'Builder Ecosystem',
    ],
    note:
      'Event and partner names appear as public activity references only.',
  },
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
    <main className="min-h-screen bg-[#0f1115] text-[#172033]">
      <div className="flex min-h-screen w-full flex-col overflow-hidden bg-[#0f1115]">
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
    <header className="flex items-center justify-between border-b border-white/10 bg-[#15171c] px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#f5c542]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#58c98b]" />
        </div>
        <span className="hidden font-mono text-xs font-semibold text-[#8d96a6] sm:inline">
          junho-kong.dx
        </span>
      </div>
      <span className="font-mono text-xs font-semibold text-[#707988]">
        portfolio.workspace
      </span>
    </header>
  )
}

function IntroPanel() {
  return (
    <section className="grid gap-6 border-b border-white/10 bg-[#0f1115] p-5 sm:p-6 lg:grid-cols-[minmax(0,0.96fr)_minmax(22rem,1fr)] lg:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <img
          className="h-28 w-28 rounded-full border-4 border-[#1d2533] object-cover shadow-xl shadow-black/30 ring-1 ring-white/20 sm:h-32 sm:w-32"
          src={profilePhotoUrl}
          alt="Junho Kong profile portrait"
          width="128"
          height="128"
        />
        <div className="min-w-0">
          <h1 className="whitespace-nowrap text-4xl font-semibold leading-none text-white sm:text-5xl">
            Junho Kong
          </h1>
          <p className="mt-3 text-lg font-semibold leading-7 text-[#e8ebf0]">
            Developer Experience-oriented AI Platform Engineer
          </p>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[#a2aab7]">
            I build practical developer experiences around frontier AI.
          </p>
        </div>
      </div>

      <div className="rounded-lg border border-white/10 bg-[#15171c] p-4">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#7bd88f]">
          active mission
        </p>
        <p className="mt-3 text-lg font-semibold leading-7 text-white">
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
              className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-semibold text-[#e8ebf0]"
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
      className="grid min-h-[650px] flex-1 bg-[#0f1115] lg:grid-cols-[18rem_minmax(0,1fr)]"
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
    <aside className="border-b border-white/10 bg-[#101216] lg:border-b-0 lg:border-r">
      <div className="hidden p-4 lg:block">
        <QuickLinks />
        <p className="mb-3 mt-5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#707988]">
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

      <div className="border-b border-white/10 p-3 lg:hidden">
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
        className={`font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#707988] ${
          compact ? 'sr-only' : 'mb-3'
        }`}
      >
        Quick Links
      </p>
      <div className={compact ? 'flex gap-2 overflow-x-auto' : 'space-y-2'}>
        {contactLinks.map((link) => (
          <a
            className={`inline-flex items-center justify-between gap-3 rounded-md border border-white/10 bg-white/[0.03] text-sm font-semibold text-[#e8ebf0] transition hover:border-[#6ea8ff]/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#6ea8ff] ${
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
          ? 'border-[#4a7dff]/70 bg-[#1d2533] text-white'
          : 'border-white/10 bg-white/[0.025] text-[#a2aab7] hover:border-[#6ea8ff]/40 hover:bg-white/[0.05] hover:text-white'
      }`}
      onClick={() => onSelectThread(thread.id)}
      type="button"
    >
      <span className="flex items-center gap-2">
        <span className="font-mono text-[0.68rem] font-semibold text-[#7bd88f]">
          {String(index).padStart(2, '0')}
        </span>
        <Icon size={15} aria-hidden="true" />
        <span className="truncate text-sm font-semibold">{thread.title}</span>
      </span>
      {!compact ? (
        <span className="mt-1 block truncate font-mono text-xs text-[#707988]">
          {thread.file}
        </span>
      ) : null}
    </button>
  )
}

function ThreadMain({ thread }: { thread: PortfolioThread }) {
  return (
    <article className="min-w-0 bg-[#0f1115]">
      <div className="border-b border-white/10 bg-[#12151a] px-5 py-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-xs font-semibold text-[#8d96a6]">
            {thread.file}
          </span>
          <span className="rounded-md border border-[#58c98b]/40 bg-[#58c98b]/10 px-2.5 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#7bd88f]">
            {thread.status}
          </span>
        </div>
      </div>

      <div className="space-y-5 p-5 sm:p-6 lg:p-7">
        <div>
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
            {thread.title}
          </h2>
          <p className="mt-3 text-lg font-semibold leading-7 text-[#6ea8ff]">
            {thread.subtitle}
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#c6cbd3]">
            {thread.intro}
          </p>
        </div>

        <MessageBlock label="context" value={thread.context} />
        <div className="grid gap-4 lg:grid-cols-2">
          <ListBlock label="what I built" items={thread.built} />
          <ListBlock label="DX signal" items={thread.dxSignal} />
        </div>

        {thread.id === 'activity' ? <ActivityEvidence /> : null}

        <div className="rounded-lg border border-white/10 bg-[#15171c] p-4">
          <div className="flex flex-wrap gap-2">
            {thread.focus.map((item) => (
              <span
                className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-semibold text-[#e8ebf0]"
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
                className="inline-flex items-center gap-2 rounded-md bg-[#4a7dff] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#3a67db] focus:outline-none focus:ring-2 focus:ring-[#6ea8ff]"
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
    <section className="rounded-lg border border-white/10 bg-[#15171c] p-4">
      <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#7bd88f]">
        {label}
      </p>
      <p className="mt-3 text-base leading-7 text-[#e8ebf0]">{value}</p>
    </section>
  )
}

function ListBlock({ label, items }: { label: string; items: string[] }) {
  return (
    <section className="rounded-lg border border-white/10 bg-[#15171c] p-4">
      <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#7bd88f]">
        {label}
      </p>
      <ul className="mt-3 space-y-3 text-sm leading-6 text-[#c6cbd3]">
        {items.map((item) => (
          <li className="flex gap-3" key={item}>
            <span
              className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#6ea8ff]"
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
  return (
    <section className="grid gap-4 xl:grid-cols-2">
      <ActivityGroup
        title="Codex / AI Developer Community"
        photos={codexActivityPhotos}
        activities={codexActivityLinks}
      />
      <ActivityGroup
        title="PseudoLab / Builder Ecosystem"
        photos={pseudoLabActivityPhotos}
        activities={pseudoLabActivityLinks}
      />
    </section>
  )
}

function ActivityGroup({
  title,
  photos,
  activities,
}: {
  title: string
  photos: ActivityPhoto[]
  activities: ActivityLink[]
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-[#15171c] p-4">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {photos.map((photo) => (
          <figure
            className="overflow-hidden rounded-md border border-white/10 bg-[#0f1115]"
            key={photo.src}
          >
            <img
              className="aspect-[4/3] w-full object-cover"
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
            />
            <figcaption className="border-t border-white/10 px-2 py-1.5">
              <span className="block font-mono text-[10px] font-semibold text-[#7bd88f]">
                {photo.year}
              </span>
              <span className="block truncate text-[10px] font-semibold leading-4 text-[#e8ebf0]">
                {photo.event}
              </span>
              <span className="block truncate text-[10px] leading-4 text-[#8d96a6]">
                {photo.context}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-4 space-y-2">
        {activities.map((activity) => (
          <a
            className="block rounded-md border border-white/10 bg-white/[0.03] p-3 transition hover:border-[#6ea8ff]/50 focus:outline-none focus:ring-2 focus:ring-[#6ea8ff]"
            href={activity.href}
            key={activity.href}
            target="_blank"
            rel="noreferrer"
          >
            <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#7bd88f]">
              {activity.theme}
            </span>
            <span className="mt-1 flex items-start justify-between gap-3 text-sm font-semibold text-white">
              {activity.title}
              <ExternalLink
                className="mt-0.5 flex-none text-[#8d96a6]"
                size={14}
                aria-hidden="true"
              />
            </span>
            <span className="mt-1 block text-xs leading-5 text-[#a2aab7]">
              {activity.context}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0f1115] px-4 py-3 text-xs leading-5 text-[#707988] sm:px-6 lg:px-8">
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
