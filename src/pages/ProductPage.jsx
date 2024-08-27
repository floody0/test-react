import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
  const {slug} = useParams()
  const [productInfo, setProductInfo] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
      const fetchProductBySlug = async () => {
        try{
          const response = await axios.get(`https://kotyatashop.com/wp-json/api/get-product-by-slug?slug=${slug}`)
          setProductInfo(response.data.data)
        }
        catch(err){
          console.error('Товар не найден', err)
        }finally{
            setIsLoading(false)
        }
    }
    fetchProductBySlug()
  },[slug])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className='container'>
        <div className="product__main">
            <img className='product__img' src={productInfo.image_url} alt="Фото не знайдено" />
            <div className="product__info">
                <h2 className='product__title'>Товар: {productInfo.name}</h2>
                {productInfo.in_stock
                  ? <p className='product__inStock'>В наявності</p>
                  : <p className='product__inStock'>Немає в наявності</p>
                }
                <div className="product__line"></div>
                    <p className='product__price'>{productInfo.price}₴</p>
                <div className="product__line"></div>      
            </div>
        </div>
        <div className="product__description-block">
            <p className='product__description'>{productInfo.description}</p>
        </div>
    </div>
  ) 
}

export default ProductPage