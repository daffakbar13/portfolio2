import { test, expect } from '@playwright/test';

test.describe('PF-2 Hero: add a Resume button next to Contact', () => {
	test('Given the home page When it loads Then a Resume button shows next to the GitHub and Contact buttons', async ({ page }) => {
		// Given the home page
		await page.goto('/');
		const main = page.getByRole('main');
		const github = main.getByRole('link', { name: /GitHub profile/ });
		const contact = main.getByRole('link', { name: /^Contact / });
		const resume = main.getByRole('link', { name: /resume/i });

		// When it loads
		await expect(github).toBeVisible();
		await expect(contact).toBeVisible();

		// Then a Resume button shows next to them, on the same row, after Contact
		await expect(resume).toBeVisible();
		await expect(resume).toHaveText(/Resume/);
		await expect
			.poll(async () => {
				const [c, r] = await Promise.all([contact.boundingBox(), resume.boundingBox()]);
				return c && r && Math.abs(c.y - r.y) < 8 && r.x > c.x;
			})
			.toBe(true);
	});

	test('Given the home page When I click Resume Then the Resume page opens', async ({ page }) => {
		// Given the home page
		await page.goto('/');

		const resume = page.getByRole('main').getByRole('link', { name: /resume/i });
		await expect(resume).toHaveAttribute('href', '/resume');

		// When I click Resume
		// Then the Resume page opens (/resume then redirects to NEXT_PUBLIC_RESUME_LINK, so catch the route as it opens)
		await Promise.all([page.waitForURL(/\/resume$/, { waitUntil: 'commit' }), resume.click()]);
	});
});
