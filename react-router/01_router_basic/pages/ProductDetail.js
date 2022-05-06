import React from 'react';
import {useParams} from "react-router-dom";

const ProductDetail = () => {
    const params = useParams()
    console.log(params.productId)

    return (
        <div>
            <h3>product detail</h3>
            <p>{params.productId}</p>
        </div>
    );
};
export default ProductDetail;