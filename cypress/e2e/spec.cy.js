describe("User agent updates from cy.visit", () => {
  beforeEach("sets user agent in visit", () => {
    cy.visit("https://www.whatismybrowser.com/detect/what-is-my-user-agent", {
      headers: { "user-agent": "Before each" },
    });
    cy.log(`UserAgent: ${navigator.userAgent}`);
  });
  it("sets user agent in visit", () => {
    cy.visit("https://www.whatismybrowser.com/detect/what-is-my-user-agent", {
      headers: { "user-agent": "SET USER AGENT IN THE TEST" },
    });
    cy.log(`UserAgent: ${navigator.userAgent}`);
  });
  it("changes user agent in visit", () => {
    cy.visit("https://www.whatismybrowser.com/detect/what-is-my-user-agent", {
    });
    cy.log(`UserAgent: ${navigator.userAgent}`);
  });
  it("user-agent example", () => {
    cy.visit("https://www.whatismybrowser.com/detect/what-is-my-user-agent", {
    });
    cy.log(`UserAgent: ${navigator.userAgent}`);
  });
});
