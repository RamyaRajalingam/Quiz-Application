import { test, expect } from '@playwright/test';

test.describe('Verify Page Title', () => {
    test('should display the correct title on the page', async ({ page }) => {
      // Navigate to the Quiz Application page
      await page.goto('http://localhost:7777'); // Replace with the correct URL of your application
  
      // Locate the <h1> element
      const titleLocator = page.locator('h1');
  
      // Verify the text content of the <h1> element
      await expect(titleLocator).toHaveText('Welcome to the Quiz Application');
    });
  });