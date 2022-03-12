import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import PreLoader from './components/PreLoader';
import { mainRoutes } from './router/mainRoutes';
import RenderRoutes from './router/RenderRoutes';

const App: React.FC = () => {
  return (
    <Layout>
      <Suspense fallback={<PreLoader />}>
        <BrowserRouter>
          <RenderRoutes routes={mainRoutes} />
        </BrowserRouter>
      </Suspense>
    </Layout>
  );
};

export default App;
