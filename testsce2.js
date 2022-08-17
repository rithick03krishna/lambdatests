///<reference types="cypress"/>
describe("accessing the website",()=>
{
  it("open the website",()=>
  {
    cy.visit("https://www.lambdatest.com/selenium-playground")
    cy.wait(1000)
    cy.reload()
  })
  it("should click drag and drop sliders under progress bar",()=>
  {
    cy.get("#__next > div > section.my-50 > div > div > div:nth-child(1) > div:nth-child(2) > ul > li:nth-child(3) > a").click()
  })
  it("should move the value of drag and drop slider",()=>
  {
    cy.wait(1000)
    cy.get("#slider3 > div > input").as('range').invoke('val', 95).trigger('change')
   cy.get("#slider3 > div > input").trigger('dbclick')

  })
})