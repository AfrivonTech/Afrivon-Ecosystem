Afrivon HQ \*\*1. Project Name:\*\*

Afrivon HQ (also referred to as the "Command Center")

$\star { \star } 2$ .Core Concept:\*\*

A single, secure,and unified web application that serves as the central administrative dashboard for the entire Afrivon Tech ecosystem. It is a private, internal tool, completely separate from the public-facing apps,and accessble only to the founder and authorized team members.

$\star \star _ { 3 }$ Strategic Role in Ecosystem:\*\*

\*\*\*Build Order:\*\* This willbe built incrementally and in paralel with the public-facing applications. As we build a new app like CareerKit, we will simultaneously build the necessary management modules for it within Afrivon HQ.

\*\*\*Primary Function:\*\* To provide the tools for comprehensive business operations, user management, financial oversight, customer support, and to serve as the central Content Management System (CMS) and Partnership Management platform.

$\star \star _ { 4 }$ . Architecture & Security:\*\*

\*\*Dedicated Aplication:\* It willbea completely separate webapplication (builtwith Next.js for consistency), with a focus on functionality and security over public-facing design aesthetics. \*\*\*Unified Database Connection:\*\*It connects directly to the same central Supabase (PostgreSQL) database that all other ecosystem apps use, but with elevated administrative permissions.

\*\*\*Security Layers:\*\*

1. \*\*Obscure URL:\*\* Hosted on a non-public, non-indexed subdomain (e.g., hq-internal.afrivon.tech).

2. \*\*IP Whitelisting:\*\* Access willbe restricted to a specific list of approved IP addresses.

3. \*\*Role-Based Access Control (RBAC):\*\* Login will only be granted to users with a specific \`user_role' (e.g., admin, support, finance) in the central database. Regular user accounts cannot authenticate.

4. \*\*Two-Factor Authentication (2FA):\*\* Mandatory for all admin accounts for an extra layer of security.

$\star \star 5$ . Core Modules & Features:\*\*

$\bigstar \bigstar \bigstar \bigstar \bigstar$ Unified Dashboard:\*\* The homepage wil display key "at-a-glance" metrics from all apps: total users, daily sign-ups, total revenue, number of active jobs, etc.

$^ { \star \star } \mathsf { B } )$ User Management Module:\*\* \*A global search function to find any user across the ecosystem.

\*A "360-Degree User View" showing a user's complete profile, subscriptions, activity history, and documents.

\*Tools to manage user accounts: suspend/ban users, handle support requests, reset passwords.

$^ { \star \star } \mathsf { C }$ Financial Management Module:\*\*

\*A central dashboard to view all revenue streams (subscriptions, fees, commissions). \*Tools to manage payouts to mentors and partners.   
\* A system for processing refunds.   
$^ { \star \star } \mathsf { D }$ App-Specific Management Modules:\*\*

\*\*\*TradeLink Module:\*\* Tools to manually verify new employers/mentors, review and mediate disputes, and manage job post quality.

\*\*\*Learning Hub Module:\*\* Tools to review and approve new courses, manage institutional partners, and oversee the certification system.

\*\*(And similar modules for other apps as they are built).\* \* \*E) Support Ticket System:\*\* Acentralized system to receive,assign,and resolve alluser support requests from across the ecosystem.

$\star \star \star _ { \mathsf { F } }$ ) Content & Communications Module (CMS):\*\* To manage all dynamic content (blog posts, news,announcements) that appears on the public-facing websites (Afrivon Website, Afrivon Connect). Features include a rich text editor, publishing workflow (drafts, scheduling), and category management.

$\star \star 6$ . Updated & Enhanced Functionalities:\*\*

$\star \star _ { \mathsf { G } }$ The Partnership Portal (Self-Serve & Automated):\*\* This is a major, dedicated module within HQ that is also partialy public-facing (via the secure subdomain) for partner sign-ups.

\*\*Partner Sign-up/Login:\*\*A separate authentication flow for partners.

\*\*\*Tier Selection & E-commerce:\*\* A front-end interface where partners can view the diferent visibility and sales tiers, select a package, and pay via an integrated payment gateway (e.g., Stripe, Paystack).

\*\*\*Asset & Product Uploader:\*\* An automated, user-friendly interface for partners to upload their brand assets (logos, banners) and product information (for the TradeLink Marketplace) directly to the system. This includes validation for image sizes and data formats.

\*\*Partner Dashboard:\* After signing up,partners can Iog in to view their own dashboard showing basic analytics (impressions, clicks, sales), manage their assets,and upgrade their tier \*\*\*Admin Management Interface:\*\* The internal HQ view for Afrivon staf to approve/reject new partners, manage partnership contracts,and view comprehensive analytics on the partnership program's revenue and performance.

$^ { \star \star } 7$ .Technology Stack:\*\*

\*\*\*Framework:\*\* A functional and secure web framework (Next.js is a good choice for consistency).   
\*\*\*Database:\*\* Direct connection to the central Supabase (PostgreSQL) database. \*\*\*Deployment:\*\* Deployed asa separate,prvate project onaplatform likeVercel that supports IP whitelisting.
