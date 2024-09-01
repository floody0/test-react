
import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import Loader from '../components/ui/myLoader/Loader'
import ProductFullInfo from '../components/productFullInfo/RroductFullInfo'

const ProductPage = () => {
  const {slug} = useParams()

  const {data: productInfo, isLoading, error} = useFetch(`https://kotyatashop.com/wp-json/api/get-product-by-slug?slug=${slug}`);

  if (isLoading) {
    return <Loader/>
  }

  return (
      <ProductFullInfo productInfo={productInfo}/>
  ) 
}

export default ProductPage