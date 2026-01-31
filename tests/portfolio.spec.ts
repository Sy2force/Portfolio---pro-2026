import { test, expect } from '@playwright/test';

test.describe('Portfolio E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('homepage loads correctly', async ({ page }) => {
    await expect(page).toHaveTitle(/Portfolio/i);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('navigation works', async ({ page }) => {
    // Navigate to Projects
    // Allow for either "Projets" (FR) or "Projects" (EN)
    await page.getByRole('link', { name: /projets|projects/i }).first().click();
    await expect(page).toHaveURL(/.*projects/);
    
    // Navigate to About
    await page.getByRole('link', { name: /à propos|about/i }).first().click();
    await expect(page).toHaveURL(/.*about/); 

    // Navigate to Contact
    await page.getByRole('link', { name: /contact/i }).first().click();
    await expect(page).toHaveURL(/.*contact/);
  });

  test('language switching works', async ({ page }) => {
    // Check initial content
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    
    // Switch to English if currently in French, or French if in English
    // We can detect current language by checking for a specific element
    const isFrench = await page.getByRole('link', { name: /projets/i }).first().isVisible().catch(() => false);
    
    const langButton = page.getByLabel('Change language');
    await langButton.click();
    
    if (isFrench) {
      // Switch to English
      await page.getByRole('button', { name: /English/i }).click();
      await expect(page.getByRole('link', { name: /^Projects$/i }).first()).toBeVisible();
    } else {
      // Switch to French
      await page.getByRole('button', { name: /Français/i }).click();
      await expect(page.getByRole('link', { name: /^Projets$/i }).first()).toBeVisible();
    }
  });

  test('theme toggle works', async ({ page }) => {
    const html = page.locator('html');
    
    // Click theme toggle
    await page.getByLabel('Change theme').click();
    
    // Click 'Dark' or 'Sombre' option
    // Since we might be in FR or EN, we look for the moon icon or specific text if easier.
    // The menu items are buttons. Let's assume 'Sombre' or 'Dark' text is present.
    // Based on translations: 'Sombre' (fr) or 'Dark' (en).
    // If we just switched to EN above, it would be 'Dark'. But tests run in parallel/independent contexts usually?
    // Playwright config says fullyParallel: true, so each test is fresh context. Default is FR.
    await page.getByRole('button', { name: /Sombre|Dark/i }).click();
    
    // Verify dark mode class
    await expect(html).toHaveClass(/dark/);
  });

  test('404 page works', async ({ page }) => {
    await page.goto('/non-existent-page');
    await expect(page.getByText(/404/i)).toBeVisible();
    // Use first() to avoid ambiguity with "Back to top" button
    await expect(page.getByRole('button', { name: /retour|back/i }).first()).toBeVisible();
  });

  test('contact form validation', async ({ page }) => {
    await page.goto('/contact');
    
    // Wait for the button to be visible to avoid timeouts
    const submitBtn = page.getByRole('button', { name: /envoyer|send/i });
    await expect(submitBtn).toBeVisible();
    
    // Try to submit empty form
    await submitBtn.click();
    
    // Check for validation errors
    // The error is rendered in a <p> tag with text-red-500
    // We expect "Le nom doit contenir..." or similar
    await expect(page.getByText(/Le nom doit contenir/i)).toBeVisible();
  });
});
