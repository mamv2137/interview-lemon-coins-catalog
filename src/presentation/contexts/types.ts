
export type User = {
  givenName: string
  id: string
  email: string
  name: string
  familyName: string
  photo: string
};

export interface IAuthContext {

  user: User | null;

  isAuthenticated: boolean;

  isLoading: boolean;

  error: string;

  signIn: () => Promise<void>;

  signOut: () => Promise<void>;

}

