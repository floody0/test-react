import React, { useState } from 'react';
import styles from './ProductFullInfo.module.css';
import Button from '../ui/myButton/Button';
import Counter from '../Counter/Counter';
import useCart from '../../hooks/useCart';
import { useNavigate } from 'react-router-dom';

const ProductFullInfo = ({ productInfo }) => {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()
  const navigate = useNavigate()

  const handleAddToCart = () => {
    addToCart(productInfo, quantity)
	navigate('/')
  }

  return (
    <div className={styles.container}>
      <div className={styles.product__main}>
        <img className={styles.product__img} src={productInfo.image_url} alt="Фото не знайдено" />
        <div className={styles.product__info}>
          <h2 className={styles.product__title}>Товар: {productInfo.name}</h2>
          {productInfo.in_stock
            ? <p className={styles.product__inStock}>В наявності</p>
            : <p className={styles.product__inStock}>Немає в наявності</p>
          }
          <div className={styles.product__line}></div>
          <p className={styles.product__price}>{productInfo.price}₴</p>
          <div className={styles.product__line}></div>
          <div className={styles.addRow}>
            <Counter value={quantity} onChange={setQuantity} />
            <Button onClick={handleAddToCart}>Додати до кошика</Button>
          </div>
        </div>
      </div>
      <div className={styles.product__description_block}>
        <p className={styles.product__description}>{productInfo.description}</p>
      </div>
    </div>
  );
};

export default ProductFullInfo;
