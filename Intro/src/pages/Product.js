import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
    return (
        <div>
            <ul>
                <li><Link to="/product/book">book</Link></li>
                <li><Link to="/product/car">car</Link></li>
                <li><Link to="/product/course">course</Link></li>
            </ul>
        </div>
    )
}

export default Product
