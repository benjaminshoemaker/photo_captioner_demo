# Photo Captioner

A lightweight mobile app that generates engaging captions for photos to help casual social sharers craft on-point, shareable text quickly.

## Project Overview

- **Mobile Client**: Expo React Native + TypeScript (coming in Prompt 14)
- **Backend API**: Node.js + Fastify + TypeScript
- **AI**: OpenAI gpt-5-nano for caption generation
- **Safety**: Google Vision SafeSearch for image moderation

## Repository Structure

```
photo_captioner_demo/
├── backend/              # Backend API service
│   ├── src/              # TypeScript source code
│   ├── test/             # Jest tests
│   └── Dockerfile        # Container build
├── client/               # Mobile client (coming soon)
├── infra/                # Terraform IaC (coming soon)
├── ONE_PAGER.md          # Product specification
├── DEV_SPEC.md           # Technical specification
├── PROMPT_PLAN.md        # Implementation plan with TODOs
└── AGENTS.md             # Agent workflow guidelines
```

## Quick Start

### Backend

```bash
cd backend
npm install
npm run dev
```

Server runs at http://localhost:8080

### Run Tests

```bash
cd backend
npm test
```

## Documentation

- [ONE_PAGER.md](./ONE_PAGER.md) - Product vision and requirements
- [DEV_SPEC.md](./DEV_SPEC.md) - Technical specification
- [PROMPT_PLAN.md](./PROMPT_PLAN.md) - Step-by-step implementation plan
- [AGENTS.md](./AGENTS.md) - Agent workflow guidelines
- [backend/README.md](./backend/README.md) - Backend-specific documentation

## Release Notes

### Prompt 0 - Backend Repository Scaffold (Complete)

**Completed:**
- Created backend project structure with TypeScript + Fastify
- Configured Jest test framework with ts-jest
- Configured ESLint + Prettier for code quality
- Implemented `/health` endpoint returning `{status: "ok", timestamp: "..."}`
- Added multi-stage Dockerfile for Cloud Run deployment
- Added GitHub Actions CI workflow skeleton
- All tests passing (4 tests)

**Manual verification:**
- [ ] Run `cd backend && npm install && npm test` - confirm 4 tests pass
- [ ] Run `npm run dev` - confirm server starts on port 8080
- [ ] Run `curl http://localhost:8080/health` - confirm JSON response

**Files created:**
- `backend/package.json`
- `backend/tsconfig.json`
- `backend/jest.config.js`
- `backend/.eslintrc.js`
- `backend/.prettierrc`
- `backend/src/index.ts`
- `backend/test/health.test.ts`
- `backend/Dockerfile`
- `backend/.gitignore`
- `backend/.github/workflows/ci.yml`
- `backend/README.md`

---

*Next step: Prompt 1 - Manual Infrastructure Setup*
