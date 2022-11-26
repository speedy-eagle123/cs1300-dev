import Filters from "./Filters";
import ItemList from "./ItemList";
import styles from "../css/Body.module.css"
import { useEffect, useState } from "react";
import Cart from "./Cart";

export default function Body() {
    const [tempType, setTempType] = useState('all')
    const [sortBy, setSortBy] = useState('Alphabetical')
    const [hasMilk, setHasMilk] = useState('all')
    const [items, setItems] = useState(allItems)
    const [cart, setCart] = useState(new Set())

    const addToCart = (item) => {
        if (cart.has(item)) {
            const tmp = new Set(cart)
            tmp.delete(item)
            setCart(tmp)
        } else {
            const tmp = new Set(cart)
            tmp.add(item)
            setCart(tmp)
        }
    }

    const handleReset = () => {
        setTempType('all')
        setHasMilk('all')
        setSortBy('Alphabetical')
        // setCart(new Set())

        setItems(
            sortItems(filterItems(allItems, true), 'Alphabetical')
        )
    }

    const filterItems = (tmp, reset = false) => {
        const t = reset ? 'all' : tempType
        const m = reset ? 'all' : hasMilk
        if (t === 'all' && m === 'all') return tmp

        const isHot = t === 'hot'
        const milk = m === 'yes'

        return tmp.filter((item) => {
            return (
                (item.isHot === isHot || t === 'all') &&
                (item.hasMilk === milk || m === 'all')
            )
        })
    }

    const sortItems = (itemsToSort, override = null) => {
        let res = [...itemsToSort]
        const s = override ? override : sortBy

        if (s === 'Alphabetical') {
            res.sort((a, b) => {
                const textA = a.name.toUpperCase();
                const textB = b.name.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
        } else if (s === 'Price Low to High') {
            res.sort((a, b) => a.price - b.price)
        } else {
            res.sort((a, b) => b.price - a.price)
        }

        return res
    }

    useEffect(() => {
        setItems(
            sortItems(filterItems(allItems))
        )
    }, [tempType, hasMilk])

    useEffect(() => {
        setItems(
            sortItems(items)
        )
    }, [sortBy])

    return (
        <div id={styles.wrapper}>
            <div id={styles.note}>
                <h4>Note: due to recent supply chain issues, you may only purchase one of a given drink. Sorry for the inconvience.</h4>
            </div>
            <div id={styles.container}>
                <div>
                    <Filters
                        tempType={tempType}
                        setTempType={setTempType}
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                        setHasMilk={setHasMilk}
                        hasMilk={hasMilk}
                        handleReset={handleReset}
                    />
                    <Cart items={cart} />
                </div>

                <ItemList items={items} addToCart={addToCart} cart={cart} />
            </div>
        </div>
    )
}

const allItems = [
    {
        name: 'Black Coffee',
        price: 1.5,
        image: 'https://reviewed-com-res.cloudinary.com/image/fetch/s--ybFjGi7L--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1562686693819/Coffee.jpg',
        isHot: true,
        hasMilk: false
    },
    {
        name: 'Pumpkin Latte',
        price: 4,
        image: 'https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Cup-Of-Creamy-Coffee.png',
        isHot: true,
        hasMilk: true
    },
    {
        name: 'Iced Coffee',
        price: 2,
        image: 'https://cdn.shopify.com/s/files/1/1135/9368/products/GCB_ICED_COFFEE_REDUX_2000x2000.jpg?v=1565306516',
        isHot: false,
        hasMilk: false
    },
    {
        name: 'Cold Brew',
        price: 3,
        image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1471035242%2F1608w-getty-cold-brew-coffee-image.jpg%3Fitok%3Dngofts26',
        isHot: false,
        hasMilk: false
    },
    {
        name: 'Nitro Cold Brew',
        price: 5,
        image: 'https://images.ctfassets.net/3s5io6mnxfqz/1dpusiO1WJgwnBb4whjBgr/f26c4ecf3a9fe70377d332ac60c60287/AdobeStock_285163622_2.jpeg',
        isHot: false,
        hasMilk: false
    },
    {
        name: 'Macchiato',
        price: 3,
        image: 'https://thelittlestcrumb.com/wp-content/uploads/salted-caramel-macchiato-featured-image-1.jpg',
        isHot: true,
        hasMilk: true
    },
    {
        name: 'Cappuccino',
        price: 3.5,
        image: 'https://www.philips.com/c-dam/b2c/master/experience/ho/philips-chef/recipe/drinks-and-ice-creams/delicious-cappuccino/delicious-cappuccino-thumb.jpg',
        isHot: true,
        hasMilk: true
    },
    {
        name: 'Mocha',
        price: 4,
        image: 'https://athome.starbucks.com/sites/default/files/styles/homepage_banner_xlarge/public/2021-06/CaffeMocha_Header.jpg?h=cf77c377&itok=40ttethA',
        isHot: true,
        hasMilk: true
    },
    {
        name: 'Frappuccino',
        price: 5,
        image: 'https://amagicalmess.com/wp-content/uploads/2020/05/mocha-frappuccino-1.jpg',
        isHot: false,
        hasMilk: true
    },
    {
        name: 'Espresso',
        price: 2,
        image: 'https://www.thespruceeats.com/thmb/HJrjMfXdLGHbgMhnM0fMkDx9XPQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-espresso-765702-hero-03_cropped-ffbc0c7cf45a46ff846843040c8f370c.jpg',
        isHot: true,
        hasMilk: false
    },
    {
        name: 'Dirty Chai',
        price: 4,
        image: 'https://midwestniceblog.com/wp-content/uploads/2022/09/homemade-dirty-chai-latte-recipe.jpg',
        isHot: true,
        hasMilk: true
    },
    {
        name: 'Iced Americano',
        price: 2,
        image: 'https://www.cleaneatingkitchen.com/wp-content/uploads/2022/07/espresso-americano-over-ice-with-straw.jpg',
        isHot: false,
        hasMilk: false
    },
]