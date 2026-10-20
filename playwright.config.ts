import { defineConfig, devices } from '@playwright/test';

const baseURL = process.env.E2E_BASE_URL || 'http://localhost:3000';

export default defineConfig({
	testDir: './e2e',
	forbidOnly: true,
	retries: 1,
	reporter: 'list',
	use: { baseURL, trace: 'on-first-retry', screenshot: 'only-on-failure', video: 'retain-on-failure' },
	projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
	webServer: { command: 'npm run dev', url: baseURL, env: { PORT: '3000' }, reuseExistingServer: true, timeout: 120000 },
});
