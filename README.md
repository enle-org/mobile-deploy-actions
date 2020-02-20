# Mobile Deployment Github Action

This action prints builds a React-Native app, builds binaries for iOS and Android using Expo and deploys them using Firebase App Distribution.

`*Only android supported for now`

## Inputs

### `expo_username`

**Required** Username for expo account.

### `expo_password`

**Required** Password for expo account.

### `firebase_token`

**Required** Token for auth with firbase.

### `firebase_android_app_id`

**Required** App ID for firebase android app.

## Example usage

```
- name: Create binary and deploy
  uses: enle-org/mobile-deploy-action@master
  with:
    expo_username: ${{ secrets.EXPO_USERNAME }}
    expo_password: ${{ secrets.EXPO_PASSWORD }}
    firebase_token: ${{ secrets.FIREBASE_TOKEN }}
    firebase_android_app_id: ${{ secrets.FIREBASE_ANDROID_APP_ID }}
```