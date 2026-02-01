// Custom free-response questions designed for synthesis, application, and critical thinking.
// These questions are specific to each topic and require more than simple recall.

interface FreeResponseQuestion {
  question: string;
  hint?: string; // Optional hint shown to help guide thinking
}

// Map of topicId -> custom free response questions
// Focus on Phase 1 (foundational) topics from curriculum
const customQuestions: Record<string, FreeResponseQuestion[]> = {
  // === SECTION 1: Human Decision Making (CORE) ===
  "bj-foggs-behavior-model": [
    {
      question: "A climate action app launched with great fanfare but 90% of users who download it never complete a single action. The team is debating whether to fix motivation (better messaging about urgency), ability (simpler actions), or prompts (better notifications). Using B=MAP, analyze why this type of behavioral failure pattern occurs and design a systematic diagnostic approach to identify the true bottleneck. What would success look like at each level?",
      hint: "Consider: Environmental behavior often involves competing motivations, social norms, and systemic barriers that go beyond individual factors.",
    },
    {
      question: "The B=MAP model suggests motivation and ability can compensate for each other, but research shows this relationship isn't linear—it follows a curve. Design two different onboarding flows for a financial literacy app: one optimized for high-motivation/low-ability users and another for low-motivation/high-ability users. Explain the psychological principles behind your design choices.",
    },
    {
      question: "Fogg argues that 'tiny habits' work because they operate below the motivation threshold needed for larger behaviors. But critics say this approach can lead to 'behavioral tokenism'—people doing small gestures that don't create meaningful change. How would you design a habit formation app that bridges tiny habits to meaningful impact while respecting the psychological reality of motivation fluctuation?",
    },
  ],
  "create-action-funnel": [
    {
      question: "You're analyzing an e-commerce checkout flow with high abandonment at the payment step. Walk through each CREATE stage (Cue → Reaction → Evaluation → Ability → Timing → Execution) and identify what might be causing drop-off at this critical moment.",
    },
    {
      question: "The CREATE funnel distinguishes between 'Reaction' (intuitive/gut response) and 'Evaluation' (conscious weighing). How would you design a landing page to succeed at BOTH stages for a new budgeting app?",
    },
    {
      question: "Why is 'Timing' a separate stage in the CREATE funnel, distinct from Ability? Give an example of a user who has motivation, ability, and a clear cue—but still doesn't act because the timing is wrong.",
    },
  ],
  "spectrum-of-thinking-interventions": [
    {
      question: "A health insurance company wants to get more customers to complete their annual health assessment. Should they use an 'automatic' intervention (like defaulting users into the assessment) or a 'deliberate' intervention (like educational content about why assessments matter)? Defend your choice.",
    },
    {
      question: "Social media 'dark patterns' often exploit automatic thinking. Describe a specific example and explain how the same platform could redesign the feature to respect deliberate thinking while still achieving business goals.",
    },
    {
      question: "When is it ethically appropriate to use automatic interventions (nudges, defaults) versus requiring deliberate engagement from users? Propose a framework for deciding.",
    },
  ],
  "dual-process-theory": [
    {
      question: "You're designing an investment platform for beginners. How would you structure the interface to leverage System 1 for routine tasks while engaging System 2 for consequential decisions like large withdrawals?",
    },
    {
      question: "Anchoring bias (a System 1 shortcut) is commonly exploited in pricing pages. Describe an ethical use of anchoring AND an unethical use. What distinguishes them?",
    },
    {
      question: "System 2 is 'lazy' and easily fatigued. How does this insight affect how you should design a complex multi-step form (like a mortgage application)?",
    },
  ],
  "nudge-theory": [
    {
      question: "Netflix's autoplay and Amazon's 'Frequently bought together' are both nudges, but they feel very different to users. One feels helpful while the other often feels manipulative. Analyze the psychological and design factors that determine whether a nudge feels supportive vs. exploitative. Design three nudges for a shopping app that would pass the 'user gratitude test'—users would thank you for them if they understood how they work.",
    },
    {
      question: "The paradox of choice suggests too many options paralyze users, but cultural research shows this effect varies significantly across cultures and contexts. You're designing a retirement savings app for a diverse global audience. How would you apply nudge principles while respecting cultural differences in autonomy, authority, and decision-making styles? What are the ethical implications of using the same nudge architecture across different cultural contexts?",
    },
    {
      question: "Thaler argues that perfect rationality is impossible, so choice architecture is inevitable—the question is whether it's designed well or poorly. But AI is increasingly personalizing these architectures in real-time. Design a framework for ethical AI-powered nudging that adapts to individual psychology without becoming manipulative. What guardrails would prevent the system from exploiting individual vulnerabilities?",
    },
  ],
  "persuasive-technology": [
    {
      question: "Fogg's Functional Triad describes technology as Tool, Medium, or Social Actor. A modern AI assistant like ChatGPT acts as all three simultaneously. Explain how it fulfills each role and what design implications this has.",
    },
    {
      question: "Duolingo is often cited as a masterclass in persuasive design. Identify three specific persuasive strategies it uses (from Fogg's seven strategies) and explain how they work together to create habits.",
    },
    {
      question: "Where is the line between 'persuasive technology' and 'manipulative technology'? Propose specific criteria a designer should use to evaluate whether their product has crossed that line.",
    },
  ],
  "behavioral-science": [
    {
      question: "The 'peak-end rule' says people judge experiences by their peak moment and ending. How would you redesign an airline check-in experience (often frustrating) to leverage this insight?",
    },
    {
      question: "The endowment effect makes people overvalue what they own. How could a subscription service use this ethically to improve retention? How could they misuse it?",
    },
    {
      question: "Confirmation bias causes people to seek information that confirms their beliefs. How does this affect how you should design a news aggregation app, and what responsibility do designers have to counter it?",
    },
  ],
  "behavioral-economics": [
    {
      question: "Loss aversion tells us losses feel ~2x worse than equivalent gains. You're designing the cancellation flow for a subscription service. How would you frame the messaging to leverage loss aversion WITHOUT being manipulative?",
    },
    {
      question: "Mental accounting explains why people treat money differently based on its source. How could a savings app leverage this to help users save more? (Think about how 'found money' vs. 'earned money' is treated.)",
    },
    {
      question: "Present bias makes people overweight immediate rewards. A fitness app struggles because users choose immediate comfort over long-term health. Design a feature that bridges this gap—making future benefits feel more immediate.",
    },
  ],
  "behavior-design": [
    {
      question: "BJ Fogg's Tiny Habits formula is 'After I [existing habit], I will [tiny new behavior].' Design an onboarding flow for a journaling app that helps users anchor journaling to an existing morning routine.",
    },
    {
      question: "Why does Behavior Design emphasize 'celebrating' immediately after completing a tiny habit? What's happening neurologically, and how would you design this celebration moment in an app?",
    },
    {
      question: "A common mistake is making the target behavior too big. Take 'exercise daily' and break it down into a Behavior Design-approved tiny habit. Then explain how this tiny version actually leads to the bigger goal over time.",
    },
  ],

  // === SECTION 2: Behavior Change Strategies (CORE) ===
  "bj-foggs-behavior-grid": [
    {
      question: "A smoking cessation app targets 'Black Path' behavior (stop a permanent behavior)—the hardest cell in Fogg's grid. What makes this so difficult, and what strategies are specifically suited to this type of behavior change?",
    },
    {
      question: "Contrast how you would design for a 'Green Dot' behavior (new, one-time action like signing up) versus a 'Green Path' behavior (new, permanent habit like daily meditation). What's fundamentally different about each approach?",
    },
    {
      question: "Using the Behavior Grid, classify what type of behavior change Instagram is asking for when they show 'You're All Caught Up.' Is this a good fit for the behavior type? Why or why not?",
    },
  ],
  "help-user-avoiding-the-cue": [
    {
      question: "A user wants to stop compulsively checking their email. The cues include notification sounds, badge counts, and even just seeing the email icon. Design a 'cue avoidance' system that helps without completely disabling email functionality.",
    },
    {
      question: "The five cue categories are: location, time, emotional state, other people, and preceding action. For someone trying to reduce social media use, identify likely cues in at least three categories and design interventions for each.",
    },
    {
      question: "Some critics argue that cue avoidance is just 'hiding the problem' rather than building real self-control. When is cue avoidance the right strategy, and when should designers instead help users build tolerance to cues?",
    },
  ],
  "replace-the-routine": [
    {
      question: "A user stress-eats when anxious (cue: anxiety → routine: eat snacks → reward: temporary comfort). Design a mobile app feature that offers a replacement routine delivering the same reward of temporary comfort without the unwanted behavior.",
    },
    {
      question: "The key insight is that people crave the reward, not the routine. But how do you accurately identify what reward the user is actually seeking? Describe a research process to uncover the true reward behind a behavior.",
    },
    {
      question: "Why does the text recommend 'offering the replacement at the exact moment of the old cue' and allowing 'gradual transition' rather than forcing cold turkey? What psychological principles support this approach?",
    },
  ],
  "use-consciousness-to-interfere": [
    {
      question: "Apple's Screen Time shows 'You've reached your limit.' This activates System 2 but can feel naggy. Design a consciousness-raising intervention that's equally effective but feels more like a helpful friend than a judgmental parent.",
    },
    {
      question: "Alert fatigue is a real risk when using consciousness-raising prompts. How would you decide WHEN to interrupt a user versus when to let them continue in automatic mode? Propose specific criteria.",
    },
    {
      question: "Some spending tracker apps show 'You've already spent $X on dining this week' before food orders. Psychologically, why is this effective? And when might it backfire?",
    },
  ],
  "mindfulness-to-avoid-acting-on-cue": [
    {
      question: "The app 'One Sec' forces a breathing pause before opening social media. Design an evolution of this concept that teaches genuine mindfulness skills over time, not just enforces delays.",
    },
    {
      question: "Mindfulness approaches 'accept the urge but don't act on it.' This is very different from distraction or avoidance. Explain why observing an urge without reacting actually weakens it over time.",
    },
    {
      question: "Urge tracking (logging when you feel the urge and its intensity) is shown to reduce urges even without other interventions. Why might the simple act of logging change behavior?",
    },
  ],
  "crowd-out-old-habit": [
    {
      question: "Crowding out uses addition instead of subtraction. Why is 'start doing Y' psychologically easier than 'stop doing X'? Connect this to what we know about willpower and motivation.",
    },
    {
      question: "A podcast app wants to crowd out mindless social media scrolling during commutes. Design a feature set that makes podcast listening more attractive than scrolling for the same 'idle time reward.'",
    },
    {
      question: "What's the difference between 'replacing the routine' and 'crowding out'? Give an example where crowding out is the better strategy and explain why.",
    },
  ],
  "nir-eyals-hook-model": [
    {
      question: "Variable rewards are central to the Hook Model. Explain why a slot machine (highly variable) is more addictive than a vending machine (predictable), and how social media feeds exploit this same principle.",
    },
    {
      question: "The Investment phase creates future value and loads the next trigger. How does Instagram's Investment phase work, and why does it make users more likely to return?",
    },
    {
      question: "Nir Eyal later wrote 'Indistractable' about breaking tech addiction. There's a tension between building habit-forming products and respecting user autonomy. How would you resolve this as a designer?",
    },
  ],
  "cue-routine-reward": [
    {
      question: "Duhigg's 'Golden Rule of Habit Change' says you can't eliminate habits, only modify them. Apply this rule to design a feature that helps someone change their 'scroll social media when bored' habit into something healthier.",
    },
    {
      question: "Identifying the TRUE reward is crucial but tricky—people often don't know what they're really craving. Describe a method to help a user discover whether their 'checking email constantly' habit is driven by boredom, anxiety, FOMO, or something else.",
    },
    {
      question: "Snapchat streaks create a powerful habit loop. Map out the exact Cue-Routine-Reward chain, then explain why streaks are so effective at maintaining daily engagement.",
    },
  ],
  "cheating": [
    {
      question: "If users consistently 'cheat' a system to get rewards without doing the intended behavior, the content says 'the system might be wrong, not the users.' Give an example and explain what signal cheating provides to designers.",
    },
    {
      question: "Gamification often creates perverse incentives where users game metrics rather than achieve real goals. How would you design a fitness app that measures outcomes (actual fitness) rather than inputs (logging workouts)?",
    },
    {
      question: "Some learning apps let users skip ahead or look up answers. Is this 'cheating' or is it users finding their optimal learning path? How would you design to support both accountability and autonomy?",
    },
  ],
  "make-or-change-habits": [
    {
      question: "The advice 'start incredibly small' (2-minute habits) seems counterintuitive—won't tiny actions lead to tiny results? Explain the psychological mechanism by which tiny habits actually expand into larger behaviors over time.",
    },
    {
      question: "Design an onboarding sequence for a language learning app that uses the habit formation principles: tiny behavior, clear trigger, immediate celebration. Be specific about the first week's experience.",
    },
    {
      question: "Changing an existing habit is harder than forming a new one. Why? What makes the neural pathways of established habits so persistent, and what strategies work best against this?",
    },
  ],
  "support-conscious-action": [
    {
      question: "For a high-stakes decision like choosing a health insurance plan, describe how you would design an interface that supports conscious, deliberate decision-making rather than nudging users toward a default.",
    },
    {
      question: "Cooling-off periods (waiting before completing a big purchase) are an example of supporting conscious action. When is this appropriate, and when does it become paternalistic interference?",
    },
    {
      question: "Most UX advice is about reducing friction. When should designers deliberately ADD friction to support better decisions? Give three examples.",
    },
  ],
  "educate-encourage-user": [
    {
      question: "Just-in-time learning delivers information when needed, not all at once. Design the educational moments for a first-time user of a stock trading app—what do they need to know, and WHEN do they need to know it?",
    },
    {
      question: "Why does 'shaming users who fall behind' backfire, while 'normalizing setbacks' improves retention? What's the psychological principle at work?",
    },
    {
      question: "Duolingo combines education with encouragement masterfully. Identify three specific design patterns they use and explain why each is effective.",
    },
  ],
  "help-user-think-about-action": [
    {
      question: "Research shows that simply asking people about their intentions increases follow-through by 30%+. Design a pre-commitment prompt for a workout app that leverages this insight without feeling like a quiz.",
    },
    {
      question: "Implementation intentions ('When X, I will Y') are more effective than vague goals ('I'll exercise more'). How would you guide users to form implementation intentions in a meal planning app?",
    },
    {
      question: "Reflection prompts must be brief (10-20 seconds) to avoid fatigue. Design a 15-second end-of-day reflection for a productivity app that helps users think about their work patterns.",
    },
  ],
  "defaulting": [
    {
      question: "80-90% of users accept defaults. A social media platform could default privacy settings to 'public' (better for growth) or 'private' (better for users). Make the case for defaulting to private, considering long-term business outcomes.",
    },
    {
      question: "The ethical framework for defaults asks: 'Would the user thank me if they fully understood?' Apply this test to three common defaults: newsletter pre-checked, auto-renewing subscriptions, and two-factor auth enabled.",
    },
    {
      question: "Organ donation rates differ dramatically between opt-in and opt-out countries. Why is this seemingly small change so powerful? What does it reveal about human decision-making?",
    },
  ],
  "making-it-incidental": [
    {
      question: "Acorns' round-up feature makes saving 'incidental' to spending. Design another feature for a different domain (health, learning, productivity) that makes a desirable behavior happen as a byproduct of something users already do.",
    },
    {
      question: "The principle is 'when motivation becomes irrelevant because the behavior requires no effort.' But doesn't this remove agency from users? When is incidental design appropriate vs. when should users make conscious choices?",
    },
    {
      question: "Apple Health tracks steps without any user input. What makes this work, and why can't all behaviors be made incidental? What are the requirements for a behavior to be incidentalized?",
    },
  ],
  "automate-repetition": [
    {
      question: "Automation reduces decision fatigue but can also reduce user engagement. How would you design automated features for a budgeting app that save mental energy WITHOUT making users feel disconnected from their finances?",
    },
    {
      question: "'Smart automation' (like predictive text) differs from 'full automation' (like auto-pay). When should a product guess what users want vs. just do what they explicitly set up? What are the risks of each?",
    },
    {
      question: "Design guidelines say: 'Easy setup, transparent operation, easy override.' Apply these principles to design an automated email sorting feature that won't frustrate power users.",
    },
  ],

  // === SECTION 3: Understanding the Product (CORE) ===
  "target-outcome": [
    {
      question: "A startup says their goal is to 'make the best task management app.' Transform this into a proper target outcome that's specific, measurable, and connects user behavior to business results.",
    },
    {
      question: "The best products align user outcomes with business outcomes. For a meditation app, what user outcome directly drives which business outcome? Map the chain from user value to revenue.",
    },
    {
      question: "Why is 'Launch feature X' an output rather than an outcome? What's the danger of measuring outputs instead of outcomes, and how does this lead teams astray?",
    },
  ],
  "target-actor": [
    {
      question: "A fitness app has three user types: hardcore athletes, casual exercisers, and people who signed up but never worked out. Which should be the 'target actor' for a retention initiative? Defend your choice.",
    },
    {
      question: "'Designing for everyone means designing for no one.' Explain this principle and describe a real product that failed (or struggled) because it tried to serve too broad an audience.",
    },
    {
      question: "Psychographics (values, attitudes, lifestyle) often matter more than demographics (age, gender). For a sustainable shopping app, describe two users with identical demographics but opposite psychographics.",
    },
  ],
  "target-action": [
    {
      question: "'Use the app more' is too vague as a target action. For a language learning app, define a specific, observable, measurable target action that would indicate real learning is happening.",
    },
    {
      question: "Most target actions are actually chains of smaller steps, each a potential failure point. Map the chain from 'wanting to meditate' to 'completing a 5-minute meditation session' and identify the riskiest link.",
    },
    {
      question: "You should prioritize target actions by Impact × Feasibility. A news app could push for 'daily reading' (high impact, low feasibility) or 'article saves' (medium impact, high feasibility). How do you decide?",
    },
  ],
  "create-user-personas": [
    {
      question: "Personas based on assumptions are 'dangerous.' Describe a research process to create evidence-based personas for a new personal finance app, including sample sizes and methods.",
    },
    {
      question: "The modern alternative 'Jobs-to-be-Done' focuses on what users are trying to accomplish rather than who they are. For a video conferencing tool, describe 3 different 'jobs' the same user might hire the product for.",
    },
    {
      question: "How would you actually USE personas in a design review meeting? Give a specific example of a design decision that personas would help resolve.",
    },
  ],
  "business-model-canvas": [
    {
      question: "For a UX designer, understanding the business model is essential. How does the 'Revenue Streams' block of the Business Model Canvas affect the design decisions you'd make for a freemium productivity app?",
    },
    {
      question: "The Value Proposition block defines what value you deliver. For a ride-sharing app, the value prop differs for drivers vs. riders. How does this 'two-sided' value proposition complicate UX design?",
    },
    {
      question: "If you can't map a feature to a block on the Business Model Canvas, 'question whether the feature should exist.' Apply this test to a social media platform adding a 'stories' feature.",
    },
  ],
  "lean-canvas": [
    {
      question: "Lean Canvas replaces 'Key Partners' with 'Problem' and 'Key Activities' with 'Solution.' Why are these substitutions more useful for early-stage products?",
    },
    {
      question: "Fill out the 'Problem' and 'Existing Alternatives' blocks of a Lean Canvas for a new habit-tracking app. What existing solutions are you competing with, including non-obvious alternatives?",
    },
    {
      question: "The 'Unfair Advantage' block asks what can't be easily copied. For most startups, this is hard to fill in honestly. What makes a genuine unfair advantage vs. wishful thinking?",
    },
  ],
  "business-model-inspirator": [
    {
      question: "In a 'freemium' model, the UX challenge is demonstrating premium value without frustrating free users. Design the upgrade moment for a note-taking app that feels helpful rather than naggy.",
    },
    {
      question: "A 'marketplace' model must serve two user types (buyers and sellers). What happens if you optimize the experience for one side too heavily? Give an example of marketplace UX that balanced both.",
    },
    {
      question: "The Business Model Inspirator combines elements from existing models. Take the 'razor and blades' model (cheap hardware, expensive consumables) and apply it to a software/digital product.",
    },
  ],
  "competitor-analysis": [
    {
      question: "'Aspirational competitors' set user expectations even if they're not direct competition. What aspirational competitor should a new banking app watch, and what expectations does it create?",
    },
    {
      question: "The goal of competitor analysis is NOT to copy. So what IS the goal? Describe what insights you should extract from analyzing a competitor's onboarding flow.",
    },
    {
      question: "Mining app store reviews reveals 'common complaints and loved features.' For a task management app, what kinds of complaints would signal opportunity vs. complaints you should ignore?",
    },
  ],
  "five-forces-model": [
    {
      question: "Porter's Five Forces include 'Threat of Substitutes.' For a meditation app, what are the substitutes (including non-digital ones), and how does their existence affect your design strategy?",
    },
    {
      question: "When 'Buyer Power' is high (users can easily switch), UX quality becomes critical for retention. How would you design a password manager differently knowing users could leave anytime vs. being locked in?",
    },
    {
      question: "How does the 'Threat of New Entrants' force affect UX strategy? If barriers to entry are low (anyone can copy your app), what should you invest in that's harder to replicate?",
    },
  ],
  "swot-analysis": [
    {
      question: "SWOT separates internal factors (Strengths/Weaknesses) from external (Opportunities/Threats). For a small startup competing with Big Tech on a productivity app, fill in all four quadrants realistically.",
    },
    {
      question: "Weaknesses that align with Threats need 'mitigation.' If a fitness app's weakness is 'no social features' and a threat is 'competitors adding social,' what's the mitigation strategy?",
    },
    {
      question: "How would you use SWOT analysis to prioritize which UX improvements to make first? Connect the framework to actual design decisions.",
    },
  ],
};

// Fallback: generate from multiple choice questions if no custom questions exist
import { quizzes } from "./quizzes";

export function getFreeResponseQuestions(topicId: string): string[] | undefined {
  // First, check for custom questions
  const custom = customQuestions[topicId];
  if (custom && custom.length > 0) {
    return custom.map((q) => q.question);
  }

  // Fallback to MC-derived questions for topics without custom questions
  const mcQuestions = quizzes[topicId];
  if (!mcQuestions) return undefined;

  // Take up to 3 questions per topic
  return mcQuestions.slice(0, 3).map((q) => q.question);
}

// Export the full question objects (with hints) for topics that have them
export function getFreeResponseQuestionsWithHints(topicId: string): FreeResponseQuestion[] | undefined {
  const custom = customQuestions[topicId];
  if (custom && custom.length > 0) {
    return custom;
  }

  // Fallback to MC-derived (no hints)
  const mcQuestions = quizzes[topicId];
  if (!mcQuestions) return undefined;

  return mcQuestions.slice(0, 3).map((q) => ({ question: q.question }));
}
