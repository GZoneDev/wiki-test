Template Project — UI Automation with Playwright
Overview

This project is a UI automation framework built with Playwright and TypeScript. It allows you to test web applications for multiple environments (development, staging, production). The framework uses:

- Page Object Model (POM) for page and component abstraction
- Role-based testing with test tags
- Environment configuration through .env files or command-line variables

Table of Contents
1 Setup
2 Environment Configuration
3 Running Tests
4 Running tests in docker
5 Best Practices

Setup

Install dependencies:

- npm install

Install browsers for Playwright:

- npx playwright install

Environment Configuration
The project uses environment variables to store credentials, user roles, and environment selection. You can configure them via .env files:

Example .env:
ENV=prod
LOGIN=your_login
PASSWORD=your_password

You can also pass variables directly in the command line:
ENV=prod USER_ROLE=USER EMAIL=standard_user PASSWORD=secret_sauce npx playwright test --grep @USER

Running Tests
All tests are tagged by user role and filtered using --grep. Examples:

# Run all USER tests in prod

npm run test:user

# Run all tests

npx playwright test

Scripts in package.json:
"scripts": {
"test:ui": "npx playwright test --ui",
"test:user": "npx playwright test --grep @USER"
},

# Running tests in Docker

Build and run tests
Make sure you have Docker installed, then run:
docker-compose up --build

This command will:
build the Docker image
install dependencies
run Playwright tests inside the container
create the report in the folder playwright-report

Best Practices

- Use Page Object Model for all pages and components
- Tag tests by user role to filter them easily
- Store all sensitive data in .env or CI environment variables
- Use ElementActions helper for clicks, fills, and assertions
- Use toHaveScreenshot for stable visual regression testing

Test Case Verify change language on preferences page

| Step | Action                                                          | Data                                                                         | Expected Result                                                 |
| ---- | --------------------------------------------------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------- |
| 1    | Open Preferences page                                           | N/A                                                                          | Preferences page is displayed                                   |
| 2    | Select a different random language from the "Language" dropdown | Different language from the list (e.g., "українська", "français", "Deutsch") | Selected language appears in the dropdown                       |
| 3    | Click "Save" button                                             | N/A                                                                          | Preferences are saved and page reloads                          |
| 4    | Verify interface language has changed                           | N/A                                                                          | Interface elements are displayed in the newly selected language |
