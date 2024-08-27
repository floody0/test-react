import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../productCard/ProductCard'
import cl from './ProductList.module.css'

const ProductList = () => {

    const [products, setProducts] =  useState([])

    useEffect(()=>{
        const fetchProducts = async () => {
            const response = await axios.get('https://kotyatashop.com/wp-json/api/get-short-products')
            setProducts(response.data.data)
        }
        fetchProducts()
    },[])


    return (
        <div className={cl.product_list}>
            {products.map( product => <ProductCard
                key={product.id}
                id={product.id} 
                name={product.name} 
                shortDescription={product.short_description} 
                regularPrice={product.regular_price} 
                img={product.image_url}
                isOnSale={product.is_on_sale}
                categories={product.categories}
                slug={product.slug}
            />)}
        </div>
    )   
}   

export default ProductList