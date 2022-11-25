import styles from '../css/Cart.module.css'

export default function Cart({ items }) {
    if (!items || items.size === 0) return null

    const total = () => {
        let res = 0
        Array.from(items).forEach((i) => res += i.price)
        return res.toFixed(2)
    }

    return (
        <div id={styles.container}>
            {Array.from(items).map((item, idx) => (
                <div id={styles.row} key={idx}>
                    <h3>{item.name}</h3>
                    <h4>${item.price.toFixed(2)}</h4>
                </div>
            ))}
            <div id={styles.row} style={{ marginTop: 30 }}>
                <h4>Total</h4>
                <h4>${total()}</h4>
            </div>
        </div>
    )
}