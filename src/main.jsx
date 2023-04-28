import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './style.scss'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './app/store'
import { ChakraProvider } from '@chakra-ui/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <ChakraProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ChakraProvider>
    </React.StrictMode>,
  </BrowserRouter>
)
