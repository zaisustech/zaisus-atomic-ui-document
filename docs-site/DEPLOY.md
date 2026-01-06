# Deployment Guide

This guide explains how to push the documentation site, README, and example folder to the public repository.

## Prerequisites

1. You have access to the repository: `https://github.com/zaisustech/zaisus-atomic-ui-document`
2. Git is configured on your machine
3. You have push access to the repository

## Step 1: Initialize the New Repository

```bash
# Navigate to a temporary directory
cd /tmp
git clone https://github.com/zaisustech/zaisus-atomic-ui-document.git
cd zaisus-atomic-ui-document
```

## Step 2: Copy Files

Copy the following from the main repository:

1. **docs-site/** - The entire documentation site
2. **example/** - The example application folder
3. **README.md** - The main README (already created in docs-site/)

## Step 3: Push to Repository

```bash
# Add all files
git add .

# Commit
git commit -m "Initial commit: Add documentation site, example app, and README"

# Push to main branch
git push origin main
```

## Step 4: Enable GitHub Pages

1. Go to repository settings: `https://github.com/zaisustech/zaisus-atomic-ui-document/settings`
2. Navigate to **Pages** section
3. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

The GitHub Actions workflow will automatically:
- Build the Docusaurus site
- Deploy to the `gh-pages` branch
- Make it available at: `https://zaisustech.github.io/zaisus-atomic-ui-document/`

## Manual Deployment (Alternative)

If you prefer to deploy manually:

```bash
cd docs-site
yarn install
yarn build
yarn deploy
```

This will push the built site to the `gh-pages` branch.

## Repository Structure

After pushing, your repository should look like:

```
zaisus-atomic-ui-document/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── docs-site/                  # Docusaurus documentation site
│   ├── docs/                   # Documentation pages
│   ├── src/                    # Source components
│   ├── static/                 # Static assets
│   ├── docusaurus.config.ts    # Docusaurus config
│   ├── package.json
│   └── README.md               # Documentation README
├── example/                     # Example React Native app
│   ├── src/                    # Example stories
│   ├── package.json
│   └── README.md
└── README.md                   # Main repository README
```

## Troubleshooting

### GitHub Actions Not Running

1. Check that the workflow file exists: `.github/workflows/deploy.yml`
2. Ensure GitHub Actions is enabled in repository settings
3. Check the Actions tab for any error messages

### Build Failures

1. Ensure Node.js version is >= 20.0
2. Check that all dependencies are installed
3. Review the build logs in GitHub Actions

### Pages Not Updating

1. Wait a few minutes for GitHub Pages to rebuild
2. Clear your browser cache
3. Check the `gh-pages` branch exists and has content

