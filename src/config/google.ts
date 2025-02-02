import {
  GoogleSignin,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '79823423581-e8iin2pce8s6cgv672kak546ul0a8p9f.apps.googleusercontent.com', // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
  scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  forceCodeForRefreshToken: false, // [Android] related to `serverAuthCode`, read the docs link below *.
  iosClientId: '79823423581-s5s1n34bctk279h467d6o43lu6buvj2n.apps.googleusercontent.com', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
});
