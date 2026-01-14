# JobSet — AI-Powered SaaS Meeting & Agent Platform

JobSet is a full-stack **AI-driven SaaS platform** designed to transform meetings from simple video calls into **structured, searchable, and intelligent knowledge assets**.

Instead of ending value when a meeting ends, JobSet captures conversations, processes them using AI, and enables users to revisit, search, summarize, and interact with meetings long after they are over.

The platform is built with a **production-first mindset**, focusing on scalability, type safety, background processing, and real-world SaaS requirements such as authentication, subscriptions, and clean developer workflows.

---

## Platform Vision

Most video conferencing tools stop at real-time communication.  
JobSet goes beyond that.

The vision behind JobSet is to:

- Capture meetings in real time  
- Process conversations asynchronously using AI  
- Extract long-term value from discussions  
- Allow users to **interact with meetings after they end**

Each meeting becomes a living resource — searchable, summarizable, and understandable by AI agents that retain full context of what was discussed.

---

## Core Features

### Real-Time Meetings with AI Agents
- Video meetings with integrated AI agents
- Agents are context-aware and designed for extensibility
- Supports future expansion to multiple agents per meeting

### AI Transcripts & Summaries
- Automatic transcript generation after meetings
- AI-generated summaries highlighting key discussion points
- Heavy processing handled in background jobs for performance

### Post-Meeting Intelligence
- Watch recorded meetings
- Search across transcripts
- Chat with an AI that understands the entire meeting context
- Retrieve insights without rewatching full recordings

### Authentication & Protected Access
- Secure session-based authentication
- Server-side route protection
- Architecture ready for SaaS subscription gating

### Background Job Architecture
- AI workloads processed asynchronously
- Reliable event-driven workflows using Inngest
- Designed for scale and production usage

---

## What This Project Demonstrates

JobSet is not a demo or toy project. It demonstrates how to build a **real SaaS product** using modern web technologies:

- Scalable Next.js App Router architecture
- Type-safe APIs using tRPC
- Feature-based project structure
- Background job handling for AI workloads
- Clean separation of UI, business logic, and infrastructure
- Real-world authentication and protected routes

---

## Technology Stack

### Frontend
- Next.js (App Router)
- React.js
- Tailwind CSS

### Backend & Infrastructure
- tRPC for type-safe APIs
- PostgreSQL as the primary database
- Drizzle ORM for schema management and migrations
- Inngest for background jobs and event-driven workflows

### AI Layer
- AI agents for meeting analysis
- Transcript generation
- Context-aware AI chat for post-meeting interaction

---

## Project Structure

```txt
JobSet/
├── src/
│   ├── app/                    # Next.js App Router pages & layouts
│   │   ├── (auth)/             # Authentication routes
│   │   ├── meetings/           # Meeting-related routes and views
│   │   ├── page.tsx            # Root route logic (redirects & auth)
│   │   └── layout.tsx          # Global layout
│   │
│   ├── modules/                # Feature-based application modules
│   │   ├── home/               # Dashboard & home logic
│   │   ├── meetings/           # Meetings UI and business logic
│   │   └── agents/             # AI agent functionality
│   │
│   ├── components/             # Reusable UI components
│   │   ├── data-table.tsx
│   │   ├── loading-state.tsx
│   │   ├── empty-state.tsx
│   │   └── error-state.tsx
│   │
│   ├── db/                     # Database layer
│   │   ├── schema.ts           # Drizzle database schemas
│   │   └── index.ts            # Database connection
│   │
│   ├── trpc/                   # tRPC client and server
│   │   ├── server.ts
│   │   ├── client.ts
│   │   └── routers/            # API routers
│   │
│   ├── lib/                    # Shared utilities
│   │   ├── auth.ts             # Authentication helpers
│   │   └── utils.ts
│   │
│   └── styles/                 # Global styles
│
├── inngest/                    # Background job definitions
├── public/                     # Static assets
├── drizzle.config.ts           # Drizzle ORM configuration
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── package.json
└── README.md
