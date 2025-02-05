# Cryptocurrencies List 📖

The exercise consists of making a list of cryptocurrencies that can be filtered by favorites, adding items to a list of favorites and being able to persist the favorites items.

Using a public API, for this I used the [CoinMarketCap API](https://coinmarketcap.com/api/documentation/v1/#section/Introduction).

## Run the project

- First of all, install deps with `npm install`
- After that, run the metro command `npm run start`
- if you want to run the android app use `npm run android`
- otherwise if you want to run iOS app use `npm run ios`

## Features 📃

---

| Feature                   | Done |
| ------------------------- | ---- |
| Filters                   | ✅   |
| Favorites                 | ✅   |
| Cryptocurrencies Screen   | ✅   |
| Cryptocurrency Screen     | ✅   |
| Login Screen              | ✅   |
| GoogleSignIn Intergration | ✅   |
| Unit Test                 | 🔨   |
| Integration Test          | ✅   |

## Libraries

- `@react-native-async-storage/async-storage`: Used for persistent key-value storage in React Native applications.
- `@react-native-google-signin/google-signin`: Enables Google Sign-In integration in React Native apps.
- `@react-navigation/native-stack`: Provides stack navigator for navigating between screens in React Native.
- `axios`: HTTP client for making API requests.
- `zustand`: State-management library for React, wich allows to propagate the logic all over the app
- `@tanstack/react-query`: Powerful data-fetching and state management for React applications, used to cached the request in the application and better handle for the request state.
  