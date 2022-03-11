import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import { mainRoutes } from './router/mainRoutes';
import RenderRoutes from './router/RenderRoutes';

const App: React.FC = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <RenderRoutes routes={mainRoutes} />
        </BrowserRouter>
      </Suspense>
    </Layout>
  );
};

export default App;
