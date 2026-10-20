import { test, expect } from '@playwright/test';

const SITE = 'https://daffa-akbar.vercel.app';

const PAGES = [
	'/',
	'/skills',
	'/experience',
	'/experience/sociolla',
	'/experience/spartan',
	'/experience/portfolio',
	'/experience/st-daffa-moritz-office',
	'/career',
	'/contact',
];

test.describe('PF-4 Content: replace template leftovers and refresh portfolio data', () => {
	test('Given any page When I view its source Then no URL or text mentions nbarkiya or Naman', async ({ request }) => {
		for (const path of PAGES) {
			// Given / When
			const res = await request.get(path);
			expect(res.status(), path).toBe(200);
			// Then
			const source = await res.text();
			expect(source, path).not.toMatch(/nbarkiya/i);
			expect(source, path).not.toMatch(/naman/i);
		}
	});

	test("Given a page link shared on social media When the preview is generated Then it shows Daffa's image and the daffa-akbar.vercel.app domain", async ({ page, request }) => {
		// Given / When
		await page.goto('/');
		// Then
		await expect(page.locator('meta[property="og:url"]')).toHaveAttribute('content', new RegExp(`^${SITE}/?$`));
		const ogImage = page.locator('meta[property="og:image"]');
		await expect(ogImage).toHaveAttribute('content', `${SITE}/daffa2.png`);
		await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute('content', `${SITE}/daffa2.png`);
		// the image the preview points to is served by this site
		const image = await request.get('/daffa2.png');
		expect(image.status()).toBe(200);
		expect(image.headers()['content-type']).toContain('image/');
	});

	test('Given /sitemap.xml and /robots.txt When requested Then they reference https://daffa-akbar.vercel.app and list no contributions page', async ({ request }) => {
		// When
		const sitemap = await request.get('/sitemap.xml');
		const robots = await request.get('/robots.txt');
		// Then
		expect(sitemap.status()).toBe(200);
		const sitemapText = await sitemap.text();
		expect(sitemapText).toContain(`<loc>${SITE}`);
		expect(sitemapText).not.toMatch(/nbarkiya/i);
		expect(sitemapText).not.toMatch(/contributions/i);

		expect(robots.status()).toBe(200);
		const robotsText = await robots.text();
		expect(robotsText).toContain(`Sitemap: ${SITE}/sitemap.xml`);
		expect(robotsText).not.toMatch(/nbarkiya/i);
		expect(robotsText).not.toMatch(/contributions/i);
	});

	test('Given the home page and the navigation When they load Then there is no Contributions link or section, and opening /contributions shows the not-found page', async ({ page }) => {
		// Given / When
		await page.goto('/');
		await expect(page.getByRole('heading', { name: 'Experience', level: 2 })).toBeVisible();
		// Then
		await expect(page.getByRole('banner').getByRole('link', { name: 'Experience' })).toBeVisible();
		await expect(page.getByRole('link', { name: /contributions/i })).toHaveCount(0);
		await expect(page.getByRole('heading', { name: /contributions/i })).toHaveCount(0);

		// When
		const res = await page.goto('/contributions');
		// Then
		expect(res?.status()).toBe(404);
		await expect(page.getByRole('heading', { name: 'This page could not be found.' })).toBeVisible();
	});

	test("Given the Experience page When it loads Then Spartan shows Oct 2024 to Feb 2025, 'My Portfolio' links to the portfolio2 repo and live site, and St. Daffa Moritz Office is listed as a Personal Project", async ({ page }) => {
		// Given
		await page.goto('/experience');
		// When
		await page.getByRole('tab', { name: 'Personal' }).click();
		// Then
		const personal = page.getByRole('tabpanel', { name: 'Personal' });
		await expect(personal.getByRole('heading', { name: 'St. Daffa Moritz Office' })).toBeVisible();
		await expect(personal.getByRole('heading', { name: 'My Portfolio' })).toBeVisible();

		// When
		await page.goto('/experience/spartan');
		// Then
		await expect(page.getByRole('article').locator('time')).toHaveText(/Oct 2024\s*–\s*Feb 2025/);

		// When
		await page.goto('/experience/portfolio');
		// Then
		const title = page.getByRole('heading', { name: 'My Portfolio', level: 1 });
		await expect(title.locator('a[href="https://github.com/daffakbar13/portfolio2"]')).toBeVisible();
		await expect(title.locator(`a[href="${SITE}"]`)).toBeVisible();
	});

	test('Given the Sociolla experience and the Skills page When they load Then they show SHIELD, the chat platform and chatbot, Google Business reviews sync and the event check-in dashboard, and the skills list has the agreed additions and none of the removed skills', async ({ page }) => {
		// Given / When
		await page.goto('/experience/sociolla');
		// Then
		const article = page.getByRole('article');
		await expect(article.getByText('Software Engineer', { exact: true })).toBeVisible();
		for (const project of [
			'SHIELD HRMS',
			'Customer chat platform and chatbot',
			'Google Business reviews sync',
			'Event check-in dashboard (GenPinkCon 2026)',
		]) {
			await expect(article.getByRole('listitem').filter({ hasText: project })).toBeVisible();
		}

		// When
		await page.goto('/skills');
		// Then
		await expect(page.getByRole('heading', { name: 'Skills', level: 1 })).toBeVisible();
		for (const skill of [
			'Redis',
			'RabbitMQ',
			'MQTT',
			'Kibana',
			'Firebase',
			'Vue 3 / Pinia',
			'Playwright',
			'Docker',
			'Kubernetes',
			'Jenkins',
			'Go',
			'AI-assisted development (Claude Code)',
		]) {
			await expect(page.getByRole('heading', { name: skill, exact: true, level: 3 }), skill).toBeVisible();
		}
		for (const removed of [/adobe\s*xd/i, /codeigniter/i, /bootstrap/i, /angular/i, /graphql/i, /netlify/i]) {
			await expect(page.getByRole('heading', { name: removed, level: 3 }), String(removed)).toHaveCount(0);
		}
	});
});
