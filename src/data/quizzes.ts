export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

export const quizzes: Record<string, QuizQuestion[]> = {
  // === SECTION 1: Human Decision Making ===
  "bj-foggs-behavior-model": [
    {
      question: "What are the three elements in BJ Fogg's Behavior Model (B = MAP)?",
      options: ["Motivation, Ability, Prompt", "Mind, Action, Purpose", "Method, Attitude, Practice", "Meaning, Awareness, Persistence"],
      correctIndex: 0,
    },
    {
      question: "Which type of prompt is designed for users who have low motivation?",
      options: ["Signal", "Facilitator", "Spark", "Nudge"],
      correctIndex: 2,
    },
    {
      question: "According to Fogg, which factor is NOT one of the six elements affecting ability (simplicity)?",
      options: ["Time", "Money", "Creativity", "Brain cycles"],
      correctIndex: 2,
    },
    {
      question: "If a user is motivated and able but doesn't act, what is most likely missing?",
      options: ["A reward", "A prompt", "More ability", "Social proof"],
      correctIndex: 1,
    },
  ],
  "create-action-funnel": [
    {
      question: "What does the CREATE acronym stand for in the CREATE Action Funnel?",
      options: [
        "Cue, Reaction, Evaluation, Ability, Timing, Execution",
        "Create, Review, Evaluate, Act, Test, Execute",
        "Context, Response, Engagement, Action, Trigger, Effect",
        "Cue, Reason, Emotion, Ability, Task, End",
      ],
      correctIndex: 0,
    },
    {
      question: "At which stage does the user have an immediate gut reaction?",
      options: ["Evaluation", "Cue", "Reaction", "Execution"],
      correctIndex: 2,
    },
    {
      question: "The Evaluation stage involves what kind of thinking?",
      options: ["Unconscious pattern matching", "Conscious weighing of costs vs. benefits", "Automatic emotional response", "Physical ability assessment"],
      correctIndex: 1,
    },
  ],
  "spectrum-of-thinking-interventions": [
    {
      question: "Which of these is on the 'automatic' end of the Spectrum of Thinking Interventions?",
      options: ["Education and information", "Rational persuasion", "Defaults and pre-selections", "Incentives and rewards"],
      correctIndex: 2,
    },
    {
      question: "When should automatic interventions be preferred?",
      options: ["When users need to understand trade-offs", "When users are busy or distracted", "When decisions have major consequences", "When informed consent is required"],
      correctIndex: 1,
    },
    {
      question: "Nudges sit where on the spectrum?",
      options: ["The automatic end", "The deliberate end", "The middle ground", "Outside the spectrum entirely"],
      correctIndex: 2,
    },
  ],
  "dual-process-theory": [
    {
      question: "Who popularized Dual Process Theory in the book 'Thinking, Fast and Slow'?",
      options: ["BJ Fogg", "Richard Thaler", "Daniel Kahneman", "Nir Eyal"],
      correctIndex: 2,
    },
    {
      question: "System 1 thinking is best described as:",
      options: ["Slow, deliberate, and analytical", "Fast, automatic, and intuitive", "Effortful but accurate", "Conscious and controlled"],
      correctIndex: 1,
    },
    {
      question: "Which cognitive bias describes how the first number seen influences judgment?",
      options: ["Availability bias", "Framing effect", "Anchoring", "Loss aversion"],
      correctIndex: 2,
    },
    {
      question: "Why should UX designers use confirmation dialogs for destructive actions?",
      options: ["To slow down all users", "To engage System 2 for important decisions", "To increase click counts", "To display ads"],
      correctIndex: 1,
    },
  ],
  "nudge-theory": [
    {
      question: "Nudge Theory was developed by which researchers?",
      options: ["Fogg & Eyal", "Thaler & Sunstein", "Kahneman & Tversky", "Duhigg & Clear"],
      correctIndex: 1,
    },
    {
      question: "What is the most powerful type of nudge according to Nudge Theory?",
      options: ["Social proof messaging", "Feedback displays", "Default options", "Simplification"],
      correctIndex: 2,
    },
    {
      question: "What philosophical framework underlies Nudge Theory?",
      options: ["Utilitarianism", "Libertarian paternalism", "Rational choice theory", "Behavioral determinism"],
      correctIndex: 1,
    },
  ],
  "persuasive-technology": [
    {
      question: "BJ Fogg's Functional Triad describes technology acting as:",
      options: ["Input, process, output", "Tool, medium, social actor", "Hardware, software, network", "Creator, distributor, consumer"],
      correctIndex: 1,
    },
    {
      question: "Which persuasion strategy involves guiding users through a process step by step?",
      options: ["Reduction", "Tunneling", "Tailoring", "Conditioning"],
      correctIndex: 1,
    },
    {
      question: "LinkedIn's profile completion progress bar is an example of which strategy?",
      options: ["Self-monitoring", "Surveillance", "Tunneling", "Suggestion"],
      correctIndex: 2,
    },
  ],
  "behavioral-science": [
    {
      question: "Which heuristic describes judging likelihood by how easily examples come to mind?",
      options: ["Representativeness heuristic", "Anchoring heuristic", "Availability heuristic", "Recognition heuristic"],
      correctIndex: 2,
    },
    {
      question: "The peak-end rule says people remember experiences by their:",
      options: ["Average quality throughout", "First impression only", "Peak moment and ending", "Total duration"],
      correctIndex: 2,
    },
    {
      question: "The endowment effect describes people's tendency to:",
      options: ["Seek out new experiences", "Overvalue what they already own", "Follow the crowd", "Prefer the status quo"],
      correctIndex: 1,
    },
  ],
  "behavioral-economics": [
    {
      question: "Loss aversion means that losses feel approximately how many times worse than equivalent gains?",
      options: ["1.5 times", "2 times", "3 times", "5 times"],
      correctIndex: 1,
    },
    {
      question: "Which concept explains why '90% fat-free' sounds better than '10% fat'?",
      options: ["Anchoring", "Framing", "Mental accounting", "Present bias"],
      correctIndex: 1,
    },
    {
      question: "The sunk cost fallacy causes people to:",
      options: ["Abandon projects early", "Continue investing because of past investment", "Ignore future costs", "Overvalue free things"],
      correctIndex: 1,
    },
  ],
  "behavior-design": [
    {
      question: "What is the core philosophy of Behavior Design?",
      options: [
        "Motivate unmotivated people through education",
        "Make desired behaviors easier and find the right moment to prompt",
        "Use rewards to drive all behavior change",
        "Force users through mandatory workflows",
      ],
      correctIndex: 1,
    },
    {
      question: "In the Tiny Habits method, a new habit should be anchored to:",
      options: ["A specific time of day", "An existing habit", "A reward system", "A social commitment"],
      correctIndex: 1,
    },
    {
      question: "How long should a 'tiny habit' take?",
      options: ["10 minutes or less", "5 minutes or less", "2 minutes or less", "30 seconds or less"],
      correctIndex: 2,
    },
  ],

  // === SECTION 2: Behavior Change Strategies ===
  "bj-foggs-behavior-grid": [
    {
      question: "The Behavior Grid classifies behaviors along which two dimensions?",
      options: ["Motivation and ability", "Duration and type", "Frequency and intensity", "Complexity and impact"],
      correctIndex: 1,
    },
    {
      question: "A 'Green Path' behavior refers to:",
      options: ["Stopping a permanent behavior", "Doing a new permanent behavior", "Increasing a temporary behavior", "Decreasing a one-time behavior"],
      correctIndex: 1,
    },
    {
      question: "Duolingo (building a daily learning habit) is an example of which grid cell?",
      options: ["Green Dot", "Green Path", "Purple Span", "Black Path"],
      correctIndex: 1,
    },
  ],
  "help-user-avoiding-the-cue": [
    {
      question: "This strategy breaks the habit loop at which point?",
      options: ["The routine", "The reward", "The cue", "The craving"],
      correctIndex: 2,
    },
    {
      question: "Which is NOT one of the five cue categories?",
      options: ["Location", "Time", "Emotional state", "Financial status"],
      correctIndex: 3,
    },
    {
      question: "The Forest app helps users by:",
      options: ["Blocking all notifications permanently", "Making phone avoidance visual and rewarding", "Deleting social media apps", "Tracking spending habits"],
      correctIndex: 1,
    },
  ],
  "replace-the-routine": [
    {
      question: "When replacing the routine, which parts of the habit loop stay the same?",
      options: ["Cue and routine", "Routine and reward", "Cue and reward", "All three change"],
      correctIndex: 2,
    },
    {
      question: "Why does substitution work?",
      options: [
        "People crave the routine itself",
        "People crave the reward, not the specific routine",
        "Willpower is unlimited",
        "New habits are always easier",
      ],
      correctIndex: 1,
    },
    {
      question: "What is a key implementation tip for replacing routines?",
      options: [
        "Force cold turkey change immediately",
        "Shame the old behavior to motivate change",
        "Offer the replacement at the exact moment of the old cue",
        "Remove all rewards during transition",
      ],
      correctIndex: 2,
    },
  ],
  "use-consciousness-to-interfere": [
    {
      question: "This strategy works by activating which thinking system?",
      options: ["System 1 (automatic)", "System 2 (deliberate)", "Both equally", "Neither — it bypasses thinking"],
      correctIndex: 1,
    },
    {
      question: "Which is an example of using consciousness to interfere?",
      options: [
        "Auto-saving a document",
        "Showing 'You've been scrolling for 30 minutes'",
        "Pre-filling a form",
        "Setting a default option",
      ],
      correctIndex: 1,
    },
    {
      question: "What risk comes from overusing consciousness-raising prompts?",
      options: ["Users become too productive", "Alert fatigue", "Increased motivation", "Better decision making"],
      correctIndex: 1,
    },
  ],
  "mindfulness-to-avoid-acting-on-cue": [
    {
      question: "The mindfulness approach differs from blocking cues because it:",
      options: [
        "Removes the cue entirely",
        "Replaces the reward",
        "Accepts the cue but teaches non-reactivity",
        "Automates the behavior",
      ],
      correctIndex: 2,
    },
    {
      question: "The app 'One Sec' applies mindfulness by:",
      options: [
        "Blocking social media entirely",
        "Forcing a breath before opening social media",
        "Deleting social media accounts",
        "Sending daily mindfulness reminders",
      ],
      correctIndex: 1,
    },
    {
      question: "What does 'urge surfing' mean in this context?",
      options: [
        "Acting on urges immediately",
        "Riding the wave of an urge without acting on it",
        "Browsing the internet mindlessly",
        "Replacing one urge with another",
      ],
      correctIndex: 1,
    },
  ],
  "crowd-out-old-habit": [
    {
      question: "Crowding out differs from replacing the routine because it:",
      options: [
        "Shares the same cue and reward",
        "Doesn't necessarily share the same cue or reward — it occupies the same space",
        "Eliminates the old behavior immediately",
        "Requires more willpower",
      ],
      correctIndex: 1,
    },
    {
      question: "Why is adding a new behavior more sustainable than stopping an old one?",
      options: [
        "New behaviors are always easier",
        "Willpower is unlimited for new behaviors",
        "Addition channels motivation positively while subtraction depletes willpower",
        "Old behaviors always return",
      ],
      correctIndex: 2,
    },
    {
      question: "Which is an example of crowding out?",
      options: [
        "Blocking social media apps",
        "A reading app sending articles at times when users typically open social media",
        "Removing the phone from the bedroom",
        "Punishing unwanted behavior",
      ],
      correctIndex: 1,
    },
  ],
  "nir-eyals-hook-model": [
    {
      question: "What are the four phases of the Hook Model?",
      options: [
        "Trigger, Action, Variable Reward, Investment",
        "Cue, Routine, Reward, Repetition",
        "Motivation, Ability, Prompt, Habit",
        "Awareness, Interest, Decision, Action",
      ],
      correctIndex: 0,
    },
    {
      question: "Which type of variable reward involves social validation like likes and comments?",
      options: ["Rewards of the Hunt", "Rewards of the Self", "Rewards of the Tribe", "Rewards of the Quest"],
      correctIndex: 2,
    },
    {
      question: "Why is the Investment phase important?",
      options: [
        "It provides the main reward",
        "It loads the next trigger and increases switching costs",
        "It replaces the action phase",
        "It eliminates the need for external triggers",
      ],
      correctIndex: 1,
    },
  ],
  "cue-routine-reward": [
    {
      question: "The Cue-Routine-Reward model was popularized by which author?",
      options: ["BJ Fogg", "Nir Eyal", "Charles Duhigg", "Daniel Kahneman"],
      correctIndex: 2,
    },
    {
      question: "What is the 'Golden Rule of Habit Change'?",
      options: [
        "Eliminate all bad habits at once",
        "You can't eliminate a habit — you can only change the routine while keeping the cue and reward",
        "Replace the reward with a bigger one",
        "Remove all cues from the environment",
      ],
      correctIndex: 1,
    },
    {
      question: "Cues come in five categories. Which is NOT one of them?",
      options: ["Location", "Time", "Financial status", "Emotional state"],
      correctIndex: 2,
    },
  ],
  "cheating": [
    {
      question: "In behavior design, 'cheating' refers to:",
      options: [
        "Users lying about their data",
        "Shortcuts users take to get the reward without the intended behavior",
        "Developers cutting corners",
        "Copying competitor features",
      ],
      correctIndex: 1,
    },
    {
      question: "If users consistently cheat your system, what does that suggest?",
      options: [
        "Users are dishonest by nature",
        "More punishments are needed",
        "The system might be wrong, not the users",
        "Gamification should be removed",
      ],
      correctIndex: 2,
    },
    {
      question: "Which is a design response to cheating?",
      options: [
        "Add more rules and restrictions",
        "Measure outcomes, not inputs",
        "Remove all rewards",
        "Ban users who cheat",
      ],
      correctIndex: 1,
    },
  ],
  "make-or-change-habits": [
    {
      question: "When making a new habit, the first step should be to:",
      options: [
        "Set an ambitious goal",
        "Pick a tiny behavior you can't say no to",
        "Tell everyone about your plan",
        "Buy equipment or tools",
      ],
      correctIndex: 1,
    },
    {
      question: "Why is immediate celebration important after performing a tiny habit?",
      options: [
        "It impresses others",
        "It creates positive emotion that wires the habit",
        "It replaces the need for a routine",
        "It eliminates the cue",
      ],
      correctIndex: 1,
    },
    {
      question: "When changing an existing habit, you should experiment with:",
      options: [
        "Different cues", "Different rewards", "Different routines", "Eliminating the habit entirely"
      ],
      correctIndex: 2,
    },
  ],
  "support-conscious-action": [
    {
      question: "Supporting conscious action is the opposite of:",
      options: ["Gamification", "Nudging", "Personalization", "Feedback"],
      correctIndex: 1,
    },
    {
      question: "When is supporting conscious action most appropriate?",
      options: [
        "For routine daily tasks",
        "For important decisions like financial or health choices",
        "For onboarding new users",
        "For increasing engagement metrics",
      ],
      correctIndex: 1,
    },
    {
      question: "Which is an example of a reflection tool?",
      options: [
        "Auto-fill forms",
        "Smart defaults",
        "Cooling-off periods for big decisions",
        "One-click purchase",
      ],
      correctIndex: 2,
    },
  ],
  "educate-encourage-user": [
    {
      question: "What is 'just-in-time learning'?",
      options: [
        "Teaching everything during onboarding",
        "Delivering information when the user needs it, not all at once",
        "Requiring users to complete tutorials before using the product",
        "Sending educational emails weekly",
      ],
      correctIndex: 1,
    },
    {
      question: "Effective encouragement includes all EXCEPT:",
      options: [
        "Celebrating milestones",
        "Normalizing setbacks",
        "Shaming users who fall behind",
        "Showing peer success stories",
      ],
      correctIndex: 2,
    },
    {
      question: "What does 'micro-learning' involve?",
      options: [
        "Hour-long video courses",
        "Bite-sized content of 30 seconds to 2 minutes",
        "Reading entire textbooks",
        "Group study sessions",
      ],
      correctIndex: 1,
    },
  ],
  "help-user-think-about-action": [
    {
      question: "Research shows that asking people to think about their intentions increases follow-through by approximately:",
      options: ["5%", "15%", "30%+", "80%"],
      correctIndex: 2,
    },
    {
      question: "An implementation intention follows what format?",
      options: [
        "I want to [goal]",
        "When [situation], I will [behavior]",
        "If I fail, I will try again",
        "My reward for completing this is [reward]",
      ],
      correctIndex: 1,
    },
    {
      question: "Reflection prompts should be kept to approximately:",
      options: ["1-2 minutes", "10-20 seconds", "5 minutes", "As long as needed"],
      correctIndex: 1,
    },
  ],
  "defaulting": [
    {
      question: "What percentage of people typically accept defaults?",
      options: ["50-60%", "60-70%", "70-80%", "80-90%"],
      correctIndex: 3,
    },
    {
      question: "Defaults are powerful because of all EXCEPT:",
      options: ["Status quo bias", "Implied recommendation", "Novelty seeking", "Cognitive ease"],
      correctIndex: 2,
    },
    {
      question: "Which is an ethical framework for defaults?",
      options: [
        "Would the user thank me if they fully understood this default?",
        "Does this default maximize revenue?",
        "Is this the industry standard?",
        "Will users notice the default?",
      ],
      correctIndex: 0,
    },
  ],
  "making-it-incidental": [
    {
      question: "Making behavior incidental means:",
      options: [
        "Making the behavior optional",
        "Embedding the behavior into something the user is already doing",
        "Making the behavior random",
        "Hiding the behavior from the user",
      ],
      correctIndex: 1,
    },
    {
      question: "The Acorns app is an example because it:",
      options: [
        "Requires users to manually transfer savings",
        "Rounds up purchases and saves the difference automatically",
        "Sends daily reminders to save",
        "Gamifies the saving experience",
      ],
      correctIndex: 1,
    },
    {
      question: "When behavior is truly incidental, what becomes irrelevant?",
      options: ["The reward", "The user's ability", "Motivation", "The technology"],
      correctIndex: 2,
    },
  ],
  "automate-repetition": [
    {
      question: "Automating repetition primarily helps reduce:",
      options: ["User engagement", "Decision fatigue", "Product features", "User feedback"],
      correctIndex: 1,
    },
    {
      question: "Which is an example of 'smart automation'?",
      options: [
        "Automatic bill payments on fixed dates",
        "Predictive text and smart replies",
        "Saved payment methods",
        "Repeat last order buttons",
      ],
      correctIndex: 1,
    },
    {
      question: "A key design guideline for automation is:",
      options: [
        "Automate everything without user consent",
        "Make the setup process longer than doing it manually",
        "Show users what has been automated (transparent operation)",
        "Prevent users from overriding automation",
      ],
      correctIndex: 2,
    },
  ],

  // === SECTION 3: Understanding the Product ===
  "target-outcome": [
    {
      question: "A target outcome should answer which question?",
      options: [
        "What features should we build?",
        "What will change in the real world because of this product?",
        "How many users do we need?",
        "What technology should we use?",
      ],
      correctIndex: 1,
    },
    {
      question: "Which is a properly defined target outcome?",
      options: [
        "Make a better dashboard",
        "Launch feature X by Q2",
        "Reduce customer support tickets by 30%",
        "Improve user experience",
      ],
      correctIndex: 2,
    },
    {
      question: "The best products align user outcomes with:",
      options: ["Technical outcomes", "Business outcomes", "Design outcomes", "Marketing outcomes"],
      correctIndex: 1,
    },
  ],
  "target-actor": [
    {
      question: "The target actor is best defined as:",
      options: [
        "Your entire user base",
        "The specific user whose behavior change drives the target outcome",
        "Your highest-paying customer",
        "The CEO of the company",
      ],
      correctIndex: 1,
    },
    {
      question: "Which segmentation approach focuses on power users vs. casual vs. dormant?",
      options: ["By need", "By stage", "By behavior", "By demographics"],
      correctIndex: 2,
    },
    {
      question: "A common mistake in defining target actors is:",
      options: [
        "Talking to actual users",
        "Focusing on behaviors over demographics",
        "Designing for everyone (which means designing for no one)",
        "Creating detailed profiles",
      ],
      correctIndex: 2,
    },
  ],
  "target-action": [
    {
      question: "A good target action should be all of the following EXCEPT:",
      options: ["Specific", "Observable", "Vague", "Measurable"],
      correctIndex: 2,
    },
    {
      question: "When prioritizing target actions, you should plot them on a matrix of:",
      options: [
        "Cost vs. Revenue",
        "Impact vs. Feasibility",
        "Speed vs. Quality",
        "Complexity vs. Simplicity",
      ],
      correctIndex: 1,
    },
    {
      question: "Most target actions are actually:",
      options: [
        "Single atomic steps",
        "Chains of multiple steps, each a potential failure point",
        "Impossible to measure",
        "Only relevant to new users",
      ],
      correctIndex: 1,
    },
  ],
  "create-user-personas": [
    {
      question: "User personas must be grounded in:",
      options: ["Designer intuition", "Stakeholder opinions", "Real user research", "Industry templates"],
      correctIndex: 2,
    },
    {
      question: "How many personas should a project ideally have?",
      options: ["1-2", "3-5", "7-10", "As many as possible"],
      correctIndex: 1,
    },
    {
      question: "Which modern alternative to personas focuses on what users are trying to accomplish?",
      options: ["Behavioral archetypes", "Proto-personas", "Jobs-to-be-Done", "Empathy maps"],
      correctIndex: 2,
    },
  ],
  "business-model-canvas": [
    {
      question: "The Business Model Canvas was created by:",
      options: ["Ash Maurya", "Alexander Osterwalder", "Eric Ries", "Steve Blank"],
      correctIndex: 1,
    },
    {
      question: "How many building blocks does the Business Model Canvas have?",
      options: ["5", "7", "9", "12"],
      correctIndex: 2,
    },
    {
      question: "Which canvas block directly informs UX personas?",
      options: ["Key Resources", "Customer Segments", "Cost Structure", "Key Activities"],
      correctIndex: 1,
    },
  ],
  "lean-canvas": [
    {
      question: "The Lean Canvas was created by:",
      options: ["Alexander Osterwalder", "Eric Ries", "Ash Maurya", "Steve Blank"],
      correctIndex: 2,
    },
    {
      question: "How does the Lean Canvas differ from the Business Model Canvas?",
      options: [
        "It has fewer blocks",
        "It replaces Key Partners with Problem and Key Activities with Solution",
        "It focuses only on revenue",
        "It removes Customer Segments",
      ],
      correctIndex: 1,
    },
    {
      question: "How long should filling in a Lean Canvas take?",
      options: ["5 minutes", "20 minutes", "1 hour", "A full day"],
      correctIndex: 1,
    },
  ],
  "business-model-inspirator": [
    {
      question: "The Business Model Inspirator works like:",
      options: [
        "A financial calculator",
        "A card deck combining elements from successful existing models",
        "A customer survey tool",
        "A competitor database",
      ],
      correctIndex: 1,
    },
    {
      question: "In a freemium business model, the UX challenge is to:",
      options: [
        "Hide all premium features",
        "Make the free tier unusable",
        "Demonstrate premium value without frustrating free users",
        "Charge all users equally",
      ],
      correctIndex: 2,
    },
    {
      question: "A marketplace business model must serve:",
      options: [
        "Only buyers",
        "Only sellers",
        "Two user types simultaneously",
        "Only advertisers",
      ],
      correctIndex: 2,
    },
  ],
  "competitor-analysis": [
    {
      question: "An 'aspirational competitor' is one that:",
      options: [
        "Sells the same product in the same market",
        "Solves the same need with a different product",
        "Is not a competitor but sets user expectations for quality",
        "Has the lowest prices",
      ],
      correctIndex: 2,
    },
    {
      question: "Mining competitor app reviews helps identify:",
      options: [
        "Their revenue numbers",
        "Their internal strategy",
        "Common user complaints and loved features",
        "Their technology stack",
      ],
      correctIndex: 2,
    },
    {
      question: "The goal of competitor analysis is NOT to:",
      options: ["Copy competitors", "Understand the landscape", "Find gaps to fill", "Study user flows"],
      correctIndex: 0,
    },
  ],
  "five-forces-model": [
    {
      question: "Porter's Five Forces does NOT include:",
      options: ["Threat of new entrants", "Bargaining power of suppliers", "Internal team dynamics", "Threat of substitutes"],
      correctIndex: 2,
    },
    {
      question: "When buyer power is high, what becomes especially important?",
      options: ["Cost reduction", "UX quality", "Marketing spend", "Patent protection"],
      correctIndex: 1,
    },
    {
      question: "The Five Forces framework helps UX designers by:",
      options: [
        "Replacing user research",
        "Providing context on why certain product decisions are made",
        "Designing visual layouts",
        "Measuring conversion rates",
      ],
      correctIndex: 1,
    },
  ],
  "swot-analysis": [
    {
      question: "In SWOT analysis, which elements are internal?",
      options: [
        "Strengths and Opportunities",
        "Strengths and Weaknesses",
        "Weaknesses and Threats",
        "Opportunities and Threats",
      ],
      correctIndex: 1,
    },
    {
      question: "Weaknesses that align with Threats should be prioritized for:",
      options: ["Growth", "Defending", "Redesign", "Mitigation"],
      correctIndex: 3,
    },
    {
      question: "SWOT helps UX designers by:",
      options: [
        "Replacing usability testing",
        "Connecting UX improvements to strategic business needs",
        "Designing color schemes",
        "Writing user stories",
      ],
      correctIndex: 1,
    },
  ],

  // === SECTION 4: Conceptual Design ===
  "user-stories": [
    {
      question: "The standard user story format is:",
      options: [
        "I want [feature] because [reason]",
        "As a [user], I want [goal] so that [benefit]",
        "When [event], do [action]",
        "Given [context], then [result]",
      ],
      correctIndex: 1,
    },
    {
      question: "The INVEST criteria for user stories includes all EXCEPT:",
      options: ["Independent", "Negotiable", "Verbose", "Testable"],
      correctIndex: 2,
    },
    {
      question: "Story mapping organizes stories with user journey steps on the:",
      options: ["Vertical axis", "Horizontal axis", "Diagonal", "In a list"],
      correctIndex: 1,
    },
  ],
  "keep-it-short-simple": [
    {
      question: "Hick's Law states that decision time increases with:",
      options: [
        "The importance of the decision",
        "The number of options",
        "The user's experience level",
        "The time of day",
      ],
      correctIndex: 1,
    },
    {
      question: "Humans can hold approximately how many chunks of information in working memory?",
      options: ["2", "4", "7", "10"],
      correctIndex: 1,
    },
    {
      question: "Which is a strategy to fight feature creep?",
      options: [
        "Add features based on any user request",
        "Audit features by usage data and sunset unused ones",
        "Never remove features once launched",
        "Add an 'Advanced' mode for all features",
      ],
      correctIndex: 1,
    },
  ],
  "make-it-easy-to-understand": [
    {
      question: "The three pillars of making interfaces easy to understand are:",
      options: [
        "Speed, power, flexibility",
        "Clarity, affordance, feedback",
        "Color, typography, spacing",
        "Navigation, search, filter",
      ],
      correctIndex: 1,
    },
    {
      question: "A 5-second test involves:",
      options: [
        "Testing load speed",
        "Showing a screen for 5 seconds and asking what it's for",
        "Users completing a task in 5 seconds",
        "Running 5 usability tests",
      ],
      correctIndex: 1,
    },
    {
      question: "Button text should describe:",
      options: [
        "The technology behind the action",
        "The action that will happen ('Save Draft' not 'Submit')",
        "The developer who built it",
        "The company policy",
      ],
      correctIndex: 1,
    },
  ],
  "make-progress-visible": [
    {
      question: "The goal gradient effect states that people:",
      options: [
        "Give up when goals are far away",
        "Accelerate toward a goal as they get closer",
        "Prefer goals with no progress indicators",
        "Work at a constant pace regardless of progress",
      ],
      correctIndex: 1,
    },
    {
      question: "The endowed progress effect means people are more motivated when they:",
      options: [
        "Start from zero",
        "Have a head start",
        "Don't know their progress",
        "Compete against others",
      ],
      correctIndex: 1,
    },
    {
      question: "Which is an anti-pattern for progress indicators?",
      options: [
        "Showing both local and global progress",
        "Celebrating milestones",
        "Progress bars that move backward",
        "Allowing progress saving",
      ],
      correctIndex: 2,
    },
  ],
  "make-progress-meaningful": [
    {
      question: "What makes progress meaningful rather than just visible?",
      options: [
        "Bigger numbers",
        "Connection to personal goals and intrinsic satisfaction",
        "More frequent notifications",
        "Comparing to all users globally",
      ],
      correctIndex: 1,
    },
    {
      question: "Which reward type is most sustainable long-term?",
      options: ["Badges", "Leaderboard positions", "Intrinsic rewards (sense of accomplishment)", "Discounts"],
      correctIndex: 2,
    },
    {
      question: "Why should rewards vary in timing and type?",
      options: [
        "To confuse users",
        "Because predictable rewards become boring",
        "To reduce costs",
        "To test different systems",
      ],
      correctIndex: 1,
    },
  ],
  "make-completion-visible": [
    {
      question: "Clear completion signals are important because the brain wants to:",
      options: [
        "Start new tasks immediately",
        "Close open loops (closure)",
        "Ignore finished tasks",
        "Repeat completed tasks",
      ],
      correctIndex: 1,
    },
    {
      question: "Mailchimp's high-five animation after sending a campaign is an example of:",
      options: [
        "Error handling",
        "Completion celebration",
        "Loading state",
        "Onboarding flow",
      ],
      correctIndex: 1,
    },
    {
      question: "After task completion, designers should:",
      options: [
        "Show a dead end",
        "Suggest next steps so users aren't left with nowhere to go",
        "Immediately start a new task",
        "Hide the completion status",
      ],
      correctIndex: 1,
    },
  ],
  "customer-experience-map": [
    {
      question: "A customer experience map differs from a user flow because it captures:",
      options: [
        "Only technical steps",
        "The emotional journey across all touchpoints",
        "Code architecture",
        "Database structure",
      ],
      correctIndex: 1,
    },
    {
      question: "At each stage of a CX map, you should map all EXCEPT:",
      options: ["Actions and touchpoints", "Thoughts and emotions", "Source code", "Pain points and opportunities"],
      correctIndex: 2,
    },
    {
      question: "'Moments of truth' in a CX map are:",
      options: [
        "When the product crashes",
        "Critical interactions that shape the user's perception",
        "Legal disclaimers",
        "Customer support calls",
      ],
      correctIndex: 1,
    },
  ],
  "simple-flowchart": [
    {
      question: "In standard flowchart notation, a diamond shape represents:",
      options: ["An action", "A decision point", "Start/end", "Input/output"],
      correctIndex: 1,
    },
    {
      question: "When creating a flowchart, you should first map:",
      options: [
        "All error states",
        "The happy path (ideal scenario)",
        "Edge cases",
        "Alternative flows",
      ],
      correctIndex: 1,
    },
    {
      question: "Flowcharts should flow in which direction?",
      options: [
        "Right to left",
        "Bottom to top",
        "Top to bottom or left to right",
        "Randomly for creativity",
      ],
      correctIndex: 2,
    },
  ],
  "epc-model": [
    {
      question: "EPC stands for:",
      options: [
        "Event-driven Process Chain",
        "Enterprise Planning Council",
        "Efficient Process Control",
        "End-Point Configuration",
      ],
      correctIndex: 0,
    },
    {
      question: "In an EPC model, events and functions must:",
      options: [
        "Appear in random order",
        "Alternate with each other",
        "Always appear in pairs of three",
        "Only appear at the start and end",
      ],
      correctIndex: 1,
    },
    {
      question: "The XOR connector in EPC means:",
      options: [
        "All paths execute",
        "One or more paths execute",
        "Exactly one path executes",
        "No paths execute",
      ],
      correctIndex: 2,
    },
  ],
  "bpmn": [
    {
      question: "BPMN swim lanes show:",
      options: [
        "The speed of each process",
        "Which actor is responsible for each step",
        "The cost of each activity",
        "The priority of tasks",
      ],
      correctIndex: 1,
    },
    {
      question: "A parallel gateway (+) in BPMN means:",
      options: [
        "Choose one path only",
        "All paths execute simultaneously",
        "Skip all paths",
        "Wait for user input",
      ],
      correctIndex: 1,
    },
    {
      question: "BPMN is more expressive than basic flowcharts because it includes:",
      options: [
        "Only rectangles and arrows",
        "Events, activities, gateways, and swim lanes",
        "Only decision points",
        "Color coding",
      ],
      correctIndex: 1,
    },
  ],

  // === SECTION 5: Prototyping ===
  "figma": [
    {
      question: "What is a key advantage of Figma over traditional design tools?",
      options: [
        "It only works offline",
        "Real-time collaborative editing in the browser",
        "It's only for mobile design",
        "It doesn't support prototyping",
      ],
      correctIndex: 1,
    },
    {
      question: "Figma's auto-layout feature is used for:",
      options: [
        "Automatically generating code",
        "Creating responsive components that resize properly",
        "Automatic color selection",
        "AI-powered design suggestions",
      ],
      correctIndex: 1,
    },
    {
      question: "In a typical Figma workflow, what comes after high-fidelity design?",
      options: ["Wireframing", "Prototyping interactions", "Competitor analysis", "User interviews"],
      correctIndex: 1,
    },
  ],
  "adobe-xd": [
    {
      question: "What unique prototyping feature did Adobe XD offer?",
      options: [
        "3D modeling",
        "Voice triggers and speech playback",
        "Virtual reality previews",
        "Automatic coding",
      ],
      correctIndex: 1,
    },
    {
      question: "What is the current status of Adobe XD?",
      options: [
        "It's the most popular design tool",
        "It was discontinued in favor of Figma (maintenance mode)",
        "It was rebranded to Adobe Design",
        "It merged with Sketch",
      ],
      correctIndex: 1,
    },
    {
      question: "Adobe XD's Repeat Grid feature is used for:",
      options: [
        "Creating animations",
        "Quickly duplicating and modifying elements",
        "Version control",
        "User testing",
      ],
      correctIndex: 1,
    },
  ],
  "sketch": [
    {
      question: "Sketch is limited to which operating system?",
      options: ["Windows", "Linux", "macOS", "Chrome OS"],
      correctIndex: 2,
    },
    {
      question: "Sketch pioneered which concept now common in all design tools?",
      options: [
        "Layer groups",
        "Symbols (reusable components)",
        "Color pickers",
        "Export to PDF",
      ],
      correctIndex: 1,
    },
    {
      question: "Compared to Figma, Sketch's main limitation is:",
      options: [
        "No component system",
        "No plugin ecosystem",
        "Lacks real-time collaboration and cross-platform support",
        "Cannot export designs",
      ],
      correctIndex: 2,
    },
  ],
  "balsamiq": [
    {
      question: "Balsamiq's deliberately sketch-like appearance serves what purpose?",
      options: [
        "It's cheaper to develop",
        "It keeps focus on structure and invites feedback instead of pixel-perfect critiques",
        "It looks more professional",
        "It runs faster",
      ],
      correctIndex: 1,
    },
    {
      question: "Balsamiq is best used for:",
      options: [
        "High-fidelity mockups",
        "Developer handoff",
        "Early-stage ideation and rapid wireframing",
        "Design system creation",
      ],
      correctIndex: 2,
    },
    {
      question: "After wireframing in Balsamiq, the typical next step is:",
      options: [
        "Ship to production",
        "Move to Figma for high-fidelity design",
        "Delete the wireframes",
        "Print and mail to stakeholders",
      ],
      correctIndex: 1,
    },
  ],
  "good-layout-rules": [
    {
      question: "The proximity principle states that:",
      options: [
        "All elements should be equally spaced",
        "Related items should be close together, unrelated items separated",
        "Larger items should be closer to the top",
        "Interactive elements should be near the edges",
      ],
      correctIndex: 1,
    },
    {
      question: "The standard responsive web grid uses how many columns?",
      options: ["6", "8", "10", "12"],
      correctIndex: 3,
    },
    {
      question: "Minimum touch targets on mobile should be:",
      options: ["24x24px", "32x32px", "44x44px", "60x60px"],
      correctIndex: 2,
    },
  ],
  "call-to-action": [
    {
      question: "Effective CTA text should start with:",
      options: ["A noun", "An adjective", "A verb", "A question"],
      correctIndex: 2,
    },
    {
      question: "How many primary CTAs should appear per screen?",
      options: ["One", "Two", "Three", "As many as needed"],
      correctIndex: 0,
    },
    {
      question: "Which is a better CTA label than 'Submit'?",
      options: ["Click Here", "OK", "Start Free Trial", "Next"],
      correctIndex: 2,
    },
  ],
  "status-reports": [
    {
      question: "Good error messages should include:",
      options: [
        "Technical error codes only",
        "What went wrong AND how to fix it",
        "A generic 'Something went wrong' message",
        "Only a retry button",
      ],
      correctIndex: 1,
    },
    {
      question: "Status reports answer which user questions?",
      options: [
        "How much does it cost?",
        "What just happened? What's happening now?",
        "Who built this product?",
        "When was the product launched?",
      ],
      correctIndex: 1,
    },
    {
      question: "A key principle of status reporting is:",
      options: [
        "Show fake progress bars to feel faster",
        "Be honest — show real progress, not fake progress bars",
        "Only show errors, never successes",
        "Hide loading states entirely",
      ],
      correctIndex: 1,
    },
  ],
  "how-to-tips": [
    {
      question: "The key principle for how-to tips is:",
      options: [
        "Show all tips at once during onboarding",
        "Progressive disclosure — show tips when relevant",
        "Force users to read every tip",
        "Only use video tutorials",
      ],
      correctIndex: 1,
    },
    {
      question: "Coach marks are best described as:",
      options: [
        "Full-page tutorials",
        "Overlays highlighting a specific element with a brief explanation",
        "Video walkthroughs",
        "Email-based lessons",
      ],
      correctIndex: 1,
    },
    {
      question: "Which is an anti-pattern for tips?",
      options: [
        "Allowing dismissal",
        "Showing tips contextually",
        "Forced tutorials that can't be skipped",
        "Brief one-idea-per-tip content",
      ],
      correctIndex: 2,
    },
  ],
  "reminders-planning-prompts": [
    {
      question: "Implementation intentions increase follow-through by approximately:",
      options: ["5%", "10%", "30%", "70%"],
      correctIndex: 2,
    },
    {
      question: "Which type of reminder is triggered by GPS?",
      options: ["Time-based", "Behavior-based", "Location-based", "Streak-based"],
      correctIndex: 2,
    },
    {
      question: "Too many reminders lead to:",
      options: [
        "Better engagement",
        "Notification fatigue and backfire",
        "Higher conversion rates",
        "Stronger habits",
      ],
      correctIndex: 1,
    },
  ],

  // === SECTION 6: UX Best Practices ===
  "tell-user-what-action-is": [
    {
      question: "To test if an action is clear enough, you should ask users:",
      options: [
        "Do you like the color?",
        "What do you think will happen when you click this?",
        "How old are you?",
        "What device are you using?",
      ],
      correctIndex: 1,
    },
    {
      question: "Instead of a generic 'Delete' button, you should write:",
      options: [
        "Remove",
        "Delete this file permanently",
        "X",
        "Action",
      ],
      correctIndex: 1,
    },
    {
      question: "Primary actions should be communicated through:",
      options: [
        "The smallest buttons on the page",
        "Size, color, and position — making them the most prominent element",
        "Hidden menus only",
        "Footnote text",
      ],
      correctIndex: 1,
    },
  ],
  "clear-page-of-distractions": [
    {
      question: "Amazon's checkout removes main navigation because:",
      options: [
        "It's a bug",
        "Navigation is a distraction that competes with the checkout action",
        "They forgot to add it",
        "Users asked for it",
      ],
      correctIndex: 1,
    },
    {
      question: "Hick's Law is relevant here because:",
      options: [
        "Fewer options lead to faster decisions",
        "More options always help users",
        "Decision time is constant regardless of options",
        "Users prefer complex pages",
      ],
      correctIndex: 0,
    },
    {
      question: "Which pages should NOT be heavily stripped of distractions?",
      options: [
        "Payment/checkout",
        "Sign-up/registration",
        "Browse/explore pages",
        "Onboarding steps",
      ],
      correctIndex: 2,
    },
  ],
  "make-it-clear-where-to-act": [
    {
      question: "Every interactive element needs how many states?",
      options: ["2 (default and hover)", "3 (default, hover, active)", "5 (default, hover, active, focus, disabled)", "1 (default only)"],
      correctIndex: 2,
    },
    {
      question: "On mobile, CTAs should be placed in the:",
      options: [
        "Top-left corner",
        "Thumb-zone (bottom of screen)",
        "Behind a menu",
        "Only in landscape mode",
      ],
      correctIndex: 1,
    },
    {
      question: "A common problem in flat design is:",
      options: [
        "Too much visual depth",
        "Everything looks the same — hard to distinguish clickable from non-clickable",
        "Too many shadows",
        "Excessive use of 3D effects",
      ],
      correctIndex: 1,
    },
  ],
  "make-ui-professional": [
    {
      question: "Users judge a product's quality within approximately:",
      options: ["5 seconds", "50 milliseconds", "2 minutes", "10 seconds"],
      correctIndex: 1,
    },
    {
      question: "The 60-30-10 color rule refers to:",
      options: [
        "Screen resolution ratios",
        "Dominant, secondary, and accent color proportions",
        "Time spent on each design phase",
        "The percentage of users who notice colors",
      ],
      correctIndex: 1,
    },
    {
      question: "Maximum line width for readable body text is:",
      options: ["40-50 characters", "65-75 characters", "100-120 characters", "No limit"],
      correctIndex: 1,
    },
  ],
  "deploy-strong-authority": [
    {
      question: "Cialdini's Authority Principle states that people:",
      options: [
        "Distrust all authority",
        "Follow the lead of credible, knowledgeable experts",
        "Only trust personal experience",
        "Ignore expert opinions",
      ],
      correctIndex: 1,
    },
    {
      question: "Authority signals should be placed near:",
      options: [
        "The footer only",
        "CTAs to reduce hesitation",
        "Hidden in the about page",
        "Only on the homepage",
      ],
      correctIndex: 1,
    },
    {
      question: "Which is NOT an ethical guideline for authority signals?",
      options: [
        "All claims must be truthful",
        "Imply endorsement without permission",
        "Keep claims current and relevant",
        "Let users verify claims",
      ],
      correctIndex: 1,
    },
  ],
  "be-authentic-personal": [
    {
      question: "Authenticity in UX means:",
      options: [
        "Using the latest design trends",
        "Being honest about what you are and transparent about trade-offs",
        "Using personal data without consent",
        "Copying competitors exactly",
      ],
      correctIndex: 1,
    },
    {
      question: "Personalization should be all EXCEPT:",
      options: [
        "Data-driven",
        "Context-aware",
        "Creepy (showing you know too much)",
        "User-controlled",
      ],
      correctIndex: 2,
    },
    {
      question: "Which brand is cited as an example of personality-driven copy?",
      options: ["Microsoft", "Oracle", "Mailchimp", "SAP"],
      correctIndex: 2,
    },
  ],
  "deploy-social-proof": [
    {
      question: "'Wisdom of friends' social proof involves:",
      options: [
        "Celebrity endorsements",
        "Expert reviews",
        "Showing that your friends use this product",
        "Total download counts",
      ],
      correctIndex: 2,
    },
    {
      question: "When does social proof backfire?",
      options: [
        "When numbers are high",
        "When numbers are very low ('2 people bought this')",
        "When using real testimonials",
        "When placed near CTAs",
      ],
      correctIndex: 1,
    },
    {
      question: "Paradoxically, including some negative reviews:",
      options: [
        "Always hurts sales",
        "Builds trust because it feels more authentic",
        "Should be avoided at all costs",
        "Only works for cheap products",
      ],
      correctIndex: 1,
    },
  ],
  "prime-user-relevant-associations": [
    {
      question: "Priming in UX involves:",
      options: [
        "Painting the interface in primary colors",
        "Strategically presenting stimuli before asking users to act",
        "Preparing servers for high traffic",
        "Pre-loading content for faster display",
      ],
      correctIndex: 1,
    },
    {
      question: "Showing success stories before asking users to start a challenge is an example of:",
      options: ["Visual priming", "Verbal priming", "Conceptual priming", "Auditory priming"],
      correctIndex: 2,
    },
    {
      question: "An ethical rule for priming is:",
      options: [
        "Prime false urgency for conversions",
        "Use fear-based associations",
        "Support informed decision-making with truthful associations",
        "Hide the priming from users",
      ],
      correctIndex: 2,
    },
  ],
  "avoid-direct-payments": [
    {
      question: "The 'pain of paying' is strongest with which payment method?",
      options: ["Digital wallet", "Credit card", "Cash", "Subscription"],
      correctIndex: 2,
    },
    {
      question: "Why does a subscription reduce pain of paying?",
      options: [
        "It costs less money",
        "The pain occurs once but benefits are ongoing",
        "Users don't realize they're paying",
        "Subscriptions are always cheaper",
      ],
      correctIndex: 1,
    },
    {
      question: "Credits and tokens reduce pain of paying by:",
      options: [
        "Being cheaper than real money",
        "Creating a mental separation from actual cost",
        "Being untraceable",
        "Expiring quickly",
      ],
      correctIndex: 1,
    },
  ],
  "avoid-choice-overload": [
    {
      question: "In the famous jam study, how many samples led to the highest purchase rate?",
      options: ["6", "12", "18", "24"],
      correctIndex: 0,
    },
    {
      question: "The ideal number of options to present is:",
      options: ["1-2", "3-5", "8-10", "15+"],
      correctIndex: 1,
    },
    {
      question: "Apple's strategy of offering 3 iPhone tiers demonstrates:",
      options: [
        "Choice overload",
        "Good-Better-Best simplification to avoid overload",
        "No strategy",
        "Maximum variety",
      ],
      correctIndex: 1,
    },
  ],
  "avoid-cognitive-overhead": [
    {
      question: "'Recognition over recall' means:",
      options: [
        "Users should memorize the interface",
        "Show options rather than requiring users to remember them",
        "Use only text, no icons",
        "Remove all labels",
      ],
      correctIndex: 1,
    },
    {
      question: "Which is a source of cognitive overhead?",
      options: [
        "Familiar navigation patterns",
        "Consistent styling",
        "Technical jargon and unclear icons without labels",
        "White space and breathing room",
      ],
      correctIndex: 2,
    },
    {
      question: "Copy-to-clipboard functionality reduces which type of burden?",
      options: ["Physical effort", "Memory load", "Visual processing", "Emotional stress"],
      correctIndex: 1,
    },
  ],
  "leverage-loss-aversion": [
    {
      question: "The loss/gain ratio in loss aversion is approximately:",
      options: ["1:1", "1.5:1", "2:1", "5:1"],
      correctIndex: 2,
    },
    {
      question: "Which framing leverages loss aversion?",
      options: [
        "'Upgrade to get new features'",
        "'Your premium features expire in 3 days'",
        "'Check out our new plan'",
        "'We have a sale today'",
      ],
      correctIndex: 1,
    },
    {
      question: "Fake countdown timers that reset are considered:",
      options: [
        "Effective marketing",
        "Dark patterns and unethical",
        "Best practice",
        "Required by law",
      ],
      correctIndex: 1,
    },
  ],
  "use-peer-comparisons": [
    {
      question: "Social comparison theory states that people naturally:",
      options: [
        "Ignore what others do",
        "Evaluate themselves relative to peers",
        "Only compete with themselves",
        "Avoid all comparisons",
      ],
      correctIndex: 1,
    },
    {
      question: "When a user is far below average, peer comparisons can:",
      options: [
        "Always motivate them",
        "Demotivate them",
        "Have no effect",
        "Make them switch products",
      ],
      correctIndex: 1,
    },
    {
      question: "Opower's energy comparison shows users their usage relative to:",
      options: [
        "The national average",
        "The best user in the country",
        "Their neighbors",
        "A theoretical minimum",
      ],
      correctIndex: 2,
    },
  ],
  "use-competition": [
    {
      question: "Weekly leaderboard resets are beneficial because they:",
      options: [
        "Reduce server load",
        "Keep competition achievable for all users",
        "Punish top performers",
        "Save storage space",
      ],
      correctIndex: 1,
    },
    {
      question: "In the Bartle taxonomy, which player type is MOST motivated by competition?",
      options: ["Explorers", "Socializers", "Achievers", "Killers"],
      correctIndex: 3,
    },
    {
      question: "Competition should always offer:",
      options: [
        "Cash prizes",
        "Both competitive and non-competitive paths",
        "Only global rankings",
        "Pay-to-win mechanics",
      ],
      correctIndex: 1,
    },
  ],
  "frame-text-temporal-myopia": [
    {
      question: "Temporal myopia (present bias) is the tendency to:",
      options: [
        "Plan too far ahead",
        "Overvalue immediate rewards and undervalue future benefits",
        "Ignore the present moment",
        "Focus equally on past and future",
      ],
      correctIndex: 1,
    },
    {
      question: "Instead of 'Save $2,400/year,' a better frame would be:",
      options: [
        "Save a lot of money",
        "Save $200/month — that's a nice dinner every week",
        "Our savings rate is competitive",
        "Many users save money",
      ],
      correctIndex: 1,
    },
    {
      question: "Making long-term benefits feel vivid involves:",
      options: [
        "Using abstract language",
        "Showing images of desired future states and personal projections",
        "Hiding long-term data",
        "Only discussing short-term gains",
      ],
      correctIndex: 1,
    },
  ],
  "remind-prior-commitment": [
    {
      question: "This technique leverages which Cialdini principle?",
      options: ["Authority", "Scarcity", "Consistency", "Reciprocity"],
      correctIndex: 2,
    },
    {
      question: "Commitments are most powerful when they are:",
      options: [
        "Forced and private",
        "Voluntary and public",
        "Vague and general",
        "Automated and hidden",
      ],
      correctIndex: 1,
    },
    {
      question: "Escalating commitments means:",
      options: [
        "Demanding big commitments immediately",
        "Starting small and building up over time",
        "Reducing commitments over time",
        "Making all commitments financial",
      ],
      correctIndex: 1,
    },
  ],
  "make-commitment-to-friends": [
    {
      question: "Public commitments are more effective than private ones because:",
      options: [
        "Friends enforce legal contracts",
        "Social consequences (embarrassment, letting others down) add motivation",
        "Public commitments cost money",
        "Private commitments are forgotten immediately",
      ],
      correctIndex: 1,
    },
    {
      question: "When designing social commitment features, sharing should be:",
      options: [
        "Mandatory and automatic",
        "Easy but optional (opt-in only)",
        "Hidden in settings",
        "Restricted to one platform",
      ],
      correctIndex: 1,
    },
    {
      question: "Which is NOT a social commitment design pattern?",
      options: [
        "Goal sharing buttons",
        "Buddy systems",
        "Auto-posting without consent",
        "Group commitments",
      ],
      correctIndex: 2,
    },
  ],
  "make-reward-scarce": [
    {
      question: "The scarcity principle states that people:",
      options: [
        "Prefer abundant things",
        "Want more of what they can have less of",
        "Ignore limited offers",
        "Always wait for sales",
      ],
      correctIndex: 1,
    },
    {
      question: "Which is an example of honest scarcity?",
      options: [
        "A countdown timer that resets every day",
        "'Limited stock' with unlimited inventory",
        "Genuine early-bird pricing with a real deadline",
        "Permanent 'flash sale' banners",
      ],
      correctIndex: 2,
    },
    {
      question: "Real scarcity increases conversion by approximately:",
      options: ["0.5-1x", "2-5x", "10-20x", "50-100x"],
      correctIndex: 1,
    },
  ],
  "elicit-implementation-intentions": [
    {
      question: "Implementation intentions follow the format:",
      options: [
        "I hope to [behavior]",
        "When [situation X], I will [behavior Y]",
        "I want to be better at [skill]",
        "Someday I will [dream]",
      ],
      correctIndex: 1,
    },
    {
      question: "Goals with implementation intentions achieve approximately what follow-through rate?",
      options: ["10-20%", "30-40%", "60-70%", "90-100%"],
      correctIndex: 2,
    },
    {
      question: "The planning process should be kept under:",
      options: ["30 seconds", "2 minutes", "10 minutes", "30 minutes"],
      correctIndex: 1,
    },
  ],
  "default-everything": [
    {
      question: "What percentage of users typically customize settings?",
      options: ["5%", "25%", "50%", "75%"],
      correctIndex: 0,
    },
    {
      question: "The 'default everything' philosophy means:",
      options: [
        "Force all users to use the same settings",
        "Require zero setup for a good experience; offer customization for a great one",
        "Remove all settings entirely",
        "Copy competitor defaults",
      ],
      correctIndex: 1,
    },
    {
      question: "Progressive customization follows which timeline?",
      options: [
        "All options on day 1",
        "Defaults work on day 1, customization surfaces contextually over time",
        "No customization ever",
        "Forced customization during signup",
      ],
      correctIndex: 1,
    },
  ],
  "lessen-burden-of-action": [
    {
      question: "The ideal interaction according to this principle is:",
      options: [
        "A complex multi-step wizard",
        "No interaction at all (zero effort)",
        "A verbose confirmation dialog",
        "Manual data entry",
      ],
      correctIndex: 1,
    },
    {
      question: "Which is a strategy to minimize input?",
      options: [
        "Require users to type their full address",
        "Scan instead of type (QR, OCR, camera)",
        "Add more form fields for completeness",
        "Require account creation before any action",
      ],
      correctIndex: 1,
    },
    {
      question: "Guest checkout is an example of:",
      options: [
        "Increasing friction",
        "Removing barriers to action",
        "Collecting more user data",
        "Increasing security",
      ],
      correctIndex: 1,
    },
  ],
  "deploy-peer-comparisons": [
    {
      question: "When a user is below average, the best approach is:",
      options: [
        "Highlight how far behind they are",
        "Provide actionable tips on what top users do differently",
        "Hide the comparison data",
        "Remove them from the comparison",
      ],
      correctIndex: 1,
    },
    {
      question: "Comparison groups should ideally be:",
      options: [
        "All users globally",
        "Similar peers (same experience level, goals, patterns)",
        "Only the top 1% of users",
        "Random selections",
      ],
      correctIndex: 1,
    },
    {
      question: "An 'aspirational peer' comparison shows someone:",
      options: [
        "At the same level as the user",
        "Far beyond what's achievable",
        "One level above with an achievable gap",
        "Below the user's level",
      ],
      correctIndex: 2,
    },
  ],

  // === SECTION 7: Measuring the Impact ===
  "behavior-change-games": [
    {
      question: "How do behavior change games differ from simple gamification?",
      options: [
        "They use more points and badges",
        "The play IS the desired behavior, not just a layer on top",
        "They require expensive hardware",
        "They are only for children",
      ],
      correctIndex: 1,
    },
    {
      question: "Zombies, Run! is an example because:",
      options: [
        "It rewards running with zombie-themed points",
        "The running IS the game — the story unfolds as you run",
        "It shows zombie-themed leaderboards",
        "It's a zombie shooting game with a fitness mode",
      ],
      correctIndex: 1,
    },
    {
      question: "Which metric is most important for behavior change games?",
      options: [
        "Number of downloads",
        "Time spent in app",
        "Real-world behavior measurement and outcomes",
        "Revenue per user",
      ],
      correctIndex: 2,
    },
  ],
  "decision-making-support": [
    {
      question: "Decision-making support is best for:",
      options: [
        "Low-stakes routine decisions",
        "High-stakes decisions where users want confidence",
        "Automatic behaviors",
        "Impulse purchases",
      ],
      correctIndex: 1,
    },
    {
      question: "Which is NOT a type of decision support tool?",
      options: [
        "Comparison matrices",
        "ROI calculators",
        "Dark patterns",
        "Recommendation engines",
      ],
      correctIndex: 2,
    },
    {
      question: "Decision support tools should:",
      options: [
        "Force users to follow recommendations",
        "Be optional but accessible near the decision point",
        "Replace all user judgment",
        "Only show one option",
      ],
      correctIndex: 1,
    },
  ],
  "gamification": [
    {
      question: "Gamification differs from behavior change games because it:",
      options: [
        "Is more effective",
        "Adds game layers to existing products rather than being a game itself",
        "Uses no game elements",
        "Is only for enterprise software",
      ],
      correctIndex: 1,
    },
    {
      question: "Gamification fails when:",
      options: [
        "Points are meaningful",
        "Users opt in voluntarily",
        "Extrinsic rewards replace intrinsic motivation",
        "Multiple paths to success exist",
      ],
      correctIndex: 2,
    },
    {
      question: "LinkedIn's profile completion progress bar is an example of which game element?",
      options: ["Leaderboard", "Badge", "Level/progress system", "Challenge"],
      correctIndex: 2,
    },
  ],
  "reminders": [
    {
      question: "Adaptive reminders differ from time-based reminders because they:",
      options: [
        "Use fixed schedules",
        "Adjust timing based on AI analysis of user patterns",
        "Only work on weekdays",
        "Require manual setup each time",
      ],
      correctIndex: 1,
    },
    {
      question: "A high opt-out rate for reminders indicates:",
      options: [
        "Users love the product",
        "Reminders are working perfectly",
        "Reminders are too aggressive or frequent",
        "More reminders should be sent",
      ],
      correctIndex: 2,
    },
    {
      question: "The best reminder includes:",
      options: [
        "Only the app name",
        "The specific action to take, not just 'Open app'",
        "A generic motivational quote",
        "A link to settings",
      ],
      correctIndex: 1,
    },
  ],
  "social-sharing": [
    {
      question: "Effective social sharing provides value to:",
      options: [
        "Only the sharer",
        "Only the viewer",
        "Both the sharer and the viewer",
        "Only the company",
      ],
      correctIndex: 2,
    },
    {
      question: "The most important privacy rule for social sharing is:",
      options: [
        "Share everything by default for maximum reach",
        "Never auto-share without explicit consent",
        "Only allow sharing on one platform",
        "Require users to share to continue using the product",
      ],
      correctIndex: 1,
    },
    {
      question: "Spotify Wrapped is a successful sharing feature because it:",
      options: [
        "Forces users to share",
        "Creates personalized, interesting content users want to share",
        "Shares raw listening data",
        "Only works on desktop",
      ],
      correctIndex: 1,
    },
  ],
  "goal-trackers": [
    {
      question: "SMART goals are Specific, Measurable, Achievable, Relevant, and:",
      options: ["Trackable", "Time-bound", "Transparent", "Technical"],
      correctIndex: 1,
    },
    {
      question: "Goal trackers should track:",
      options: [
        "Only activity metrics",
        "Outcomes the user cares about, not just activity",
        "Only time spent in the app",
        "Only social comparisons",
      ],
      correctIndex: 1,
    },
    {
      question: "When users have setbacks, the tracker should:",
      options: [
        "Punish them by resetting all progress",
        "Handle setbacks gracefully without shame",
        "Send angry notifications",
        "Remove the user from leaderboards permanently",
      ],
      correctIndex: 1,
    },
  ],
  "tutorials": [
    {
      question: "The best tutorials teach users by:",
      options: [
        "Showing long videos",
        "Having users read documentation",
        "Letting users learn by doing (hands-on)",
        "Testing users with exams",
      ],
      correctIndex: 2,
    },
    {
      question: "Onboarding tutorials should be kept under:",
      options: ["10 minutes", "5 minutes", "60 seconds", "30 minutes"],
      correctIndex: 2,
    },
    {
      question: "Which is a tutorial anti-pattern?",
      options: [
        "Allowing users to skip",
        "Teaching through action",
        "A forced lengthy tutorial that blocks the product",
        "Offering a way to replay later",
      ],
      correctIndex: 2,
    },
  ],
  "planners": [
    {
      question: "The key insight about planners is that the best one is:",
      options: [
        "The most feature-rich",
        "The most expensive",
        "The one users actually use consistently",
        "The one with the best design",
      ],
      correctIndex: 2,
    },
    {
      question: "A critical feature for digital planners is:",
      options: [
        "Complex setup wizards",
        "Quick entry (capture tasks in seconds)",
        "Mandatory categorization of all tasks",
        "Social features for all tasks",
      ],
      correctIndex: 1,
    },
    {
      question: "Natural language input (like 'Meeting tomorrow at 3pm') helps planners by:",
      options: [
        "Looking more impressive",
        "Reducing the effort to capture tasks quickly",
        "Replacing all other input methods",
        "Being more accurate than manual entry",
      ],
      correctIndex: 1,
    },
  ],
  "multivariate-testing": [
    {
      question: "Multivariate testing differs from A/B testing because it:",
      options: [
        "Tests one variable at a time",
        "Tests multiple variables and their combinations simultaneously",
        "Requires less traffic",
        "Is faster to complete",
      ],
      correctIndex: 1,
    },
    {
      question: "Testing 3 headlines × 2 images × 2 CTAs produces how many combinations?",
      options: ["7", "12", "24", "36"],
      correctIndex: 1,
    },
    {
      question: "The main requirement for multivariate testing is:",
      options: [
        "A small user base",
        "Only one page to test",
        "High traffic volume for statistical significance",
        "No prior A/B test experience",
      ],
      correctIndex: 2,
    },
  ],
  "incremental-ab-testing": [
    {
      question: "Incremental A/B testing measures:",
      options: [
        "User satisfaction only",
        "The true causal lift of a change compared to a holdout control group",
        "Page load speed",
        "Number of bugs fixed",
      ],
      correctIndex: 1,
    },
    {
      question: "The control (holdout) group receives:",
      options: [
        "The new feature",
        "A different new feature",
        "No change — the existing experience",
        "A survey about the feature",
      ],
      correctIndex: 2,
    },
    {
      question: "A common pitfall in incremental testing is:",
      options: [
        "Sample size too large",
        "Testing period too long",
        "Sample size too small for statistical power",
        "Too many control groups",
      ],
      correctIndex: 2,
    },
  ],
};

export function getQuiz(topicId: string): QuizQuestion[] | undefined {
  return quizzes[topicId];
}
