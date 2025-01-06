import { test, expect } from '@playwright/test';

test('Verify the presence of Login and Register buttons on the Quiz Application main page', async ({ page }) => {
  // Step 1: Navigate to the main page of the Quiz Application
  await page.goto('http://localhost:7777');  // Adjust the URL if necessary

  // Step 2: Verify that the Login button is visible
  const loginButton = page.locator('text=Login');  // Locator for Login button (adjust based on actual button text)
  await expect(loginButton).toBeVisible();  // Ensure the Login button is visible
  
  // Step 3: Verify that the Register button is visible
  const registerButton = page.locator('text=Register');  
  await expect(registerButton).toBeVisible();  
});