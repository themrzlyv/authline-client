import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import { mainRoutes } from './router/mainRoutes';
import RenderRoutes from './router/RenderRoutes';

const App: React.FC = () => {
  return (
    <Layout>
      <BrowserRouter>
        <RenderRoutes routes={mainRoutes} />
      </BrowserRouter>
    </Layout>
  );
};

export default App;
