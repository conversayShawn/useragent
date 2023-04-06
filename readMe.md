An example of having the config value `userAgent: 'In the config'` and setting the `user-agent: 'In the test'` on a cy.visit() at the same time. 

Essentially doing it through the config sets the User-Agent header for all HTTP requests including proxied requests, which is why that's visible in the network tab. 

Setting it on a per basis `cy.visit()` overrides the config but it won't be reflected in the network tab or by logging it, shown in this screenshot.

![Headers image](../../../../Downloads/headers.png)

These are the areas in the docs that were confusing:
- https://docs.cypress.io/faq/questions/using-cypress-faq#Can-I-override-or-change-the-default-user-agent-the-browser-uses
- https://docs.cypress.io/api/commands/visit#User-agent