import expect, test } from "@playwright/test";
test("Create individual tests", async ((page)) =>
await page. goto ("https://login.salesforce.com/"); 
// const userName=page.locator ("#username"); 
const userName=page.getByLabel ("Username");
const password=page.locator ("#password"); 
const submit=page.locator ("#Login"); 
await userName.fill("exam69400@gmail.com");
 await password. fill ("Babu@1234");
await submit.click();
//page.waitForLoadState ('load');
const toggleMenu= page. locator (" [aria-describedby='tt-for-450:83; a']"); 
await toggleMenu.click();
//page.waitForLoadState('load');
const viewAll= page.getByRole ("button", {name: "View All"});
 //await page.waitForLoadState('load');
// await expect (viewAll).toBeVisible();
await viewAll.click();
const click Individual-page.getByText ("Individuals"); 
await click Individual.click();
const individualTitle= await page.title(); 
console.log (individualTitle);



const newIndividual-page.getByTitle ("New").nth (1);
await newIndividual.click();
I
//const individualLastName=page.locator('[placeHolder="Last Name"]'); 
const individualLastName=page.getByPlaceholder ("Last Name");
 await individual LastName.fill ("karthic TJ");
const individualSave-page.getByTitle ("Save") .nth (1)
await individualSave.click();
const verifyIndName= page. locator (" [class='slds-align-middle slds-hyphenate']")
 const printName=await verifyIndName.innerText();
console.log (printName);