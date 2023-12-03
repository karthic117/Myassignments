import (chromium, test test } from "@playwright/test";
test ("loginSalesforce", async () =>
{
const browser= await chromium.launch({headless: false, channel: "chromium"}); const browserContext-await browser.newContext();
const page=await browserContext.newPage ();
const launchUrl=await page.goto("https://login.salesforce.com/"); //locators
const userName-page.locator ("#username"); const password=page.locator ("#password"); const submit-page.locator ("#Login");
await userName.fill("exam69400@gmail.com"); await password. fill ("Babu@1234");
await submit.click();
await page.waitForTimeout (10000); const title-await page.title(); console.log (title);
}