# Mobile SDK Monorepo

Monorepo for mobile SDK libraries and example applications.

## Structure

```
mobile-sdk/
├── libs/
│   ├── atomic-ui/              # Atomic UI component library (React Native)
│   └── file-system/            # File system utilities
├── apps/
│   ├── example-atomic-ui/      # Storybook app for atomic-ui (React Native)
│   ├── example-file-system/    # Example Expo app for file-system
│   └── docs-site/              # Documentation site (Docusaurus)
└── package.json
```

## Setup

```sh
# Install Bun (if not installed)
curl -fsSL https://bun.sh/install | bash

# Install dependencies
bun install
```

## Development

```sh
# Build libraries
bunx nx build @zaisustech/atomic-ui      # Build atomic-ui library
bunx nx build @zaisustech/file-system    # Build file-system library

# Run applications
bunx nx start example-atomic-ui          # Start Metro (Expo dev client) for Storybook app
bunx nx start example-file-system        # Start Expo app
bunx nx dev docs-site                    # Start Docusaurus docs (use nx serve docs-site if no dev target)

# Alternative commands (using root scripts)
bun run storybook                        # Start example-atomic-ui Metro
bun run docs:dev                         # Start docs site

# View dependency graph
bunx nx graph
```

## Libraries

### @zaisustech/atomic-ui

React Native component library with atomic design principles.

**Usage:**
```typescript
import { Button, Input } from '@zaisustech/atomic-ui';

<Button title="Click me" onPress={() => {}} variant="primary" />
<Input label="Email" value={email} onChangeText={setEmail} />
```

### @zaisustech/file-system

File system UI component library for React Native/Expo.

**Usage:**
```typescript
import { FileManagerContainer } from '@zaisustech/file-system';

<FileManagerContainer
  initialPath={FileSystem.documentDirectory}
  onFileSelect={(file) => console.log(file)}
/>
```

## Apps

### example-atomic-ui

Storybook application showcasing atomic-ui components (Expo dev client + React Native Storybook).

**Run:**
```sh
# Terminal 1 – start Metro (dev client)
bunx nx start example-atomic-ui
# or: bun run storybook

# Terminal 2 – run on iOS or Android
bunx nx run example-atomic-ui:ios
bunx nx run example-atomic-ui:android
# Physical device: ios:device / android:device
# Web: bunx nx run example-atomic-ui:web
```

### example-file-system

Example Expo application demonstrating file-system library usage.

**Run:**
```sh
# Terminal 1 – start Metro (Expo)
bunx nx start example-file-system
# or: cd apps/example-file-system && bun run start

# Terminal 2 – run on iOS or Android
bunx nx run example-file-system:ios
bunx nx run example-file-system:android
# Web: bunx nx run example-file-system:web
```

### docs-site

Docusaurus documentation site.

**Run:**
```sh
bunx nx dev docs-site
# or
bun run docs:dev
```

## Notes

Both repositories (`atomic-ui` and `file-system`) are configured to work together in the monorepo:
- All dependencies are hoisted to root `node_modules` for consistency
- Workspace packages are linked via symlinks
- Single source of truth for package versions prevents conflicts

## License

MIT
