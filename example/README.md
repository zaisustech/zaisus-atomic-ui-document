
## Run project

```bash
npx expo install expo-dev-client
```

Then create a dev build:


## Pre build setup
```bash
npx expo prebuild
# or
npx expo prebuild --clean
```

## Run app
```bash
# platform
npx expo run:ios
# or
npx expo run:android
```




## Troubleshoot 

✅ Step 1: STOP everything

```bash
killall node
killall Simulator
```

✅ Step 2: Clean node module and exp

```bash
yarn clean && yarn install
```
