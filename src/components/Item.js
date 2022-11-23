import styles from '../css/Item.module.css'

export default function Item({ item }) {
    return (
        <div id={styles.container}>
            <img src={item.image} id={styles.image} />
            <div id={styles.details}>
                <h3>{item.name}</h3>
                <h4>${item.price.toFixed(2)}</h4>
            </div>
            <div id={styles.btnWrapper}>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}