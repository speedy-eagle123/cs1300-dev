import Filters from "./Filters";
import ItemList from "./ItemList";
import styles from "../css/Body.module.css"
import { useEffect, useState } from "react";

export default function Body() {
    const [tempType, setTempType] = useState('all')
    const [drinkType, setDrinkType] = useState('all')
    const [items, setItems] = useState(allItems)

    useEffect(() => {
        setItems(
            allItems.filter((item) => {
                const isHot = tempType === 'all' || tempType === 'hot'
                const isCoffee = drinkType === 'all' || drinkType === 'coffee'

                return item.isCoffee === isCoffee && item.isHot === isHot
            })
        )
    }, [tempType, drinkType])

    return (
        <div id={styles.container}>
            <Filters
                tempType={tempType}
                setTempType={setTempType}
                drinkType={drinkType}
                setDrinkType={setDrinkType}
            />

            <ItemList items={items} />
        </div>
    )
}

const allItems = [
    {
        name: 'Hot Coffee',
        price: 1,
        image: 'https://reviewed-com-res.cloudinary.com/image/fetch/s--ybFjGi7L--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1562686693819/Coffee.jpg',
        isHot: true,
        isCoffee: true
    },
    {
        name: 'Hot Coffee',
        price: 1,
        image: 'https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Cup-Of-Creamy-Coffee.png',
        isHot: true,
        isCoffee: true
    },
]