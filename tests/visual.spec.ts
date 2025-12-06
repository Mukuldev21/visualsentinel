// visual.spec.js
import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';

test('Visual Regression Check', async ({ page }) => {
  // 1. Go to the target website
  await page.goto('https://www.saucedemo.com/');

  // 2. Perform actions (optional - e.g., login)
  // --- INJECTING A BUG ---
  // We use JavaScript to change the login button color to bright pink
  // and mess up the alignment.
  await page.evaluate(() => {
    const btn = document.querySelector('#login-button') as HTMLElement | null;
    if (btn) {
      btn.style.backgroundColor = 'hotpink';
      btn.style.marginLeft = '50px'; // Shift it weirdly
    }
  });
  // -----------------------

  // 3. Take the AI Snapshot
  // This sends the DOM and assets to Percy, not just a static image
  await percySnapshot(page, 'Login Page - Baseline');
});