import { test, expect } from '@playwright/test';

const pages = [
	'/',
	'/skills',
	'/experience',
	'/experience/sociolla',
	'/career',
	'/career/sociolla',
	'/contributions',
	'/resume',
	'/contact',
];

test.describe('PF-3 Stack: upgrade to Next.js 16 and React 19', () => {
	test('Given the dev server When I open Home, Skills, Experience, an experience detail, Career, a career detail, Contributions, Resume and Contact Then each page renders with no console errors', async ({ page }) => {
		const errors: string[] = [];
		page.on('console', (msg) => {
			if (msg.type() === 'error') errors.push(`${page.url()}: ${msg.text()}`);
		});
		page.on('pageerror', (err) => errors.push(`${page.url()}: ${err.message}`));

		for (const path of pages) {
			// When I open the page
			const response = await page.goto(path);
			// Then it renders
			expect(response?.status(), path).toBeLessThan(400);
			await expect(page.getByRole('main')).toBeVisible();
			await expect(page.getByRole('link', { name: 'daffa.dev', exact: true })).toBeVisible();
		}

		// Then no console errors were logged
		expect(errors).toEqual([]);
	});

	test('Given the site When I toggle the theme Then it switches between dark and light and persists after reload', async ({ page }) => {
		// Given the site, dark by default
		await page.goto('/');
		const html = page.locator('html');
		await expect(html).toHaveClass(/\bdark\b/);

		for (const theme of ['light', 'dark']) {
			// When I toggle the theme
			await page.getByRole('button', { name: 'Toggle theme' }).click();
			// Then the theme changes
			await expect(html).toHaveClass(new RegExp(`\\b${theme}\\b`));
			// And it persists after reload
			await page.reload();
			await expect(html).toHaveClass(new RegExp(`\\b${theme}\\b`));
		}
	});

	test('Given the Contact page When I submit the form with an invalid email Then a validation message shows and nothing is sent', async ({ page }) => {
		const sent: string[] = [];
		page.on('request', (req) => {
			if (req.url().includes('/api/contact')) sent.push(req.method());
		});

		// Given the Contact page
		await page.goto('/contact');
		// When I submit the form with an invalid email
		await page.getByRole('textbox', { name: 'Name' }).fill('QA Tester');
		await page.getByRole('textbox', { name: 'Email' }).fill('not-an-email');
		await page.getByRole('textbox', { name: 'Message' }).fill('Hello, this is an e2e check.');
		await page.getByRole('button', { name: 'Send message' }).click();

		// Then a validation message shows
		await expect(page.getByText('Please enter a valid email.')).toBeVisible();
		await expect(page.getByRole('textbox', { name: 'Email' })).toHaveAttribute('aria-invalid', 'true');
		// And nothing is sent
		expect(sent).toEqual([]);
	});
});
