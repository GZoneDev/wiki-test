import { Tag } from "../../constant/test-tags.constant";
import { test } from "../../lib/core/base-test";

test.describe(`Main page`, () => {
  test(
    `Verify change language on preferences page`,
    {
      tag: [Tag.User],
    },
    async ({ preferencesPage }) => {
      await preferencesPage.open();
      const newLanguage = await preferencesPage.changeToRandomLanguage();
      await preferencesPage.clickOnSavePreferencesBtn();
      await preferencesPage.verifyLanguageChanged(newLanguage);
    },
  );
});
