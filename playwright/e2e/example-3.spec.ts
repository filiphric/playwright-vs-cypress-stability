import { test } from '@playwright/test';

test('has heading', async ({ page }) => {
  await page.goto('/');
  await page.locator('button').click()
});
