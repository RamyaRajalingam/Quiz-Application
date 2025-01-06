
import { test, expect } from '@playwright/test';

test('admin can log in and delete a topic', async ({ page }) => {
    // Step 1: Log in as admin
    await page.goto('http://localhost:7777/auth/login');
    await page.fill('input[name="email"]', 'admin@admin.com');
    await page.fill('input[name="password"]', '123456');
    const loginButton = page.locator('button:has-text("Login")');
    await loginButton.click();
    
    // Step 2: Wait for the topics page to load
    await page.waitForURL('http://localhost:7777/topics');
    
    // Step 3: Identify and click the "Delete" button of the first topic
    const deleteButton = page.locator('button:has-text("Delete")').first(); 
    await expect(deleteButton).toBeVisible();
    await deleteButton.click();
    
    // Step 4: Verify that the topic has been deleted (you can check the absence of the topic)
    const deletedTopic = page.locator('text=My New Topic');  
    await expect(deletedTopic).not.toBeVisible();  
  });