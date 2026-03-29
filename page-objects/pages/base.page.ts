import { Page, expect, Locator } from "@playwright/test";
import { BaseEntity } from "../base.entity";
import { testConfig } from "../../configs/config";

export abstract class BasePage extends BaseEntity {
  protected readonly endpoint: string;

  constructor(page: Page, endpoint: string) {
    super(page);
    this.endpoint = endpoint;
  }

  async open(path: string = this.endpoint) {
    console.log(`open ${`${testConfig.baseUrl}${path}`}`);
    await this.page.goto(`${testConfig.baseUrl}${path}`, {
      waitUntil: "networkidle",
    });
  }

  async shouldHaveUrl(path: string) {
    await expect(this.page).toHaveURL(`${testConfig.baseUrl}${path}`);
  }

  async waitNetworkKidLoadState() {
    await this.page.waitForLoadState("networkidle");
  }

  async waitForDomContentLoad() {
    await this.page.waitForLoadState("domcontentloaded");
  }

  async waitForLoadState() {
    await this.page.waitForLoadState(`load`);
  }

  async reloadPage() {
    await this.page.reload();
    await this.waitForDomContentLoad();
  }
}
