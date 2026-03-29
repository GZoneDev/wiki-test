import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { AppRoutes } from "../../constant/endpoints.constant";
import { ElementActions } from "../../lib/core/helpers/interaction.helper";
import {
  getLanguageExample,
  getRandomLanguage,
} from "../../lib/core/helpers/language.helper";

export class PreferencesPage extends BasePage {
  private readonly languageSelect: Locator;
  private readonly savePreferencesBtn: Locator;
  private readonly languageTitle: Locator;

  private readonly languageOption: (name: string) => Locator;

  constructor(page: Page, endpoint: string = AppRoutes.preferencesPage) {
    super(page, endpoint);

    this.languageSelect = page.locator("#ooui-2");
    this.savePreferencesBtn = page.locator(
      "button span.oo-ui-labelElement-label",
    );
    this.languageTitle = page.locator("#ooui-3");

    this.languageOption = (name: string) =>
      page.locator(".oo-ui-labelElement-label").filter({ hasText: name });
  }

  public async changeToRandomLanguage(): Promise<string> {
    const language = await this.languageSelect.innerText();
    await ElementActions.click(this.languageSelect);

    const newLanguage = getRandomLanguage(language);

    const option = this.languageOption(newLanguage.name);

    await ElementActions.click(option);

    return newLanguage.name;
  }

  public async clickOnSavePreferencesBtn() {
    await ElementActions.click(this.savePreferencesBtn);
  }

  public async verifyLanguageChanged(languageName: string) {
    const expectedLanguage = getLanguageExample(languageName);

    await expect(this.languageTitle).toHaveText(new RegExp(expectedLanguage));
  }
}
