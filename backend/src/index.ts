import Fastify, { FastifyInstance } from 'fastify';

// TODO: Import route modules as they are created in later prompts
// import { presignRoutes } from './routes/presign';
// import { generateRoutes } from './routes/generate';
// import { adminRoutes } from './routes/admin';

/**
 * Health check response schema
 */
interface HealthResponse {
  status: 'ok';
  timestamp: string;
  // TODO: Add dependency checks in later prompts
  // deps?: {
  //   openai: boolean;
  //   vision: boolean;
  //   storage: boolean;
  //   redis: boolean;
  // };
}

/**
 * Build and configure the Fastify server instance.
 * Exported for use in tests (in-memory server).
 */
export function buildServer(): FastifyInstance {
  const server = Fastify({
    logger: process.env.NODE_ENV !== 'test',
  });

  // Health check endpoint - no auth required
  server.get<{ Reply: HealthResponse }>('/health', async (_request, _reply) => {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  });

  // TODO: Register route plugins as they are implemented
  // await server.register(presignRoutes);
  // await server.register(generateRoutes);
  // await server.register(adminRoutes);

  return server;
}

/**
 * Start the server if this file is run directly.
 * Uses PORT from environment or defaults to 8080.
 */
async function start() {
  const server = buildServer();

  // TODO: Environment variables will be validated via config module in later prompts
  // Required env vars for production:
  // - PROJECT_ID: GCP project ID
  // - GCS_BUCKET: Cloud Storage bucket name
  // - OPENAI_API_KEY: OpenAI API key (from Secret Manager in production)
  // - FIREBASE_PROJECT_ID: Firebase project ID
  // - REDIS_HOST, REDIS_PORT: Redis connection details
  // - RATE_LIMIT_BURST, RATE_LIMIT_WINDOW_SECONDS: Rate limiting config

  const port = parseInt(process.env.PORT || '8080', 10);
  const host = process.env.HOST || '0.0.0.0';

  try {
    await server.listen({ port, host });
    server.log.info(`Photo Captioner API running on http://${host}:${port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
}

// Only start if run directly (not imported for testing)
if (require.main === module) {
  void start();
}
