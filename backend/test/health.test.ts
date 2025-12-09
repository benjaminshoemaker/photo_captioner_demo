import { FastifyInstance } from 'fastify';
import { buildServer } from '../src/index';

describe('Health Check Endpoint', () => {
  let server: FastifyInstance;

  beforeAll(async () => {
    server = buildServer();
    await server.ready();
  });

  afterAll(async () => {
    await server.close();
  });

  describe('GET /health', () => {
    it('should return status ok with 200', async () => {
      const response = await server.inject({
        method: 'GET',
        url: '/health',
      });

      expect(response.statusCode).toBe(200);
    });

    it('should return JSON with status field set to "ok"', async () => {
      const response = await server.inject({
        method: 'GET',
        url: '/health',
      });

      const body = JSON.parse(response.body) as { status: string; timestamp: string };
      expect(body.status).toBe('ok');
    });

    it('should return JSON with a valid ISO timestamp', async () => {
      const response = await server.inject({
        method: 'GET',
        url: '/health',
      });

      const body = JSON.parse(response.body) as { status: string; timestamp: string };
      expect(body.timestamp).toBeDefined();

      // Verify it's a valid ISO date string
      const date = new Date(body.timestamp);
      expect(date.toISOString()).toBe(body.timestamp);
    });

    it('should return application/json content-type', async () => {
      const response = await server.inject({
        method: 'GET',
        url: '/health',
      });

      expect(response.headers['content-type']).toContain('application/json');
    });
  });
});
