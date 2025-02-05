import React, { PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react';
import {
  GoogleSignin,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { IAuthContext, User } from './types';
import { getMessageErrorByType } from './utils';
import '../../config/google';

const AuthContext = React.createContext<IAuthContext>({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: '',
  signIn: async () => {},
  signOut: async () => {},
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorType, setErrorType] = useState('');

  const hasError = !!errorType;

  const signIn = async () => {
    setIsLoading(true);
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      if (isSuccessResponse(response)) {
        setUser(response?.data?.user as unknown as User);
      } else {
        setErrorType(statusCodes.SIGN_IN_CANCELLED);
      }
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            // operation (eg. sign in) already in progress
            console.log('in progress');
            break;
            case statusCodes.SIGN_IN_CANCELLED:
              setErrorType(statusCodes.SIGN_IN_CANCELLED);
            break;
          default:
          setErrorType('default');
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  const getCurrentUser = async () => {
    try {
      const currentUserData = await GoogleSignin.getCurrentUser();
      setUser(currentUserData?.user as unknown as User);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  const memoizedValue = useMemo(() => ({
    signIn,
    signOut,
    user,
    isAuthenticated: !!user,
    isLoading,
    error: hasError ? getMessageErrorByType(errorType) : '',
  }), [user, isLoading, errorType, hasError]);

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
