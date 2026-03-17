import { test, expect } from '@playwright/test';

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
