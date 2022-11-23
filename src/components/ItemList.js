import Item from "./Item"
import styles from '../css/ItemList.module.css'

export default function ItemList({ items }) {
    return (
        <div id={styles.container}>
            {items.map((item, idx) => (
                <Item item={item} key={idx} />
            ))}
        </div>
    )
}
//https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Cup-Of-Creamy-Coffee.png