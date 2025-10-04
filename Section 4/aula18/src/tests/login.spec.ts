import { test, expect } from "@playwright/test";

test("login com sucesso", async ({ page }) => {
  await page.goto("http://localhost:5173");
  await page.fill("input[name='email']", "eder@example.com");
  await page.fill("input[name='password']", "123456");
  await page.click("button[type='submit']");
  await expect(page.getByText("Bem-vindo, eder@example.com!")).toBeVisible();
});

test("login com credenciais inválidas", async ({ page }) => {
  await page.goto("http://localhost:5173");
  await page.fill("input[name='email']", "invalid@example.com");
  await page.fill("input[name='password']", "1234567890");
  await page.click("button[type='submit']");
  await expect(page.getByText("Credenciais inválidas!")).toBeVisible();
});

test("login com campos vazios", async ({ page }) => {
  await page.goto("http://localhost:5173");
  await page.click("button[type='submit']");
  await expect(page.getByText("Credenciais inválidas!")).toBeVisible();
});
