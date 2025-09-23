# QAAT Playwright (JavaScript)

Minimal Playwright test suite using plain JavaScript, environment-based baseURL, and optional basic auth for dev/stage via `.env`.

## Requirements
- Node.js 18+
- npm

## Install
```bash
npm ci
```

## Environment configuration
Environment is selected by `ENV` loaded from `.env` (via dotenv) or the process env.

Supported environments and base URLs:
- prod: https://www.sportsmansguide.com/
- dev: https://www.guidectdev.com/
- stage (or stg): https://www.guidectstage.com/

Optional basic auth (only used for `dev` and `stage`):
- BASIC_AUTH_USERNAME
- BASIC_AUTH_PASSWORD

Example `.env`:
```bash
ENV=dev
BASIC_AUTH_USERNAME=myuser
BASIC_AUTH_PASSWORD=mypass
```

## Scripts
- Run tests (headless):
```bash
npm test
```
- Run tests headed (show browser UI):
```bash
npm run test:headed
```
- Target a specific environment for a single run (overrides `.env`):
```bash
ENV=stage npm test
```

## Project structure
```
config/
  playwright.config.js     # env-based baseURL + optional httpCredentials
locators/
  home.locators.js         # homepage locators
pages/
  home.page.js             # HomePage POM; uses baseURL from config
tests/
  sportsmansguide.spec.js  # example test using the POM
```

## Example test intent
- Navigate to the environment-specific baseURL
- Verify homepage loads and `#site-header` is present

## GitHub Actions CI/CD
The project includes a GitHub Actions workflow (`.github/workflows/ci.yml`) that:
- Runs tests on push/PR to any branch
- Uses Playwright container with pre-installed browsers
- Publishes test results to GitHub Pages
- Uploads test artifacts (screenshots/videos)

### Required GitHub Settings
Set these in your repository settings:

**Repository Variables** (Settings > Secrets and variables > Actions > Variables):
- `ENV`: target environment (prod/dev/stage, defaults to staging)

**Repository Secrets** (Settings > Secrets and variables > Actions > Secrets):
- `BASIC_AUTH_USERNAME`: basic auth username for dev/stage (automatically available to workflow)
- `BASIC_AUTH_PASSWORD`: basic auth password for dev/stage (automatically available to workflow)

## Troubleshooting
- No tests found: ensure tests live in `tests/` and the config `testDir` is `../tests`.
- Headed run fails on CI: headed requires a desktop environment; prefer headless on CI.
- Basic auth prompt appears on dev/stage: set `BASIC_AUTH_USERNAME` and `BASIC_AUTH_PASSWORD` in `.env` or GitHub secrets.

## License
ISC
