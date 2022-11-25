import Item from "./Item"
import styles from '../css/ItemList.module.css'

export default function ItemList({ items, addToCart, cart }) {
    if (!items || items.length === 0) {
        return (
            <div id={styles.container} style={{ justifyContent: 'center', alignItems: 'center' }}>
                <h1>
                    No Results
                </h1>
            </div>
        )
    }

    return (
        <div id={styles.container}>
            {items.map((item, idx) => (
                <Item item={item} key={idx} addToCart={addToCart} cart={cart} />
            ))}
        </div>
    )
}
//https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Cup-Of-Creamy-Coffee.png