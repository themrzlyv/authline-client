import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import { store } from './infrastructure/Global/redux/Store';
import queryClient from './infrastructure/Global/rQuery/queryClient';
import reportWebVitals from './reportWebVitals';
import { theme } from './Theme/theme';


const RootComponent = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <App />
          <ToastContainer
            theme="colored"
            position="bottom-right"
            autoClose={2000}
            transition={Slide}
            hideProgressBar
            closeOnClick
            pauseOnFocusLoss
            pauseOnHover
          />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
};

ReactDOM.render(<RootComponent />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
