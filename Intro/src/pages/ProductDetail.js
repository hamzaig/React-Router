import React from 'react'
import { useParams } from 'react-router';

const ProductDetail = () => {
    const params = useParams();
    return (
        <section>
            <h1>This is Product Details page</h1>
            <ul>
                <li>{params.productId}</li>
            </ul>
        </section>
    )
}

export default ProductDetail;
