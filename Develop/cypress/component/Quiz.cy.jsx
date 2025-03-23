import Quiz from "../../client/src/components/Quiz"
describe ("quiz component", ()=>{
    beforeEach(() => {
        cy.intercept({
            method: 'GET',
            url: '/api/questions/random'
          },
          {
            fixture: 'questions.json',
            statusCode: 200
          }
          ).as('getRandomQuestion')
        });
        it("should start a quiz",()=>{
            cy.mount(<Quiz/>)
            cy.get("button").contains("Start Quiz")
        })
        it("should start a quiz when the button is clicked",()=>{
            cy.mount(<Quiz/>)
            cy.get("button").contains("Start Quiz") .click()
            cy.get("h2").contains("pick an answer")
        })
        it("should pick and answer",()=>{
            cy.mount(<Quiz/>)
            cy.get("button").contains("Start Quiz") .click()
            cy.get("h2").contains("pick an answer")
            cy.get("button").contains("1") .click()
            cy.get("h2").contains("Quiz Completed")
        })
} )