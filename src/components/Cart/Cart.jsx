import React from 'react';
import styles from './Cart.module.css';
import { Link} from 'react-router-dom';
import Button from '../ui/myButton/Button';
import Counter from '../Counter/Counter';
import useCart from '../../hooks/useCart';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (productId, quantity) => {
    updateQuantity(productId, quantity);
  };

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    (cart.length === 0)
        ?   <div className={styles.cart}>
               <div className={styles.cart__header}>
                  <Link className={styles.cart__backArrow} to={'/'}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
                    </svg>
                  </Link>
                  <div className={styles.cart__title}>Немає товарів у кошику</div>
                </div>
           </div>
        :   <div className={styles.cart}>
                <div className={styles.cart__header}>
                  <Link className={styles.cart__backArrow} to={'/'}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
                    </svg>
                  </Link>
                  <div className={styles.cart__title}>Товари з кошику</div>
                </div>
                <div className={styles.cart__main}>
                  <div className={styles.cart__mainTitle}>
                    <p>Товар</p>
                    <p>Кількість</p>
                    <p>Ціна</p>
                  </div>
                  <div className={styles.cart__products}>
                    {cart.map(product => (
                      <div key={product.id} className={styles.cart__product}>
                        <img className={styles.cart__productImg} src={product.image_url} alt="" />
                        <p className={styles.cart__productTitle}>{product.name}</p>
                        <Counter
                        className={styles.cart__counter}
                          value={product.quantity}
                          onChange={(quantity) => handleQuantityChange(product.id, quantity)}
                        />
                        <p className={styles.cart__productPrice}>{product.price}₴</p>
                        <button className={styles.cart__delete} onClick={() => handleRemove(product.id)}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.cart__footer}>
                  <p className={styles.cart__totalPrice}>Загальна вартість: <span>{totalPrice} ₴</span></p>
                  <div className={styles.cart__buttons}>
                    <Button style={{ width: '360px', height: '40px', border: '1px solid rgba(208, 213, 221, 1)', background: 'transparent', color: 'rgba(52, 64, 84, 1)' }}>Продовжити покупки</Button>
                    <Button style={{ width: '360px', height: '40px' }}>Оформити заказ</Button>
                  </div>
                </div>
            </div>
  ) 
}   

export default Cart;
