///<reference types="cypress"/>
describe("accessing the website",()=>
{
  it("open the website",()=>
  {
    cy.visit("https://www.lambdatest.com/selenium-playground")
  })
  it("open the website in samsung galaxy 9",()=>
  {
    cy.viewport('samsung-note9');
    cy.wait(5000)
  })
  it("selecting inputformsubmit from inputform sections",()=>
  {
    cy.get("#__next > div > section.my-50 > div > div > div:nth-child(1) > div:nth-child(1) > ul > li:nth-child(5) > a").click();
    cy.wait(2000)
  })
  it("checking accessbility of the site",()=>
  {

  })
  it("filling all the fields in the form",()=>
  {
    cy.get("#name").type("rkg")
    cy.get("#inputEmail4").type("rkg@gmail.com")
    cy.wait(2000)
    cy.get("#inputPassword4").type("1234567890")
    cy.get("#company").type("cognizant")
    cy.get("#websitename").type("cts.co.in")
    cy.wait(2000)
   
    cy.get("#inputCity").type("coimbatore")
    cy.wait(2000)
    cy.get("#inputAddress1").type("qwert,4567")
    cy.get("#inputAddress2").type("coimbatore-25")
    cy.wait(2000)
    cy.get("#inputState").type("tamilnadu")
    cy.get("#inputZip").type("641025")
    cy.wait(2000)
  })
  it("check the performance metrics",()=>
  {

  })
  it("it shuld submit the form",()=>
  {
   cy.get("#seleniumform > div.text-right.mt-20 > button").click()
   cy.wait(2000)
   cy.get("p").should('include.text','Thanks for contacting us, we will get back to you shortly.')
  })
})