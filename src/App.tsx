import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import PreLoader from './components/PreLoader';
import { mainRoutes } from './router/mainRoutes';
import RenderRoutes from './router/RenderRoutes';
import Login from './ui/Auth/components/Login';

const App: React.FC = () => {
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
