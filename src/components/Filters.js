import styles from '../css/Filters.module.css'

export default function Filters({
    tempType,
    setTempType,
    sortBy,
    setSortBy,
    setHasMilk,
    hasMilk,
    handleReset
}) {
    return (
        <div id={styles.container}>
            <h1>Contains Milk</h1>
            <div>
                <label>
                    <input
                        checked={hasMilk === 'all'}
                        type='radio'
                        name="milk-all"
                        onChange={() => setHasMilk('all')}
                    />
                    All</label>
            </div>
            <div>
                <label>
                    <input
                        checked={hasMilk === 'yes'}
                        type='radio'
                        name="Yes"
                        onChange={() => setHasMilk('yes')}
                    />
                    Yes</label>
            </div>
            <div>
                <label>
                    <input
                        checked={hasMilk === 'no'}
                        type='radio'
                        name="No"
                        onChange={() => setHasMilk('no')}
                    />
                    No</label>
            </div>

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

            <h1>Sort By</h1>
            <div>
                <label>
                    <input
                        checked={sortBy === 'Alphabetical'}
                        type='radio'
                        name="Alphabetical"
                        onChange={() => setSortBy('Alphabetical')}
                    />
                    Alphabetical</label>
            </div>
            <div>
                <label>
                    <input
                        checked={sortBy === 'Price Low to High'}
                        type='radio'
                        name="Price Low to High"
                        onChange={() => setSortBy('Price Low to High')}
                    />
                    Price Low to High</label>
            </div>
            <div>
                <label>
                    <input
                        checked={sortBy === 'Price High to Low'}
                        type='radio'
                        name="Price High to Low"
                        onChange={() => setSortBy('Price High to Low')}
                    />
                    Price High to Low</label>
            </div>
            <div id={styles.reset}>
                <button onClick={handleReset}>
                    Reset
                </button>
            </div>
        </div>
    )
}