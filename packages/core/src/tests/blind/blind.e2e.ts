/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect, test } from '@chromatic-com/playwright';

test.describe('blind', () => {
  test('basic', async ({ page }) => {
    await page.goto('blind/basic');
    await page.evaluate(() => {
      return window.customElements.whenDefined('ix-blind');
    });
    await page.waitForSelector('ix-blind');
    await page.waitForTimeout(1000);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  // test('collapsed', async ({ page }) => {
  //   await page.goto('blind/basic');
  //   await page
  //     .locator('.blind-header')
  //     .evaluateAll((list) => list.forEach((e) => (e as HTMLElement).click()));
  //   await page.waitForSelector('.blind-header.closed');
  //   await page.waitForTimeout(800);
  //   await page.waitForSelector('ix-blind');
  //   expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  // });

  // test('header-actions', async ({ page }) => {
  //   await page.goto('blind/header-actions');
  //   await page.locator('#context-menu').click();
  //   await page.waitForTimeout(800);
  //   await page.waitForSelector('ix-dropdown.show');
  //   expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  // });

  // test('custom-header', async ({ page }) => {
  //   await page.goto('blind/custom-header');
  //   expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  // });

  // test('should no hover on slot', async ({ mount, page }) => {
  //   await mount(`
  //   <ix-blind label="Example label" style="width: 25rem">
  //       <ix-button
  //         ghost
  //         data-testid="slot"
  //         slot="header-actions"
  //         icon="context-menu"
  //       ></ix-button>
  //     Some content
  //   </ix-blind>
  //   `);
  //   const blindElement = page.locator('ix-blind');
  //   await expect(blindElement).toHaveClass(/hydrated/);

  //   const slotElement = page.getByTestId('slot');
  //   await slotElement.hover();

  //   await expect(blindElement).toHaveScreenshot();
  // });
});
