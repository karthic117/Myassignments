
import (chromium, test } from "@playwright/test";
test("open leaftaps", async() =>
{
const browser= await chromium.launch({headless: false, channel: "chromium"})
const browserContext =await browser.newContext();
const page await browserContext.newPage();
await page.goto("http://leaftaps.com/opentaps/control/main"); //locators
const usrName=page.locator ("//input [@name='USERNAME"]") .nth (0); const password=page.locator ("#password");
const submit=page.locator(".decorative Submit");
const crmLink-page.locator ("//* [contains(text(), 'CRM/SFA')]");
const leads Link-page. locator ("//a[ contains (text (), 'Leads')]") .nth (0);
const createLeads=page.locator("//* [ contains (text(), 'Create Lead')]").nth (0); const companyName=page. locator ("[name=companyName]") .nth (1);
const firstName=page.locator ("[name=firstNameLocal]");
const lastName=page.locator ("[name=lastNameLocal]");
const createLeadButton-page.locator ("[name=submitButton]");
await usrName.fill("Demosalesmanager");
await password. fill ("crmsfa");
await submit.click();
await crmLink.click();
await leadsLink.click();
await createLeads.click();
await companyName.fill("private"); await firstName.fill("karthic"); await lastName.fill("kumar"); await createLeadButton.click(); await page.waitForTimeout (10000);
