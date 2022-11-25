import Filters from "./Filters";
import ItemList from "./ItemList";
import styles from "../css/Body.module.css"
import { useEffect, useState } from "react";
import Cart from "./Cart";

export default function Body() {
    const [tempType, setTempType] = useState('all')
    const [sortBy, setSortBy] = useState('Alphabetical')
    const [search, setSearch] = useState('')
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
        setSortBy('Alphabetical')
        setSearch('')
        setItems(allItems)
    }

    const filterItems = (tmp) => {
        return tmp.filter((item) => {
            const isHot = tempType === 'all' || tempType === 'hot'

            return item.isHot === isHot
        })
    }

    const sortItems = (itemsToSort) => {
        let res = [...itemsToSort]

        if (sortBy === 'Alphabetical') {
            res.sort((a, b) => {
                const textA = a.name.toUpperCase();
                const textB = b.name.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
        } else if (sortBy === 'Price Low to High') {
            res.sort((a, b) => a.price - b.price)
        } else {
            res.sort((a, b) => b.price - a.price)
        }

        return res
    }

    useEffect(() => {
        setItems(
            filterItems(allItems)
        )
    }, [tempType])

    useEffect(() => {
        if (!search || search === '') {
            setItems(
                filterItems(allItems)
            )
            return
        }

        const passesSearch = allItems.filter((item) => {
            return item.name.toLowerCase().startsWith(search.toLowerCase())
        })

        setItems(
            filterItems(passesSearch)
        )
    }, [search])

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
                        setSearch={setSearch}
                        search={search}
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
    },
    {
        name: 'Pumpkin Latte',
        price: 4,
        image: 'https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Cup-Of-Creamy-Coffee.png',
        isHot: true,
    },
    {
        name: 'Iced Coffee',
        price: 2,
        image: 'https://www.allrecipes.com/thmb/Hqro0FNdnDEwDjrEoxhMfKdWfOY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21667-easy-iced-coffee-ddmfs-4x3-0093-7becf3932bd64ed7b594d46c02d0889f.jpg',
        isHot: false,
    },
    {
        name: 'Cold Brew',
        price: 3,
        image: 'https://coffeeaffection.com/wp-content/uploads/2019/01/cold-brew_andrew-donovan_unsplash.jpg',
        isHot: false,
    },
    {
        name: 'Nitro Cold Brew',
        price: 5,
        image: 'https://images.ctfassets.net/3s5io6mnxfqz/1dpusiO1WJgwnBb4whjBgr/f26c4ecf3a9fe70377d332ac60c60287/AdobeStock_285163622_2.jpeg',
        isHot: false,
    },
    {
        name: 'Macchiato',
        price: 3,
        image: 'https://thelittlestcrumb.com/wp-content/uploads/salted-caramel-macchiato-featured-image-1.jpg',
        isHot: true,
    },
    {
        name: 'Cappuccino',
        price: 3.5,
        image: 'https://www.philips.com/c-dam/b2c/master/experience/ho/philips-chef/recipe/drinks-and-ice-creams/delicious-cappuccino/delicious-cappuccino-thumb.jpg',
        isHot: true,
    },
    {
        name: 'Mocha',
        price: 4,
        image: 'https://athome.starbucks.com/sites/default/files/styles/homepage_banner_xlarge/public/2021-06/CaffeMocha_Header.jpg?h=cf77c377&itok=40ttethA',
        isHot: true,
    },
    {
        name: 'Frappuccino',
        price: 5,
        image: 'https://amagicalmess.com/wp-content/uploads/2020/05/mocha-frappuccino-1.jpg',
        isHot: false,
    },
    {
        name: 'Espresso',
        price: 2,
        image: 'https://www.thespruceeats.com/thmb/HJrjMfXdLGHbgMhnM0fMkDx9XPQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-espresso-765702-hero-03_cropped-ffbc0c7cf45a46ff846843040c8f370c.jpg',
        isHot: true,
    },
    {
        name: 'Dirty Chai',
        price: 4,
        image: 'https://midwestniceblog.com/wp-content/uploads/2022/09/homemade-dirty-chai-latte-recipe.jpg',
        isHot: true,
    },
    {
        name: 'Iced Americano',
        price: 2,
        image: 'https://www.cleaneatingkitchen.com/wp-content/uploads/2022/07/espresso-americano-over-ice-with-straw.jpg',
        isHot: false,
    },
]