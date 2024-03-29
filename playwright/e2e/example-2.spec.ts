import { test, expect } from '@playwright/test';

test('has heading', async ({ page }) => {
  await page.goto('/');
  const heading = page.locator('h1')
  await expect(heading).toHaveText('My favourite color is black');
});
