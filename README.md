# The Visual Sentinel


![Percy Visual Testing](https://img.shields.io/badge/Visual%20Testing-Percy-blueviolet)
![Playwright](https://img.shields.io/badge/Test%20Automation-Playwright-green)
![License](https://img.shields.io/badge/license-MIT-yellow)

Visual Sentinel is an automated **Visual Regression Testing (VRT)** system built with **Playwright** and **Percy**. It provides a safety net for modern web applications by ensuring that visual integrity is preserved across deployments.  

Traditional functional tests often pass even when the UI is visually broken — misaligned elements, broken CSS, or layout shifts can slip through unnoticed. Visual Sentinel solves this by comparing UI snapshots against a trusted baseline, automatically detecting differences and highlighting them before they reach production.

---

## 📖 Project Explanation

Visual Sentinel ensures **continuous visual assurance** for enterprise applications:

- **Baseline Creation**: The first run establishes a "visual truth" for key pages such as login and dashboard.  
- **Snapshot Comparison**: On subsequent runs, Percy compares new snapshots against the baseline.  
- **Automated Alerts**: Any differences are flagged, with highlighted diffs available in the Percy dashboard.  
- **CI/CD Integration**: GitHub Actions ensures these checks run automatically on every commit or pull request.  

This approach guarantees **UI consistency, brand integrity, and user experience** across environments.

---

## 🎯 Why Percy Matters

Percy is the **visual intelligence engine** behind Visual Sentinel. Its role is critical:

- **Snapshot Storage & Management**: Securely stores baseline snapshots and organizes them across builds.  
- **Visual Diff Highlighting**: Highlights differences directly in the dashboard for quick resolution.  
- **Workflow Integration**: Works seamlessly with Playwright and GitHub Actions.  
- **Enterprise Scalability**: Supports multiple projects, environments, and teams.  

Percy ensures that enterprises can scale visual testing without sacrificing speed or accuracy.

---


---

## 🛠️ Tools & Technologies Used

| Technology      | Role                                                                 |
|-----------------|----------------------------------------------------------------------|
| **Playwright**  | Browser automation, test execution, and page interaction             |
| **Percy.io**    | Visual comparison engine, snapshot storage, diff highlighting        |
| **Node.js/npm** | Project environment and dependency management                        |
| **GitHub Actions** | Continuous Integration (CI) service for automated execution       |
| **JavaScript**  | Test scripting language                                              |

---

## 🌐 Why It’s Good for Enterprise-Level Expansion

Visual Sentinel is designed with scalability and enterprise adoption in mind:

- **Consistency Across Deployments**: Protects brand integrity by catching visual bugs before production.  
- **Cross-Browser & Multi-Viewport Testing** *(Future Enhancement)*: Expands coverage to different browsers and screen resolutions.  
- **Component-Level Targeting** *(Future Enhancement)*: Allows focused snapshot testing of specific UI components.  
- **End-to-End Flow Coverage** *(Future Enhancement)*: Extends visual checks to entire workflows.  
- **Scalable Reporting & Governance**: Integrates Percy build reports into GitHub PRs for enterprise-wide enforcement.  

---

## 📈 Enterprise Benefits

- **Reduced Risk**: Prevents costly UI regressions that damage user trust.  
- **Faster Delivery**: Automates visual checks, reducing manual QA effort.  
- **Scalability**: Expands across multiple applications, teams, and environments.  
- **Professional-Grade Quality**: Provides actionable insights with visual diffs.  

---

## 🔄 Workflow (Step-by-Step)

1. **Developer Commit/PR** → Code changes are pushed or a pull request is opened.  
2. **GitHub Actions CI/CD** → The pipeline installs dependencies, sets up browsers, and runs tests.  
3. **Playwright Execution** → Automated browser tests are executed on target pages.  
4. **Percy Snapshot Capture** → Percy takes snapshots of the UI during test runs.  
5. **Baseline Comparison** → Percy compares snapshots against the stored baseline.  
6. **Visual Diff Reporting** → Any differences are highlighted in the Percy dashboard.  
7. **PR Status Check** → GitHub integrates Percy results, enforcing visual quality gates before merging.  

This workflow ensures that **every commit is visually verified** before it reaches production.

---

## 📂 Project Structure

    visual-sentinel/
    ├── .github/
    │   └── workflows/
    │       └── main.yml         # GitHub Actions CI/CD workflow
    ├── tests/
    │   └── visual.spec.js       # Playwright test file with Percy snapshots
    ├── package.json             # Project dependencies and scripts
    └── README.md                # Project documentation

## 👨‍💻 Contributor

- **Mukul Dev Mahato**

---

## 🛡️ Summary

Visual Sentinel is more than a testing tool—it’s a **visual safety net** for enterprises. By combining Playwright’s automation with Percy’s powerful visual comparison engine, it ensures that every deployment maintains the highest standards of **UI quality, consistency, and brand trust**.    