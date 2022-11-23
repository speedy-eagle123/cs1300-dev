import styles from '../css/Filters.module.css'

export default function Filters({
    tempType,
    setTempType,
    drinkType,
    setDrinkType
}) {
    console.log(tempType === 'all')
    console.log(drinkType)

    return (
        <div id={styles.container}>
            <h1>Tempature</h1>
            <div>
                <label>
                    <input
                        checked={tempType === 'all'}
                        type='radio'
                        name="temp-all"
                        onChange={() => setTempType('all')}
                    />
                    All</label>
            </div>
            <div>
                <label>
                    <input
                        checked={tempType === 'hot'}
                        type='radio'
                        name="Hot"
                        onChange={() => setTempType('hot')}
                    />
                    Hot</label>
            </div>
            <div>
                <label>
                    <input
                        checked={tempType === 'cold'}
                        type='radio'
                        name="Cold"
                        onChange={() => setTempType('cold')}
                    />
                    Cold</label>
            </div>

            <h1>Drink Type</h1>
            <div>
                <label>
                    <input
                        checked={drinkType === 'all'}
                        type='radio'
                        name="All"
                        onChange={() => setDrinkType('all')}
                    />
                    All</label>
            </div>
            <div>
                <label>
                    <input
                        checked={drinkType === 'coffee'}
                        type='radio'
                        name="Coffee"
                        onChange={() => setDrinkType('coffee')}
                    />
                    Coffee</label>
            </div>
            <div>
                <label>
                    <input
                        checked={drinkType === 'tea'}
                        type='radio'
                        name="Tea"
                        onChange={() => setDrinkType('tea')}
                    />
                    Tea</label>
            </div>
        </div>
    )
}