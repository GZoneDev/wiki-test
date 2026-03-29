import { Locator, expect } from "@playwright/test";

export class ElementActions {
  static async click(locator: Locator) {
    await locator.waitFor({ state: "visible" });
    await locator.hover();
    await locator.click();
  }

  static async clearInput(field: Locator) {
    await field.waitFor({ state: "visible" });
    await field.clear();
  }

  static async fillInput(
    field: Locator,
    value: string,
    clearFirst: boolean = true,
  ) {
    await field.waitFor({ state: "visible" });
    if (clearFirst) {
      await this.clearInput(field);
    }
    await field.fill(value);
  }

  static async verifyValue(locator: Locator, expectedValue: string) {
    await expect(locator).toHaveValue(expectedValue);
  }

  static async expectAll(locators: Locator[]) {
    for (const locator of locators) {
      await expect(locator).toBeVisible();
    }
  }
}
