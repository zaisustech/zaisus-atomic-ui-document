# Atomic UI Documentation

This repository contains the documentation website for [@zaisustech/atomic-ui](https://github.com/zaisustech/zaisus-atomic-ui), a React Native component library built with Atomic Design methodology.

## 🌐 Live Documentation

The documentation is available at: **https://zaisustech.github.io/zaisus-atomic-ui-document/**

## 📚 What's Included

- **Complete Component Documentation**: All 25+ components with interactive examples
- **Atomic Design Guide**: Explanation of the design system architecture
- **Theme & Tokens**: Comprehensive design token documentation
- **Installation Guide**: Step-by-step setup instructions
- **Usage Examples**: Real-world code examples and best practices

## 🚀 Local Development

### Prerequisites

- Node.js >= 20.0
- Yarn package manager

### Setup

1. Clone this repository:
```bash
git clone https://github.com/zaisustech/zaisus-atomic-ui-document.git
cd zaisus-atomic-ui-document
```

2. Install dependencies:
```bash
cd docs-site
yarn install
```

3. Start the development server:
```bash
yarn start
```

The site will be available at `http://localhost:3000`

### Build

To build the static site:

```bash
yarn build
```

The built files will be in the `build/` directory.

## 📁 Repository Structure

```
docs-site/
├── docs/              # Documentation pages
│   ├── components/    # Component documentation
│   ├── theme.mdx      # Theme documentation
│   └── tokens.mdx     # Design tokens documentation
├── src/               # Source files
│   ├── components/    # React components for previews
│   ├── css/           # Custom styles
│   └── utils/         # Utility functions
├── static/            # Static assets
└── docusaurus.config.ts  # Docusaurus configuration
```

## 🔄 Deployment

The documentation is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

### Manual Deployment

If you need to deploy manually:

```bash
cd docs-site
yarn build
yarn deploy
```

## 📝 Contributing

To contribute to the documentation:

1. Make your changes in the `docs-site/` directory
2. Test locally with `yarn start`
3. Commit and push your changes
4. The site will automatically deploy via GitHub Actions

## 🔗 Related Repositories

- **Main Library**: [@zaisustech/atomic-ui](https://github.com/zaisustech/zaisus-atomic-ui)
- **Example App**: Included in the main repository's `example/` folder

## 📄 License

This documentation is part of the Atomic UI project. See the main repository for license information.
