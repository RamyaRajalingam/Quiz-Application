
import { test, expect } from '@playwright/test';

test('admin can log in and see topics page', async ({ page }) => {
    // Step 1: Navigate to the login page
    await page.goto('http://localhost:7777/auth/login');
    
    // Step 2: Ensure the login form is visible
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="password"]')).toBeVisible();
    
    // Step 3: Fill in the login form with admin credentials
    await page.fill('input[name="email"]', 'admin@admin.com');
    await page.fill('input[name="password"]', '123456');
  
    // Step 4: Wait for the "Login" button and click it
    const loginButton = page.locator('button:has-text("Login")');
    await expect(loginButton).toBeVisible();  
    await loginButton.click();
  
    // Step 5: Wait for the topics page to load (this is where we expect the page to be)
    await page.waitForURL('http://localhost:7777/topics', { timeout: 10000 });
  
    // Step 6: Verify that the topics page has loaded by checking for a specific element
    const topicsPage = page.locator('h2:has-text("Add a New Topic")');
    await expect(topicsPage).toBeVisible();
  
    // Optional: Log the page content for debugging
    console.log(await page.content());  
  });