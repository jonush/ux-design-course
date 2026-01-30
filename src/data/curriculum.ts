export interface Topic {
  id: string;
  title: string;
  slug: string;
}

export interface Section {
  id: string;
  title: string;
  slug: string;
  foundational: boolean;
  topics: Topic[];
}

export const curriculum: Section[] = [
  {
    id: "human-decision-making",
    title: "Human Decision Making",
    slug: "human-decision-making",
    foundational: true,
    topics: [
      { id: "bj-foggs-behavior-model", title: "BJ Fogg's Behavior Model", slug: "bj-foggs-behavior-model" },
      { id: "create-action-funnel", title: "CREATE Action Funnel", slug: "create-action-funnel" },
      { id: "spectrum-of-thinking-interventions", title: "Spectrum of Thinking Interventions", slug: "spectrum-of-thinking-interventions" },
      { id: "dual-process-theory", title: "Dual Process Theory", slug: "dual-process-theory" },
      { id: "nudge-theory", title: "Nudge Theory", slug: "nudge-theory" },
      { id: "persuasive-technology", title: "Persuasive Technology", slug: "persuasive-technology" },
      { id: "behavioral-science", title: "Behavioral Science", slug: "behavioral-science" },
      { id: "behavioral-economics", title: "Behavioral Economics", slug: "behavioral-economics" },
      { id: "behavior-design", title: "Behavior Design", slug: "behavior-design" },
    ],
  },
  {
    id: "behavior-change-strategies",
    title: "Behavior Change Strategies",
    slug: "behavior-change-strategies",
    foundational: true,
    topics: [
      { id: "bj-foggs-behavior-grid", title: "BJ Fogg's Behavior Grid", slug: "bj-foggs-behavior-grid" },
      { id: "help-user-avoiding-the-cue", title: "Help User Avoiding the Cue", slug: "help-user-avoiding-the-cue" },
      { id: "replace-the-routine", title: "Replace the Routine", slug: "replace-the-routine" },
      { id: "use-consciousness-to-interfere", title: "Use Consciousness to Interfere", slug: "use-consciousness-to-interfere" },
      { id: "mindfulness-to-avoid-acting-on-cue", title: "Mindfulness to Avoid Acting on the Cue", slug: "mindfulness-to-avoid-acting-on-cue" },
      { id: "crowd-out-old-habit", title: "Crowd Out Old Habit with New Behavior", slug: "crowd-out-old-habit" },
      { id: "nir-eyals-hook-model", title: "Nir Eyal's Hook Model", slug: "nir-eyals-hook-model" },
      { id: "cue-routine-reward", title: "Cue Routine Reward Model", slug: "cue-routine-reward" },
      { id: "cheating", title: "Cheating", slug: "cheating" },
      { id: "make-or-change-habits", title: "Make or Change Habits", slug: "make-or-change-habits" },
      { id: "support-conscious-action", title: "Support Conscious Action", slug: "support-conscious-action" },
      { id: "educate-encourage-user", title: "Educate & Encourage User", slug: "educate-encourage-user" },
      { id: "help-user-think-about-action", title: "Help User Think About Their Action", slug: "help-user-think-about-action" },
      { id: "defaulting", title: "Defaulting", slug: "defaulting" },
      { id: "making-it-incidental", title: "Making it Incidental", slug: "making-it-incidental" },
      { id: "automate-repetition", title: "Automate the Act of Repetition", slug: "automate-repetition" },
    ],
  },
  {
    id: "understanding-the-product",
    title: "Understanding the Product",
    slug: "understanding-the-product",
    foundational: true,
    topics: [
      { id: "target-outcome", title: "Target Outcome", slug: "target-outcome" },
      { id: "target-actor", title: "Target Actor", slug: "target-actor" },
      { id: "target-action", title: "Target Action", slug: "target-action" },
      { id: "create-user-personas", title: "Create User Personas", slug: "create-user-personas" },
      { id: "business-model-canvas", title: "Business Model Canvas", slug: "business-model-canvas" },
      { id: "lean-canvas", title: "Lean Canvas", slug: "lean-canvas" },
      { id: "business-model-inspirator", title: "Business Model Inspirator", slug: "business-model-inspirator" },
      { id: "competitor-analysis", title: "Competitor Analysis", slug: "competitor-analysis" },
      { id: "five-forces-model", title: "Five Forces Model", slug: "five-forces-model" },
      { id: "swot-analysis", title: "SWOT Analysis", slug: "swot-analysis" },
    ],
  },
  {
    id: "conceptual-design",
    title: "Conceptual Design",
    slug: "conceptual-design",
    foundational: false,
    topics: [
      { id: "user-stories", title: "User Stories", slug: "user-stories" },
      { id: "keep-it-short-simple", title: "Keep It Short and Simple", slug: "keep-it-short-simple" },
      { id: "make-it-easy-to-understand", title: "Make It Easy to Understand and Complete", slug: "make-it-easy-to-understand" },
      { id: "make-progress-visible", title: "Make Progress Visible to User", slug: "make-progress-visible" },
      { id: "make-progress-meaningful", title: "Make Progress Meaningful to Reward User", slug: "make-progress-meaningful" },
      { id: "make-completion-visible", title: "Make Successful Completion Clearly Visible", slug: "make-completion-visible" },
      { id: "customer-experience-map", title: "Customer Experience Map", slug: "customer-experience-map" },
      { id: "simple-flowchart", title: "Simple Flowchart", slug: "simple-flowchart" },
      { id: "epc-model", title: "Event-driven Process Chain Model (EPC)", slug: "epc-model" },
      { id: "bpmn", title: "Business Process Model & Notation (BPMN)", slug: "bpmn" },
    ],
  },
  {
    id: "prototyping",
    title: "Prototyping",
    slug: "prototyping",
    foundational: false,
    topics: [
      { id: "figma", title: "Figma", slug: "figma" },
      { id: "adobe-xd", title: "Adobe XD", slug: "adobe-xd" },
      { id: "sketch", title: "Sketch", slug: "sketch" },
      { id: "balsamiq", title: "Balsamiq", slug: "balsamiq" },
      { id: "good-layout-rules", title: "Good Layout Rules", slug: "good-layout-rules" },
      { id: "call-to-action", title: "Call to Action", slug: "call-to-action" },
      { id: "status-reports", title: "Status Reports", slug: "status-reports" },
      { id: "how-to-tips", title: "How-to-Tips", slug: "how-to-tips" },
      { id: "reminders-planning-prompts", title: "Reminders & Planning Prompts", slug: "reminders-planning-prompts" },
    ],
  },
  {
    id: "ux-best-practices",
    title: "UX Best Practices",
    slug: "ux-best-practices",
    foundational: false,
    topics: [
      { id: "tell-user-what-action-is", title: "Tell User What the Action Is", slug: "tell-user-what-action-is" },
      { id: "clear-page-of-distractions", title: "Clear the Page of Distractions", slug: "clear-page-of-distractions" },
      { id: "make-it-clear-where-to-act", title: "Make It Clear Where to Act", slug: "make-it-clear-where-to-act" },
      { id: "make-ui-professional", title: "Make UI Professional and Beautiful", slug: "make-ui-professional" },
      { id: "deploy-strong-authority", title: "Deploy Strong Authority on Subject", slug: "deploy-strong-authority" },
      { id: "be-authentic-personal", title: "Be Authentic and Personal", slug: "be-authentic-personal" },
      { id: "deploy-social-proof", title: "Deploy Social Proof", slug: "deploy-social-proof" },
      { id: "prime-user-relevant-associations", title: "Prime User-Relevant Associations", slug: "prime-user-relevant-associations" },
      { id: "avoid-direct-payments", title: "Avoid Direct Payments", slug: "avoid-direct-payments" },
      { id: "avoid-choice-overload", title: "Avoid Choice Overload", slug: "avoid-choice-overload" },
      { id: "avoid-cognitive-overhead", title: "Avoid Cognitive Overhead", slug: "avoid-cognitive-overhead" },
      { id: "leverage-loss-aversion", title: "Leverage Loss Aversion", slug: "leverage-loss-aversion" },
      { id: "use-peer-comparisons", title: "Use Peer Comparisons", slug: "use-peer-comparisons" },
      { id: "use-competition", title: "Use Competition", slug: "use-competition" },
      { id: "frame-text-temporal-myopia", title: "Frame Text to Avoid Temporal Myopia", slug: "frame-text-temporal-myopia" },
      { id: "remind-prior-commitment", title: "Remind of Prior Commitment to Act", slug: "remind-prior-commitment" },
      { id: "make-commitment-to-friends", title: "Make Commitment to Friends", slug: "make-commitment-to-friends" },
      { id: "make-reward-scarce", title: "Make Reward Scarce", slug: "make-reward-scarce" },
      { id: "elicit-implementation-intentions", title: "Elicit Implementation Intentions", slug: "elicit-implementation-intentions" },
      { id: "default-everything", title: "Default Everything", slug: "default-everything" },
      { id: "lessen-burden-of-action", title: "Lessen the Burden of Action/Info", slug: "lessen-burden-of-action" },
      { id: "deploy-peer-comparisons", title: "Deploy Peer Comparisons", slug: "deploy-peer-comparisons" },
    ],
  },
  {
    id: "measuring-the-impact",
    title: "Measuring the Impact",
    slug: "measuring-the-impact",
    foundational: false,
    topics: [
      { id: "behavior-change-games", title: "Behavior Change Games", slug: "behavior-change-games" },
      { id: "decision-making-support", title: "Decision-Making Support", slug: "decision-making-support" },
      { id: "gamification", title: "Gamification", slug: "gamification" },
      { id: "reminders", title: "Reminders", slug: "reminders" },
      { id: "social-sharing", title: "Social Sharing", slug: "social-sharing" },
      { id: "goal-trackers", title: "Goal Trackers", slug: "goal-trackers" },
      { id: "tutorials", title: "Tutorials", slug: "tutorials" },
      { id: "planners", title: "Planners", slug: "planners" },
      { id: "multivariate-testing", title: "Multivariate Testing", slug: "multivariate-testing" },
      { id: "incremental-ab-testing", title: "Incremental A/B Testing", slug: "incremental-ab-testing" },
    ],
  },
];

export function getAllTopicIds(): string[] {
  return curriculum.flatMap((s) => s.topics.map((t) => t.id));
}

export function getTotalTopics(): number {
  return curriculum.reduce((acc, s) => acc + s.topics.length, 0);
}

export function findTopic(sectionSlug: string, topicSlug: string) {
  const section = curriculum.find((s) => s.slug === sectionSlug);
  const topic = section?.topics.find((t) => t.slug === topicSlug);
  return { section, topic };
}
