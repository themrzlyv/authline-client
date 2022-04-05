import React, { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import PreLoader from './components/PreLoader';
import Storage from './infrastructure/Global/Storage';
import { authSelector } from './infrastructure/selectors';
import { mainRoutes } from './router/mainRoutes';
import RenderRoutes from './router/RenderRoutes';
import { fetchUser } from './ui/Auth/common/redux/Auth.slice';
import Login from './ui/Auth/components/Login';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { error } = useSelector(authSelector);
  React.useEffect(() => {
    if (error) {
      Storage.removeItem('firstLogin');
    }
  }, [error]);
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<PreLoader />}>
          <RenderRoutes routes={mainRoutes} />
          <Login />
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
