import React from 'react'
import HomeItem from '../components/HomeItem'
import { useSelector } from 'react-redux'

const Home = () => {

    const items = useSelector(state => state.items);

    return (
        <main style={{display:"flex", justifyContent:"center"}} >
            <div className="items-container container">
                {items.map(item => <HomeItem key={item.id} item={item} />)}
            </div>
        </main>
    )
}

export default Home