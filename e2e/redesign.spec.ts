import { expect, test } from '@playwright/test';

test.describe('Midnight Lime redesign', () => {
	test('Given a desktop window When I use the floating nav Then each link opens its page and is marked current', async ({ page }) => {
		// Given a desktop window on Home
		await page.setViewportSize({ width: 1440, height: 900 });
		await page.goto('/');
		const nav = page.getByRole('navigation', { name: 'Main' });
		await expect(nav).toBeVisible();

		for (const [name, path] of [
			['Skills', '/skills'],
			['Experience', '/experience'],
			['Career', '/career'],
			['Contact', '/contact'],
		]) {
			// When I click a nav link
			await nav.getByRole('link', { name, exact: true }).click();
			// Then the page opens and the link is marked current
			await expect(page).toHaveURL(new RegExp(`${path}$`));
			await expect(nav.getByRole('link', { name, exact: true })).toHaveAttribute('aria-current', 'page');
		}
	});

	test('Given a 375px phone When I open the menu and pick a page Then the menu closes and the page opens', async ({ page }) => {
		// Given a phone
		await page.setViewportSize({ width: 375, height: 812 });
		await page.goto('/');
		await expect(page.getByRole('navigation', { name: 'Main' })).toBeHidden();

		// When I open the menu
		await page.getByRole('button', { name: 'Open menu' }).click();
		const menu = page.getByRole('dialog', { name: 'Menu' });
		await expect(menu).toBeVisible();

		// And Escape closes it
		await page.keyboard.press('Escape');
		await expect(menu).toBeHidden();

		// When I pick Skills from the menu
		await page.getByRole('button', { name: 'Open menu' }).click();
		await menu.getByRole('link', { name: 'Skills', exact: true }).click();
		// Then the menu closes and Skills opens
		await expect(page).toHaveURL(/\/skills$/);
		await expect(menu).toBeHidden();
		await expect(page.getByRole('heading', { level: 1, name: 'Toolbox.' })).toBeVisible();
	});

	test('Given the Experience page When I spin the carousel, filter and switch to Grid Then the counter and cards follow', async ({ page }) => {
		// Given the Experience page
		await page.setViewportSize({ width: 1440, height: 900 });
		await page.goto('/experience');
		const counter = page.getByTestId('carousel-counter');
		await expect(counter).toHaveText(/^01 \/ \d{2}$/);
		const total = (await counter.textContent())!.split('/')[1].trim();

		// When I press Next
		await page.getByRole('button', { name: 'Next project' }).click();
		// Then the counter moves on
		await expect(counter).toHaveText(`02 / ${total}`);
		// And Previous moves it back
		await page.getByRole('button', { name: 'Previous project' }).click();
		await expect(counter).toHaveText(`01 / ${total}`);

		// When I filter to Personal projects
		const filters = page.getByRole('group', { name: 'Filter projects' });
		await filters.getByRole('button', { name: 'Personal' }).click();
		await expect(filters.getByRole('button', { name: 'Personal' })).toHaveAttribute('aria-pressed', 'true');
		// Then the carousel holds fewer projects
		await expect(counter).toHaveText(/^01 \/ \d{2}$/);
		const personal = Number((await counter.textContent())!.split('/')[1]);
		expect(personal).toBeLessThan(Number(total));

		// When I switch to Grid
		await page.getByRole('group', { name: 'View' }).getByRole('button', { name: 'Grid' }).click();
		// Then the projects show as a grid of links, one per project
		await expect(counter).toBeHidden();
		await expect(page.locator('main a[href^="/experience/"]')).toHaveCount(personal);
	});

	test('Given the Skills page When I pick a category tab Then fewer skill cards show', async ({ page }) => {
		// Given the Skills page
		await page.goto('/skills');
		const cards = page.locator('main li .flip');
		const all = await cards.count();
		expect(all).toBeGreaterThan(0);

		// When I pick the Frontend tab
		const tabs = page.getByRole('group', { name: 'Filter skills' });
		await tabs.getByRole('button', { name: 'Frontend' }).click();

		// Then fewer cards show
		await expect(tabs.getByRole('button', { name: 'Frontend' })).toHaveAttribute('aria-pressed', 'true');
		await expect.poll(() => cards.count()).toBeLessThan(all);
		await expect.poll(() => cards.count()).toBeGreaterThan(0);
	});

	test.describe('with reduced motion', () => {
		test.use({ reducedMotion: 'reduce' });

		test('Given reduced motion When I open each page Then the split-letter H1 keeps a readable name and its letters are visible', async ({ page }) => {
			for (const [path, name] of [
				['/skills', 'Toolbox.'],
				['/experience', 'Selected work.'],
				['/contact', "Let's connect."],
				['/contributions', 'Contributions.'],
			]) {
				// When I open the page
				await page.goto(path);
				// Then the H1 has a readable accessible name
				const h1 = page.getByRole('heading', { level: 1, name, exact: true });
				await expect(h1).toBeVisible();
				// And the letters are not stuck mid-animation
				const opacity = await h1.locator('.char').first().evaluate((el) => getComputedStyle(el).opacity);
				expect(opacity).toBe('1');
			}
		});
	});
});
