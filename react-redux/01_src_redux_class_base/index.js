import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./redux/store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*引入Provider，给App所有后代组件传递store*/}
        <Provider store={store}>
            <App/>
        </Provider>

    </React.StrictMode>
);

// store.subscribe(()=>{
//     root.render(
//         <React.StrictMode>
//             <App />
//         </React.StrictMode>
//     );
// })


