# UX Design Course — Roadmap

## Current State (Phase 0 ✅)
- Live at https://ux-design-course.vercel.app/
- 86 topics, 7 sections, static content (overview + deep dive) + multiple choice quizzes
- Progress tracking via localStorage (no accounts)
- Stack: Next.js, Tailwind, Vercel, GitHub (jonush/ux-design-course)
- Branch: `main` (only branch)

---

## Phase 1 — Personalized AI Learning (Private/Personal Use)

**Goal:** Replace static deep dives with AI-generated personalized content + add conversational follow-up.

### Features
1. **Free response quizzes** — replace multiple choice with open-ended questions
2. **AI-graded quiz responses** — AI evaluates understanding, identifies gaps
3. **Personalized deep dive generation** — AI generates deep dive content tailored to user's quiz performance (what they got wrong or struggled to articulate)
4. **Discussion mode** — after deep dive generates, user can ask follow-up questions, challenge ideas, explore tangents. Deep dive is the first message in a chat panel, conversation stays scoped to that topic
5. **Chat history per topic** — stored in localStorage

### Implementation Details
- Jon's own Claude API key via env variable (not BYOK yet)
- Sonnet or Haiku for grading (cost-efficient)
- Streaming responses for deep dive generation + chat
- Loading states during generation
- Token usage: ~500k tokens across full course, spread over time — sustainable for single user
- Prompt engineering will be iterated during Jon's personal testing

### UX Flow
1. Read overview → answer free response quiz → AI grades + identifies gaps → AI generates personalized deep dive → user can continue discussing the topic with AI → move to next topic

---

## Phase 2 — Public Release

**Goal:** Make the tool available to anyone, open source, BYOK model.

### Features
1. **User accounts + database**
   - Optional sign-up (can use the course without an account via localStorage)
   - "Save your progress" prompt after completing a few topics
   - Supabase (free tier): auth + Postgres DB
   - Syncs progress, quiz responses, chat history across devices

2. **BYOK (Bring Your Own Key)**
   - Settings page where users paste their API key
   - Key stored in localStorage (never persisted server-side)
   - Support OpenAI, Claude, Gemini
   - OpenAI/Gemini: client-side API calls (no proxy needed, key never touches server)
   - Claude: thin open-source proxy (key passes through, never stored/logged)
   - Users without a key get static content only (overview + static deep dive, multiple choice quizzes)

3. **Provider abstraction**
   - Thin wrapper per provider (~100 lines each) mapping prompts to API formats
   - Unified interface regardless of chosen provider
   - Handle different streaming APIs, normalize responses

4. **Onboarding (lightweight)**
   - No gate — land on course, start immediately
   - Optional account creation prompted after a few topics
   - API key config lives in settings, not onboarding
   - AI features only require key setup when user wants them

5. **Open source**
   - MIT license
   - No hardcoded secrets (env vars only)
   - README with self-hosting instructions
   - Public repo (already on GitHub)
   - Open source = trust signal for BYOK (users can verify key handling)
   - No monetization planned

6. **Error handling**
   - Bad/expired API keys → graceful fallback to static content
   - Rate limits / out of credits → informative error + fallback
   - Token counter in settings so users can monitor usage

7. **Token usage display**
   - Surface token counter in settings
   - Per-topic and cumulative usage visibility

### Not Concerned About
- Content moderation for free response (users can type anything, AI handles it)
- OAuth for API providers (not practical yet, revisit later)

---

## Design Decisions
- Static overview content stays the same for all users (core knowledge base)
- Deep dives are personalized per user based on quiz performance
- Discussion mode makes deep dive a starting point, not endpoint — personal tutor per topic
- BYOK + client-side calls = zero AI cost to project owner for public users
- Tiered experience: no account (localStorage) → account (DB sync) → account + API key (full AI features)
