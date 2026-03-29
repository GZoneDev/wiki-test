FROM mcr.microsoft.com/playwright:v1.55.1-jammy

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Папка для отчётов (HTML report Playwright)
RUN mkdir -p test-results playwright-report

# запуск тестов + генерация html отчёта
CMD ["npx", "playwright", "test", "--reporter=html"]