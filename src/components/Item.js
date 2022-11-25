import styles from '../css/Item.module.css'

export default function Item({ item, addToCart, cart }) {
    const isInCart = cart.has(item)
    return (
        <div id={styles.container}>
            <img src={item.image} id={styles.image} />
            <div id={styles.details}>
                <h3>{item.name}</h3>
                <h4>${item.price.toFixed(2)}</h4>
            </div>
            <div id={styles.details}>
                <h5 style={{ color: 'gray', marginTop: -10 }}>{item.isHot ? 'Hot Drink' : 'Cold Drink'}</h5>
            </div>
            <div id={styles.btnWrapper}>
                <button onClick={() => addToCart(item)} id={isInCart ? styles.btnRemove : styles.btn}>
                    {isInCart ? 'Remove' : 'Add to Cart'}
                </button>
            </div>
        </div>
    )
}