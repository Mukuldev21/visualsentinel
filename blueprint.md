# Visual Sentinel: Implementation Blueprint

## Executive Summary
The Visual Sentinel is a comprehensive automated testing project leveraging Playwright and Percy to implement Visual Regression Testing (VRT). It acts as a safety net to automatically detect visual bugs by comparing UI snapshots against approved baselines, ensuring consistency and brand integrity.

## Project Goals & Objectives
| Category | Description |
| :--- | :--- |
| **Primary Goal** | To implement a robust, automated Visual Regression Testing pipeline for web applications. |
| **Key Objective 1** | Integrate Playwright for browser automation and Percy for visual snapshot comparison. |
| **Key Objective 2** | Establish a reliable VRT baseline for key application pages (e.g., login, dashboard). |
| **Key Objective 3** | Integrate VRT into a continuous integration (CI/CD) workflow using GitHub Actions. |
| **Success Metric** | System detects intentional layout changes on the second run; CI/CD pipeline executes successfully on push/PR events. |

## Technology Stack
- **Playwright**: Browser automation, test execution, page interaction.
- **Percy.io**: Visual comparison engine, snapshot storage, diff highlighting, VRT workflow management.
- **Node.js/npm**: Project environment and dependency management.
- **GitHub Actions**: Continuous Integration (CI) for automated execution.
- **JavaScript**: Test scripting language.

## Implementation Roadmap

### Phase 1: Local Setup (The Engine)
*Status: Complete*
Initialize the project environment and install core tools.

**Steps:**
1.  **Initialize Project**
    ```bash
    mkdir visual-sentinel && cd visual-sentinel
    npm init -y
    ```
2.  **Install Dependencies**
    ```bash
    npm install -D @playwright/test @percy/cli @percy/playwright
    ```
3.  **Install Browsers**
    ```bash
    npx playwright install
    ```
4.  **Create Test File**
    Create `visual.spec.js` with baseline test code targeting `https://www.saucedemo.com/`.

### Phase 2: Connecting the Brain (Percy)
*Status: Complete*
Configure Percy as the VRT comparison service.

**Steps:**
1.  **Account Setup**
    - Create Percy project.
    - Obtain `PERCY_TOKEN`.
2.  **Baseline Run (Establish Truth)**
    Execute the first VRT run to set the baseline.
    *Command (Linux/Mac/Git Bash):*
    ```bash
    export PERCY_TOKEN="<paste_your_token_here>"
    npx percy exec -- npx playwright test
    ```

### Phase 3: Simulating a "Visual Bug"
*Status: Complete*
Verify the system's ability to catch visual defects.

**Steps:**
1.  **Modify Test**
    - Add `page.evaluate()` script to `visual.spec.js` to intentionally modify CSS (e.g., change login button `backgroundColor` and `marginLeft`).
2.  **Comparison Run**
    - Execute the test again (same token).
3.  **Verification**
    - Confirm "Changes Detected" in Percy Dashboard.
    - Review highlighted visual diffs.

### Phase 4: Automating it (CI/CD)
*Status: In Progress*
Integrate VRT into the development workflow using GitHub Actions.

**Steps:**
1.  **Create Workflow File**
    - Create `.github/workflows/main.yml`.
2.  **Configure YAML**
    - Define jobs for:
        - Dependency installation.
        - Browser setup (Playwright install).
        - Test execution wrapped in `npx percy exec`.
3.  **Secure Token**
    - Add `PERCY_TOKEN` as a secret in the GitHub repository settings.

### Phase 5: Expansion (Future Enhancements)
*Status: To Do*

| Enhancement | Description | Priority |
| :--- | :--- | :--- |
| **Cross-Browser/Viewport VRT** | Capture snapshots for different resolutions (mobile, tablet, desktop) and browsers (Chromium, Firefox, WebKit). | High |
| **Visual Scope Targeting** | Snapshot specific components/regions instead of full page for faster, focused tests. | Medium |
| **E2E Flow VRT** | Integrate snapshots into full end-to-end flows (e.g., Login -> Dashboard -> Snapshot). | Medium |
| **Documentation & Reporting** | Formal reporting structure and GitHub PR status checks. | Low |
