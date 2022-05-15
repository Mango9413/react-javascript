import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App';
// import ProductsProvider from './context/products-context';
import configureStore from "./hooks-store/products-store";

configureStore()
//初始化global数据， 不需要warp给组件

const root = createRoot(document.getElementById('root'))
root.render(
    // <ProductsProvider>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    // </ProductsProvider>,
);
