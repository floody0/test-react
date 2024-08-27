import React from 'react'
import cl from './ProductCard.module.css'
import { Link } from 'react-router-dom'
import ProductPage from '../../pages/ProductPage'

const ProductCard = (props) => {

  return (
    <Link className={cl.products__item} to={<ProductPage/>}>
        <img className={cl.product__img} src={props.img} alt="Нет картинки" />
        <div className={cl.product__info}>
          <p className={cl.product__title}>{props.name}</p>
          <p className={cl.product__description}>{props.shortDescription}</p>
          <p className={cl.product__price}>{props.regularPrice} ₴</p>
        </div>
    </Link>
  )
}

export default ProductCard