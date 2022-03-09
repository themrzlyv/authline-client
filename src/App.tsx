import React from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { setPosts } from './App.Slice';
import Layout from './components/Layout';
import API from './infrastructure/Global/axios/axios';
import { RootState } from './infrastructure/Global/redux/Store';

const fetchPosts = async () => {
  return API.get('/post').then((res) => res.data);
};

function App() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state: RootState) => state.reducer.app);
  const { data, isLoading } = useQuery('queryID', fetchPosts, {
    onSuccess: (data) => {
      dispatch(setPosts(data));
    },
  });

  console.log(posts);
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route index element={<h4>home page</h4>} />
          <Route path="/about" element={<h4>about page</h4>} />
          <Route path="/contact" element={<h4>contact page</h4>} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
