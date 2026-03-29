import { test as base } from "@playwright/test";
import { LoginPage } from "../../page-objects/pages/login.page";
import { PreferencesPage } from "../../page-objects/pages/preferences.page";
import { storageStatePath } from "./utils/paths";

type Fixtures = {
  loginPage: LoginPage;
  preferencesPage: PreferencesPage;
};

export const test = base.extend<Fixtures>({
  storageState: storageStatePath,
  loginPage: async ({ page }, use) => {
    await use(await new LoginPage(page));
  },
  preferencesPage: async ({ page }, use) => {
    await use(await new PreferencesPage(page));
  },
});

export { expect } from "@playwright/test";
