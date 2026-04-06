# Travessia Credit Docs

Static GitBook-style documentation site for Travessia Credit.

The docs are now fully pre-rendered as static HTML pages with a hardcoded sidebar.

## Local preview

Open `index.html` directly in your browser, or run a simple static server from repository root:

```bash
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Publish with GitHub Pages (main branch root)

1. Push this repository to GitHub.
2. In GitHub, go to **Settings** -> **Pages**.
3. Under **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Save, then wait for Pages deployment to complete.
5. Your site URL will appear in the Pages settings panel.

## Files

- `index.html` (root landing and Intro Travessia page)
- `pages/brazilian-grain-industry.html`
- `pages/tauri.html`
- `pages/the-vault.html`
- `pages/capital-lifecycle.html`
- `pages/travessia-token-tva.html`
- `pages/security-audits-risk-controls.html`
- `pages/transparency-reporting.html`
- `pages/frequently-asked-questions.html`
- `docs.md` (optional source content reference)
- `assets/css/styles.css` (layout and typography)
- `assets/images/travessia_logo_light.png`
- `assets/icons/favicon.ico`
- `.nojekyll`
