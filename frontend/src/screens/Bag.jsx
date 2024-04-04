import React from 'react'
import BagSummary from '../components/BagSummary'
import BagItem from '../components/BagItem'
import { useSelector } from 'react-redux'

const Bag = () => {

    const bagItems = useSelector(state => state.bag);
    const items = useSelector(state => state.items);
    const finalItems = items.filter(item => {
        const itemIndex = bagItems.indexOf(item.id);
        return itemIndex >= 0
    })

    return (
        <div>
            <main className='bagmain'>
                <div className="bag-page d-flex justify-content-center align-items-center d-lg-block flex-column w-100">
                    <div className="bag-items-container">
                        {finalItems.length !== 0 ? finalItems.map(item => <BagItem item={item} />) : <div className='text-center display-5'>Add Items To Cart</div>}
                    </div>
                    <BagSummary />
                </div>
            </main>
        </div>
    )
}

export default Bag