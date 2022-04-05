import { useDispatch, useSelector } from 'react-redux';
import Storage from '../Global/Storage';
import React from 'react';
import {
  fetchUser,
  getAccessToken,
  loginUser,
  logOutUser,
} from '../../ui/Auth/common/redux/Auth.slice';
import { authSelector } from '../selectors';

interface iAuthContext {
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
}

const AuthContext = React.createContext<iAuthContext>({
  isAuthenticated: false,
  signIn: () => 0,
  signOut: () => 0,
});

export const useAuth = () => React.useContext(AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const auth = Authentication();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const Authentication = () => {
  const dispatch = useDispatch();
  const { accessToken } = useSelector(authSelector);
  const isAuthenticated = Boolean(Storage.getItem('firstLogin'));

  React.useEffect(() => {
    if (isAuthenticated) {
      dispatch(getAccessToken());
    }
  }, [isAuthenticated]);

  React.useEffect(() => {
    if (isAuthenticated) {
      if (accessToken) {
        dispatch(fetchUser(accessToken));
      }
    }
  }, [accessToken]);

  const signIn = (email: string, password: string) => dispatch(loginUser({ email, password }));

  const signOut = () => dispatch(logOutUser(accessToken));

  return {
    isAuthenticated,
    signIn,
    signOut,
  };
};
