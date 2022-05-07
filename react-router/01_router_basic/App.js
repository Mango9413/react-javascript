// import { Route, Switch, Redirect } from "react-router-dom";
import {Route, Routes, Navigate} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";


function App() {
    return (
        <div>
            <MainHeader/>
            <main>
                <Routes>
                    <Route path='/' element={<Navigate replace to='/welcome'/>}/>
                    <Route path='/welcome/*' element={ <Welcome/>} />
                    <Route path='/products' element={<Products/>} />
                    <Route path='/products/:productId' element={<ProductDetail/>} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
//
// function App() {
//     return (
//         <div>
//             <MainHeader/>
//             <main>
//                 {/*first path meet the start of the path*/}
//                 <Routes>
//                     {/*<Route path='/' exact>*/}
//                     {/*    <Redirect to='/welcome'/>*/}
//                     {/*</Route>*/}
//                     <Route path='/welcome'>
//                         <Welcome/>
//                     </Route>
//                     <Route path='/products' exact>
//                         <Products/>
//                     </Route>
//                     <Route path='/products/:productId'>
//                         <ProductDetail/>
//                     </Route>
//                 </Routes>
//             </main>
//         </div>
//     );
// }
//
// export default App;

//our-domain.com/welcome => Welcome Component
//our-domain.com/products => Products Component
//our-domain.com/product-detail/<any value>
