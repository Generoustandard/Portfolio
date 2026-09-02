from pathlib import Path


def replace_once(text: str, old: str, new: str, label: str) -> str:
    count = text.count(old)
    if count != 1:
        raise RuntimeError(f"Expected one anchor for {label}, found {count}")
    return text.replace(old, new, 1)


app_path = Path("src/App.tsx")
app = app_path.read_text(encoding="utf-8")

app = replace_once(
    app,
    "  note?: string\n}",
    "  note?: string\n  researchFoundation?: string[]\n}",
    "PortfolioThread research field",
)

old_overview = """    intro:
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
"""

new_overview = """    intro:
      'I build full-stack manufacturing AI products, agent evaluation systems, and practical developer experiences around frontier AI.',
    role: 'Manufacturing AI Platform Engineer / Codex Ambassador / DX-oriented Builder',
    context:
      'My path connects graduate manufacturing AI research, On-Platform at SK On, Korean Codex onboarding, and open-source agent evaluation.',
    built: [
      'A full-stack manufacturing AI analysis platform that standardizes repeated workflows and supports configurable reuse.',
      'Research-grade DED monitoring and multi-defect diagnosis pipelines using image preprocessing, time-series analysis, statistics, machine learning, and deep learning.',
      'Developer onboarding surfaces for Korean Codex builders.',
      'Open-source agent evaluation and creative AI experiments.',
      'Documentation and localization workflows for Korean developer experience.',
    ],
"""
app = replace_once(app, old_overview, new_overview, "overview narrative")

old_on_platform = """    subtitle: 'Manufacturing-first AI analysis platform.',
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
"""

new_on_platform = """    subtitle: 'Full-stack manufacturing AI analysis platform for reusable workflows.',
    status: 'company-work',
    icon: Boxes,
    intro:
      'At SK On, I build a full-stack manufacturing AI analysis platform that turns repeated data and AI requests into reusable workflows. This portfolio presents the product through sanitized synthetic scenarios.',
    role: 'Manufacturing AI Platform Engineer at SK On / Product Architect / Full-stack Builder',
    context:
      'Graduate research taught me how to build and validate individual manufacturing AI models. At SK On, I expanded that work into a platform problem: standardize recurring preparation, analysis, modeling, visualization, reporting, and interpretation steps so non-developer users can run, understand, trace, and reuse validated workflows.',
    built: [
      'A full-stack AI analysis platform that consolidates scattered manufacturing analysis tasks into reusable workflows.',
      'A common workflow for data preparation, analysis and modeling, visualization, reporting, and interpretation.',
      'A configurable workflow and template layer for adapting the platform without building a separate product for every task.',
      'A non-developer-friendly UX for running, understanding, and reusing analysis workflows.',
      'Analysis modules for statistical comparison, machine learning, feature importance, 2D and 3D visualization, report generation, and LLM-based Copilot assistance.',
      'Run and artifact tracking mechanisms that support evidence, review, and reproducibility.',
    ],
    dxSignal: [
      'Shows direct ownership of a full-stack AI product, from manufacturing analysis logic to reusable user workflows.',
      'Connects research-grade model validation with a product that non-developer users can operate and understand.',
      'Turns fragmented analysis requests into a common platform contract while preserving task-specific flexibility.',
      'Frames Developer Experience as making complex AI analysis repeatable, inspectable, and usable.',
    ],
    focus: [
      'SK On Company Work',
      'Manufacturing AI',
      'AI Platform',
      'Workflow Reuse',
      'Non-developer UX',
    ],
    researchFoundation: [
      'M.S. in Mechanical Engineering, Sungkyunkwan University, 2020–2022; GPA 4.0/4.5.',
      'Developed a DED real-time anomaly-monitoring workflow using image preprocessing, STFT and HHT, and 2D-CNN and M2D-CNN models; reduced the analysis cycle from one week to one day, while the HHT-based approach improved accuracy by approximately 20%.',
      'Built a DED multi-defect diagnosis pipeline using 40 image features, selected 10 features with ANOVA and t-tests, compared ANN, KNN, and SVM classifiers, and achieved 92.7% accuracy with the best SVM model.',
      'This research shaped the On-Platform emphasis on validated analysis, evidence, traceability, and reusable workflows.',
    ],
    note:
      'Company work at SK On, summarized with sanitized synthetic scenarios. No confidential manufacturing data, process names, internal system names, private screenshots, or company-confidential metrics are included.',
"""
app = replace_once(app, old_on_platform, new_on_platform, "On-Platform narrative")

app = replace_once(
    app,
    "        <MessageBlock label=\"context\" value={thread.context} />\n        <div className=\"grid gap-4 lg:grid-cols-2\">",
    "        <MessageBlock label=\"context\" value={thread.context} />\n        {thread.researchFoundation?.length ? (\n          <ListBlock label=\"research foundation\" items={thread.researchFoundation} />\n        ) : null}\n        <div className=\"grid gap-4 lg:grid-cols-2\">",
    "research foundation renderer",
)

if "researchFoundation" not in app or "92.7%" not in app:
    raise RuntimeError("Research foundation content was not added")

app_path.write_text(app, encoding="utf-8")

readme = """# Junho Kong - Developer Experience Portfolio

This is a personal portfolio site for full-stack manufacturing AI products, developer experience, and AI builder work.

Junho is a Manufacturing AI Platform Engineer at SK On, Codex Ambassador, and PseudoLab-grown builder. His work connects graduate manufacturing AI research, On-Platform, agent evaluation, Korean Codex onboarding, and community programs that help developers turn frontier AI into practical workflows.

The interface is structured as a Codex-inspired thread workspace so interviewers can scan Junho's projects by topic.

## Career Narrative

- Graduate manufacturing AI research: experimental data, image and time-series processing, statistical validation, machine learning, and deep learning.
- On-Platform at SK On: reusable full-stack analysis workflows for non-developer manufacturing users.
- Science Agent Leaderboard: correctness, tool usage, cost, execution validation, and reproducibility.
- Codex Community Korea: Korean-first developer onboarding, learning surfaces, and community programs.

## Research Foundation

- M.S. in Mechanical Engineering, Sungkyunkwan University, 2020–2022; GPA 4.0/4.5.
- Developed a Directed Energy Deposition (DED) real-time anomaly-monitoring workflow using image preprocessing, STFT/HHT, and 2D-CNN/M2D-CNN models.
- Reduced the analysis cycle from one week to one day; the HHT-based approach improved model accuracy by approximately 20%.
- Built a DED multi-defect diagnosis pipeline using 40 image features, ANOVA and t-tests, and ANN/KNN/SVM classifiers; the best SVM model achieved 92.7% accuracy.
- This research foundation informs On-Platform's emphasis on validated analysis, evidence, traceability, and reusable workflows.

## Focus

- Full-stack manufacturing AI platform engineering at SK On
- Korean Codex community onboarding and programs
- Agent evaluation and benchmark design
- Manufacturing AI research and experimental validation
- Creative AI and user-centered AI workflows
- Documentation quality and localization experiments

## Featured Projects

- On-Platform
- Codex Community Korea
- Science Agent Leaderboard
- Codex-Community-Docs-KR
- Bon

## Notes

This is a personal portfolio.
Codex Community Korea is an ambassador-led community initiative and is not an official OpenAI website.
On-Platform represents company work at SK On, described using sanitized synthetic scenarios without confidential manufacturing data.

## Development

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Build the production site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```
"""
Path("README.md").write_text(readme, encoding="utf-8")

print("Updated public portfolio with graduate research foundation and On-Platform framing.")
