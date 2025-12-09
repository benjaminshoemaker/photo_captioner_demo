# Photo Captioner Backend

Backend API for the Photo Captioner MVP - generates engaging captions for photos using AI.

## Tech Stack

- **Runtime**: Node.js 18+
- **Language**: TypeScript
- **Framework**: Fastify
- **Testing**: Jest + ts-jest
- **Linting**: ESLint + Prettier

## Quick Start

```bash
# Install dependencies
npm install

# Run in development mode (with hot reload)
npm run dev

# Run tests
npm test

# Build for production
npm run build

# Start production server
npm start
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm start` | Run production build |
| `npm test` | Run tests once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint with auto-fix |
| `npm run format` | Format code with Prettier |
| `npm run typecheck` | Run TypeScript type checking |

## Project Structure

```
backend/
├── src/
│   ├── index.ts          # Server entry point
│   ├── routes/           # API route handlers
│   ├── services/         # Business logic services
│   ├── lib/              # Utilities and helpers
│   └── config/           # Configuration management
├── test/                 # Test files
├── Dockerfile            # Container build
└── .github/workflows/    # CI/CD
```

## API Endpoints

### Available Now

| Method | Path | Description |
|--------|------|-------------|
| GET | `/health` | Health check endpoint |

### Coming in Later Prompts

| Method | Path | Description |
|--------|------|-------------|
| POST | `/presign-upload` | Get presigned URL for image upload |
| POST | `/generate` | Generate captions for uploaded image |
| GET | `/admin/flags` | Admin: list moderation flags |
| POST | `/admin/whitelist` | Admin: manage user whitelist |

## Environment Variables

Create a `.env.local` file (never commit this):

```bash
# Server
PORT=8080
NODE_ENV=development

# TODO: These will be added in later prompts
# PROJECT_ID=your-gcp-project
# GCS_BUCKET=photos-uploads-your-project
# FIREBASE_PROJECT_ID=your-firebase-project
# FIREBASE_ADMIN_CREDENTIALS=/path/to/service-account.json
# OPENAI_API_KEY=sk-...
# REDIS_HOST=localhost
# REDIS_PORT=6379
# RATE_LIMIT_BURST=5
# RATE_LIMIT_WINDOW_SECONDS=60
# CONCURRENCY_KEY_TTL_SECONDS=300
# ADMIN_UID=admin-user-uid
```

## Docker

```bash
# Build image
docker build -t photo-captioner-backend .

# Run container
docker run -p 8080:8080 photo-captioner-backend

# With environment variables
docker run -p 8080:8080 \
  -e NODE_ENV=production \
  -e PORT=8080 \
  photo-captioner-backend
```

## Next Steps (Implementation Order)

Following the prompt plan from `PROMPT_PLAN.md`:

1. **Prompt 1**: Manual infrastructure setup (Firebase, GCS, Redis, etc.)
2. **Prompt 2**: Auth service - Firebase token verification
3. **Prompt 3**: Storage service - GCS presigned uploads
4. **Prompt 4**: Presign endpoint route
5. **Prompt 5**: Image processing service (Sharp)
6. **Prompt 6**: Vision SafeSearch wrapper
7. **Prompt 7**: Rate limiting service (Redis)
8. **Prompt 8**: OpenAI wrapper for caption generation
9. **Prompt 9**: Moderation wrapper and caption sanitization
10. **Prompt 10**: Generate endpoint orchestration
11. **Prompt 11**: Admin endpoints and Firestore
12. **Prompt 12+**: Docker finalization, CI/CD, client app

## Testing

Tests use Jest with ts-jest for TypeScript support. Tests run in-memory using Fastify's inject method (no actual HTTP server needed).

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Watch mode for development
npm run test:watch
```

## Contributing

1. Create a feature branch from `develop`
2. Write tests first (TDD)
3. Implement the feature
4. Ensure all tests pass
5. Update `PROMPT_PLAN.md` checkboxes
6. Submit PR

## Release Notes

### v0.1.0 (Current)
- Initial project scaffold
- Health check endpoint
- TypeScript + Fastify setup
- Jest test framework configured
- Docker multi-stage build
- CI workflow skeleton
