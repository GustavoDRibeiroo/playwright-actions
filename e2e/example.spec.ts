import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('basic login', async ({ page }) => {

  await page.goto('https://hml.furion.ai/auth/login');
  await page.getByRole('textbox', { name: 'Seu e-mail' }).click();
  await page.getByRole('textbox', { name: 'Seu e-mail' }).fill('automatizado@scoder.com.br');
  await page.getByRole('textbox', { name: 'Seu e-mail' }).press('Tab');
  await page.getByRole('textbox', { name: 'Sua senha' }).click();
  await page.getByRole('textbox', { name: 'Sua senha' }).fill('DevScoder!1');
  await page.getByRole('button', { name: 'Entrar' }).click();
  await expect(page.locator('div').filter({ hasText: /^Todos$/ }).nth(2)).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^Fluxo Guiado$/ }).nth(2)).toBeVisible();

});
