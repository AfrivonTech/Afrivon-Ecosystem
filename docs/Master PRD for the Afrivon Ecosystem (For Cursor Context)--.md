\*\*Master PRD for the Afrivon Ecosystem (For Cursor Context)\*\*

\*\*1. Project:\*\* The Afrivon Tech Ecosystem

\*\*2. Vision:\*\* To build a fully integrated, mobile-first ecosystem
of applications that empowers African tradespeople and professionals to
build their careers, manage their work, and grow their businesses. We
are creating a "business-in-a-box" that provides value at every stage of
a professional's journey.

\*\*3. Core Architectural Principles (for AI Context):\*\*

\* \*\*Monorepo:\*\* The entire ecosystem is housed in a single
Turborepo monorepo. Applications are in \`apps/\`, shared logic and
components are in \`packages/\`.

\* \*\*Unified Database:\*\* A single Supabase (PostgreSQL) instance is
the source of truth for all user data, content, and transactions. The
schema is in \`packages/db\`.

\* \*\*Unified Authentication:\*\* A single user account (\`Afrivon
Account\`) grants access to all apps. Auth logic is in
\`packages/auth\`.

\* \*\*Shared Design System:\*\* All frontends use a shared component
library from \`packages/ui\` to ensure a consistent look and feel based
on the \`design-system.md\` blueprint.

\* \*\*API-Driven:\*\* All applications are clients of a central API
defined in \`apps/api\`.

\*\*4. The Interconnected Applications (The "Nodes"):\*\*

\* \*\*\`apps/website\` (Afrivon Tech Website):\*\* The public "front
door." Its job is to communicate the vision and funnel users and
partners into the ecosystem.

\* \*\*\`apps/career-kit\` (Afrivon CareerKit):\*\* The "Identity
Forge." Where users create their professional documents (CVs,
proposals). This is the primary source of \`TradePass\` profile data.

\* \*\*\`apps/trade-link\` (Afrivon TradeLink):\*\* The "Economic
Engine." A marketplace for jobs and mentorship. Contains the
\*\*Intelligent Marketplace\*\* for selling partner tools/materials.

\* \*\*\`apps/learning-hub\` (Afrivon Learning Hub):\*\* The "Upskilling
Engine." An e-learning platform to close skill gaps identified in
TradeLink and CareerKit.

\* \*\*\`apps/work-flow\` (Afrivon WorkFlow):\*\* The "Project Hub." A
project management tool that activates automatically when a user is
hired on TradeLink.

\* \*\*\`apps/connect\` (Afrivon Connect):\*\* The "Social Heart." The
community and networking layer that weaves all other apps together,
making the ecosystem "sticky."

\* \*\*\`apps/hq-web\` (Afrivon HQ):\*\* The "Command Center." The
internal admin tool for managing the entire ecosystem. This includes the
crucial \*\*self-serve Partnership Portal\*\* for onboarding and
managing all commercial partners (suppliers, advertisers, sponsors,
institutions).

\*\*5. The Core User Journey (The "Golden Path"):\*\*

A user discovers the \*\*Website\*\* -\> Signs up via \*\*CareerKit\*\*,
creating their \`TradePass\` profile -\> Finds a job on
\*\*TradeLink\*\* -\> Automatically gets a project workspace in
\*\*WorkFlow\*\* -\>

Upskills using the \*\*Learning Hub\*\* based on job requirements -\>
Builds their professional network on \*\*Connect\*\* by sharing their
successes.

\*\*6. Key Global Features to Implement:\*\*

\* \*\*Universal Search:\*\* A single search bar in all app headers that
queries the entire ecosystem.

\* \*\*Integrated Calendar:\*\* A unified calendar showing deadlines,
events, and schedules from all apps.

\* \*\*Gamification (AfriPoints):\*\* A points system that rewards users
for value-creating actions in any app.

\* \*\*Cross-Promotional Funnels:\*\* A standardized system of
contextual prompts to guide users intelligently between apps.

\* \*\*Automated Partnership Portal:\*\* The central, self-serve system
in Afrivon HQ where all partners are funneled to. They sign up, choose
tiers, upload assets/products, and pay automatically.
