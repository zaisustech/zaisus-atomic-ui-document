# @zaisustech/atomic-ui

Atomic UI refers to the Atomic Design methodology, a system for creating robust, scalable, and consistent user interfaces by breaking them into hierarchical components.

## 📚 Documentation

**Full documentation is available at:** [https://zaisustech.github.io/zaisus-atomic-ui/](https://zaisustech.github.io/zaisus-atomic-ui/)

The documentation includes:
- Complete installation guide
- All component APIs with props and examples
- Usage examples and best practices
- Setup instructions

## Installation

### Authentication

This package is hosted on GitHub Packages and is **private**. You must authenticate before installing.

#### 1. Generate a GitHub Personal Access Token (PAT)

1. Go to **GitHub → Settings → Developer settings**
2. Open **Personal access tokens**
3. Create a **Classic token**
4. Enable scopes:
   - ✅ `read:packages`
   - ✅ `repo` (required for private repos)
5. Copy the token (you won't see it again)

#### 2. Configure npm / yarn authentication

**Option A — Project-level .npmrc (Recommended)**

Create `.npmrc` in your project root:

```bash
@zaisustech:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

🔒 **Important**: Do NOT commit this file. Add it to `.gitignore`.

**Option B — Global configuration**

```bash
npm config set @zaisustech:registry https://npm.pkg.github.com
npm config set //npm.pkg.github.com/:_authToken YOUR_GITHUB_TOKEN
```

### Install the Package

```bash
npm install @zaisustech/atomic-ui
# or
yarn add @zaisustech/atomic-ui
```

### Required Peer Dependencies

Use `expo install` for native modules to ensure version compatibility:

```bash
npx expo install \
  expo-font \
  expo-modules-core \
  react-native-reanimated \
  react-native-safe-area-context \
  react-native-svg
```

Then install the remaining JS-only dependencies:

```bash
yarn add \
  i18next \
  react-i18next \
  react-native-modal \
  @expo/vector-icons
```

## Quick Start

Wrap your app with the required providers:

```tsx
import { ThemeProvider, ToastProvider } from '@zaisustech/atomic-ui';

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        {/* Your app content */}
      </ToastProvider>
    </ThemeProvider>
  );
}
```

For detailed setup instructions and component usage, see the [documentation](https://zaisustech.github.io/zaisus-atomic-ui/).

## Available Components

- [Accordion](https://zaisustech.github.io/zaisus-atomic-ui/docs/components/accordion)
- [ActionSheet](https://zaisustech.github.io/zaisus-atomic-ui/docs/components/action-sheet)
- [Badge](https://zaisustech.github.io/zaisus-atomic-ui/docs/components/badge)
- [Button](https://zaisustech.github.io/zaisus-atomic-ui/docs/components/button)
- [Card](https://zaisustech.github.io/zaisus-atomic-ui/docs/components/card)
- [Carousel](https://zaisustech.github.io/zaisus-atomic-ui/docs/components/carousel)
- [Divider](https://zaisustech.github.io/zaisus-atomic-ui/docs/components/divider)
- [DropdownField](https://zaisustech.github.io/zaisus-atomic-ui/docs/components/dropdown-field)
- [FormFieldContainer](https://zaisustech.github.io/zaisus-atomic-ui/docs/components/form-field-container)
- [Icon](https://zaisustech.github.io/zaisus-atomic-ui/docs/components/icon)
- [ListItem](https://zaisustech.github.io/zaisus-atomic-ui/docs/components/list-item)
- [Pager](https://zaisustech.github.io/zaisus-atomic-ui/docs/components/pager)
- [ProgressBar](https://zaisustech.github.io/zaisus-atomic-ui/docs/components/progress-bar)
- [ProgressCircle](https://zaisustech.github.io/zaisus-atomic-ui/docs/components/progress-circle)
- [RichText](https://zaisustech.github.io/zaisus-atomic-ui/docs/components/rich-text)
- [SegmentedControl](https://zaisustech.github.io/zaisus-atomic-ui/docs/components/segmented-control)
- [Snackbar](https://zaisustech.github.io/zaisus-atomic-ui/docs/components/snackbar)
- [Spacer](https://zaisustech.github.io/zaisus-atomic-ui/docs/components/spacer)
- [Stepper](https://zaisustech.github.io/zaisus-atomic-ui/docs/components/stepper)
- [TabView](https://zaisustech.github.io/zaisus-atomic-ui/docs/components/tab-view)
- [Text](https://zaisustech.github.io/zaisus-atomic-ui/docs/components/text)
- [TextInputField](https://zaisustech.github.io/zaisus-atomic-ui/docs/components/text-input-field)
- [Toast](https://zaisustech.github.io/zaisus-atomic-ui/docs/components/toast)
- [Visible](https://zaisustech.github.io/zaisus-atomic-ui/docs/components/visible)

For complete component documentation with props, examples, and usage, visit the [documentation site](https://zaisustech.github.io/zaisus-atomic-ui/).

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

- [Development workflow](CONTRIBUTING.md#development-workflow)
- [Sending a pull request](CONTRIBUTING.md#sending-a-pull-request)
- [Code of conduct](CODE_OF_CONDUCT.md)

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
