import React, { useEffect } from 'react';
import API from '../axios/axios';

export const AuthContext = React.createContext<{ token: null | string; user: any | null }>({
  token: null,
  user: null,
});

const AuthProvider: React.FC = ({ children }) => {
  const [token, setToken] = React.useState<null | string>(null);
  const [user, setUser] = React.useState<null | any>(null);

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin');
    if (firstLogin) {
      const refreshToken = async () => {
        const res = await API.get('/auth/refreshToken');

        setToken(res.data.accesstoken);

        setTimeout(() => {
          refreshToken();
        }, 10 * 60 * 1000);
      };
      refreshToken();
    }

    if (token) {
      const getUser = async () => {
        const res = await API.get('user', {
          headers: {
            Authorization: `Bearer: ${token}`,
          },
        });
        setUser(res.data.user);
      };
      getUser();
    }
  }, [token]);

  const state = {
    token,
    user,
  };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
