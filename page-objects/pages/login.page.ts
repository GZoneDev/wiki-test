import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { ElementActions } from "../../lib/core/helpers/interaction.helper";
import { AppRoutes } from "../../constant/endpoints.constant";
import { HeaderComponent } from "../components/header.component";

export class LoginPage extends BasePage {
  readonly loginInput: Locator;
  readonly passwordInput: Locator;
  readonly loginBtn: Locator;

  readonly header: HeaderComponent;

  constructor(page: Page, endpoint: string = AppRoutes.loginPage) {
    super(page, endpoint);

    this.loginInput = page.locator("#wpName1");
    this.passwordInput = page.locator("#wpPassword1");
    this.loginBtn = page.locator("#wpLoginAttempt");

    this.header = new HeaderComponent(page);
  }

  async login(email: string, password: string) {
    await ElementActions.fillInput(this.loginInput, email);
    await ElementActions.fillInput(this.passwordInput, password);
    await ElementActions.click(this.loginBtn);

    await this.header.verifyUserName(email);
  }
}
