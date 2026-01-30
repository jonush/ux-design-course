interface TopicContent {
  overview: string;
  deepDive: string;
}

const content: Record<string, TopicContent> = {
  // === SECTION 1: Human Decision Making ===
  "bj-foggs-behavior-model": {
    overview: `**BJ Fogg's Behavior Model** states that behavior happens when three elements converge at the same moment: **Motivation**, **Ability**, and a **Prompt** (B = MAP).

If any element is missing, the behavior won't occur. High motivation can compensate for low ability, and vice versa. The prompt is the trigger that initiates action.

**Key takeaway:** To change behavior, you can increase motivation, make the action easier, or ensure a well-timed prompt.`,
    deepDive: `BJ Fogg, a Stanford researcher, developed this model to explain why people do (or don't do) things. The model has three core components:

### Motivation
Motivation has three core drivers:
- **Sensation:** pleasure vs. pain
- **Anticipation:** hope vs. fear  
- **Social cohesion:** acceptance vs. rejection

### Ability
Six factors affect ability (simplicity):
1. Time — does the user have time?
2. Money — can they afford it?
3. Physical effort — how hard is it?
4. Brain cycles — how much thinking is required?
5. Social deviance — does it break social norms?
6. Non-routine — how unfamiliar is it?

### Prompt
Three types of prompts:
- **Spark:** motivates (for low-motivation users)
- **Facilitator:** makes it easier (for low-ability users)
- **Signal:** simple reminder (for motivated & able users)

### Application in UX
When designing, ask: Is the user motivated? Can they easily do it? Is there a clear trigger? If conversion is low, diagnose which element is missing and address it directly.`
  },
  "create-action-funnel": {
    overview: `The **CREATE Action Funnel** describes the mental steps a user goes through before taking action. Each step is a potential drop-off point:

**C**ue → **R**eaction → **E**valuation → **A**bility → **T**iming → **E**xecution

Designers must ensure each stage is addressed to guide users from noticing something to actually doing it.`,
    deepDive: `The CREATE funnel breaks down the user's decision journey:

### 1. Cue
The user must first notice something — a notification, button, or visual element. Without a cue, nothing happens. Use contrast, placement, and timing to create effective cues.

### 2. Reaction (Intuitive)
The immediate gut reaction — does this feel right? Trust, aesthetics, and familiarity all play a role. Users decide in milliseconds whether to proceed.

### 3. Evaluation (Conscious)
The user consciously weighs costs vs. benefits. Is this worth my time? What do I gain? Reduce perceived cost, increase perceived value.

### 4. Ability
Can the user actually do it? Consider technical skills, resources, and access. Remove friction wherever possible.

### 5. Timing
Is now the right moment? Even motivated, able users may not act if the timing is wrong. Consider context, urgency, and user state.

### 6. Execution
The actual behavior. Make the action as simple as possible — minimize steps, pre-fill forms, provide clear feedback.

### Design Implications
Audit your product at each stage. Where are users dropping off? That's where to focus your design efforts.`
  },
  "spectrum-of-thinking-interventions": {
    overview: `The **Spectrum of Thinking Interventions** ranges from **automatic** (unconscious) to **deliberate** (conscious) thinking. UX designers can target different points on this spectrum.

On one end: habits, defaults, and nudges that require no thought. On the other: education, persuasion, and rational arguments that engage conscious reasoning.

**Key insight:** Most daily behaviors are automatic. Effective UX often works best when it aligns with automatic thinking rather than fighting against it.`,
    deepDive: `### The Spectrum

**Automatic End:**
- Defaults and pre-selections
- Environmental design (choice architecture)
- Habits and muscle memory
- Unconscious priming

**Middle Ground:**
- Nudges (gentle pushes)
- Social norms messaging
- Framing effects
- Anchoring

**Deliberate End:**
- Education and information
- Incentives and rewards
- Rules and restrictions
- Rational persuasion

### When to Use Each

**Automatic interventions** work best when:
- Users are busy or distracted
- The action is routine
- You want consistent behavior

**Deliberate interventions** work best when:
- The decision has major consequences
- Users need to understand trade-offs
- Informed consent matters

### Design Application
Start with automatic interventions (smart defaults, clear layouts). Layer in deliberate interventions (tooltips, explanations) for users who want to engage more deeply. The best UX seamlessly blends both.`
  },
  "dual-process-theory": {
    overview: `**Dual Process Theory** describes two modes of thinking: **System 1** (fast, automatic, intuitive) and **System 2** (slow, deliberate, analytical).

System 1 handles most daily decisions instantly and effortlessly. System 2 kicks in for complex problems but requires conscious effort and is easily fatigued.

**For UX:** Design primarily for System 1. Make interfaces intuitive, use visual hierarchy, and reduce cognitive load. Reserve System 2 demands for truly important decisions.`,
    deepDive: `Popularized by Daniel Kahneman in *Thinking, Fast and Slow*, this theory fundamentally shapes how we understand decision-making.

### System 1: The Fast Mind
- Automatic and effortless
- Pattern recognition
- Emotional responses
- Always "on"
- Prone to biases and heuristics
- Examples: reading text, recognizing faces, driving a familiar route

### System 2: The Slow Mind
- Deliberate and effortful
- Logical reasoning
- Self-control
- Limited capacity (gets tired)
- Can override System 1
- Examples: doing math, parallel parking, comparing products

### Cognitive Biases (System 1 shortcuts)
- **Anchoring:** first number seen influences judgment
- **Availability:** recent/vivid events seem more likely
- **Framing:** how information is presented changes decisions
- **Loss aversion:** losses feel ~2x worse than equivalent gains

### UX Design Implications
1. **Visual hierarchy** — Guide System 1 to the right elements
2. **Familiar patterns** — Don't make users think unnecessarily
3. **Progressive disclosure** — Don't overwhelm System 2
4. **Smart defaults** — Let System 1 coast through easy decisions
5. **Clear labels** — Reduce ambiguity that triggers System 2
6. **Confirmation dialogs** — Engage System 2 for destructive actions`
  },
  "nudge-theory": {
    overview: `**Nudge Theory** (Thaler & Sunstein) suggests that indirect suggestions and positive reinforcement influence behavior more effectively than direct instructions, mandates, or enforcement.

A "nudge" alters the **choice architecture** — the context in which decisions are made — without restricting options or changing economic incentives.

**Classic example:** Placing healthy food at eye level in a cafeteria. Nobody's choices are restricted, but behavior shifts naturally.`,
    deepDive: `### Core Principles

1. **Libertarian Paternalism** — Guide people toward better choices while preserving freedom of choice
2. **Choice Architecture** — How options are presented dramatically affects what people choose
3. **Default Options** — The most powerful nudge; most people accept defaults

### Types of Nudges

- **Default enrollment** (opt-out vs opt-in)
- **Social proof** ("87% of guests reuse towels")
- **Feedback** (real-time energy usage displays)
- **Simplification** (reducing form fields)
- **Mapping** (making outcomes clearer)
- **Cooling-off periods** (adding friction to impulsive choices)

### Examples in Digital Products
- **Auto-enrollment in savings plans** — people save more by default
- **Progress indicators** — nudge completion behavior
- **"People who bought this also bought..."** — social proof nudge
- **One-click ordering** — removing friction nudges purchase behavior

### Ethical Considerations
Nudges should be transparent and in the user's best interest. "Dark patterns" misuse nudge principles to manipulate. The line: would the user thank you if they knew what you were doing?`
  },
  "persuasive-technology": {
    overview: `**Persuasive Technology** is any interactive system designed to change attitudes or behaviors. Coined by BJ Fogg, it encompasses how computers, mobile apps, and websites can influence what people think and do.

Key idea: Technology is never neutral. Every design choice — from notification timing to button color — influences behavior, intentionally or not.

Designers should be mindful of persuasive elements and use them ethically.`,
    deepDive: `### Fogg's Functional Triad
Technology can act as:

1. **Tool** — Makes tasks easier (calculators, route planners)
2. **Medium** — Provides experiences that motivate (simulations, visualizations)
3. **Social Actor** — Creates relationships (chatbots, social features)

### Seven Persuasion Strategies
1. **Reduction** — Simplify complex tasks
2. **Tunneling** — Guide users through a process step by step
3. **Tailoring** — Personalize content to the user
4. **Suggestion** — Offer timely recommendations
5. **Self-monitoring** — Let users track their own behavior
6. **Surveillance** — Others can observe the user (accountability)
7. **Conditioning** — Use reinforcement to shape behavior

### Design Applications
- **Fitness apps** using self-monitoring (step counts)
- **Duolingo** using streaks (conditioning) and social features
- **Amazon** using tailored recommendations
- **LinkedIn** progress bar for profile completion (tunneling)

### Ethics of Persuasive Design
The Persuasive System Design (PSD) model emphasizes that persuasion should be:
- Transparent
- In the user's interest
- Never coercive
- Respectful of autonomy`
  },
  "behavioral-science": {
    overview: `**Behavioral Science** studies how people actually make decisions — as opposed to how they *should* make decisions according to traditional economics. It combines psychology, economics, and neuroscience.

Key finding: Humans are predictably irrational. We rely on mental shortcuts (heuristics) that often serve us well but can lead to systematic errors (biases).

For UX designers, behavioral science provides evidence-based principles for designing interfaces that align with real human behavior.`,
    deepDive: `### Core Concepts

**Heuristics** — Mental shortcuts for quick decisions:
- **Availability heuristic** — Judging likelihood by how easily examples come to mind
- **Representativeness** — Judging by similarity to a stereotype
- **Anchoring** — Over-relying on the first piece of information

**Cognitive Biases:**
- **Confirmation bias** — Seeking information that confirms existing beliefs
- **Status quo bias** — Preferring the current state of things
- **Bandwagon effect** — Doing what others do
- **Endowment effect** — Overvaluing what we already own
- **Peak-end rule** — Remembering experiences by their peak and end moments

### Applications in UX

1. **Onboarding** — Use the peak-end rule; make first and last impressions count
2. **Pricing pages** — Use anchoring by showing the most expensive option first
3. **Social features** — Leverage the bandwagon effect with user counts
4. **Retention** — Exploit the endowment effect (personalized dashboards)
5. **Default settings** — Use status quo bias strategically

### Research Methods
Behavioral science uses experiments (A/B tests, randomized trials), observational studies, and surveys. UX designers should validate assumptions with similar rigor.`
  },
  "behavioral-economics": {
    overview: `**Behavioral Economics** merges economics with psychology to explain why people make decisions that don't maximize their rational self-interest.

Key figures: Daniel Kahneman, Amos Tversky, Richard Thaler.

Core insight: People don't behave like the "rational actors" assumed by classical economics. They're influenced by framing, loss aversion, present bias, and social context.

**For UX:** Pricing, feature presentation, and upgrade paths all benefit from behavioral economics principles.`,
    deepDive: `### Key Concepts

**Loss Aversion** — Losing $100 feels worse than gaining $100 feels good (~2x). Applications: trial periods ("don't lose your progress"), limited-time offers.

**Framing** — How you present information changes decisions. "90% fat-free" vs "10% fat" changes perception despite identical meaning.

**Anchoring** — First number seen sets an anchor. Show the original price before the discount. Show expensive plans first.

**Present Bias** — People overweight immediate rewards vs. future benefits. Offer instant gratification alongside long-term value.

**Mental Accounting** — People treat money differently based on its source or intended use. Users may pay $3 for an app but not $3 for a web subscription.

**Sunk Cost Fallacy** — People continue investing because of past investment. Show users how far they've come.

### UX Applications
1. **Free trials** → loss aversion when trial ends
2. **Tiered pricing** → anchor with premium plan
3. **Progress indicators** → sunk cost encourages completion
4. **Limited-time offers** → scarcity + present bias
5. **Bundle pricing** → mental accounting (perceived value)

### Ethical Considerations
Use these principles to help users make better decisions, not to manipulate them into purchases they'll regret.`
  },
  "behavior-design": {
    overview: `**Behavior Design** is a systematic approach to creating products that help people do things they already want to do. It combines behavioral science, UX design, and product strategy.

The core philosophy: Don't try to motivate unmotivated people. Instead, make desired behaviors easier and find the right moment to prompt action.

Behavior Design focuses on tiny habits — small actions that, when triggered correctly, become automatic over time.`,
    deepDive: `### The Behavior Design Process

1. **Clarify the aspiration** — What does the user ultimately want?
2. **Explore behavior options** — What behaviors could fulfill this?
3. **Match with specific behaviors** — Which are feasible AND impactful?
4. **Start tiny** — Make the first step ridiculously easy
5. **Find the right prompt** — Attach to existing routines
6. **Celebrate** — Immediate positive emotion wires the habit

### The Tiny Habits Method
- After I [existing habit], I will [tiny new behavior]
- Example: "After I pour my coffee, I will open the app"
- Make it so small you can't say no (2 minutes or less)

### Designing for Behavior Change
- **Map the behavior** — Identify exactly what you want users to do
- **Remove friction** — Every extra step loses users
- **Add triggers** — Notifications, emails, in-app prompts
- **Reward immediately** — Celebrate small wins
- **Iterate** — Test and refine the behavior loop

### Common Mistakes
- Trying to motivate through information alone
- Making the target behavior too big
- Poor timing of prompts
- Not celebrating success
- Ignoring the user's existing routines`
  },

  // === SECTION 2: Behavior Change Strategies ===
  "bj-foggs-behavior-grid": {
    overview: `**BJ Fogg's Behavior Grid** classifies behaviors along two dimensions: **duration** (one-time, period, permanent) and **type** (new behavior, familiar behavior, increase/decrease/stop behavior).

This creates a 15-cell grid that helps designers identify exactly what type of behavior change they're targeting — each requiring different strategies.

**Why it matters:** "Get users to exercise" is too vague. "Get users to start a new daily habit" is specific enough to design for.`,
    deepDive: `### The Grid Dimensions

**Duration:**
- **Dot** — One-time behavior (sign up, make a purchase)
- **Span** — Behavior for a period (30-day challenge)
- **Path** — Permanent behavior change (daily habit)

**Type:**
- **Green** — Do a new behavior
- **Blue** — Do a familiar behavior
- **Purple** — Increase a behavior
- **Gray** — Decrease a behavior
- **Black** — Stop a behavior

### Strategy by Cell
- **Green Dot** (new, one-time): Make it easy, clear prompt → "Sign up now"
- **Green Path** (new, permanent): Tiny habits, build routine → Daily journaling app
- **Black Path** (stop, permanent): Hardest change → Quitting smoking app
- **Purple Span** (increase, period): Challenges, social pressure → Fitness challenges

### Design Applications
1. First, identify your target cell
2. Research strategies specific to that cell
3. Design features that match those strategies
4. Measure success with metrics appropriate to that behavior type

### Real-World Examples
- **Duolingo:** Green Path (new daily habit) → streaks, tiny lessons
- **One-click buy:** Green Dot (one-time new action) → minimal friction
- **Screen time apps:** Gray/Black Path (reduce/stop) → awareness + limits`
  },
  "help-user-avoiding-the-cue": {
    overview: `To change an existing behavior, one strategy is to **help the user avoid the cue** that triggers the unwanted behavior. If the trigger never fires, the behavior doesn't happen.

This is based on the habit loop: Cue → Routine → Reward. By removing or avoiding the cue, you break the loop at its start.

**Example:** A social media detox app that blocks notification cues, or a shopping app that lets users hide "sale" notifications.`,
    deepDive: `### Understanding Cues

Cues come in five categories:
1. **Location** — Being in a certain place triggers behavior
2. **Time** — Certain times trigger routines
3. **Emotional state** — Stress, boredom, excitement
4. **Other people** — Social situations
5. **Preceding action** — One behavior triggers another

### Design Strategies

**Remove environmental cues:**
- Hide or remove triggers from the interface
- Let users customize their notification settings
- Offer "focus modes" that suppress triggers

**Replace digital cues:**
- Swap attention-grabbing notifications for gentle summaries
- Batch notifications instead of real-time alerts
- Use grayscale design to reduce visual cues

**Help users identify their cues:**
- Activity tracking that shows behavior patterns
- Journaling features to log triggers
- Weekly reports highlighting cue-behavior connections

### Examples
- **iOS Screen Time:** Tracks usage patterns, identifies triggers
- **Gmail "Nudge":** Resurfaces important emails, suppresses noise
- **Forest app:** Makes phone avoidance visual and rewarding

### Design Considerations
- Don't just remove cues — users may feel a loss of control
- Offer choice: "Would you like to reduce these notifications?"
- Help users understand *why* they're seeing fewer cues`
  },
  "replace-the-routine": {
    overview: `**Replacing the Routine** keeps the existing cue and reward but substitutes a healthier or more productive behavior in between.

This works because the habit loop stays intact — only the middle step changes. The user still gets triggered and still gets a reward, but the action itself is different.

**Example:** Instead of reaching for your phone when bored (cue: boredom, reward: stimulation), a meditation app offers a 2-minute breathing exercise that provides the same stimulation relief.`,
    deepDive: `### How It Works

The habit loop: **Cue → Routine → Reward**

You keep: Cue ✓ and Reward ✓
You change: Routine ✗ → New Routine ✓

### The Key Insight
People don't crave the routine itself — they crave the reward. If a new routine delivers the same reward, substitution works.

### Design Strategies

1. **Identify the reward** — What does the user actually get? (distraction, connection, accomplishment?)
2. **Design alternatives** — What else delivers that reward?
3. **Match the effort** — The replacement should be equally easy
4. **Provide the same reward** — Or a better one

### Examples in Digital Products
- **Headspace:** Replaces mindless scrolling (boredom → stimulation) with meditation (boredom → calm stimulation)
- **Habitica:** Replaces procrastination with gamified task completion
- **Drink water reminders:** Replace snacking cues with hydration

### Implementation Tips
- Offer the replacement at the exact moment of the old cue
- Make it equally fast and easy
- Provide immediate positive feedback
- Don't shame the old behavior — celebrate the new one
- Allow gradual transition (not cold turkey)`
  },
  "use-consciousness-to-interfere": {
    overview: `This strategy involves **making users consciously aware** of their automatic behaviors so they can choose to act differently. By inserting a moment of reflection between cue and response, you break the automaticity.

Think of it as adding a "speed bump" in the habit loop — a pause that lets conscious decision-making (System 2) override automatic responses (System 1).

**Example:** A spending tracker that shows "You've already spent $127 on dining this week" before you order food delivery.`,
    deepDive: `### The Science
Most habits run on autopilot (System 1). Consciousness disrupts this by activating System 2, forcing deliberate evaluation.

### Design Strategies

**Friction Points (intentional):**
- Confirmation dialogs before important actions
- "Are you sure?" prompts with consequence information
- Mandatory wait periods before irreversible actions

**Awareness Tools:**
- Real-time dashboards showing behavior patterns
- Comparison data ("You vs. average user")
- Streak counters that make consistency visible

**Reflection Prompts:**
- "Why are you opening this app right now?"
- "Rate your current mood before continuing"
- "You've been scrolling for 30 minutes"

### Examples
- **Apple Screen Time:** "You've reached your daily limit for Social Media"
- **Robinhood:** Displays portfolio impact before trades
- **Instagram:** "You're all caught up" message
- **Browser extensions:** Show time spent on sites

### Balance
Too much consciousness = annoying (alert fatigue)
Too little = behavior stays automatic
Find the sweet spot: interrupt at key decision points, not every interaction.`
  },
  "mindfulness-to-avoid-acting-on-cue": {
    overview: `**Mindfulness** in behavior change means training users to **notice** their urges without automatically acting on them. It's about creating space between stimulus and response.

Unlike blocking the cue or replacing the routine, this approach accepts the cue and the urge but teaches non-reactivity.

**For UX:** Design moments of pause, breathing exercises, or reflective prompts that help users become aware of their impulses before acting.`,
    deepDive: `### The Mindfulness Approach
- **Traditional:** Remove cue → no behavior
- **Mindfulness:** Notice cue → observe urge → consciously choose

### Why It Works
Mindfulness builds a new neural pathway: instead of cue → automatic response, users develop cue → awareness → deliberate choice. Over time, the automatic pull weakens.

### Design Strategies

**Pause Mechanisms:**
- Breathing exercise before entering an app
- Loading screens with mindful quotes
- "Take a moment" interstitials

**Urge Tracking:**
- Log when you feel the urge to check your phone
- Rate urge intensity (1-10) — awareness alone reduces urges
- Visualize urge patterns over time

**Guided Practice:**
- Short (1-2 min) mindfulness exercises
- Body scan prompts when stress-eating cues are detected
- "Urge surfing" tutorials — ride the wave without acting

### Real-World Applications
- **Calm/Headspace:** Teach mindful awareness as daily practice
- **One Sec (app):** Forces a breath before opening social media
- **Smoke Free:** Tracks cravings and offers mindfulness exercises

### Design Considerations
- Keep exercises brief (under 2 minutes)
- Don't force mindfulness — offer it as a tool
- Track progress to show improvement over time`
  },
  "crowd-out-old-habit": {
    overview: `**Crowding out** means introducing a new, desirable behavior that naturally takes the place of an old, unwanted one. Instead of fighting the old habit directly, you fill the time, attention, or energy it occupied with something better.

The key difference from "replacing the routine": crowding out doesn't necessarily share the same cue or reward — it simply occupies the same space.

**Example:** A reading app that sends interesting article recommendations at times when the user typically opens social media.`,
    deepDive: `### How Crowding Out Works

Instead of: "Stop doing X" (deprivation mindset)
Try: "Start doing Y" (abundance mindset)

The new behavior competes for the same resources (time, attention, energy) and gradually displaces the old one.

### Design Strategies

**Fill the void:**
- Offer engaging alternatives when detecting unwanted behavior
- Create content or activities that occupy the same time slots
- Design features that are more rewarding than the old behavior

**Make the new behavior more attractive:**
- Gamification elements
- Social features (do it with friends)
- Variable rewards (surprise and delight)

**Build gradually:**
- Start small — don't try to replace the entire old behavior at once
- Increase time/engagement with the new behavior over weeks
- Celebrate milestones

### Examples
- **Podcast apps** crowding out music-listening during commutes
- **Fitness apps** filling after-work time that was spent on the couch
- **Learning apps** (Duolingo) filling idle moments previously spent scrolling

### The Psychology
Willpower is finite. "Don't do X" depletes it. "Do Y instead" channels motivation positively. That's why addition is more sustainable than subtraction.`
  },
  "nir-eyals-hook-model": {
    overview: `**Nir Eyal's Hook Model** describes a four-step loop that creates habit-forming products: **Trigger → Action → Variable Reward → Investment**.

The model explains how products like Instagram, Slack, and TikTok become habits. Each cycle through the loop strengthens the user's connection to the product.

**Key insight:** Variable rewards (unpredictable outcomes) are far more engaging than predictable ones — this is what makes social feeds and slot machines compelling.`,
    deepDive: `### The Four Phases

**1. Trigger**
- **External:** Push notifications, emails, ads, word-of-mouth
- **Internal:** Emotions (boredom, loneliness, curiosity, FOMO)
- Goal: transition from external to internal triggers over time

**2. Action**
The simplest behavior in anticipation of reward:
- Open the app
- Scroll the feed
- Click a notification
- Pull to refresh
Must be easier than thinking about it (BJ Fogg's model applies)

**3. Variable Reward**
Three types:
- **Tribe:** Social validation (likes, comments, followers)
- **Hunt:** Material resources (deals, content, information)
- **Self:** Personal mastery (leveling up, completion, streaks)

The variability is crucial — predictable rewards quickly bore us.

**4. Investment**
User puts something in (time, data, effort, social capital) that:
- Improves the product (training algorithms)
- Stores value (content library, social graph)
- Increases switching costs
- Loads the next trigger

### Ethical Application
Eyal later wrote "Indistractable" — acknowledging the dark side. Use hooks to build healthy habits, not exploit vulnerabilities.`
  },
  "cue-routine-reward": {
    overview: `The **Cue-Routine-Reward** model (Charles Duhigg, *The Power of Habit*) is the simplest framework for understanding habits.

**Cue:** The trigger that initiates the behavior (time, location, emotion, people, preceding action).
**Routine:** The behavior itself (physical, mental, or emotional).
**Reward:** The benefit that reinforces the behavior.

Over time, this loop becomes automatic — the brain stops fully participating in decision-making and runs on autopilot.`,
    deepDive: `### The Habit Loop in Detail

**Cue Recognition:**
Your brain is constantly scanning for cues. Once a pattern is established, the cue alone triggers a craving for the reward — even before the routine begins.

**Routine Execution:**
This can be incredibly complex (driving a car) but feels effortless because it's been chunked into an automatic sequence.

**Reward Delivery:**
The reward teaches the brain whether this loop is worth remembering. Powerful rewards = strong habits.

### The Golden Rule of Habit Change
You can't eliminate a habit — you can only change it. Keep the same cue and reward, change the routine.

### Designing for the Habit Loop

**Creating New Habits:**
1. Design a clear cue (notification, visual prompt)
2. Make the routine as simple as possible
3. Deliver an immediate, satisfying reward
4. Repeat until automatic

**Breaking Bad Habits:**
1. Identify the cue (what triggers it?)
2. Identify the real reward (what craving does it satisfy?)
3. Insert a new routine that delivers the same reward

### Product Design Examples
- **Snapchat streaks:** Cue (notification) → Routine (send snap) → Reward (maintain streak)
- **Email checking:** Cue (notification badge) → Routine (open inbox) → Reward (new information)
- **Pinterest:** Cue (boredom) → Routine (browse pins) → Reward (inspiration/discovery)`
  },
  "cheating": {
    overview: `In behavior design, **cheating** refers to shortcuts users take to achieve the reward without completing the intended behavior. Understanding cheating helps designers build more robust behavior loops.

Users cheat when the effort-to-reward ratio feels too high, or when the system makes it easy to game the rules.

**Design implication:** Either make the intended behavior genuinely rewarding, or design systems where the shortcut IS the desired behavior.`,
    deepDive: `### Why Users Cheat

1. **The behavior is too hard** — Effort exceeds motivation
2. **The reward is misaligned** — Extrinsic rewards override intrinsic motivation
3. **The system is gameable** — Loopholes exist and are easy to exploit
4. **Social pressure** — Appearing to do the behavior matters more than doing it

### Types of Cheating in Digital Products

- **Metric gaming:** Clicking through tutorials without reading
- **Social cheating:** Fake engagement (follow-unfollow, like-bots)
- **Streak preservation:** Opening app for 1 second to maintain streak
- **Workarounds:** Using screenshots instead of sharing features

### Design Responses

**Accept & redirect:**
- If users cheat, maybe the real behavior is too hard → simplify it
- If users skip content, maybe it's not valuable → improve it

**Align incentives:**
- Make the desired behavior the easiest path to the reward
- Ensure extrinsic rewards complement intrinsic motivation

**Design cheat-proof systems:**
- Measure outcomes, not inputs
- Use engagement quality metrics, not just quantity
- Build genuine value into every step

### Ethical Note
If users consistently "cheat" your system, the system might be wrong, not the users. Listen to the cheating — it's user feedback.`
  },
  "make-or-change-habits": {
    overview: `**Making or changing habits** is the ultimate goal of many products. The process requires understanding the habit loop (cue-routine-reward) and applying systematic strategies.

**Making new habits:** Requires a clear trigger, minimal friction, and immediate reward.
**Changing existing habits:** Requires identifying the current loop and modifying components while keeping the reward.

Key principle: Start incredibly small. A 2-minute habit is better than a 30-minute intention.`,
    deepDive: `### Making New Habits

**Step 1: Pick a tiny behavior**
Not "exercise daily" but "do 2 push-ups." Make it so small you can't say no.

**Step 2: Find a trigger**
Anchor to an existing habit: "After I brush my teeth, I do 2 push-ups."

**Step 3: Celebrate immediately**
A small "yes!" or fist pump creates positive emotion that wires the habit.

**Step 4: Grow naturally**
Once the habit is established, it naturally expands. 2 push-ups become 5, then 10.

### Changing Existing Habits

**Step 1: Map the habit loop**
- What's the cue?
- What's the routine?
- What's the real reward?

**Step 2: Experiment with routines**
Keep the cue and reward. Try different routines until one sticks.

**Step 3: Make a plan**
"When [cue], I will [new routine] because it provides [reward]."

### Product Design Strategies

**For habit formation:**
- Reduce first-action friction to near zero
- Send well-timed prompts
- Provide instant positive feedback
- Use streaks and progress tracking

**For habit change:**
- Help users identify triggers
- Offer alternative behaviors
- Make the old behavior visible (awareness)
- Celebrate new behavior streaks`
  },
  "support-conscious-action": {
    overview: `**Supporting conscious action** means designing interfaces that help users make deliberate, informed decisions rather than relying on autopilot.

This is the opposite of nudging — instead of guiding users unconsciously, you equip them with information, tools, and reflection points to choose wisely.

**When to use:** For important decisions (financial, health, career), when users need to understand trade-offs, and when informed consent matters.`,
    deepDive: `### Why Support Conscious Action?

While automatic behavior is efficient, some decisions deserve deliberation:
- Purchasing expensive items
- Making health choices
- Setting privacy preferences
- Committing to subscriptions

### Design Strategies

**Information presentation:**
- Clear comparison tables
- Plain language summaries
- Cost calculators and projections
- Pros/cons displays

**Reflection tools:**
- "Take a moment to consider..." prompts
- Cooling-off periods for big decisions
- Decision journals or checklists
- "What's most important to you?" quizzes

**Feedback & consequences:**
- Show real impact of choices (dollar amounts, time commitments)
- Preview modes ("Here's what this looks like")
- Easy undo/change options

### Balancing Conscious & Automatic
- **Low stakes:** Let autopilot handle it (defaults, smart suggestions)
- **Medium stakes:** Offer information but don't force it (tooltips, expandable details)
- **High stakes:** Actively engage conscious thinking (required review steps, cooling periods)

### Examples
- **Mortgage calculators** that show total interest paid
- **Cookie consent** that clearly explains data usage
- **Subscription pages** that show monthly AND annual cost`
  },
  "educate-encourage-user": {
    overview: `**Educating and encouraging users** involves providing knowledge and motivation at the right moments to support behavior change. Education alone rarely changes behavior — it must be paired with encouragement and actionable steps.

The key is **just-in-time learning**: deliver information when the user needs it, not all at once upfront.

**Effective encouragement** acknowledges progress, normalizes setbacks, and maintains motivation through social support and positive reinforcement.`,
    deepDive: `### Education Strategies

**Just-in-time delivery:**
- Contextual tooltips when hovering over features
- Brief explanations before complex actions
- Progressive disclosure — reveal info as needed

**Micro-learning:**
- Bite-sized content (30 seconds to 2 minutes)
- One concept per screen
- Visual explanations over text walls
- Interactive elements (quizzes, scenarios)

### Encouragement Strategies

**Progress recognition:**
- Celebrate milestones (badges, confetti, congratulations)
- Show progress bars and streaks
- Weekly summaries highlighting achievements

**Social encouragement:**
- Peer success stories
- Community forums and support groups
- Buddy systems and accountability partners

**Setback support:**
- "Everyone has off days" messaging
- Easy restart mechanisms
- No-shame language

### Design Principles
1. **Don't lecture** — Short, relevant, actionable information
2. **Pair knowledge with action** — "Now try it yourself"
3. **Personalize** — Based on user's level and goals
4. **Time it right** — Before they need it, not after they fail
5. **Keep it positive** — Focus on what they've done, not what's left`
  },
  "help-user-think-about-action": {
    overview: `This strategy involves designing moments where users **actively consider** what they're about to do and why. Unlike automatic nudges, this approach engages the user's reasoning.

By prompting reflection, you help users make decisions that align with their actual goals rather than impulsive reactions.

**Example:** A fitness app asking "What's your goal for today's workout?" before starting, or a shopping app showing "How does this purchase support your savings goal?"`,
    deepDive: `### Why Reflection Matters

Automatic decisions often serve short-term desires. Reflection connects actions to long-term goals. Research shows that simply asking people to think about their intentions increases follow-through by 30%+.

### Design Techniques

**Pre-commitment prompts:**
- "What do you plan to accomplish today?"
- Set intentions before entering the experience
- Choose goals at signup and revisit periodically

**Implementation intentions:**
- "When [situation], I will [behavior]"
- Have users fill in specific plans, not vague goals
- Reminders that reference the user's own plan

**Consequence visualization:**
- Show future projections based on current behavior
- "If you save $50/week, in 1 year you'll have $2,600"
- Before-and-after scenarios

**Reflective questions:**
- "Is this helping you reach your goal?"
- "How do you feel after [behavior]?"
- End-of-session reflection prompts

### Implementation Tips
- Keep reflection prompts brief (10-20 seconds)
- Don't interrupt flow for trivial decisions
- Store responses and reference them later
- Make it feel like self-discovery, not a quiz`
  },
  "defaulting": {
    overview: `**Defaulting** is setting pre-selected options that most users will accept. It's the most powerful behavior design tool because most people go with the default — changing requires effort.

Defaults work because of **status quo bias** and **loss aversion**: the default feels like the recommended option, and opting out feels like actively giving something up.

**Example:** Newsletter opt-in checkboxes that are pre-checked, privacy settings defaulting to "public" or "private."`,
    deepDive: `### Why Defaults Are So Powerful

Research shows 80-90% of people accept defaults. Reasons:
1. **Status quo bias** — Change requires effort
2. **Implied recommendation** — "This must be the right choice"
3. **Loss aversion** — Opting out = losing the default
4. **Cognitive ease** — Less thinking required

### Types of Defaults

**Benign defaults:**
- Password show/hide (default: hidden)
- Currency/language based on location

**Beneficial defaults:**
- Organ donation opt-out (vs opt-in)
- Retirement savings auto-enrollment
- Two-factor authentication enabled

**Dark pattern defaults:**
- Pre-checked marketing consent
- Auto-renewing subscriptions
- Privacy-invasive default settings

### Design Guidelines

1. **Default to the best outcome for the user**
2. **Make it easy to change** — defaults should never feel like traps
3. **Be transparent** — clearly show what the default is and why
4. **Test your defaults** — A/B test to find optimal settings
5. **Consider context** — What do most users in this situation actually want?

### Ethical Framework
Ask: "If the user fully understood this default, would they thank me?" If yes, it's a good default. If no, it's a dark pattern.`
  },
  "making-it-incidental": {
    overview: `**Making it incidental** means embedding the desired behavior into something the user is already doing, so it happens as a natural byproduct rather than a separate effort.

The user doesn't have to think "I need to do X." Instead, X happens automatically as part of their existing workflow.

**Example:** Rounding up purchases to the nearest dollar and saving the difference (Acorns app). The saving happens incidentally during normal spending.`,
    deepDive: `### The Principle

Required effort for the target behavior → approximately zero.

When behavior requires no additional effort, motivation becomes irrelevant. The action happens regardless.

### Design Strategies

**Piggyback on existing behaviors:**
- Charity rounding during checkout
- Learning vocabulary during phone unlock
- Fitness tracking via phone sensors (no manual input)
- Data collection through normal app usage

**Embed in workflows:**
- Auto-save documents
- Background syncing
- Passive health monitoring
- Smart photo organization

**Make outputs automatic:**
- Automatic backup
- Year-in-review compilations
- Progress reports generated from usage data

### Examples
- **Google Photos:** Organizes, tags, and creates albums automatically
- **Apple Health:** Tracks steps without any user action
- **Grammarly:** Corrects writing as you type
- **Mint:** Categorizes expenses from linked accounts

### Design Principles
1. Zero additional input from the user
2. The byproduct should be genuinely valuable
3. Be transparent about what's happening
4. Give users control to opt out
5. Show the value created ("You saved $47 this month without trying")`
  },
  "automate-repetition": {
    overview: `**Automating repetition** removes the burden of repeated actions by having the system handle them. Once the user sets a preference or pattern, the system takes over.

This reduces decision fatigue, saves time, and ensures consistency. It converts a repeated conscious choice into a one-time setup.

**Example:** Subscription services (auto-replenishment), recurring bill payments, saved payment methods, or scheduled social media posts.`,
    deepDive: `### Why Automate?

- **Decision fatigue** — Every decision depletes willpower
- **Consistency** — Automation ensures actions happen reliably
- **Time savings** — Set once, benefit forever
- **Reduced errors** — Machines don't forget

### Types of Automation

**Full automation:**
- Automatic bill payments
- Email rules/filters
- Scheduled backups
- Subscription deliveries

**Smart automation:**
- Predictive text
- Smart replies in email
- Auto-categorization of expenses
- Suggested routines based on behavior

**Assistive automation:**
- Templates and presets
- "Repeat last order" buttons
- Saved preferences
- Quick actions for common tasks

### Design Guidelines

1. **Easy setup** — The setup process should take less time than doing it manually once
2. **Transparent operation** — Show users what's been automated
3. **Easy override** — Let users intervene when needed
4. **Confirmation for irreversible actions** — Don't auto-delete, auto-send important emails, etc.
5. **Smart defaults** — Pre-configure automation based on common patterns

### Examples
- **Amazon Subscribe & Save:** Automates regular purchases
- **IFTTT/Zapier:** User-defined automation
- **Gmail filters:** Auto-sort incoming mail
- **iOS Shortcuts:** Chain actions together`
  },

  // === SECTION 3: Understanding the Product ===
  "target-outcome": {
    overview: `The **Target Outcome** is the measurable result your product should achieve for the business or user. Before designing anything, you must define what success looks like.

A clear target outcome answers: "What will change in the real world because of this product?"

**Good example:** "Reduce customer support tickets by 30%"
**Bad example:** "Make a better dashboard"`,
    deepDive: `### Defining Target Outcomes

**Business outcomes:**
- Revenue growth
- Customer retention
- Cost reduction
- Market expansion
- Brand awareness

**User outcomes:**
- Time saved
- Goals achieved
- Problems solved
- Skills gained
- Satisfaction improved

### The Outcome Framework

1. **Current state** — Where are we now? (baseline metrics)
2. **Desired state** — Where do we want to be? (target metrics)
3. **Gap analysis** — What's preventing us from getting there?
4. **Behavior hypothesis** — What user behaviors would close the gap?

### Common Mistakes
- Defining outputs instead of outcomes ("Launch feature X" vs "Increase engagement by Y%")
- Too many outcomes (focus on 1-3)
- Unmeasurable outcomes ("Improve user experience")
- Outcomes disconnected from user needs

### Aligning Product & Business
The best products align user outcomes with business outcomes:
- User saves time → User stays (retention)
- User achieves goal → User recommends (growth)
- User enjoys experience → User pays (revenue)

Map every feature to a target outcome. If you can't, question whether the feature should exist.`
  },
  "target-actor": {
    overview: `The **Target Actor** is the specific person whose behavior your product needs to change. Not your entire user base — the specific type of user who, if they changed their behavior, would drive the target outcome.

Defining the target actor means going beyond demographics to understand their **motivations**, **abilities**, **context**, and **existing behaviors**.

**Key question:** "Who needs to do something differently for our product to succeed?"`,
    deepDive: `### Identifying Target Actors

**Not all users are equal.** Your product likely has multiple user types. The target actor is the one whose behavior change matters most.

### Questions to Ask
1. Who has the most influence on the target outcome?
2. What do they currently do?
3. What do we need them to do instead?
4. What's stopping them?
5. What motivates them?

### Actor Profile Elements
- **Demographics:** Age, role, location (basics)
- **Psychographics:** Values, attitudes, lifestyle
- **Context:** When, where, and how they interact
- **Current behavior:** What they do now
- **Desired behavior:** What we want them to do
- **Barriers:** What's in the way
- **Motivators:** What drives them

### Segmentation Approaches
- **By behavior:** Power users vs. casual vs. dormant
- **By need:** Different jobs-to-be-done
- **By stage:** Onboarding vs. habitual vs. at-risk
- **By context:** Mobile vs. desktop, work vs. personal

### Common Mistakes
- Designing for everyone (designing for no one)
- Assuming you ARE the target actor
- Focusing on demographics over behaviors
- Not talking to actual users`
  },
  "target-action": {
    overview: `The **Target Action** is the specific behavior you want the target actor to perform. It must be concrete, observable, and directly linked to the target outcome.

**Too vague:** "Use the app more"
**Just right:** "Complete one workout per week"
**Too specific:** "Press the green 'Start Workout' button at 6am on Monday"

The target action sits in a sweet spot: specific enough to design for, flexible enough to be realistic.`,
    deepDive: `### Defining Target Actions

Good target actions are:
- **Specific** — Clearly defined behavior
- **Observable** — You can tell if it happened
- **Realistic** — Within the user's ability
- **Meaningful** — Connected to the outcome
- **Measurable** — You can count occurrences

### The Action Chain
Most target actions are actually chains:
1. Open the app
2. Navigate to workout section
3. Select a workout
4. Complete the workout
5. Log the result

Each link in the chain is a potential failure point. Design to strengthen every link.

### Applying BJ Fogg's Model
For each target action, assess:
- **Motivation:** Does the user want to do this?
- **Ability:** Can they do this easily?
- **Prompt:** What triggers this action?

### Prioritizing Actions
When multiple behaviors could drive your outcome:
1. **Impact** — Which behavior has the biggest effect?
2. **Feasibility** — Which is easiest to change?
3. **Measurement** — Which can you actually track?

Plot actions on an Impact vs. Feasibility matrix. Start with high-impact, high-feasibility actions.

### Common Mistakes
- Too many target actions (focus kills)
- Actions disconnected from outcomes
- Actions that require too much behavior change at once
- Not breaking complex actions into steps`
  },
  "create-user-personas": {
    overview: `**User personas** are fictional characters representing your target users, based on real research data. They help teams empathize with users and make consistent design decisions.

A good persona includes: name, photo, demographics, goals, frustrations, behaviors, context of use, and a quote that captures their mindset.

**Caution:** Personas based on assumptions are dangerous. They must be grounded in real user research — interviews, surveys, analytics.`,
    deepDive: `### Building Personas

**Research First:**
1. Conduct 5-15 user interviews
2. Look for behavioral patterns (not demographic patterns)
3. Identify 3-5 distinct behavior groups
4. Create one persona per group

**Persona Components:**
- **Name & photo** — Makes them feel real
- **Background** — Job, education, family
- **Goals** — What they're trying to achieve
- **Frustrations** — What blocks them
- **Behaviors** — How they currently act
- **Context** — When, where, and how they use products
- **Quote** — Captures their mindset in one sentence
- **Tech savviness** — Comfort with technology

### Using Personas Effectively

**In design reviews:**
"Would Sarah understand this navigation?"

**In prioritization:**
"Which feature matters most to our primary persona?"

**In marketing:**
"What message resonates with David?"

### Persona Pitfalls
1. **Based on assumptions** — No substitute for real research
2. **Too many personas** — 3-5 is ideal
3. **Too demographic** — Focus on behaviors, not age/gender
4. **Static** — Update personas as you learn more
5. **Ignored** — Personas on the wall that nobody references

### Modern Alternatives
- **Jobs-to-be-Done** — Focus on what users are trying to accomplish
- **Behavioral archetypes** — Focus on behavior patterns, not demographics
- **Proto-personas** — Quick, assumption-based starting point (validate later)`
  },
  "business-model-canvas": {
    overview: `The **Business Model Canvas** (Alexander Osterwalder) is a one-page strategic tool that maps out how a business creates, delivers, and captures value. It has 9 building blocks.

For UX designers, understanding the business model is essential — it reveals who the users are, what value they receive, and how the business sustains itself.

The canvas connects user needs (Value Proposition) with business viability (Revenue Streams).`,
    deepDive: `### The 9 Building Blocks

1. **Customer Segments** — Who are your users/customers?
2. **Value Propositions** — What value do you deliver? What problems do you solve?
3. **Channels** — How do you reach and communicate with customers?
4. **Customer Relationships** — What type of relationship (self-service, personal, automated)?
5. **Revenue Streams** — How does the business make money?
6. **Key Resources** — What assets are essential?
7. **Key Activities** — What must the business do well?
8. **Key Partnerships** — Who are external partners?
9. **Cost Structure** — What are the major costs?

### UX Designer's Focus Areas

- **Customer Segments** → Informs personas
- **Value Propositions** → Defines what the product must deliver
- **Channels** → Where users encounter the product
- **Customer Relationships** → Shapes the experience model

### How to Use It
1. Start with Customer Segments and Value Propositions
2. Map the rest around these core elements
3. Use sticky notes for flexibility
4. Iterate — it's a living document
5. Create separate canvases for different segments

### When to Reference
- Starting a new product
- Pivoting an existing product
- Evaluating feature requests
- Understanding competitor strategy`
  },
  "lean-canvas": {
    overview: `The **Lean Canvas** (Ash Maurya) adapts the Business Model Canvas for startups and new products. It emphasizes **problems**, **solutions**, and **unfair advantages** over infrastructure.

It's designed to be completed in 20 minutes and iterated rapidly. Perfect for early-stage product development and UX discovery.

The Lean Canvas forces you to articulate your core assumptions so you can test them quickly.`,
    deepDive: `### The 9 Blocks (Modified)

1. **Problem** — Top 3 problems for your target customer
2. **Customer Segments** — Who has these problems?
3. **Unique Value Proposition** — Single, clear, compelling message
4. **Solution** — Top 3 features that address the problems
5. **Channels** — How you reach customers
6. **Revenue Streams** — How you make money
7. **Cost Structure** — Fixed and variable costs
8. **Key Metrics** — The numbers that matter
9. **Unfair Advantage** — What can't be easily copied

### How It Differs from Business Model Canvas
- **Problem** replaces Key Partners
- **Solution** replaces Key Activities
- **Key Metrics** replaces Key Resources
- **Unfair Advantage** replaces Customer Relationships

### For UX Designers

**Problem block** → User research focus areas
**UVP** → Core experience promise
**Solution** → Feature priorities
**Key Metrics** → Success metrics for your designs

### Best Practices
1. Fill in Problem and Customer Segments first
2. One canvas per customer segment
3. Time-box to 20 minutes
4. Rank assumptions by risk
5. Test riskiest assumptions first
6. Iterate weekly`
  },
  "business-model-inspirator": {
    overview: `The **Business Model Inspirator** is a creative tool for generating new business model ideas by combining elements from successful existing models.

It works like a card deck: take revenue models, delivery methods, and value propositions from different industries and combine them in novel ways.

**For UX:** Understanding how different business models affect user experience (freemium, subscription, marketplace, etc.) is essential for designing appropriate interfaces.`,
    deepDive: `### Common Business Model Patterns

**Freemium:** Free basic tier + paid premium features
- UX challenge: Demonstrate premium value without frustrating free users
- Examples: Spotify, Dropbox, Slack

**Subscription:** Recurring payment for ongoing access
- UX challenge: Continuous value delivery, reduce churn
- Examples: Netflix, Adobe CC, Notion

**Marketplace:** Connect buyers and sellers
- UX challenge: Serve two user types simultaneously
- Examples: Airbnb, Uber, Etsy

**Advertising:** Free product, monetize attention
- UX challenge: Balance ad revenue with user experience
- Examples: Google, Instagram, YouTube

**Platform/Ecosystem:** Build infrastructure others build on
- UX challenge: Developer experience + end-user experience
- Examples: iOS, Shopify, Salesforce

### Using the Inspirator

1. List your current model elements
2. Browse patterns from other industries
3. Ask "What if we...?"
   - Added a marketplace element?
   - Used a freemium tier?
   - Created a subscription option?
4. Evaluate combinations
5. Prototype the most promising

### UX Implications
Every business model shapes the user experience:
- Freemium → upsell flows, feature gating
- Subscription → onboarding, retention features
- Marketplace → trust mechanisms, search/filter
- Advertising → content layout, ad placement`
  },
  "competitor-analysis": {
    overview: `**Competitor Analysis** systematically evaluates your competition to understand their strengths, weaknesses, strategies, and market positioning.

For UX designers, this means studying competitor interfaces, user flows, feature sets, and user reviews to find opportunities for differentiation.

**Goal:** Not to copy, but to understand the landscape and find gaps you can fill better.`,
    deepDive: `### Types of Competitors

**Direct:** Same product, same market (Uber vs Lyft)
**Indirect:** Different product, same need (Uber vs public transit)
**Aspirational:** Not competitors, but set user expectations (Apple's UX quality)

### What to Analyze

**Product:**
- Feature set and capabilities
- User interface and experience
- Onboarding flow
- Pricing model

**Users:**
- Who are they targeting?
- What do their reviews say?
- What are common complaints?
- What do users love?

**Business:**
- Market share and growth
- Funding and resources
- Strategy and positioning
- Recent changes

### UX Competitor Analysis Methods

1. **Feature matrix** — Table of features across competitors
2. **UX audit** — Walk through competitor flows, note pain points
3. **Review mining** — Analyze App Store/G2/Trustpilot reviews
4. **User testing** — Have users compare products
5. **SWOT per competitor** — Strengths, weaknesses per competitor

### How to Use Findings
- **Gaps** → Opportunities for your product
- **Patterns** → Industry conventions users expect
- **Complaints** → Problems you can solve better
- **Strengths** → Areas where you need to match or exceed`
  },
  "five-forces-model": {
    overview: `**Porter's Five Forces** analyzes the competitive intensity and attractiveness of a market. The five forces are: competitive rivalry, threat of new entrants, bargaining power of suppliers, bargaining power of buyers, and threat of substitutes.

For UX designers, this framework provides context on why certain product decisions are made and what external pressures shape the product.

Understanding these forces helps designers advocate for user-centered decisions within business constraints.`,
    deepDive: `### The Five Forces

**1. Competitive Rivalry (High/Low)**
How intense is competition?
- Many similar products → Must differentiate on UX
- Few competitors → Less pressure but complacency risk
- UX implication: Better experience = competitive advantage

**2. Threat of New Entrants (High/Low)**
How easy is it for new companies to enter?
- Low barriers → Must innovate continuously
- High barriers → More time but less urgency
- UX implication: Focus on switching costs and habit formation

**3. Bargaining Power of Suppliers (High/Low)**
How much leverage do suppliers have?
- In tech: API providers, platform owners (Apple/Google)
- High power → Platform constraints affect UX decisions
- UX implication: Design within platform guidelines

**4. Bargaining Power of Buyers (High/Low)**
How much leverage do customers have?
- Many alternatives → Users can easily leave
- Few alternatives → Less pressure on UX quality
- UX implication: When buyer power is high, UX is everything

**5. Threat of Substitutes (High/Low)**
Can users solve their problem differently?
- Pen and paper vs. your app
- Competitor product vs. your product
- UX implication: Be significantly better than alternatives

### Using Five Forces in Design
When stakeholders push back on UX investments, Five Forces helps argue the business case: in competitive markets, UX is often the deciding factor.`
  },
  "swot-analysis": {
    overview: `**SWOT Analysis** evaluates **Strengths**, **Weaknesses**, **Opportunities**, and **Threats** for a product or business. It's a simple but powerful strategic planning tool.

**Strengths & Weaknesses** are internal (what you control). **Opportunities & Threats** are external (market, competitors, trends).

For UX designers, SWOT helps prioritize design efforts by connecting user experience improvements to strategic business needs.`,
    deepDive: `### The Framework

**Strengths (Internal Positives):**
- Strong brand recognition
- Unique features
- Excellent user experience
- Loyal user base
- Technical capabilities

**Weaknesses (Internal Negatives):**
- Poor onboarding flow
- High churn rate
- Technical debt
- Limited mobile experience
- Slow performance

**Opportunities (External Positives):**
- Growing market
- Competitor weaknesses
- New technology
- Changing user behavior
- Regulatory changes

**Threats (External Negatives):**
- New competitors
- Changing technology
- Economic downturn
- Platform changes
- Security risks

### Conducting a UX SWOT

1. **Gather data:** User research, analytics, competitor analysis, market research
2. **Brainstorm:** List items in each quadrant
3. **Prioritize:** Rank by impact
4. **Strategize:** 
   - Strengths + Opportunities = Grow
   - Strengths + Threats = Defend
   - Weaknesses + Opportunities = Improve
   - Weaknesses + Threats = Mitigate

### SWOT for UX Decisions
- **Redesign priority:** Weaknesses that align with Threats
- **Feature development:** Strengths that capture Opportunities
- **Quick wins:** Weaknesses that are easy to fix
- **Long-term:** Opportunities requiring capability building`
  },

  // === SECTION 4: Conceptual Design ===
  "user-stories": {
    overview: `**User stories** are short, simple descriptions of a feature from the user's perspective. Format: "As a [type of user], I want [goal] so that [benefit]."

They keep the team focused on user value rather than technical implementation. User stories are the building blocks of product backlogs in agile development.

**Example:** "As a new user, I want to see a quick tutorial so that I can understand how the app works."`,
    deepDive: `### Writing Good User Stories

**The Template:**
"As a [persona/role], I want [action/feature] so that [benefit/outcome]."

**INVEST Criteria:**
- **I**ndependent — Can be developed separately
- **N**egotiable — Details can be discussed
- **V**aluable — Delivers value to the user
- **E**stimable — Team can estimate effort
- **S**mall — Completable in one sprint
- **T**estable — Clear acceptance criteria

### Acceptance Criteria
Every user story needs clear acceptance criteria:
"Given [context], when [action], then [expected result]."

**Example:**
- Story: "As a user, I want to reset my password"
- Criteria: "Given I'm on the login page, when I click 'Forgot Password' and enter my email, then I receive a reset link within 5 minutes"

### Common Mistakes
1. **Too technical:** "As a user, I want the API to return JSON" — No!
2. **Too vague:** "As a user, I want a better experience" — How?
3. **No benefit:** "As a user, I want a sidebar" — Why?
4. **Too large:** Break epics into smaller stories
5. **Missing persona:** "As a user" — Which user?

### Story Mapping
Organize stories spatially:
- Horizontal: User journey steps
- Vertical: Priority (must-have → nice-to-have)
This creates a visual backlog that shows the full user experience.`
  },
  "keep-it-short-simple": {
    overview: `**Keep It Short and Simple (KISS)** is a design principle that emphasizes brevity and clarity. Complex interfaces confuse users, increase errors, and reduce completion rates.

Every extra step, word, or option you add is friction that can cause users to abandon the experience.

**Rule of thumb:** If you can remove something without losing meaning or function, remove it.`,
    deepDive: `### Why Simplicity Works

**Cognitive load theory:** Humans can hold ~4 chunks of information in working memory. Exceed this, and comprehension drops rapidly.

**Hick's Law:** Decision time increases logarithmically with the number of options. Fewer choices = faster decisions.

### Simplification Strategies

**Content:**
- Use plain language (8th-grade reading level)
- One idea per sentence
- Active voice over passive
- Cut filler words

**Interface:**
- Reduce form fields to essentials
- Progressive disclosure (show more only when needed)
- Clear visual hierarchy
- White space as a design element

**Flow:**
- Minimize steps to completion
- Remove unnecessary confirmations
- Pre-fill when possible
- Smart defaults

### Measuring Simplicity
- **Task completion time** — Faster = simpler
- **Error rate** — Fewer errors = clearer
- **Abandonment rate** — Lower = less frustrating
- **User satisfaction** — Higher = more intuitive

### The Complexity Trap
Products accumulate features over time (feature creep). Fight this by:
1. Auditing features by usage data
2. Sunsetting unused features
3. Making advanced features discoverable but not prominent
4. A/B testing removal of features`
  },
  "make-it-easy-to-understand": {
    overview: `Making interfaces **easy to understand and complete** means users should immediately know what to do, how to do it, and what happens when they do.

Three pillars: **Clarity** (what is this?), **Affordance** (how do I use it?), and **Feedback** (what happened?).

When these three work together, users flow through interfaces without confusion or hesitation.`,
    deepDive: `### Clarity

**Labels and copy:**
- Use familiar words, not jargon
- Button text should describe the action ("Save Draft" not "Submit")
- Error messages should explain what happened AND how to fix it

**Visual design:**
- Group related elements
- Use consistent patterns
- Clear contrast between interactive and static elements

### Affordance

**Make it obvious:**
- Buttons should look clickable
- Links should look like links
- Draggable items should have grab handles
- Input fields should look editable

**Follow conventions:**
- Logo top-left (links home)
- Search top-right
- Navigation left or top
- Actions bottom or right

### Feedback

**Immediate:**
- Hover states
- Click animations
- Loading indicators
- Success/error messages

**Informative:**
- "Your file was saved"
- "2 items added to cart"
- "Email sent to jane@example.com"

### Testing Understanding
- **5-second test:** Show screen for 5 seconds, ask what it's for
- **Think-aloud:** Watch users narrate their process
- **First-click test:** Where do users click first?
- **Comprehension test:** Can users explain what they just did?`
  },
  "make-progress-visible": {
    overview: `**Making progress visible** means showing users where they are in a process and how far they've come. This leverages the **goal gradient effect** — people accelerate toward a goal as they get closer.

Progress indicators reduce uncertainty, set expectations, and motivate continued engagement.

**Common patterns:** Progress bars, step indicators, checklists, completion percentages, and milestone markers.`,
    deepDive: `### Why Progress Visibility Works

**Psychological principles:**
- **Goal gradient effect** — Effort increases as the goal approaches
- **Endowed progress effect** — People with a head start are more motivated
- **Zeigarnik effect** — Incomplete tasks are remembered better than completed ones

### Types of Progress Indicators

**Linear progress:**
- Progress bars (determinate)
- Step indicators (1 of 5)
- Percentage complete
- Checklists with checkmarks

**Non-linear progress:**
- Achievement badges
- Level systems
- Skill trees
- Experience points

### Design Best Practices

1. **Show progress early** — Give users a sense of momentum from the start
2. **Break into chunks** — "Step 2 of 4" feels manageable
3. **Celebrate milestones** — Confetti, congratulations, badges
4. **Allow saving** — Don't lose progress
5. **Show both local and global progress** — Where am I in this form AND in the overall process?

### Examples
- **LinkedIn profile strength** — "Your profile is 70% complete"
- **Duolingo skill tree** — Visual map of learning progress
- **Amazon checkout** — Step-by-step progress indicator
- **Onboarding checklists** — "Complete 3 more steps to get started"

### Anti-Patterns
- Progress bars that move backward
- Indeterminate progress for determinate processes
- Hidden final steps ("Just one more thing!")
- Progress that doesn't save`
  },
  "make-progress-meaningful": {
    overview: `Beyond making progress visible, it should feel **meaningful**. Users need to feel that their progress is rewarding, not just a number going up.

Meaningful progress connects achievements to personal goals, provides intrinsic satisfaction, and creates a sense of growth.

**Key difference:** A progress bar is visible. A celebration with a personalized message ("You've helped 10 teammates this week!") is meaningful.`,
    deepDive: `### What Makes Progress Meaningful

**Connection to goals:**
- "You've run 15 miles this week — that's halfway to your monthly goal!"
- Not just: "15/30 miles"

**Social validation:**
- "You're in the top 10% of learners this month"
- Peer recognition and sharing milestones

**Skill development:**
- "You've mastered beginner Python — here's what you can build now"
- Connect progress to real-world capability

### Reward Strategies

**Intrinsic rewards:**
- Sense of accomplishment
- Mastery and competence
- Autonomy and choice
- Connection to purpose

**Extrinsic rewards (use carefully):**
- Badges and trophies
- Unlockable content or features
- Leaderboard positions
- Physical rewards or discounts

### Variable Rewards
Predictable rewards become boring. Vary:
- **Timing** — Unexpected celebrations
- **Type** — Different reward formats
- **Magnitude** — Occasional big rewards

### Design Principles
1. Connect progress to the user's stated goals
2. Celebrate effort, not just outcomes
3. Make rewards proportional to achievement
4. Don't punish lack of progress
5. Allow users to share achievements

### Common Mistakes
- Rewarding vanity metrics (time spent) over real achievement
- Over-gamifying serious contexts
- Rewards that feel condescending
- External rewards that undermine intrinsic motivation`
  },
  "make-completion-visible": {
    overview: `**Making successful completion clearly visible** means ensuring users know when they've finished a task, process, or goal. Without clear completion signals, users feel uncertain and unsatisfied.

Good completion design provides closure — the psychological satisfaction of finishing something.

**Key patterns:** Success screens, confirmation messages, summary pages, certificates, and celebration animations.`,
    deepDive: `### Why Completion Signals Matter

**Psychological needs:**
- **Closure** — The brain wants to close open loops
- **Satisfaction** — Completing tasks releases dopamine
- **Confidence** — "I did it right" vs. "Did it work?"
- **Trust** — Clear confirmation builds trust in the system

### Completion Design Patterns

**Immediate feedback:**
- ✅ Checkmarks and success icons
- Green color coding
- "Done!" or "Success!" messages
- Confetti or animation

**Summary screens:**
- Receipt-style summaries after purchases
- "Here's what you completed" overviews
- Before/after comparisons
- Next steps suggestions

**Long-term completion:**
- Certificates of completion
- Achievement unlocked notifications
- Portfolio of completed work
- Year-in-review summaries

### Design Best Practices

1. **Make it unmistakable** — Users should never wonder if it worked
2. **Provide a record** — Email confirmation, saved receipt
3. **Suggest next steps** — Don't leave users at a dead end
4. **Match the tone** — Celebrate big completions, confirm small ones
5. **Allow sharing** — Let users share achievements

### Examples
- **Mailchimp's high-five** — Celebration after sending a campaign
- **Course completion certificates** — Shareable PDF
- **E-commerce confirmation** — Order number, expected delivery, tracking link
- **Form submission** — Clear success message with what happens next`
  },
  "customer-experience-map": {
    overview: `A **Customer Experience Map** visualizes the entire user journey across all touchpoints — from first awareness through purchase, use, and beyond.

Unlike a user flow (which maps a single task), a customer experience map captures the **emotional journey**: where users feel frustrated, delighted, confused, or confident.

Created by Mel Edwards, this tool helps teams see the experience through the customer's eyes and identify improvement opportunities.`,
    deepDive: `### Components of a CX Map

**Stages:** Awareness → Consideration → Decision → Onboarding → Use → Loyalty → Advocacy

**For each stage, map:**
- **Actions** — What is the user doing?
- **Touchpoints** — Where do they interact?
- **Thoughts** — What are they thinking?
- **Emotions** — How do they feel? (plot on a satisfaction curve)
- **Pain points** — What's frustrating?
- **Opportunities** — Where can you improve?

### How to Create One

1. **Define the scope** — Which customer segment? Which journey?
2. **Research** — Interviews, surveys, analytics, support tickets
3. **Map the stages** — Chronological journey steps
4. **Add details** — Actions, thoughts, emotions per stage
5. **Identify pain points** — Where does satisfaction dip?
6. **Prioritize opportunities** — Where can design have the most impact?

### Using the Map

- **Identify moments of truth** — Critical interactions that shape perception
- **Find service gaps** — Where the experience breaks down
- **Align teams** — Everyone sees the same customer reality
- **Prioritize improvements** — Focus on emotional low points

### Tips
- Use real data, not assumptions
- Include multiple channels (web, mobile, email, phone)
- Update regularly as the product evolves
- Display prominently where the team can reference it`
  },
  "simple-flowchart": {
    overview: `A **Simple Flowchart** maps the steps, decisions, and outcomes in a user process. It uses standard symbols: rectangles (actions), diamonds (decisions), ovals (start/end), and arrows (flow).

Flowcharts help designers and developers agree on logic before building. They reveal edge cases, error states, and unnecessary complexity.

**When to use:** For any process with decision points — login flows, checkout processes, error handling, onboarding sequences.`,
    deepDive: `### Standard Symbols

- **Oval** — Start and End points
- **Rectangle** — Process step / Action
- **Diamond** — Decision (Yes/No branch)
- **Parallelogram** — Input/Output
- **Arrow** — Direction of flow

### Creating Effective Flowcharts

**Step 1: Define start and end**
Where does the user begin? What's the successful end state?

**Step 2: Map the happy path**
The ideal scenario — everything goes right.

**Step 3: Add decision points**
Where does the flow branch? What determines which path?

**Step 4: Add error paths**
What happens when things go wrong? How does the user recover?

**Step 5: Simplify**
Can any steps be combined? Are there unnecessary branches?

### Best Practices
1. Flow top-to-bottom or left-to-right
2. Label every arrow (especially at decision points)
3. One action per box
4. Keep it on one page if possible
5. Include error states and edge cases

### Tools
- **Figma/FigJam** — Design tool integration
- **Miro/Whimsical** — Collaborative diagramming
- **Lucidchart** — Professional flowcharting
- **Draw.io** — Free, web-based

### Common UX Flowcharts
- User registration / login
- Checkout process
- Content creation flow
- Settings / preferences
- Error recovery paths`
  },
  "epc-model": {
    overview: `The **Event-driven Process Chain (EPC)** model maps business processes by showing events (states), functions (activities), and logical connectors.

Unlike simple flowcharts, EPC models explicitly show **what triggers** each step (events) and how steps relate through AND/OR/XOR logic.

**For UX:** EPC models help understand complex business processes before designing interfaces for them, especially in enterprise or workflow applications.`,
    deepDive: `### EPC Elements

**Event (hexagon):** A state or condition that triggers or results from a function
- "Order received"
- "Payment confirmed"
- "User logged in"

**Function (rounded rectangle):** An activity or task
- "Process payment"
- "Verify identity"
- "Send notification"

**Logical Connectors:**
- **AND (∧)** — All paths execute
- **OR (∨)** — One or more paths execute
- **XOR (⊕)** — Exactly one path executes

### Rules
1. Events and functions must alternate
2. Process starts with an event
3. Process ends with an event
4. Functions have one input and one output (unless using connectors)

### Example: Order Processing
1. Event: "Order placed"
2. Function: "Check inventory"
3. XOR: Item in stock?
4. (Yes) Function: "Process order"
5. Event: "Order confirmed"
6. (No) Function: "Notify customer"
7. Event: "Customer notified of backorder"

### UX Application
- Map existing business processes before redesigning
- Identify automation opportunities
- Understand triggers for user notifications
- Design workflow management interfaces`
  },
  "bpmn": {
    overview: `**Business Process Model and Notation (BPMN)** is a standardized graphical notation for modeling business processes. It's more expressive than basic flowcharts, with symbols for events, activities, gateways, and swim lanes.

For UX designers working on enterprise software or complex workflows, BPMN provides a shared language for discussing processes with business analysts and developers.

**Key feature:** Swim lanes show which actor (department, system, user) is responsible for each step.`,
    deepDive: `### Core BPMN Elements

**Events (circles):**
- Start event (thin border) — Process begins
- End event (thick border) — Process ends
- Intermediate event (double border) — Something happens mid-process

**Activities (rounded rectangles):**
- Task — Single unit of work
- Sub-process — Contains multiple tasks
- Can be user task, service task, script task, etc.

**Gateways (diamonds):**
- Exclusive (X) — One path only
- Parallel (+) — All paths simultaneously
- Inclusive (O) — One or more paths

**Swim Lanes:**
- Pools — Different organizations
- Lanes — Different roles/departments within a pool

### Example: Support Ticket Flow

Pool: Support System
- Lane 1: Customer
- Lane 2: Support Agent
- Lane 3: Engineering

1. Customer: Submit ticket (start event)
2. System: Assign to agent
3. Agent: Review ticket
4. Gateway: Can resolve?
5. (Yes) Agent: Respond to customer
6. (No) Agent: Escalate to engineering
7. Engineering: Fix issue → Agent: Respond

### UX Applications
- Understanding complex workflows before designing UI
- Designing admin panels and dashboards
- Creating role-based interfaces
- Process automation design`
  },

  // === SECTION 5: Prototyping ===
  "figma": {
    overview: `**Figma** is the industry-leading collaborative design tool for UX/UI design. It runs in the browser, supports real-time collaboration, and handles everything from wireframing to high-fidelity prototyping.

**Key strengths:** Collaborative editing, component system, auto-layout, prototyping, developer handoff, design systems, and a massive plugin ecosystem.

Figma has become the standard tool in most product design teams.`,
    deepDive: `### Core Features

**Design:**
- Vector editing tools
- Auto-layout (responsive components)
- Component system (reusable elements)
- Styles (colors, text, effects)
- Constraints (responsive behavior)

**Prototyping:**
- Interactive transitions
- Smart animate
- Overflow scrolling
- Component interactions
- Conditional flows

**Collaboration:**
- Real-time multiplayer editing
- Comments and feedback
- Version history
- Design reviews
- FigJam (whiteboard)

### Design Systems in Figma
- Create component libraries
- Define design tokens
- Publish team libraries
- Variant components for states

### Plugins & Community
- Content generators (fake data)
- Accessibility checkers
- Icon libraries
- Translation tools
- Developer handoff integrations

### Workflow
1. **Wireframe** in low-fidelity
2. **Design** in high-fidelity with components
3. **Prototype** interactions
4. **Test** with users
5. **Hand off** to developers with inspect mode

### Tips
- Master auto-layout for responsive designs
- Use variants for component states
- Name layers meaningfully
- Use shared libraries for consistency`
  },
  "adobe-xd": {
    overview: `**Adobe XD** is Adobe's UX/UI design and prototyping tool. It integrates with the Adobe ecosystem (Photoshop, Illustrator) and offers design, prototyping, and sharing features.

**Key strengths:** Repeat grid, auto-animate, voice prototyping, 3D transforms, and Creative Cloud integration.

**Note:** Adobe announced it would discontinue XD development in favor of Figma (following Adobe's attempted Figma acquisition). The tool is in maintenance mode.`,
    deepDive: `### Core Features

**Design:**
- Repeat grid — Quickly duplicate and modify elements
- Responsive resize
- Components and states
- Character styles and colors
- Content-aware layout

**Prototyping:**
- Auto-animate (tweening between artboards)
- Voice triggers and speech playback
- Timed transitions
- Drag gestures
- Keyboard/gamepad triggers

**Sharing:**
- Share for review (commenting)
- Share for development (specs)
- Share prototypes (interactive links)
- Design specs integration

### Adobe Ecosystem Integration
- Import from Photoshop and Illustrator
- Use Creative Cloud libraries
- Sync with Adobe Fonts
- After Effects integration

### When to Use
- Teams already invested in Adobe ecosystem
- Projects requiring voice UI prototyping
- Existing XD projects in maintenance

### Migration Path
Many teams are migrating XD projects to Figma. Key differences:
- Figma: Better collaboration, runs in browser
- XD: Better Adobe integration, desktop-first
- Both: Components, prototyping, design systems`
  },
  "sketch": {
    overview: `**Sketch** is a macOS-only vector design tool that pioneered modern UI design workflows. It introduced concepts like symbols (components), artboards, and design-focused tooling that influenced Figma and XD.

**Key strengths:** Native Mac performance, extensive plugin ecosystem, Smart Layout, and a mature design system workflow.

**Limitation:** Mac-only and lacks real-time collaboration (though Sketch now has a web viewer).`,
    deepDive: `### Core Features

**Design:**
- Symbols (reusable components)
- Smart Layout (auto-resizing)
- Text styles and layer styles
- Math in input fields
- Tinting and overrides

**Prototyping:**
- Basic prototyping (links between artboards)
- Fixed elements during scroll
- Hotspot layers
- Limited compared to Figma

**Libraries:**
- Shared libraries across documents
- Library updates with accept/reject
- Workspace for team collaboration

### Plugin Ecosystem
Sketch's plugin ecosystem is extensive:
- **Craft (InVision):** Content generation, sync
- **Abstract:** Version control for design files
- **Zeplin:** Developer handoff
- **Stark:** Accessibility tools

### Sketch vs. Figma
- **Sketch:** Native Mac performance, offline capable
- **Figma:** Cross-platform, real-time collaboration
- **Sketch:** File-based (version control needed)
- **Figma:** Cloud-native (auto-saved)

### Current State
Sketch remains popular in some organizations, especially those with established workflows. However, market share has shifted significantly toward Figma.

### When to Choose Sketch
- Mac-only teams
- Existing Sketch design systems
- Preference for desktop-native tools
- Strong plugin dependency`
  },
  "balsamiq": {
    overview: `**Balsamiq** is a rapid wireframing tool designed to look like hand-drawn sketches. Its deliberately low-fidelity aesthetic keeps focus on structure and function rather than visual design.

**Key strengths:** Speed, simplicity, sketch-like appearance that invites feedback, extensive UI component library.

**Best for:** Early-stage ideation, stakeholder workshops, and rapid concept validation.`,
    deepDive: `### Core Features

**Wireframing:**
- Drag-and-drop UI components
- Hand-drawn sketch style
- Rapid iteration
- Built-in UI patterns

**Component Library:**
- Buttons, forms, navigation
- Data grids and tables
- Icons and images
- Mobile components
- Custom symbols

**Collaboration:**
- Real-time co-editing
- Comments and callouts
- Presentation mode
- Export to PDF/PNG

### Why Low-Fidelity?

**Encourages feedback:**
- Stakeholders focus on structure, not colors
- "Unfinished" look invites suggestions
- Reduces "but I like the current design" resistance

**Speeds iteration:**
- Minutes to create, seconds to modify
- No pixel-perfect alignment needed
- Focus on content hierarchy and flow

### When to Use Balsamiq

✅ **Good for:**
- Initial concept exploration
- Stakeholder alignment workshops
- Quick user flow mapping
- Content hierarchy decisions
- Requirements gathering

❌ **Not for:**
- High-fidelity mockups
- Interactive prototyping
- Design system creation
- Developer handoff
- Visual design decisions

### Workflow
1. Sketch concepts on paper
2. Digitize in Balsamiq
3. Review with stakeholders
4. Iterate rapidly
5. Move to Figma for high-fidelity design`
  },
  "good-layout-rules": {
    overview: `**Good layout rules** are fundamental design principles that make interfaces scannable, intuitive, and aesthetically pleasing. They apply regardless of visual style or brand.

Key principles: **Proximity** (group related items), **Alignment** (create visual order), **Hierarchy** (show importance), **Consistency** (set expectations), and **White space** (let content breathe).

Following these rules makes the difference between interfaces that feel "right" and those that feel confusing.`,
    deepDive: `### The Core Rules

**1. Proximity**
- Related items should be close together
- Unrelated items should be separated
- Group labels with their fields
- Section headers near section content

**2. Alignment**
- Everything should align to something
- Use a grid system (4pt, 8pt)
- Left-align text for readability
- Center-align for emphasis (sparingly)

**3. Visual Hierarchy**
- Size indicates importance
- Color draws attention
- Position sets reading order (F-pattern, Z-pattern)
- Contrast separates levels

**4. Consistency**
- Same element = same style everywhere
- Consistent spacing and sizing
- Predictable component behavior
- Uniform terminology

**5. White Space**
- Margins and padding create breathing room
- More space = more importance
- Dense layouts feel overwhelming
- Space between sections > space within sections

### Grid Systems
- **12-column grid** — Standard for responsive web
- **8pt grid** — Components sized in 8px increments
- **4pt grid** — Fine-grained alignment
- **Modular grid** — Rows + columns for complex layouts

### Responsive Layout
- Mobile-first approach
- Breakpoints: 375, 768, 1024, 1440px
- Stack on mobile, grid on desktop
- Touch targets: minimum 44x44px`
  },
  "call-to-action": {
    overview: `A **Call to Action (CTA)** is a design element that prompts users to take a specific action. It's the most critical element on any page — the thing you most want users to do.

**Effective CTAs:** Clear, action-oriented text + visually prominent button + strategic placement.

**Examples:** "Start Free Trial," "Add to Cart," "Get Started," "Download Now." Note: all use action verbs, not vague labels like "Submit" or "Click Here."`,
    deepDive: `### CTA Anatomy

**Text:**
- Start with a verb (Get, Start, Try, Download, Join)
- Be specific about what happens
- Create urgency when appropriate
- Keep it short (2-5 words)
- "Start Free Trial" > "Submit" > "Click Here"

**Design:**
- High contrast with background
- Generous padding (easy to click)
- Rounded corners (approachable)
- Primary color for primary CTA
- Size proportional to importance

**Placement:**
- Above the fold for key actions
- End of content sections
- Sticky headers or footers on mobile
- After addressing objections

### CTA Hierarchy
- **Primary CTA:** The one thing you want users to do (bold, colored)
- **Secondary CTA:** Alternative option (outlined, muted)
- **Tertiary CTA:** Low-priority link (text link)

### Optimization Tips
1. **One primary CTA per screen** — Don't compete with yourself
2. **Reduce surrounding distractions** — White space around CTAs
3. **Match CTA to user intent** — Different CTAs for different stages
4. **Test variations** — A/B test copy, color, placement
5. **Add urgency sparingly** — "Limited time" works but can erode trust

### Common Mistakes
- Too many CTAs competing for attention
- Generic text ("Submit", "Next")
- Too small on mobile
- Hidden below the fold
- Disabled states without explanation`
  },
  "status-reports": {
    overview: `**Status reports** in UX patterns are interface elements that communicate system state, progress, or outcomes to users. They answer: "What just happened?" and "What's happening now?"

Good status reporting reduces anxiety, builds trust, and helps users make informed decisions about next steps.

**Types:** Loading indicators, confirmation messages, error states, progress updates, and activity feeds.`,
    deepDive: `### Types of Status Reports

**Real-time status:**
- Loading spinners and progress bars
- "Saving..." / "Saved ✓" indicators
- Live connection status (online/offline)
- Sync status

**Completion status:**
- Success messages ("Order placed!")
- Error messages ("Payment failed — try again")
- Confirmation emails and receipts
- Transaction summaries

**Activity reports:**
- Activity feeds and timelines
- Notification centers
- Dashboard metrics
- Weekly/monthly summaries

### Design Principles

1. **Be timely** — Show status immediately when state changes
2. **Be specific** — "File uploaded (2.3MB)" not just "Done"
3. **Be honest** — Show real progress, not fake progress bars
4. **Be helpful** — Error messages should include recovery steps
5. **Be appropriate** — Match urgency to importance

### Error Status Best Practices
- Say what went wrong (in plain language)
- Say why it happened (if helpful)
- Say how to fix it (actionable next step)
- Offer alternatives if the primary path is blocked
- Don't blame the user

### Examples
- **Slack:** "Connecting..." → "Connected ✓"
- **GitHub:** Build status badges (passing/failing)
- **Uber:** Real-time driver location and ETA
- **Bank apps:** Transaction pending → completed`
  },
  "how-to-tips": {
    overview: `**How-to-tips** are contextual guidance elements that help users accomplish tasks. They include tooltips, onboarding tours, inline hints, coach marks, and help text.

The key is **progressive disclosure**: don't overwhelm users with all information upfront. Show tips when they're relevant to what the user is currently doing.

**Good tips are:** Brief, contextual, dismissible, and actionable.`,
    deepDive: `### Types of How-to Tips

**Tooltips:**
- Hover/tap to reveal
- Short (1-2 sentences)
- Explain a single element
- Best for: icon labels, feature explanations

**Onboarding tours:**
- Step-by-step guided walkthrough
- Highlight key features
- Let users skip or exit
- Best for: first-time users

**Inline hints:**
- Placeholder text in form fields
- Helper text below inputs
- Contextual suggestions
- Best for: form completion, data entry

**Coach marks:**
- Overlay highlighting a specific element
- Brief explanation
- "Got it" dismissal
- Best for: new features, first-time actions

### Design Principles

1. **Context is king** — Show tips when relevant
2. **Keep it brief** — One idea per tip
3. **Allow dismissal** — Never trap users in a tour
4. **Don't repeat** — Once dismissed, don't show again
5. **Progressive disclosure** — Start simple, reveal more on demand

### When to Show Tips
- First time using a feature
- After inactivity (re-engagement)
- When a new feature is released
- When the user appears stuck
- On hover/focus for complex elements

### Anti-patterns
- Forced tutorials that can't be skipped
- Tips that cover the element they're explaining
- Too many tips at once
- Tips that state the obvious
- Tips with no dismiss option`
  },
  "reminders-planning-prompts": {
    overview: `**Reminders and planning prompts** help users follow through on intentions by prompting action at the right moment. They bridge the gap between wanting to do something and actually doing it.

**Reminders** are simple time-based triggers. **Planning prompts** go further by helping users plan when, where, and how they'll take action.

**Key research:** Implementation intentions ("I will do X at Y time in Z place") dramatically increase follow-through rates.`,
    deepDive: `### Reminders

**Types:**
- **Time-based:** "It's 8am — time for your daily review"
- **Location-based:** "You're near the gym — time to work out?"
- **Behavior-based:** "You just finished lunch — log your meal?"
- **Streak-based:** "Don't break your 7-day streak!"

**Best Practices:**
- Let users choose timing
- Vary content to avoid fatigue
- Include the action, not just the notification
- Easy to snooze or adjust frequency

### Planning Prompts

**Implementation intentions:**
"When [situation], I will [behavior], at [time/place]"

Help users create these by:
1. Asking when they plan to take action
2. Asking where they'll be
3. Asking what might get in the way
4. Creating a specific plan

### Design Strategies

**Scheduling features:**
- "Set a reminder for this task"
- Calendar integration
- Recurring schedule options
- Smart suggestions based on behavior

**Pre-commitment:**
- "What days will you work out this week?"
- Choose times during onboarding
- Lock in commitments with social sharing

### Effectiveness Data
- Simple reminders: ~10% increase in follow-through
- Implementation intentions: ~30% increase
- Reminders + social commitment: ~40% increase

### Notification Fatigue
Too many reminders backfire. Solutions:
- Start with fewer, increase if user responds
- Smart timing (not during sleep or meetings)
- Let users control frequency
- Make content valuable, not just nagging`
  },

  // === SECTION 6: UX Best Practices ===
  "tell-user-what-action-is": {
    overview: `Clearly **telling users what the action is** means using explicit, unambiguous language and design to communicate what you want them to do. Don't make users guess.

**Instead of:** An unlabeled icon
**Do:** An icon + text label ("Edit Profile")

The action should be obvious from both the copy and the visual design — no ambiguity, no assumptions about user knowledge.`,
    deepDive: `### Principles

**1. Use action-oriented language**
- "Save your progress" not "Continue"
- "Add to cart" not "Select"
- "Start free trial" not "Learn more"

**2. Be specific about outcomes**
- "Delete this file permanently" not "Delete"
- "Send email to 1,247 subscribers" not "Send"
- "You'll be charged $9.99/month" not "Subscribe"

**3. Show, don't just tell**
- Preview what the action will do
- Before/after comparisons
- Animation showing the result

### Visual Communication
- **Size:** Primary action = largest button
- **Color:** Primary action = brand color; destructive = red
- **Position:** Primary action in expected location
- **Contrast:** Action stands out from surrounding content

### Microcopy Best Practices
- Start with a verb
- Use second person ("Your", "You")
- Avoid jargon
- Match the user's mental model
- Be consistent (same action = same words everywhere)

### Testing Clarity
Ask users: "What do you think will happen when you click this?"
If they can't answer correctly, the action isn't clear enough.`
  },
  "clear-page-of-distractions": {
    overview: `**Clearing the page of distractions** means removing anything that doesn't support the user's current task. Every element on screen competes for attention — the fewer competitors, the more likely users complete the desired action.

**Applies to:** Checkout flows, sign-up pages, onboarding, and any conversion-critical screen.

**Technique:** Remove navigation, sidebars, ads, and secondary CTAs from pages where you want focused action.`,
    deepDive: `### Why It Works

**Attention is finite.** Every element on screen takes a slice of the user's attention budget. Reduce elements = more attention on what matters.

**Hick's Law:** Decision time increases with options. Fewer options = faster decisions.

### Distraction Removal Strategies

**Navigation:**
- Remove or minimize main navigation on checkout
- Use a simplified header (logo only)
- Breadcrumbs instead of full nav

**Content:**
- Remove sidebar on conversion pages
- Hide footer links during key flows
- Minimize promotional content

**Visual:**
- Increase white space around CTAs
- Reduce color variety
- Minimize animation/movement
- Use a single focal point

### When to Apply

**High-focus pages:**
- Payment/checkout
- Sign-up/registration
- Onboarding steps
- Confirmation of destructive actions

**Low-focus pages (distractions OK):**
- Browse/explore pages
- Dashboard/home
- Content consumption
- Settings (when not critical)

### Examples
- **Amazon checkout:** Removes main navigation, just shows checkout steps
- **Stripe checkout:** Minimal, focused payment form
- **Apple:** Product pages with massive white space and one CTA

### Balance
Don't strip too much. Users still need:
- A way to go back
- Security indicators
- Essential information for the decision
- Help/support access`
  },
  "make-it-clear-where-to-act": {
    overview: `**Making it clear where to act** uses visual hierarchy, color, positioning, and affordances to guide users to interactive elements. Users should never hunt for buttons or wonder what's clickable.

**Rule of thumb:** If a user pauses to figure out where to click, the design has failed.

**Key techniques:** Contrast, size, whitespace, color coding, and consistent interactive element styling.`,
    deepDive: `### Visual Hierarchy Techniques

**Size:**
- Primary actions: largest clickable elements
- Secondary: medium
- Tertiary: smallest (text links)

**Color:**
- Interactive elements: consistent accent color
- Primary CTA: solid, high-contrast
- Secondary: outlined or muted
- Destructive: red (warning)

**Position:**
- F-pattern for content pages (CTA in natural scan path)
- Center for modal/dialog actions
- Bottom-right for form submissions (Western convention)
- Thumb-zone for mobile (bottom of screen)

**Affordance:**
- Buttons look raised or contained
- Links are colored and/or underlined
- Cards have hover states
- Inputs have borders and placeholder text

### Interactive State Design
Every interactive element needs:
1. **Default state** — How it normally looks
2. **Hover state** — Mouse over (desktop)
3. **Active/pressed state** — Being clicked
4. **Focus state** — Keyboard navigation
5. **Disabled state** — Not currently available

### Common Problems
- Flat design making everything look the same
- Ghost buttons that disappear into backgrounds
- Links that don't look like links
- Disabled buttons without explanation
- Touch targets too small on mobile

### Testing
- **Eye tracking:** Where do users look?
- **Click maps:** Where do users actually click?
- **First click tests:** Is the first click correct?`
  },
  "make-ui-professional": {
    overview: `A **professional and beautiful UI** builds trust and credibility. Research shows users judge a product's quality, security, and usefulness within 50 milliseconds based on visual design alone.

Professional doesn't mean flashy — it means polished, consistent, and intentional. Every pixel should look deliberate.

**Key elements:** Typography, color, spacing, alignment, imagery, and attention to detail.`,
    deepDive: `### Typography
- Use 1-2 font families maximum
- Clear hierarchy: heading, subheading, body, caption
- Line height: 1.4-1.6 for body text
- Max line width: 65-75 characters
- Consistent sizing scale (e.g., 12, 14, 16, 20, 24, 32px)

### Color
- Primary, secondary, and accent colors
- Neutral scale (grays for text, borders, backgrounds)
- Semantic colors (green=success, red=error, yellow=warning)
- Sufficient contrast ratios (WCAG AA: 4.5:1 for text)
- 60-30-10 rule (dominant, secondary, accent)

### Spacing
- Consistent spacing scale (4, 8, 12, 16, 24, 32, 48px)
- Equal padding within components
- Generous margins between sections
- Grid alignment for visual order

### Imagery
- High-quality, relevant images
- Consistent style (photo vs. illustration)
- Proper sizing (not stretched or pixelated)
- Alt text for accessibility

### Details That Matter
- Consistent border radius
- Subtle shadows for depth
- Smooth transitions (200-300ms)
- Proper loading states
- Empty states with helpful content

### Building Trust Through Design
- SSL indicators
- Professional photography
- Consistent branding
- No broken layouts or missing images
- Responsive across devices`
  },
  "deploy-strong-authority": {
    overview: `**Deploying strong authority** means showing users that your product or content comes from a credible, expert source. People are more likely to trust and act on information from perceived authorities.

**Cialdini's Authority Principle:** People follow the lead of credible, knowledgeable experts.

**In UX:** Display credentials, expert endorsements, media logos, certifications, and data sources prominently.`,
    deepDive: `### Types of Authority Signals

**Expert endorsements:**
- "Recommended by Dr. Smith, MD"
- "Used by design teams at Google"
- Expert quotes and testimonials

**Institutional authority:**
- "Harvard Research shows..."
- "As featured in The New York Times"
- Professional certifications and awards

**Data authority:**
- "Based on 10,000+ user studies"
- Research citations
- Statistics and metrics

**Social authority:**
- "Trusted by 2 million users"
- Industry leader testimonials
- Partner and client logos

### Design Implementation

**Placement:**
- Near CTAs (reduces hesitation)
- On landing pages (builds initial trust)
- During checkout (reduces purchase anxiety)
- In onboarding (motivates engagement)

**Visual treatment:**
- Trust badges and certification logos
- Expert photos (faces build trust)
- Media/press logos in grayscale
- Star ratings prominently displayed

### Ethical Guidelines
1. All authority claims must be truthful
2. Don't fabricate credentials or endorsements
3. Keep claims current and relevant
4. Don't imply endorsement without permission
5. Let users verify claims (links to sources)

### Common Mistakes
- Overwhelming with too many logos
- Outdated or irrelevant credentials
- Vague claims ("industry-leading")
- Missing source attribution`
  },
  "be-authentic-personal": {
    overview: `Being **authentic and personal** in UX means creating experiences that feel human, honest, and individually relevant. Users connect with products that treat them as people, not data points.

**Authenticity** = honest about what you are, transparent about trade-offs.
**Personal** = relevant to the individual, acknowledging their context.

This builds emotional connection, trust, and loyalty — the foundations of long-term engagement.`,
    deepDive: `### Authenticity in Design

**Honest communication:**
- Admit limitations ("We're working on this feature")
- Transparent pricing (no hidden fees)
- Real company values, not corporate speak
- Acknowledge mistakes openly

**Voice and tone:**
- Sound human, not robotic
- Consistent personality across touchpoints
- Appropriate humor (when fitting)
- Empathetic error messages

### Personalization

**Data-driven:**
- Greet users by name
- Show relevant content based on history
- Adapt to usage patterns
- Remember preferences

**Context-aware:**
- Time of day ("Good morning, Sarah")
- Location-based recommendations
- Device-appropriate experiences
- Seasonal or event-based content

**User-controlled:**
- Customizable dashboards
- Theme/appearance options
- Notification preferences
- Content preferences

### The Authenticity Balance
- Be personal, not creepy (don't show you know too much)
- Be human, not fake-human (avoid excessive emoji from corporate accounts)
- Be honest, not harsh (constructive error messages)
- Be individual, not invasive (respect privacy)

### Examples
- **Mailchimp:** Playful, personality-driven copy
- **Slack:** Casual, friendly tone + loading messages
- **Duolingo:** Owl character creates personal connection
- **Notion:** Clean, honest about being a tool`
  },
  "deploy-social-proof": {
    overview: `**Social proof** is the psychological phenomenon where people assume the actions of others reflect correct behavior. In UX, displaying evidence that others use and value your product increases trust and conversion.

**Types:** User counts, testimonials, ratings, reviews, social media mentions, and "trending" indicators.

**Cialdini's principle:** "When uncertain, people look to the actions of others to determine their own."`,
    deepDive: `### Types of Social Proof

**1. Expert social proof:**
- Industry expert endorsements
- Professional reviews
- Media coverage

**2. Celebrity social proof:**
- Influencer partnerships
- Celebrity users/endorsements
- Brand ambassador programs

**3. User social proof:**
- Customer testimonials
- Star ratings and reviews
- User-generated content
- Case studies

**4. Wisdom of the crowd:**
- "10 million downloads"
- "Join 500,000+ professionals"
- Real-time user counts

**5. Wisdom of friends:**
- "3 of your friends use this"
- Facebook social login context
- Referral programs

### Design Implementation

**Placement:**
- Landing pages (above and below fold)
- Near CTAs (reduce decision anxiety)
- Product pages (reviews)
- Checkout (trust badges)

**Formatting:**
- Real names and photos (authentic)
- Specific numbers (not "thousands")
- Recent dates (current relevance)
- Diverse testimonials (relatable)

### Ethical Social Proof
- Never fabricate reviews or numbers
- Don't cherry-pick only 5-star reviews
- Show verified purchase badges
- Include negative reviews (paradoxically builds trust)
- Keep numbers current

### When Social Proof Backfires
- Very low numbers ("2 people bought this") → Wait until meaningful
- Inconsistent quality of reviews → Curate but don't censor
- Irrelevant social proof ("Used by NASA" for a cooking app)`
  },
  "prime-user-relevant-associations": {
    overview: `**Priming** is a psychological effect where exposure to one stimulus influences response to a subsequent stimulus. In UX, you can prime users by strategically presenting images, words, colors, or experiences before asking them to act.

**Example:** Showing success stories before asking users to start a challenge. Showing happy customer photos before showing the pricing page.

Priming sets the mental context for decision-making.`,
    deepDive: `### How Priming Works

The brain creates associations automatically. When you see a word, image, or experience, related concepts become more accessible in memory.

### Types of Priming in UX

**Visual priming:**
- Aspirational imagery before CTAs
- Color associations (green=go, red=stop)
- Professional aesthetics priming trust

**Verbal priming:**
- "Join thousands of successful..." (primes success)
- "Don't miss out..." (primes loss aversion)
- Question framing that activates relevant thoughts

**Conceptual priming:**
- Show the problem before the solution
- Display outcomes before asking for input
- Tell a story before presenting data

### Applications

**Onboarding:**
- Show what users will achieve before asking them to start
- Display transformations (before → after)
- Prime with aspirational user stories

**Pricing:**
- Show value delivered before showing the price
- Display ROI calculations before the payment form
- Feature comparisons that highlight value

**Content:**
- Headlines that activate curiosity
- Image selection that reinforces messaging
- Progressive disclosure that builds anticipation

### Ethical Considerations
- Priming should align with user interests
- Don't prime false urgency or fear
- Truthful associations only
- Support informed decision-making`
  },
  "avoid-direct-payments": {
    overview: `**Avoiding direct payments** means reducing the psychological pain of paying by decoupling the payment from the consumption. People experience "pain of paying" — a literal discomfort when spending money.

**Strategies:** Subscriptions, bundling, tokens/credits, free trials, and pre-payment (pay once, use many times).

**Example:** An annual subscription feels less painful than 12 monthly charges, even if it costs the same or more.`,
    deepDive: `### The Pain of Paying

Research shows payment triggers activity in brain areas associated with physical pain. The pain varies by:
- **Payment method:** Cash > credit card > digital wallet
- **Timing:** Pay-per-use > subscription > prepaid
- **Visibility:** Itemized > bundled > automatic

### Strategies

**1. Subscriptions:**
- One-time decision, automatic payments
- Pain of paying occurs once, benefits are ongoing
- User forgets about the cost

**2. Free trials:**
- No initial payment
- Users experience value first
- Loss aversion kicks in at trial end

**3. Bundling:**
- Combine items so individual costs are hidden
- "All-inclusive" feels less painful than itemized
- Users feel they're getting more value

**4. Credits/Tokens:**
- Abstract away real money
- Users spend credits more freely
- Creates a mental separation from actual cost

**5. Prepayment:**
- Pay upfront, use later
- Consumption feels "free" because it's already paid
- Gift cards, season passes, prepaid plans

### UX Design Implications
- Default to annual billing (show savings)
- Use round numbers ($10/month not $9.73)
- Show value delivered alongside cost
- Minimize payment friction
- Auto-save payment methods

### Ethical Note
Don't hide costs or make cancellation difficult. Transparent pricing + reduced pain of paying = good UX.`
  },
  "avoid-choice-overload": {
    overview: `**Choice overload** (paradox of choice) occurs when too many options lead to decision paralysis, decreased satisfaction, and even choosing nothing at all.

**The famous jam study:** When given 24 jam samples, 3% of shoppers bought. With 6 samples, 30% bought. More choices = fewer purchases.

**For UX:** Curate options, provide recommendations, use progressive disclosure, and default to the most common choice.`,
    deepDive: `### Why Too Many Choices Hurt

1. **Decision paralysis** — Can't decide, so don't decide
2. **Decreased satisfaction** — "What if the other option was better?"
3. **Increased regret** — More alternatives = more FOMO
4. **Cognitive exhaustion** — Evaluating options drains mental energy

### Strategies to Reduce Overload

**Limit options:**
- Show 3-5 options (ideal range)
- "Recommended" or "Most Popular" labels
- Category-first, then drill down

**Progressive disclosure:**
- Show basic options first
- "Advanced settings" for power users
- Step-by-step configuration

**Smart defaults:**
- Pre-select the most common option
- "Best for most people" labels
- Recommended configurations

**Filtering and sorting:**
- Let users narrow options themselves
- "Best Match" sorting
- Smart search with auto-suggestions

### Decision Architecture
1. **Categorize** — Group similar options
2. **Recommend** — Highlight the best choice
3. **Compare** — Make comparison easy
4. **Default** — Pre-select when appropriate
5. **Defer** — Allow saving for later

### Examples
- **Netflix:** "Top Picks for You" (curated from millions)
- **Spotify:** Discover Weekly (one playlist vs. all music)
- **Apple:** 3 iPhone tiers (Good, Better, Best)
- **Restaurant menus:** Too many items = slower ordering`
  },
  "avoid-cognitive-overhead": {
    overview: `**Cognitive overhead** is the mental effort required to use an interface. High cognitive overhead means users must think too much — remembering rules, interpreting unclear labels, or processing complex layouts.

**Goal:** Minimize unnecessary thinking. Every bit of mental effort spent deciphering your interface is energy NOT spent on the actual task.

**Recognition over recall:** Show options rather than requiring users to remember them.`,
    deepDive: `### Sources of Cognitive Overhead

**Interface complexity:**
- Too many elements on screen
- Inconsistent patterns
- Unclear icons without labels
- Novel (unfamiliar) interactions

**Information processing:**
- Dense text blocks
- Technical jargon
- Ambiguous instructions
- Missing context

**Memory demands:**
- Requiring users to remember previous screens
- IDs or codes they must type elsewhere
- Complex navigation structures
- Multi-step processes without summaries

### Reduction Strategies

**1. Use familiar patterns**
- Standard navigation (hamburger, tabs, breadcrumbs)
- Common form layouts
- Expected button positions
- Platform conventions

**2. Reduce information density**
- White space and breathing room
- One primary action per screen
- Progressive disclosure
- Scannable headings

**3. Provide context**
- Breadcrumbs showing location
- Descriptive labels (not just icons)
- Inline help and examples
- Preview of what comes next

**4. Minimize memory load**
- Show information, don't make users recall it
- Persistent display of important data
- Copy-to-clipboard functionality
- Auto-save and auto-fill

### Testing for Cognitive Overhead
- NASA Task Load Index (TLX)
- Think-aloud usability testing
- Time-on-task metrics
- Error rates`
  },
  "leverage-loss-aversion": {
    overview: `**Loss aversion** is the psychological principle that losing something feels roughly twice as bad as gaining the same thing feels good. People are more motivated to avoid losses than to achieve equivalent gains.

**In UX:** Frame actions in terms of what users might lose by NOT acting, rather than what they'll gain by acting.

**"Don't miss out"** is more motivating than **"You could benefit."** But use ethically — genuine value, not manufactured urgency.`,
    deepDive: `### The Psychology

- Discovered by Kahneman & Tversky (Prospect Theory)
- Loss/gain ratio: approximately 2:1
- Applies to money, time, status, opportunities, and possessions

### UX Applications

**1. Trial endings:**
"Your premium features expire in 3 days" (framing as loss)
vs. "Upgrade to keep these features" (framing as gain)

**2. Cart abandonment:**
"Items in your cart are selling fast" (potential loss)
"Complete your order before prices change"

**3. Feature engagement:**
"You're missing out on 5 features included in your plan"
Show what they have AND what they're not using

**4. Retention:**
"You'll lose your 45-day streak if you don't practice today"
"Your saved preferences and data will be deleted"

### Design Techniques
- **Countdown timers** for limited offers
- **"Last few remaining"** inventory indicators
- **Progress loss warnings** before abandoning forms
- **Before/after previews** showing what could be lost
- **Free trial data** that becomes unavailable on downgrade

### Ethical Boundaries
✅ **Acceptable:**
- Reminding users of genuine value they'd lose
- Honest scarcity information
- Real countdown timers for real deadlines

❌ **Not acceptable:**
- Fake urgency ("Only 2 left!" when there are 2,000)
- Dark patterns that make cancellation feel like loss
- Guilt-tripping users into staying
- Manufactured FOMO`
  },
  "use-peer-comparisons": {
    overview: `**Peer comparisons** show users how they compare to similar others. This leverages social comparison theory — people naturally evaluate themselves relative to peers.

**Effective comparisons:** "You read more than 73% of users this month" or "Your energy usage is below your neighbors'."

**Why it works:** Social norms are powerful motivators. Showing users they're above or below average influences behavior without explicit instruction.`,
    deepDive: `### Types of Peer Comparisons

**1. Descriptive norms:**
"The average user completes 3 tasks per day"
Shows what others typically do

**2. Injunctive norms:**
"Top performers complete 5+ tasks"
Shows what's considered good/ideal

**3. Personal comparison:**
"You vs. your average" (self-improvement focus)
"Your progress vs. last month"

### Design Considerations

**When comparisons motivate:**
- User is slightly below average → "I should do more"
- User is above average → Pride and reinforcement
- Clear, achievable gap → "I can catch up"

**When comparisons backfire:**
- User is far below average → Demotivation
- No clear path to improve → Frustration
- Feeling judged → Resentment

### Implementation
- **Charts and graphs** comparing user to average
- **Rankings** (with care — can demotivate bottom performers)
- **Percentile displays** ("Top 20%")
- **Contextual messages** ("Users like you typically...")

### Best Practices
1. Compare to similar peers (not all users)
2. Focus on improvement, not ranking
3. Celebrate being above average
4. Provide actionable tips to improve
5. Allow users to opt out

### Examples
- **Opower/Oracle:** Neighbor energy comparisons
- **Strava:** Segment leaderboards among friends
- **GitHub:** Contribution graphs and statistics
- **Spotify Wrapped:** Your year vs. global trends`
  },
  "use-competition": {
    overview: `**Competition** harnesses users' desire to win, compare, and achieve status. Well-designed competitive elements increase engagement, motivation, and retention.

**Types:** Leaderboards, challenges, tournaments, rankings, and competitive quests.

**Caution:** Competition motivates some personality types but demotivates others. Always offer both competitive and non-competitive paths.`,
    deepDive: `### Competitive Elements

**Leaderboards:**
- Global rankings (intimidating but motivating for top users)
- Friend-only rankings (more relatable)
- Weekly resets (keeps it achievable)
- Category-specific (multiple ways to "win")

**Challenges:**
- Time-limited competitions
- Team vs. team
- Personal best challenges
- Community goals

**Achievements:**
- Badges for milestones
- Titles and ranks
- Exclusive rewards for top performers
- Visible status symbols

### Design for Healthy Competition

**Include:**
- Multiple ways to win (not just one metric)
- Fair groupings (skill-based matching)
- Reset periods (fresh starts)
- Team competition (social bonding)
- Celebration of improvement (not just absolute ranking)

**Avoid:**
- Pay-to-win mechanics
- Impossible gaps for new users
- Public shaming of low performers
- Competition in sensitive contexts (health, finance)
- Single-metric competition (encourages gaming)

### Who Does Competition Motivate?
- **Achievers** (Bartle taxonomy) — Love winning
- **Socializers** — Enjoy team competition
- **Explorers** — Less motivated by competition
- **Killers** — Highly motivated (but can be toxic)

### Examples
- **Fitbit:** Step challenges with friends
- **Duolingo:** Weekly XP leaderboards
- **Nike Run Club:** Running challenges
- **Kaggle:** Data science competitions`
  },
  "frame-text-temporal-myopia": {
    overview: `**Temporal myopia** (present bias) is people's tendency to overvalue immediate rewards and undervalue future benefits. Framing text to combat this means making future outcomes feel vivid and immediate.

**Instead of:** "Save $200 per year" (abstract, distant)
**Try:** "That's $16 this month — enough for lunch every Friday" (concrete, immediate)

The goal is to make long-term benefits feel as real and tangible as short-term ones.`,
    deepDive: `### The Problem

People naturally discount future value:
- "$100 today" feels worth more than "$110 next month"
- "Exercise for long-term health" is less motivating than "Watch Netflix now"
- "Save for retirement" loses to "Buy shoes today"

### Framing Strategies

**1. Make it concrete:**
- "Save $2,400/year" → "Save $200/month — that's a nice dinner every week"
- "Reduce risk by 30%" → "3 out of 10 people in your situation avoid this issue"

**2. Make it immediate:**
- "Get healthier" → "Feel more energetic starting this week"
- "Build your career" → "Learn a skill you can use in your next meeting"

**3. Make it personal:**
- "Users save money" → "You'll save $47 based on your usage"
- "People succeed" → "Users with your profile typically achieve X"

**4. Make it vivid:**
- Use images of desired future states
- Show testimonials from people who achieved the outcome
- Create visual projections ("Here's your savings in 1, 5, 10 years")

### UX Applications
- **Savings apps:** Show compounding visually
- **Health apps:** Connect daily actions to weekly/monthly results
- **Learning platforms:** Show career impact of skills
- **Subscription pages:** Frame annual price in daily/weekly terms

### Ethical Use
Frame truthfully. Don't exaggerate future benefits or hide current costs. Help users make genuinely better long-term decisions.`
  },
  "remind-prior-commitment": {
    overview: `**Reminding users of prior commitments** leverages the psychological principle of consistency — people want to act in line with their past statements and actions.

Once someone commits to something (even small), they're more likely to follow through, especially if the commitment was voluntary and public.

**Example:** "You told us your goal was to read 20 books this year. You're on book #7 — keep going!"`,
    deepDive: `### The Psychology of Commitment

**Cialdini's Consistency Principle:**
People have a deep desire to be consistent with their past actions and statements. Making a commitment — especially publicly — creates internal pressure to follow through.

### Design Strategies

**1. Capture commitments early:**
- Goal-setting during onboarding
- "I commit to..." checkboxes
- Public sharing of goals
- Written intentions (more powerful than thoughts)

**2. Reference commitments later:**
- "Remember, you set a goal to..."
- Progress relative to commitment
- Milestone reminders linked to stated goals
- Year-end reviews showing commitment vs. achievement

**3. Make commitments visible:**
- Dashboard displaying stated goals
- Social sharing of commitments
- Team/buddy accountability
- Progress bars toward committed goals

### Implementation Tips
1. Ask for commitment voluntarily (never forced)
2. Start small (micro-commitments)
3. Make commitments specific and measurable
4. Reference the user's own words
5. Celebrate consistency

### Escalating Commitments
Start small, build up:
1. "What's your fitness goal?" (low commitment)
2. "Add it to your profile" (medium commitment)
3. "Share with friends" (high commitment)
4. "Set up weekly reminders" (behavior change)

### Examples
- **MyFitnessPal:** "Your daily calorie goal is 1,800. You've logged 1,200 today."
- **Beeminder:** Users put money on the line for their commitments
- **Stickk:** Commitment contracts with financial stakes`
  },
  "make-commitment-to-friends": {
    overview: `Making a **commitment to friends** adds social accountability to behavior change. Public commitments are significantly more effective than private ones because social consequences (embarrassment, letting others down) add motivation.

**The power:** Breaking a promise to yourself is easy. Breaking a promise to friends is much harder.

**Design approach:** Enable sharing goals, creating buddy systems, and forming accountability groups.`,
    deepDive: `### Why Social Commitments Work

1. **Social accountability** — Others know about your commitment
2. **Reputation stakes** — Failure is visible
3. **Support network** — Friends encourage and remind
4. **Positive pressure** — Not wanting to let others down
5. **Celebration amplification** — Achievements shared with friends feel bigger

### Design Patterns

**Goal sharing:**
- "Share your goal with friends" button after goal-setting
- Automatic updates on progress to chosen friends
- "I'm committing to..." social media templates

**Buddy systems:**
- Pair users with accountability partners
- Joint challenges ("Complete this together")
- Mutual check-ins and encouragement

**Group commitments:**
- Team challenges
- Group goals with collective progress
- Community pledges

### Implementation

**Make sharing easy but optional:**
- One-tap sharing to platforms
- In-app messaging to selected friends
- Email/text invitation for non-users

**Keep friends engaged:**
- Progress notifications to accountability partners
- Easy way to send encouragement
- Shared achievement celebrations

### Privacy Considerations
- Let users choose what to share
- Granular sharing controls (share goal, not details)
- Opt-in only (never auto-share)
- Easy to revoke sharing

### Examples
- **Strava:** Shared activities and kudos
- **Nike Run Club:** Challenge friends to runs
- **Weight Watchers:** Workshop groups
- **Peloton:** Live classes with friends`
  },
  "make-reward-scarce": {
    overview: `**Making rewards scarce** increases their perceived value. Scarcity triggers urgency and desire — "I might miss out if I don't act now."

**Types:** Time-limited offers, limited quantities, exclusive access, and seasonal availability.

**Scarcity principle:** People want more of what they can have less of. But overuse or fake scarcity destroys trust. Use sparingly and honestly.`,
    deepDive: `### Types of Scarcity

**1. Time scarcity:**
- Limited-time offers
- Flash sales
- Early bird pricing
- Countdown timers

**2. Quantity scarcity:**
- "Only 3 left in stock"
- Limited edition items
- Exclusive memberships (capped)
- First-come, first-served

**3. Access scarcity:**
- Invite-only features
- Beta access for early adopters
- Waitlists
- VIP/premium tiers

**4. Information scarcity:**
- Exclusive content
- Behind-the-scenes access
- Expert-only insights
- Members-only data

### Design Implementation

**Visual indicators:**
- Countdown timers (be honest!)
- Stock level indicators
- "Members only" badges
- Progress bars toward sold-out

**Copy:**
- "Limited time" / "While supplies last"
- "X people are viewing this right now"
- "Exclusive offer for members"
- "You've been selected for early access"

### Ethical Scarcity
✅ **Honest scarcity:**
- Real inventory limits
- Genuine time-limited offers
- Actual exclusive access
- True early-bird pricing

❌ **Fake scarcity (dark pattern):**
- Evergreen "flash sales"
- Fake countdown timers that reset
- "Limited stock" with unlimited inventory
- Manufactured urgency

### Effectiveness
Real scarcity increases conversion 2-5x. Fake scarcity works short-term but erodes trust long-term.`
  },
  "elicit-implementation-intentions": {
    overview: `**Implementation intentions** are specific plans for when, where, and how to take action. Research shows they double or triple the likelihood of follow-through compared to simple goals.

**Format:** "When [situation X arises], I will [perform behavior Y]."

**Example:** Instead of "I'll exercise more," → "When I get home from work on Monday, Wednesday, and Friday, I will go for a 20-minute run."`,
    deepDive: `### The Research

Peter Gollwitzer's research shows:
- Goals alone: ~30% follow-through
- Goals + implementation intentions: ~60-70% follow-through
- The more specific the plan, the higher the follow-through

### How to Elicit Implementation Intentions

**Step 1: Identify the behavior**
What specific action does the user want to take?

**Step 2: Identify the when**
"On which days?" / "At what time?"

**Step 3: Identify the where**
"Where will you be?" / "Which room/device?"

**Step 4: Identify obstacles**
"What might prevent you?" / "What's your backup plan?"

### UX Design Patterns

**Onboarding:**
- "When do you want to practice?" → Calendar picker
- "Set your daily reminder" → Time and day selection
- "What might get in your way?" → Obstacle planning

**Goal setting:**
- Transform "I want to save money" into specific actions
- "Every Friday, I will transfer $50 to savings"
- Calendar blocking for intended behaviors

**Reminders:**
- Triggered by the user's stated situation
- Reference the specific plan they created
- "It's Monday after work — time for your run"

### Making It Work
1. Keep the planning process quick (under 2 minutes)
2. Save and display the plan
3. Send reminders matching the plan
4. Allow easy modification
5. Reference the plan in follow-up messages

### Examples
- **Headspace:** "Choose your daily meditation time"
- **Habitica:** Task scheduling with specific days/times
- **Apple Fitness+:** Scheduled workout reminders`
  },
  "default-everything": {
    overview: `**Defaulting everything** means pre-selecting the best option for users across all settings, preferences, and configurations. Every choice you eliminate is one less decision the user must make.

This extends beyond single defaults to **entire configuration states** — the product should work perfectly out of the box with zero customization needed.

**Philosophy:** Require zero setup for a good experience. Offer customization for a great experience.`,
    deepDive: `### The Power of Comprehensive Defaults

Most users never change defaults:
- Only 5% of users customize settings
- Default homepage: ~95% keep it
- Default privacy settings: ~90% keep them
- Default notification preferences: ~85% keep them

### Default Everything Strategy

**Account setup:**
- Pre-fill from social login data
- Default avatar and display name
- Smart timezone and language detection
- Recommended notification preferences

**Product configuration:**
- Smart dashboards that work immediately
- Recommended workflows as templates
- Pre-built views and reports
- Auto-categorization and organization

**Content:**
- Recommended starting content
- Curated "getting started" collections
- Popular templates and examples
- Default organization structure

### Design Principles

1. **Make defaults the best choice** for the majority
2. **Make customization discoverable** but not required
3. **Be transparent** about what's pre-selected and why
4. **Allow easy change** — defaults should never be sticky traps
5. **Learn and adapt** — Update defaults based on user behavior

### Progressive Customization
1. **Day 1:** Everything works with defaults
2. **Week 1:** Surface customization options contextually
3. **Month 1:** Offer personalization based on usage
4. **Ongoing:** Smart defaults adapt to user patterns`
  },
  "lessen-burden-of-action": {
    overview: `**Lessening the burden of action** means reducing the effort required to complete any task. Every click, keystroke, and decision is friction that can prevent action.

**Principle:** The best interaction is no interaction. The second best is one tap.

**Strategies:** Pre-fill forms, reduce steps, use smart defaults, enable one-click actions, and leverage device capabilities (camera, GPS, biometrics).`,
    deepDive: `### Types of Burden

**Physical effort:**
- Number of taps/clicks
- Scrolling distance
- Typing required
- Switching between apps

**Cognitive effort:**
- Decisions to make
- Information to process
- Rules to remember
- Errors to recover from

**Time:**
- Wait times (loading, processing)
- Total task completion time
- Setup time before value
- Re-entry time after interruption

### Reduction Strategies

**Minimize input:**
- Auto-detect location, device, language
- Pre-fill known information
- Offer selection instead of typing
- Scan instead of type (QR, OCR, camera)

**Reduce steps:**
- One-click purchase
- Skip unnecessary confirmations
- Combine related steps
- Remove optional fields from the main flow

**Remove barriers:**
- Guest checkout (no account required)
- Social login (one tap)
- Biometric authentication
- Remember preferences

**Optimize for mobile:**
- Large touch targets
- Thumb-reachable CTAs
- Swipe gestures
- Shake to undo

### Measuring Burden
- Task completion time
- Number of steps/taps
- Error rate
- Abandonment rate
- User satisfaction surveys`
  },
  "deploy-peer-comparisons": {
    overview: `**Deploying peer comparisons** means showing users how they perform relative to others to motivate behavior change. This is the implementation side of the "Use Peer Comparisons" principle.

Effective deployment requires choosing the right comparison group, displaying data accessibly, and ensuring comparisons motivate rather than discourage.

**The key:** Compare users to people they can relate to, not to unattainable benchmarks.`,
    deepDive: `### Choosing Comparison Groups

**Similar peers:**
- Same experience level
- Same goals
- Same usage patterns
- Same demographic (when relevant)

**Aspirational peers:**
- One level above current user
- Achievable gap
- Visible path to get there

### Display Strategies

**Dashboards:**
- "You vs. Average" charts
- Percentile rankings
- Trend lines over time

**In-context:**
- "Most users complete this in 5 minutes" (before a task)
- "You're faster than 60% of users" (after completion)
- "Users like you typically also do X" (recommendation)

**Social feeds:**
- Friend activity and achievements
- Community highlights
- Weekly roundups

### Motivational Messaging

**Above average:**
"You're in the top 25%! Keep it up!" (reinforce)

**Near average:**
"You're close to the top tier. Just a bit more!" (stretch)

**Below average:**
"Here are 3 things top users do differently" (actionable)
NOT: "You're behind" (demotivating)

### A/B Testing Comparisons
- Test comparison group (friends vs. all users)
- Test display format (graph vs. number vs. narrative)
- Test messaging tone (celebratory vs. factual)
- Measure motivation AND satisfaction`
  },

  // === SECTION 7: Measuring the Impact ===
  "behavior-change-games": {
    overview: `**Behavior change games** use game mechanics to make desired behaviors fun and engaging. Unlike simple gamification, these are fully designed game experiences where the "play" IS the desired behavior.

**Examples:** Zombies, Run! (makes running a game), SuperBetter (turns recovery into quests), Habitica (gamifies daily tasks with RPG mechanics).

The behavior change IS the game, not just a layer of points on top of it.`,
    deepDive: `### Game Elements for Behavior Change

**Narrative:**
- Story that contextualizes the behavior
- Character progression tied to real actions
- World-building that makes the behavior feel epic

**Challenge:**
- Difficulty that scales with user skill
- Boss battles for milestone achievements
- Side quests for exploration
- Daily quests for routine behaviors

**Feedback:**
- Immediate response to actions
- Visual progress representation
- Sound effects and haptics
- Score/XP accumulation

**Social:**
- Cooperative missions (do it together)
- Competitive leaderboards
- Guilds and teams
- Trading and sharing

### Design Principles

1. **The game IS the behavior** — Not a separate reward layer
2. **Intrinsic motivation** — The game should be fun in itself
3. **Appropriate difficulty** — Challenging but achievable
4. **Meaningful choices** — Player agency matters
5. **Fair mechanics** — No pay-to-win for health/behavior games

### Success Metrics
- **Engagement:** Daily active users, session length
- **Behavior change:** Real-world behavior measurement
- **Retention:** Long-term usage (30, 60, 90 day)
- **Outcomes:** Health metrics, financial savings, learning gains

### Examples
- **Zombies, Run!:** Running with zombie chase narrative
- **SuperBetter:** Mental health through quests
- **Habitica:** To-do list as RPG
- **Duolingo:** Language learning as a game`
  },
  "decision-making-support": {
    overview: `**Decision-making support** provides users with tools, information, and frameworks to make better choices. Instead of nudging or defaulting, this approach empowers users with clarity.

**Tools:** Comparison matrices, calculators, recommendation engines, decision trees, and scenario planners.

**Best for:** High-stakes decisions where users want to feel confident they made the right choice.`,
    deepDive: `### Types of Decision Support

**1. Information tools:**
- Side-by-side comparisons
- Feature matrices
- Pros/cons lists
- Expert reviews and ratings

**2. Calculation tools:**
- ROI calculators
- Savings projections
- Total cost of ownership
- What-if scenarios

**3. Recommendation engines:**
- "Based on your preferences..."
- Quiz-based recommendations
- Collaborative filtering
- Expert systems

**4. Decision frameworks:**
- Step-by-step decision guides
- Priority ranking tools
- Weighted scoring models
- Trade-off visualizations

### Design Principles

1. **Reduce complexity** — Make the decision feel simpler
2. **Show relevant information** — Not all information
3. **Enable comparison** — Side by side, normalized metrics
4. **Provide recommendations** — But explain why
5. **Allow reversibility** — Reduce decision anxiety

### Implementation
- Place decision support near the decision point
- Don't force users through it (optional but accessible)
- Personalize based on user context
- Show confidence level in recommendations
### Examples
- **Kayak:** Flight comparison and price predictions
- **Wirecutter:** Expert-tested product recommendations
- **Mint:** Financial health scoring and advice`
  },
  "gamification": {
    overview: `**Gamification** applies game-design elements to non-game contexts to increase engagement, motivation, and participation. Common elements include points, badges, leaderboards, levels, and challenges.

Unlike behavior change games (which ARE games), gamification adds game layers to existing products and processes.

**Key insight:** Gamification works best when it enhances intrinsic motivation, not replaces it. Points and badges alone don't create lasting engagement.`,
    deepDive: `### Core Game Elements

**Points:** Quantify progress and effort
**Badges:** Mark achievements and milestones
**Leaderboards:** Compare performance with others
**Levels:** Show progression and unlock content
**Challenges:** Time-bound goals that create urgency
**Streaks:** Reward consistency

### When Gamification Works
- Behavior is somewhat enjoyable already
- Progress can be meaningfully measured
- Social comparison is appropriate
- Users opt in voluntarily

### When It Fails
- Extrinsic rewards replace intrinsic motivation
- Points feel meaningless
- Leaderboards discourage new users
- Mechanics are poorly balanced

### Design Principles
1. Align game mechanics with real value
2. Make progress meaningful, not just numerical
3. Offer multiple paths to success
4. Balance competition with cooperation
5. Allow opt-out for users who dislike gamification

### Examples
- **Duolingo:** XP, streaks, leaderboards, skill trees
- **LinkedIn:** Profile completion progress bar
- **Starbucks:** Stars and reward tiers
- **Khan Academy:** Energy points and badges`
  },
  "reminders": {
    overview: `**Reminders** are time-based or context-based prompts that help users follow through on intended behaviors. They bridge the intention-action gap by providing external cues at the right moment.

Effective reminders are timely, relevant, actionable, and respectful of the user's attention.

**Key challenge:** Too many reminders cause notification fatigue. Too few and users forget. Finding the right frequency is critical.`,
    deepDive: `### Types of Reminders

**Time-based:** Fixed schedule (daily at 8am)
**Event-based:** Triggered by events (after a meeting ends)
**Location-based:** Triggered by GPS (near the gym)
**Behavior-based:** Triggered by user actions (opened the app)
**Adaptive:** AI-adjusted timing based on user patterns

### Design Best Practices
1. Let users control frequency and timing
2. Include the action in the reminder (not just "Open app")
3. Vary content to prevent fatigue
4. Make it easy to snooze or reschedule
5. Respect quiet hours

### Measuring Effectiveness
- Open/click rates on reminder notifications
- Behavior completion after reminder
- Opt-out rates (too high = too aggressive)
- User satisfaction with reminder frequency

### Examples
- **Headspace:** Daily meditation reminders at user-chosen time
- **Todoist:** Task due date notifications
- **Apple Watch:** Stand reminders every hour
- **Duolingo:** Push notifications with streak warnings`
  },
  "social-sharing": {
    overview: `**Social sharing** enables users to share their achievements, content, or activity with their social networks. This creates social accountability, attracts new users, and reinforces the sharer's commitment.

**Effective sharing:** Provides value to both the sharer (social capital) and the viewer (useful/entertaining content).

**Key principle:** Make sharing easy and rewarding, but never forced or automatic.`,
    deepDive: `### Why Social Sharing Works

**For the sharer:**
- Social validation and recognition
- Public commitment (accountability)
- Identity expression
- Helping others

**For the viewer:**
- Discovery of useful products
- Social proof
- Inspiration and motivation
- Connection with friends

### Design Strategies
1. Create shareable moments (achievements, milestones)
2. Design attractive share cards/images
3. One-tap sharing to major platforms
4. Pre-written but editable share text
5. In-app sharing for community building

### What to Make Shareable
- Achievements and milestones
- Progress summaries (weekly/monthly)
- Created content
- Referral codes with incentives
- Interesting stats or insights

### Privacy Considerations
- Never auto-share without explicit consent
- Let users preview before sharing
- Granular controls (what and where to share)
- Easy to delete shared content

### Examples
- **Spotify Wrapped:** Annual listening summary
- **Strava:** Run/ride maps and stats
- **Wordle:** Daily puzzle results grid
- **GitHub:** Contribution graphs`
  },
  "goal-trackers": {
    overview: `**Goal trackers** help users set, monitor, and achieve their goals by providing visibility into progress and maintaining motivation over time.

Effective goal tracking combines clear goal definition, regular progress updates, milestone celebrations, and recovery support when users fall behind.

**Key design principle:** Track outcomes the user cares about, not just activity metrics.`,
    deepDive: `### Goal Tracker Components

**Goal Setting:**
- SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound)
- Templates for common goals
- Guided goal creation process

**Progress Monitoring:**
- Visual progress bars and charts
- Daily/weekly/monthly views
- Trend lines showing direction
- Comparison to planned pace

**Motivation:**
- Milestone celebrations
- Streak tracking
- Social sharing of progress
- Encouraging messages at key moments

### Design Principles
1. Make progress entry effortless (auto-track when possible)
2. Show both short-term and long-term progress
3. Celebrate consistency, not just completion
4. Handle setbacks gracefully (don't punish)
5. Allow goal adjustment without shame

### Examples
- **Apple Activity Rings:** Daily movement goals
- **Goodreads:** Annual reading challenges
- **Mint:** Budget goals and savings targets
- **MyFitnessPal:** Calorie and nutrition tracking`
  },
  "tutorials": {
    overview: `**Tutorials** are guided learning experiences that teach users how to use a product or feature. They range from quick tooltips to comprehensive walkthroughs.

The best tutorials are contextual, progressive, and hands-on — users learn by doing, not just watching or reading.

**Key principle:** Teach the minimum needed to get value, then let users explore.`,
    deepDive: `### Types of Tutorials

**Onboarding tutorials:** First-time user experience
**Feature tutorials:** Introducing new or complex features
**Contextual help:** Just-in-time guidance
**Video tutorials:** Visual demonstrations
**Interactive tutorials:** Learn by doing

### Design Principles
1. Keep it short (under 60 seconds for onboarding)
2. Let users skip
3. Teach through action, not just explanation
4. Show value immediately
5. Don't front-load everything

### Anti-patterns
- Forced lengthy tutorials
- Teaching everything at once
- No way to skip or exit
- Tutorial that blocks the actual product
- No way to replay later

### Examples
- **Slack:** Interactive onboarding with Slackbot
- **Figma:** In-app tutorials for new features
- **Notion:** Template-based learning
- **Canva:** Guided design creation`
  },
  "planners": {
    overview: `**Planners** help users organize future actions, allocate time, and maintain schedules. Digital planners range from simple to-do lists to comprehensive life management systems.

Effective planners reduce cognitive load by externalizing plans from memory to a reliable system.

**Key insight:** The best planner is the one users actually use consistently. Simplicity often beats feature richness.`,
    deepDive: `### Planner Types

**Task planners:** To-do lists, checklists, kanban boards
**Time planners:** Calendars, schedules, time blocks
**Project planners:** Gantt charts, milestones, dependencies
**Habit planners:** Recurring behavior tracking

### Design Principles
1. Quick entry (capture tasks in seconds)
2. Flexible organization (lists, boards, calendars)
3. Smart defaults (due dates, priorities)
4. Reminders and notifications
5. Review and reflection features

### Key Features
- Quick add from anywhere
- Natural language input ("Meeting tomorrow at 3pm")
- Recurring tasks
- Priority levels
- Calendar integration

### Examples
- **Todoist:** Task management with natural language
- **Notion:** Flexible workspace planner
- **Things 3:** Elegant task management
- **Google Calendar:** Time-based planning`
  },
  "multivariate-testing": {
    overview: `**Multivariate testing** simultaneously tests multiple variables and their combinations to find the optimal design. Unlike A/B testing (one variable), multivariate tests evaluate how different elements interact.

**Example:** Test 3 headlines × 2 images × 2 CTAs = 12 combinations simultaneously.

**Requirement:** High traffic volume to achieve statistical significance across all combinations.`,
    deepDive: `### How It Works

1. Identify variables to test (headline, image, CTA, layout)
2. Create variations for each variable
3. Generate all combinations
4. Split traffic across combinations
5. Measure performance of each combination
6. Identify winning combination AND individual element contributions

### When to Use
- High-traffic pages (need sufficient sample per combination)
- Multiple elements may interact
- You want to understand element-level contributions
- Optimizing conversion-critical pages

### vs A/B Testing
- **A/B:** Test one change at a time, lower traffic needed
- **Multivariate:** Test combinations, higher traffic needed
- **A/B:** Simpler analysis, faster results
- **Multivariate:** Richer insights, slower results

### Design Principles
1. Limit variables (2-4 max)
2. Ensure sufficient traffic
3. Run until statistically significant
4. Consider interaction effects
5. Document and share learnings

### Tools
- Google Optimize (sunset)
- Optimizely
- VWO
- Adobe Target`
  },
  "incremental-ab-testing": {
    overview: `**Incremental A/B testing** measures the true incremental impact of a change by comparing a treatment group to a holdout control group. It answers: "What lift does this change actually cause?"

Unlike standard A/B tests that compare two versions, incremental testing isolates the causal effect of a specific intervention (feature, notification, campaign).

**Key metric:** Incremental lift — the difference in outcomes between treatment and control groups.`,
    deepDive: `### How It Works

1. Randomly split users into treatment and control
2. Treatment group gets the change
3. Control group gets no change (holdout)
4. Measure the difference in key metrics
5. Calculate incremental lift and statistical significance

### When to Use
- Evaluating new features
- Measuring campaign effectiveness
- Justifying product investments
- Understanding true impact vs. organic behavior

### Best Practices
1. Sufficient sample size for statistical power
2. Random assignment (no bias)
3. Long enough duration (capture full behavior cycle)
4. Pre-define success metrics
5. Account for novelty effects

### Common Pitfalls
- Sample size too small
- Testing period too short
- Contamination between groups
- Multiple metrics without correction
- Ignoring long-term effects

### Examples
- Feature launches with holdout groups
- Notification campaigns with control groups
- Pricing experiments with random assignment
- UX changes measured against unchanged experience`
  },
};

export function getContent(topicId: string): TopicContent | undefined {
  return content[topicId];
}

export default content;
