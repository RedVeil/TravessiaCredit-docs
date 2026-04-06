# Travessia Credit Docs

Static multi-page documentation site for Travessia Credit, based on the provided PDF content.

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

- `index.html` (landing page)
- `overview.html`
- `why-travessia-exists.html`
- `what-travessia-is.html`
- `what-travessia-is-not.html`
- `styles.css`
- `main.js`
- `.nojekyll`
