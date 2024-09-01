import React from 'react'
import ProductCard from '../productCard/ProductCard'
import cl from './ProductList.module.css'
import useFetch from '../../hooks/useFetch'
import Loader from '../ui/myLoader/Loader'

const ProductList = () => {

    const {data: products, isLoading, error} = useFetch('https://kotyatashop.com/wp-json/api/get-short-products')

    if (isLoading) {
        return <Loader/>
    }

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