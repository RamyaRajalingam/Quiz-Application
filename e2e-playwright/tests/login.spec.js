import { test, expect } from '@playwright/test';

test('Click on the Register button and verify the login page is displayed', async ({ page }) => {
  // Step 1: Navigate to the main page of the Quiz Application
  await page.goto('http://localhost:7777');  // Adjust the URL if necessary

  // Step 2: Click on the Register button
  const registerButton = page.locator('text=Register');  // Locator for Register button (adjust based on actual button text)
  await expect(registerButton).toBeVisible();  // Ensure Register button is visible
  await registerButton.click();  // Click the Register button
  console.log("Current URL after clicking Register:", await page.url());
  await expect(page).toHaveURL('http://localhost:7777/auth/register');

  // Fill in the registration form
  await page.fill('input[name="email"]', 'testuser@example.com');
  await page.fill('input[name="password"]', 'password123');
  await page.fill('input[name="verification"]', 'password123');
  
  // Submit the form
  const submitButton = page.locator('button[type="submit"]:has-text("Register")');  // Locator for the register button (adjust as needed)
  await submitButton.click(); 

  console.log("Current URL after clicking Submit:", await page.url());
  await page.goto('http://localhost:7777/auth/login');
  await page.fill('input[name="email"]', 'testuser@example.com');
  await page.fill('input[name="password"]', 'password123');
  const loginButton = page.locator('button[type="submit"]:has-text("Login")');  // Locator for the register button (adjust as needed)
  await loginButton.click(); 
  
});
