import {
  GoogleSignin,
} from '@react-native-google-signin/google-signin';
import { WEB_CLIENT_ID, IOS_CLIENT_ID } from '@env';

GoogleSignin.configure({
  webClientId: WEB_CLIENT_ID,
  forceCodeForRefreshToken: false,
  iosClientId: IOS_CLIENT_ID,
});
